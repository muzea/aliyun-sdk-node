export interface ResetUserPasswordResponse {
    /**
     * 请求ID。
     * @example `32D05B39-E6EE-4D7A-9FD0-762A26859D0D`
     */
    RequestId: string;
    /**
     * 重置便捷用户密码操作的结果。
     */
    ResetUsersResult: {
        /**
         * 已发送重置密码邮件的便捷用户。
         */
        ResetUsers: string[];
        /**
         * 重置密码失败的便捷用户信息集合。
         */
        FailedUsers: {
            /**
             * 重置密码失败的便捷用户。
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
