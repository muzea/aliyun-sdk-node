export interface DeletePrometheusIntegrationResponse {
    /**
     * Id of the request
     * @example `19F54318-CC92-5567-BF66-CB029EC44C84`
     */
    RequestId: string;
    /**
     * ”success“或失败信息。
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
