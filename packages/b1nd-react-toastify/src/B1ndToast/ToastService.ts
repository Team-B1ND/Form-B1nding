import { toast } from "react-toastify";

export interface ToastService {
  success(message: string): void;
  info(message: string): void;
  error(message: string): void;
}

class ReactToastifyAdaptor implements ToastService {
  success(message: string): void {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  }
  info(message: string): void {
    toast.info(message, { position: toast.POSITION.TOP_RIGHT });
  }
  error(message: string): void {
    toast.error(message, { position: toast.POSITION.TOP_RIGHT });
  }
}

export default ReactToastifyAdaptor;
