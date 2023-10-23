import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API } from "../config";
import { api } from "../services/axios";
import { loginUser } from "../state/redux/user";

export default function useUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.detail);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const retrieveUser = async () => {
      if (user !== undefined) return;
      try {
        setLoading(true);
        const options = { cancelToken: source.token };
        const response = await api.get(API.V1.ACCOUNT_DETAIL, options);
        const data = await response.data;
        dispatch(loginUser(data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    retrieveUser();

    return () => source.cancel("Operation cancelled by the user.");
  }, []);

  return [user, loading];
}
