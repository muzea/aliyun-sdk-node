export interface UpdateK8sApplicationConfigResponse {
    /**
     * 变更流程ID。
     * @example `8806d1c6-****-48eb-9373-6bdef3007466`
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
     * @example `4823-bhjf-23u4-****`
     */
    RequestId: string;
}
