import http3 from "../../utils/http3"
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import { CookieKeys, CookieStorage } from "../../utils/cookies"

const LoginUser = async (input) => {
  return await http3.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
    // CookieStorage.remove(CookieKeys.AuthToken)
    return result;
  }).catch((err) => {
      
  });;
};

const useLoginUser = () => {
  return useMutation(LoginUser)
}

export {LoginUser, useLoginUser}