export interface CreatePrometheusMonitoringResponse {
    /**
     * Id of the request
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回成功增加的监控配置名称，或异常信息。
     * @example `name1`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
