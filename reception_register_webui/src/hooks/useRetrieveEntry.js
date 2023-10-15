import { useEffect, useState } from "react";

import {API} from "../config";
import { api } from "../services/axios";

export default function useRetrieveEntry(id) {
  const [entry, setEntry] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRetrieveEntry = async () => {
      setLoading(true);
      const response = await api.get(`${API.V1.REGISTER_ENTRY}/${id}`);
      const data = await response.data;
      setEntry(data);
      setLoading(false);
    };
    getRetrieveEntry();
  }, []);

  return [entry, loading];
}
