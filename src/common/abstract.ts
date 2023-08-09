import type { AxiosInstance } from "axios";

export class AbstractService {
  protected apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient
  }
}