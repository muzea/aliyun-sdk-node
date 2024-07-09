export interface BatchDeleteRouteStrategyResponse {
    /**
     * Id of the request
     * @example `704A2A61-3681-5568-92F7-2DFCC53F33D1`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `job is not existed, jobId=162837`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
}
