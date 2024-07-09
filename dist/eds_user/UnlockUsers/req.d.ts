export interface UnlockUsersRequest {
    /**
     * 要解锁的便捷用户的用户名列表。
     * @example `test1`
     */
    "Users": string[];
    /**
     * 自动锁定用户的日期，到期后用户将自动锁定。
     * @example `2023-03-03`
     */
    "AutoLockTime"?: string;
}
