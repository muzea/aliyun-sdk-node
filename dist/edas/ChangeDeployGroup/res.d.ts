export interface ChangeDeployGroupResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 变更流程ID。
     * @example `435f-regfr4********************`
     */
    ChangeOrderId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F9E4-FDS4-****************`
     */
    RequestId: string;
}
