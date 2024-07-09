export interface UnlockUsersResponse {
    /**
     * 请求ID。
     * @example `023F4EC4-3602-4A3E-A514-4970847D59DB`
     */
    RequestId: string;
    /**
     * 解锁便捷用户操作的结果。
     */
    UnlockUsersResult: {
        /**
         * 解锁成功的便捷用户。
         */
        UnlockedUsers: string[];
        /**
         * 解锁失败的便捷用户信息集合。
         */
        FailedUsers: {
            /**
             * 解锁失败的便捷用户。
             * @example `test123`
             */
            EndUserId: string;
            /**
             * 错误码。
             * @example `InvalidUsername`
             */
            ErrorCode: string;
            /**
             * 错误信息。
             * @example `test123 is an invalid username.`
             */
            ErrorMessage: string;
        }[];
    };
}
