import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context";

export default function useNotifications() {
  const { notifications, setNotifications } = useAppContext();

  const postNotification = ({ message, type, duration = 5000 }) => {
    setNotifications([
      ...notifications,
      {
        _id: uuidv4(),
        type,
        message,
        duration,
      },
    ]);
  };

  return {
    onSuccess(message, callout = "Nice!") {
      postNotification({
        callout,
        message,
        type: "success",
      });
    },
    onError(message, callout = "Oh snap!") {
      postNotification({
        callout,
        message,
        type: "danger",
      });
    },
  };
}
