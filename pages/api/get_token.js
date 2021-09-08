import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;
let accessToken;

export default async (req, res) => {
  const token = await getToken({ req, secret });
  accessToken = token.accessToken;
  console.log(`The access token ${accessToken}`);
  return res.send(accessToken);
  //   res.status(200).json(data);
};
