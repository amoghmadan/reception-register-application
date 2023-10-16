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
    const getRetrieveUser = async () => {
      if (user !== undefined) return;
      setLoading(true);
      const response = await api.get(API.V1.ACCOUNT_DETAIL);
      const data = await response.data;
      dispatch(loginUser({ payload: data }));
      setLoading(false);
    };
    getRetrieveUser();
  }, []);

  return [user, loading];
}
