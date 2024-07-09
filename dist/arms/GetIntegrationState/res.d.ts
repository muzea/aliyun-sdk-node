export interface GetIntegrationStateResponse {
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * Integration的接入状态。
     * - `true`：表示已接入。
     * - `false`：表示未接入。
     * @example `true`
     */
    State: boolean;
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
