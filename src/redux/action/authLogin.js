import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2"
import { CookieKeys, CookieStorage } from "../../utils/cookies"
import { setLoggedIn, setToken, setUser } from "../reducers/auth/authLoginSlice"

export const LoginUser = (input) => (dispatch) => {

    http2.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
        
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        // redux setup
        dispatch(setToken(result.data.data.token));
        dispatch(setUser("ini user"))
        // dispatch(setLoggedIn(true))

    }).catch((err) => {
        
    });
}