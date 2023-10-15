import PropTypes from "prop-types";
import { createContext } from "react";

import { useListEntry } from "../../../hooks";

export const ListEntryContext = createContext({});

export default function ListEntryProvider(props) {
  const [entryList, loading, filters, setFilters] = useListEntry();

  return (
    <ListEntryContext.Provider
      value={{ entryList, loading, filters, setFilters }}
    >
      {props.children}
    </ListEntryContext.Provider>
  );
}

ListEntryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
