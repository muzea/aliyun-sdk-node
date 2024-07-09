export interface CreateRepoSyncTaskResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `8F8A0BA6-7F06-4BAE-B147-10BD6A25****`
     */
    RequestId: string;
    /**
     * 同步任务ID
     * @example `rst-gbch330f0c****`
     */
    SyncTaskId: string;
}
