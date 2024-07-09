export interface ExecuteCallTaskResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `53D0F0Fe-cbbB-De28-6FCd-DdbBcefA46dD`
     */
    RequestId: string;
}
