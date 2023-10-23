import axios from "axios";
import { useEffect, useState } from "react";

import { API } from "../config";
import { api } from "../services/axios";

export default function useListEntry() {
  const [entryList, setEntryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const listEntry = async () => {
      if (Object.keys(filters).length === 0) return;
      try {
        setLoading(true);
        const options = { cancelToken: source.token };
        const queryParams = new URLSearchParams(filters);
        const response = await api.get(
          `${API.V1.REGISTER_ENTRY}?${queryParams.toString()}`,
          options
        );
        const data = await response.data;
        setEntryList(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    listEntry();

    return () => source.cancel("Operation cancelled by the user.");
  }, [filters]);

  return [entryList, loading, filters, setFilters];
}
