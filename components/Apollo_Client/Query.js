import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(userInput: { email: $email, password: $password }) {
      _id
      email
    }
  }
`;

export const LOGIN_QUERY = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation createContact(
    $email: String!
    $name: String!
    $project: String!
    $message: String!
  ) {
    createContact(
      contactInput: {
        email: $email
        name: $name
        project: $project
        message: $message
      }
    ) {
      email
      name
      project
      message
    }
  }
`;
