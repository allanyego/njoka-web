import FormHeader from "../../../components/core/FormHeader";
import Page from "../../../components/layout/Page";
import WorkForm from "../../../components/pages/admin/work/Form";
import { useAppContext } from "../../../services/context";
import { post } from "../../../services/http/work";

export default function New() {
  const { user } = useAppContext();

  const handleSubmit = async (values, { setSubmitting, resetValues }) => {
    await post(values, user.token);
    setSubmitting(false);
    resetValues();
  };

  return (
    <Page heading="Work">
      <div className="uk-flex uk-flex-center" uk-grid="true">
        <div className="uk-width-2-3">
          <FormHeader value="Add new" />

          <WorkForm
            handleSubmit={handleSubmit}
            initialValues={{
              projectName: "",
              image: "",
            }}
            isNew
          />
        </div>
      </div>
    </Page>
  );
}
