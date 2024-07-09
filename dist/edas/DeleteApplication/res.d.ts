export interface DeleteApplicationResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 变更流程ID。
     * @example `0b8e3c0b-5818-430*************`
     */
    ChangeOrderId: string;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `34DFE9FDV****************`
     */
    RequestId: string;
}
