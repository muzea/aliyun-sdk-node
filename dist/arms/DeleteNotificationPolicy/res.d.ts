export interface DeleteNotificationPolicyResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 通知策略是否删除成功。
     * - `true`：删除成功。
     * - `false`：删除失败。
     * @example `true`
     */
    IsSuccess: boolean;
}
