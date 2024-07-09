export interface LockUsersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 锁定便捷用户操作的结果。
     */
    LockUsersResult: {
        /**
         * 锁定成功的便捷用户。
         */
        LockedUsers: string[];
        /**
         * 锁定失败的便捷用户信息集合。
         */
        FailedUsers: {
            /**
             * 锁定失败的便捷用户。
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
