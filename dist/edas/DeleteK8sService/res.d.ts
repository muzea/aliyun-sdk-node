export interface DeleteK8sServiceResponse {
    /**
     * 变更流程ID。
     * @example `b4b37bde-a125-43fc-****-741f7f4a9ae3`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9041389c-*****-459c-8253-724bca7f51f0`
     */
    RequestId: string;
}
