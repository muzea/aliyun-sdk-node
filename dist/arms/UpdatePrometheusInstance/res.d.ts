export interface UpdatePrometheusInstanceResponse {
    /**
     * Id of the request
     * @example `6A9AEA84-7186-4D8D-B498-4585C6A2****`
     */
    RequestId: string;
    /**
     * 操作结果描述。
     * @example `success`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
