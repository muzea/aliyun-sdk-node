export interface RetryChangeOrderTaskRequest {
    /**
     * 发布单任务ID。
     * @example `823-bhjf-23u4-eiuf*`
     */
    "TaskId": string;
    /**
     * 重试状态。
     * @example `true`
     */
    "RetryStatus"?: boolean;
}
