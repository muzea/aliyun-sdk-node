export interface BindK8sSlbResponse {
    /**
     * 变更流程ID。
     * @example `b4b37bde-a125-****-****-741f7f4a9ae3`
     */
    ChangeOrderId: string;
    /**
     * 接口响应码。
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
     * @example `4823-bhjf-23u4-****`
     */
    RequestId: string;
}
