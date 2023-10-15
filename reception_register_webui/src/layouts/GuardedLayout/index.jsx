import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Navbar } from "../../components";
import { Browser } from "../../config";
import { useUser } from "../../hooks";

export default function GuardedLayout(props) {
  const navigate = useNavigate();
  const [user, loading] = useUser();

  useEffect(() => {
    const checkAuth = () => {
      if (user === undefined && loading) {
        navigate(Browser.ROOT);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <>Loading...</>;
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

GuardedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
