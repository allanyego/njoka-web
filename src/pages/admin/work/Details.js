import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormHeader from "../../../components/core/FormHeader";
import Loader from "../../../components/core/Loader";
import Page from "../../../components/layout/Page";
import WorkForm from "../../../components/pages/admin/work/Form";
import { useAppContext } from "../../../services/context";
import useNotifications from "../../../services/hooks/use-notifications";
import { getById, update } from "../../../services/http/work";

export default function Details() {
  const { _id } = useParams();
  const [work, setWork] = useState(null);
  const { user } = useAppContext();
  const { onError } = useNotifications();

  const fetchWork = async () => {
    try {
      const data = await getById(_id);
      setWork(data);
    } catch (error) {
      onError(error.message);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    await update(values, user.token);
    setSubmitting(false);
  };

  useEffect(() => {
    fetchWork();
  }, []);

  return (
    <Page heading="Work">
      {!work ? (
        <Loader />
      ) : (
        <div className="uk-flex uk-flex-center" uk-grid="true">
          <div className="uk-width-2-3">
            <FormHeader value="Work details" />

            <WorkForm
              handleSubmit={handleSubmit}
              initialValues={work}
              isNew={false}
            />
          </div>
        </div>
      )}
    </Page>
  );
}
