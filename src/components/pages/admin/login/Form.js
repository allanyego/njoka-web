import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../core/Button";
import Input from "../../../core/form/Input";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Enter your email."),
  password: Yup.string().min(6, "Too short.").required("Enter your password."),
});

export default function Form({ handleSubmit }) {
  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
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
        <FormikForm className="uk-grid" noValidate uk-grid="true">
          <div className="uk-width-1-1">
            <Input
              name="email"
              placeholder="Your email"
              icon="at"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
          </div>

          <div className="uk-width-1-1">
            <Input
              name="password"
              placeholder="password"
              icon="key"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
            />
          </div>

          <div className="uk-width-1-1 uk-flex uk-flex-right">
            <Button
              type="submit"
              className="uk-button uk-button-secondary"
              isLoading={isSubmitting}
              disabled={!isValid}
              icon="sign-in-alt"
            >
              Login
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
