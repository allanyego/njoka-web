import { useEffect, useState } from "react";

import Page from "../components/layout/Page";
import Card from "../components/pages/work/Card";
import { get } from "../services/http/work";

export default function Work() {
  const [work, setWork] = useState(null);

  const fetchWork = async () => {
    try {
      const data = await get();
      setWork(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWork();
  }, []);

  return (
    <Page heading="Work">
      <div uk-grid="true">
        {!work ? (
          <div>Loading...</div>
        ) : (
          work.map((w) => <Card key={w._id} {...w} />)
        )}
      </div>
    </Page>
  );
}
