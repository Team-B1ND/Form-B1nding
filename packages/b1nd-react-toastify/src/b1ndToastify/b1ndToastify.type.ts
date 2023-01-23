export interface B1ndToastifyParam {
  message: string;
  type: B1ndToastifyCase;
}

export type B1ndToastifyCase = "SUCCESS" | "ERROR" | "INFO";
