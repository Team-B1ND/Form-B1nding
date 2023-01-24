import ReactToastifyAdaptor, { ToastService } from "./ToastService";

class B1ndToast {
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

export default new B1ndToast(new ReactToastifyAdaptor());
