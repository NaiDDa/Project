import { useEffect, useState } from "react";
import axios from "axios";

import FilterdDataUI from "./filterdData.presenter";

export default function FilterdData(props) {
  // Mok Data
  const [serverData, setServerData] = useState([] as any);
  useEffect(() => {
    async function geData() {
      const result = await axios.get("http://localhost:4000/requests");
      setServerData(result.data);
    }
    geData();
  }, []);
  const array = props.Methodfillter.concat(props.Materialfillter);
  console.log("확인", array);
  return (
    <FilterdDataUI
      serverData={serverData}
      cheked={props.cheked}
      array={array}
    />
  );
}
