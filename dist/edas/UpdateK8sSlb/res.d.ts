export interface UpdateK8sSlbResponse {
    /**
     * 变更流程ID。
     * @example `9a1dcdee-****-****-ad37-cbf9dc91fba9`
     */
    ChangeOrderId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4823-bhjf-23u4-eiufh`
     */
    RequestId: string;
}
