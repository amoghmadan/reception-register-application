import { useParams } from "react-router-dom";

import { EntryDetail } from "../../components";
import { GuardedLayout } from "../../layouts";

export default function Entry() {
  const { id } = useParams();
  
  return (
    <GuardedLayout>
      <EntryDetail id={id} />
    </GuardedLayout>
  );
}
