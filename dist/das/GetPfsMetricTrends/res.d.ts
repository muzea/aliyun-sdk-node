export interface GetPfsMetricTrendsResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F4C27966-284E-51C4-9407-DB50CAB8****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: any;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
