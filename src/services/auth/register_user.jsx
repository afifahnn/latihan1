import http3 from "../../utils/http3"
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";

const RegisterUser = async (input) => {
    return await http3.post(API_ENDPOINT.REGISTER_USER, input);
  };

const useCreateUser = () => {
  return useMutation(RegisterUser)
}

export {RegisterUser, useCreateUser}