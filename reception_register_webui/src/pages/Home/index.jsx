import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Login } from "../../components";
import { Browser, LOCAL_STORAGE_KEY } from "../../config";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setLoading(true);
      const token = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (token) {
        navigate(Browser.ENTRY);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <>Loading...</>;
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
