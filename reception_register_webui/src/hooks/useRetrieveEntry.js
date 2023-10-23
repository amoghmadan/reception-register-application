
import axios from "axios";
import { useEffect, useState } from "react";

import { API } from "../config";
import { api } from "../services/axios";

export default function useRetrieveEntry(id) {
  const [entry, setEntry] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const retrieveEntry = async () => {
      try {
        setLoading(true);
        const options = { cancelToken: source.token };
        const response = await api.get(
          `${API.V1.REGISTER_ENTRY}/${id}`,
          options
        );
        const data = await response.data;
        setEntry(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    retrieveEntry();

    return () => source.cancel("Operation cancelled by the user.");
  }, [id]);

  return [entry, loading];
}
