export interface GetJobStatusResponse {
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 任务状态。取值：
     * - **Succeeded**：成功。
     * - **Processing**：执行中。
     * @example `Succeeded`
     */
    Status: string;
}
