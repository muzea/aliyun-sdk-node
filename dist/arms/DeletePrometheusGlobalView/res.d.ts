export interface DeletePrometheusGlobalViewResponse {
    /**
     * JSON格式的返回结果。
     * @example `{"Success":true,"Msg":"OK"}`
     */
    Data: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `337B8F7E-0A64-5768-9225-E9B3CF******`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 附加消息
     * @example `success`
     */
    Message: string;
}
