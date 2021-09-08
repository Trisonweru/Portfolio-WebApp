import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";

export default NextAuth({
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    Providers.Credentials({
      async authorize(credentials) {
        console.log(credentials);
        let request = {
          query: ` query{
        login(email:"${credentials.email}", password:"${credentials.password}"){
          userId
          email
          token
          tokenExpiration
        }
      }
      `,
        };

        const user = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.data.login.token) {
              let user_data = data.data.login;
              return user_data;
            } else {
              return null;
            }
          })
          .catch((err) => {
            throw new Error(err.message);
          });
        console.log(user);
        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        token.accessToken = user.token;
      }
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});

// .then((result) => {
//   return result.json();
// })
// .then((data) => {
//   if (data.data.login.token) {
//     console.log(data.data.login.token);
//     // this.context.login(
//     //   data.data.login.token,
//     //   data.data.login.userId,
//     //   data.data.login.tokenExpiration
//     // );
//     let user = data.data.login;
//     return user;
//   }
// })
// .catch((err) => {
//   throw new Error(err);
// });

//   //Connect to DB
//   const client = await MongoClient.connect(
//     `mongodb+srv://Mongo:${process.env.PASSWORD}@cluster0.yqkqv.mongodb.net/werublog?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
//   //Get all the users
//   const users = await client.db().collection("users");
//   //Find user with the email
//   const user = await users.findOne({
//     email: credentials.email,
//   });
//   //Not found - send error res
//   if (user === null) {
//     client.close();
//     throw new Error("No user found with the email");
//   }
//   //Check hased password with DB password
//   const checkPassword = await compare(
//     credentials.password,
//     user.password
//   );
//   //Incorrect password - send response
//   if (!checkPassword) {
//     client.close();
//     throw new Error("Password doesnt match");
//   }
//   //Else send success response
//   client.close();
//   return user;
