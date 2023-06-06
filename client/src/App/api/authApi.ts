import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthLoginSendData,
  AuthReceiveData,
  AuthSendData,
} from "../../utils/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/auth`,
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<void, AuthSendData>({
      query: (user) => ({
        url: `/register`,
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation<AuthReceiveData, AuthLoginSendData>({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLoginUserMutation } = authApi;