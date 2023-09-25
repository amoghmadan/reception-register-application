import { useEffect, useState } from "react";

import {API} from "../config";
import { api } from "../services/axios";

export default function useRegisterRetrieve(id) {
  const [register, setRegister] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveRegister = async () => {
      setLoading(true);
      const response = await api.get(`${API.V1.REGISTER_ENTRY}/${id}`);
      const data = await response.data;
      setRegister(data);
      setLoading(false);
    };
    retrieveRegister();
  }, []);

  return [register, loading];
}
