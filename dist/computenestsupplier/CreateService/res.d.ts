export interface CreateServiceResponse {
    /**
     * 服务状态。
     * @example `Created`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `4DB0F536-B3BE-4F0D-BD29-E83FB56D550C`
     */
    RequestId: string;
    /**
     * 服务版本。
     * @example `draft`
     */
    Version: string;
    /**
     * 服务ID。
     * @example `service-0e6fca6a51a544xxxxxx`
     */
    ServiceId: string;
}
