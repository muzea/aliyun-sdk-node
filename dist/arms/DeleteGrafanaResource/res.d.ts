export interface DeleteGrafanaResourceResponse {
    /**
     * 返回信息。
     * @example `delete success.`
     */
    Data: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `771DC66C-C5E0-59BC-A983-DD18FEE9EFFA`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
