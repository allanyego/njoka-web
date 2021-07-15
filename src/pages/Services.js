import { useEffect, useState } from "react";
import Page from "../components/layout/Page";
import Item from "../components/pages/services/Item";
import { get } from "../services/http/services";

export default function Services() {
  const [services, setServices] = useState(null);

  const fetchServices = async () => {
    try {
      const data = await get();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Page heading="Services">
      <div uk-grid="true">
        {!services ? (
          <div>Loading...</div>
        ) : (
          services.map((service) => <Item key={service._id} {...service} />)
        )}
      </div>
    </Page>
  );
}
