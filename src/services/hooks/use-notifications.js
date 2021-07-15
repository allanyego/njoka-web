function createIcon(icon) {
  return `<span uk-icon='icon: ${icon}'></span>`;
}

export default function useNotifications() {
  const postNotification = ({ message, status }) => {
    window.UIkit.notification({
      message,
      status,
    });
  };

  return {
    onSuccess(message) {
      postNotification({
        message: `${`${createIcon("check")} ${message}`}`,
        status: "success",
      });
    },
    onError(message) {
      postNotification({
        message: `${createIcon("close")} ${message}`,
        status: "danger",
      });
    },
  };
}
