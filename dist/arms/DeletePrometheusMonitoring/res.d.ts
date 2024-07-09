export interface DeletePrometheusMonitoringResponse {
    /**
     * Id of the request
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
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
}
