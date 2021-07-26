import FormHeader from "../../../components/core/FormHeader";
import Page from "../../../components/layout/Page";
import ServiceForm from "../../../components/pages/admin/service/Form";
import { useAppContext } from "../../../services/context";
import { post } from "../../../services/http/services";

export default function New() {
  const { user } = useAppContext();

  const handleSubmit = async (values, { setSubmitting, resetValues }) => {
    await post(values, user.token);
    setSubmitting(false);
    resetValues();
  };

  return (
    <Page heading="Service">
      <div className="uk-flex uk-flex-center" uk-grid="true">
        <div className="uk-width-2-3">
          <FormHeader value="Add new" />

          <ServiceForm
            handleSubmit={handleSubmit}
            initialValues={{
              category: "",
            }}
            isNew
          />
        </div>
      </div>
    </Page>
  );
}
