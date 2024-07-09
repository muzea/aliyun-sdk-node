export interface OpenFlowLogServiceResponse {
    /**
     * 请求ID。
     * @example `28CF47AB-B6C0-5FA2-80C7-2B28826A92CB`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 流日志开通成功返回的信息。
     * @example `successful`
     */
    Message: string;
}
