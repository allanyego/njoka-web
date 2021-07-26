import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormHeader from "../../../components/core/FormHeader";
import Loader from "../../../components/core/Loader";
import Page from "../../../components/layout/Page";
import ServiceForm from "../../../components/pages/admin/service/Form";
import { useAppContext } from "../../../services/context";
import useNotifications from "../../../services/hooks/use-notifications";
import { getById, post } from "../../../services/http/services";

export default function Details() {
  const { _id } = useParams();
  const [service, setService] = useState(null);
  const { user } = useAppContext();
  const { onError } = useNotifications();

  const fetchService = async () => {
    try {
      const data = await getById(_id);
      setService(data);
    } catch (error) {
      onError(error.message);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    await post(values, user.token);
    setSubmitting(false);
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <Page heading="Service">
      {!service ? (
        <Loader />
      ) : (
        <div className="uk-flex uk-flex-center" uk-grid="true">
          <div className="uk-width-2-3">
            <FormHeader value="Add new" />

            <ServiceForm
              handleSubmit={handleSubmit}
              initialValues={{
                category: "",
              }}
              isNew={false}
            />
          </div>
        </div>
      )}
    </Page>
  );
}
