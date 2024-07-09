export interface CancelLogstashDeletionResponse {
    /**
     * 是否成功恢复实例：
     * - true：是
     * - false：否
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `23EBF56B-2DC0-4507-8BE5-B87395DB0FEB`
     */
    RequestId: string;
}
