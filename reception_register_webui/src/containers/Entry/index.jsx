import { EntryPagination, EntryTable } from "../../components";
import { ListEntryProvider } from "../../state/context";

export default function Entry() {
  return (
    <ListEntryProvider>
      <EntryTable />
      <EntryPagination />
    </ListEntryProvider>
  );
}
