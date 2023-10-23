import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../components";
import { Browser, LOCAL_STORAGE_KEY } from "../../config";

export default function Http404() {
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prevValue) => prevValue - 1);
      if (remaining === 0) {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) navigate(Browser.ENTRIES);
        else navigate(Browser.ROOT);
      }
    }, 1 * 1000);

    return () => clearInterval(interval);
  }, [remaining, setRemaining, navigate]);

  return (
    <>
      <Typography align="center" component="h1" variant="h5">
        404 | Not Found
      </Typography>
      <Typography align="center" component="h1" variant="h6">
        Redirecting to dashboard in {remaining} seconds.
      </Typography>
      <Footer />
    </>
  );
}
