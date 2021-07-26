import { useHistory } from "react-router-dom";
import LoginForm from "../../components/pages/admin/login/Form";
import { useAppContext } from "../../services/context";

import useNotifications from "../../services/hooks/use-notifications";
import login from "../../services/http/auth";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const { setUser } = useAppContext();
  const { onError } = useNotifications();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await login(values.email, values.password);
      setUser(data);
      setSubmitting(false);
      history.push("/admin");
    } catch (error) {
      setSubmitting(false);
      onError(error.message);
    }
  };

  return (
    <div
      className="uk-flex uk-flex-middle uk-flex-center uk-height-1-1 login-page"
      uk-grid="true"
    >
      <div className="uk-width-2-5">
        <div
          className="uk-card uk-card-body uk-border-rounded uk-box-shadow-small"
          style={{
            boxShadow: "0 0px 5px -3px rgb(245 58 20)",
          }}
        >
          <h1 className="uk-text-medium uk-text-center">Log in</h1>
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
