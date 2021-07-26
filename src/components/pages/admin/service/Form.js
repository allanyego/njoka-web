import { Form as FormikForm, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useNotifications from "../../../../services/hooks/use-notifications";
import Button from "../../../core/Button";
import Input from "../../../core/form/Input";
import InputFeedback from "../../../core/form/InputFeedback";
import Skills from "../../../core/Skills";

const serviceSchema = Yup.object().shape({
  category: Yup.string()
    .min(2, "Too short.")
    .required("Enter service category."),
});

const addMessage = "New service added successfully.";
const updateMessage = "Service updated successfully.";

export default function Form({ handleSubmit, initialValues, isNew = true }) {
  const { skills, ...initValues } = initialValues;
  const [_skills, setSkills] = useState(skills || []);
  const { onError, onSuccess } = useNotifications();

  const onSubmit = async (values, ...args) => {
    try {
      await handleSubmit(
        {
          ...values,
          _skills,
        },
        ...args
      );

      if (isNew) setSkills([]);

      onSuccess(isNew ? addMessage : updateMessage);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <Formik
      validationSchema={serviceSchema}
      onSubmit={onSubmit}
      initialValues={initValues}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        isValid,
        isSubmitting,
      }) => (
        <FormikForm noValidate className="uk-grid" uk-grid="true">
          <div className="uk-width-1-1">
            <Input
              name="category"
              placeholder="Service category"
              icon="boxes"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.category}
            />
          </div>

          <div className="uk-width-1-1">
            <Skills {...{ skills: _skills, setSkills }} />
            {JSON.stringify(_skills.length)}
            {_skills.length === 0 && (
              <InputFeedback message="Add at least one skill" />
            )}
          </div>

          <div className="uk-width-1-1 uk-flex uk-flex-right">
            <Button
              type="submit"
              className="uk-button uk-button-secondary"
              isLoading={isSubmitting}
              disabled={!isValid || _skills.length === 0}
              icon="save"
            >
              Save
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
