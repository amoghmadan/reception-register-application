import { useEffect, useState } from "react";

import {API} from "../config";
import { api } from "../services/axios";

export default function useRegisterList() {
  const [registerList, setRegisterList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const listRegister = async () => {
      setLoading(true);
      const response = await api.get(API.V1.REGISTER_ENTRY);
      const data = await response.data;
      setRegisterList(data);
      setLoading(false);
    };
    listRegister();
  }, []);

  return [registerList, loading];
}
