import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";
import http3 from "../../utils/http3";

const fetchDataUser = async ({queryKey}) => {
    const [_key] = queryKey;
    const { data } = await http3.get(_key).
    then((value) => {
      // respon dari api yang berhasil
      console.log(value)
      let DataHasil = {
        email : value.data.data.email
      }
      return {data : DataHasil}
    }).catch((err) => {
      alert(err.response.status)
      if (err.response.status === 401){
        window.location.href = "/"
      }
    });

    return data
  };

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchDataUser)
}

export {fetchDataUser, useGetDataUser}