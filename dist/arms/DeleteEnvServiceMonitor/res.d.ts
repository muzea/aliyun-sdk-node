export interface DeleteEnvServiceMonitorResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果描述
     * @example `success`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
