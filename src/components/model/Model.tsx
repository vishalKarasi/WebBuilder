import "./model.scss";
import { TModel } from "./model.types.ts";

function Model(props: TModel) {
  const { type, message } = props;

  return type === "error" ? (
    <div className="error">{message}</div>
  ) : (
    <div className="loading">
      <div className="spinner"></div>
    </div>
  );
}

export default Model;
