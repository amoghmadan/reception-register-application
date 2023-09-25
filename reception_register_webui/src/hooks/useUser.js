import { useEffect, useState } from "react";

import {API} from "../config";
import { api } from "../services/axios";

export default function useUser() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveUser = async () => {
      setLoading(true);
      const response = await api.get(API.V1.ACCOUNT_DETAIL);
      const data = await response.data;
      setUser(data);
      setLoading(false);
    };
    retrieveUser();
  }, []);

  return [user, loading];
}
