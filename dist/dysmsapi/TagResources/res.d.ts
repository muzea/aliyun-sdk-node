export interface TagResourcesResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 添加标签的执行结果。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C****`
     */
    RequestId: string;
}
