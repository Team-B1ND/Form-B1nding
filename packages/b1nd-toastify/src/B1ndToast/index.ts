import ReactToastifyAdaptor, { ToastService } from "./ToastService";

class B1ndToastService {
  constructor(private toastService: ToastService) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export const B1ndToast = new B1ndToastService(new ReactToastifyAdaptor());
