import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Footer, Navbar } from "../../components";
import { Browser } from "../../config";
import { useUser } from "../../hooks";

export default function GuardedLayout(props) {
  const navigate = useNavigate();
  const [user, loading] = useUser();

  if (user === undefined && loading) navigate(Browser.ROOT);
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
