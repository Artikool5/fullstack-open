export const Notification = ({ message, type }) => {
  let style = {
    padding: "1rem 2rem",
    marginBottom: "1rem",
    width: "fit-content",
    fontSize: "1.5rem",
    backgroundColor: "#dddddd",
  };
  switch (type) {
    case "error":
      style = { ...style, color: "red", border: "3px solid red" };
      break;
    case "update":
      style = { ...style, color: "green", border: "3px solid green" };
      break;

    default:
      throw new Error("Wrong message type");
  }
  return <div style={style}>{message}</div>;
};
