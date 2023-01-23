import { B1ndToastifyParam } from "./b1ndToastify.type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const b1ndToastify = ({ message, type }: B1ndToastifyParam): void => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;

    case "INFO":
      toast.info(message, { position: toast.POSITION.TOP_RIGHT });
      break;

    case "ERROR":
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;

    default:
      toast(message, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
};

export default b1ndToastify;
