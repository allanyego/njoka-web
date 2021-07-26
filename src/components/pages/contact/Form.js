import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../core/Button";

import Input from "../../core/form/Input";
import Textarea from "../../core/form/Textarea";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Fill in your name."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Fill in your email."),
  message: Yup.string().required("Enter something for the message."),
});

export default function Form({ handleSubmit }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        isValid,
        isSubmitting,
      }) => (
        <FormikForm noValidate uk-grid="true">
          <div className="uk-width-1-2">
            <Input
              name="name"
              placeholder="Your name"
              icon="user"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
            />
          </div>
          <div className="uk-width-1-2">
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              icon="at"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
          </div>
          <div className="uk-width-1-1">
            <Textarea
              name="message"
              placeholder="Your message/query/comment..."
              rows="3"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
            />
          </div>

          <div className="uk-width-1-1 uk-flex uk-flex-right">
            <Button
              type="submit"
              className="uk-button uk-button-secondary"
              isLoading={isSubmitting}
              disabled={!isValid}
              icon="paper-plane"
            >
              Send
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
