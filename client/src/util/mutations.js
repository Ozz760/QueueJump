import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation CreateUser($phoneNumber: String!, $fullName: String!, $email: String!, $password: String!, $username: String!) {
  createUser(phone_number: $phoneNumber, full_name: $fullName, email: $email, password: $password, username: $username) {
    token
    user {
      _id
      phone_number
      full_name
      username
      email
    }
  }
}`

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
