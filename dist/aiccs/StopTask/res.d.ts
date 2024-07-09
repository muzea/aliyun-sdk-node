export interface StopTaskResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `Ok`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
