export interface DeleteEnvPodMonitorResponse {
    /**
     * Id of the request
     * @example `626037F5-FDEB-45B0-804C-B3C92797****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
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
     * @example `success`
     */
    Message: string;
}
