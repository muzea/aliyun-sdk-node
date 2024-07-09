export interface InterruptElasticsearchTaskResponse {
    /**
     * 错误码。仅当返回异常时显示。
     * @example `InstanceStatusNotSupportCurrentAction`
     */
    Code: string;
    /**
     * 错误信息。仅当返回异常时显示。
     * @example `The cluster is running tasks or in an error status. Try again later.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果：
     * - true：中断变更成功
     * - false：中断变更失败
     * @example `true`
     */
    Result: boolean;
}
