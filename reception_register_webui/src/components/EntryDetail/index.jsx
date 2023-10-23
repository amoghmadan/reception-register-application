import { useRetrieveEntry } from "../../hooks";

export default function EntryDetail(props) {
  const [entry, loading] = useRetrieveEntry(props.id);

  if (Object.keys(entry).length === 0 && loading) return <>Loading...</>;
  return <>{JSON.stringify(entry)}</>;
}
