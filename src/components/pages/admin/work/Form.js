import { Field, Form as FormikForm, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useNotifications from "../../../../services/hooks/use-notifications";
import {
  MAX_ATTACHMENT_SIZE,
  PROFILE_PICTURE_FORMATS,
} from "../../../../services/http/lib/globals";
import Button from "../../../core/Button";
import Input from "../../../core/form/Input";
import InputFeedback from "../../../core/form/InputFeedback";
import Skills from "../../../core/Skills";
import CustomUpload from "./CustomUpload";

const workSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(2, "Too short.")
    .required("Enter service category."),
  image: Yup.mixed()
    .test("fileType", "Unsupported format.", (value) =>
      value ? PROFILE_PICTURE_FORMATS.includes(value.type) : true
    )
    .test("fileSize", "That's too big", (value) =>
      value ? value.size <= MAX_ATTACHMENT_SIZE : true
    )
    .required("Please add an image."),
});

const addMessage = "New work added successfully.";
const updateMessage = "Work updated successfully.";

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
      validationSchema={workSchema}
      onSubmit={onSubmit}
      initialValues={initValues}
    >
      {({
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        errors,
        isValid,
        isSubmitting,
      }) => (
        <FormikForm className="uk-grid" uk-grid="true" noValidate>
          <div className="uk-width-1-1">
            <Input
              name="projectName"
              placeholder="Project name"
              icon="file-alt"
              value={values.projectName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.projectName}
            />
          </div>

          <div className="uk-width-1-1">
            <Field
              name="image"
              component={CustomUpload}
              setFieldValue={setFieldValue}
              error={errors.image}
            />
          </div>

          <div className="uk-width-1-1">
            <Skills {...{ skills: _skills, setSkills }} />
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
