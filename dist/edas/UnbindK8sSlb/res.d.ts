export interface UnbindK8sSlbResponse {
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 变更流程ID。
     * @example `b0a8441e-****-4e8e-9874-b56dea02952f`
     */
    ChangeOrderId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1234-1sda-321d-1234`
     */
    RequestId: string;
}
