import { useEffect, useState } from "react";

import {API} from "../config";
import { api } from "../services/axios";

export default function useListRegister() {
  const [entryList, setEntryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState();

  useEffect(() => {
    const getListEntry = async () => {
      setLoading(true);
      let url = API.V1.REGISTER_ENTRY;
      if (filters) {
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach((pair) => {
          queryParams.append(pair[0], pair[1]);
        });
        url += `?${queryParams.toString()}`;
        const response = await api.get(url);
        const data = await response.data;
        setEntryList(data);
      }
      setLoading(false);
    };
    getListEntry();
  }, [filters]);

  return [entryList, loading, filters, setFilters];
}
