export interface CreateUsersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 创建便捷账号操作的结果。
     */
    CreateResult: {
        /**
         * 创建成功的便捷账号信息。
         */
        CreatedUsers: {
            /**
             * 用户名。
             * @example `test1`
             */
            EndUserId: string;
            /**
             * 邮箱。
             * @example `username@example.com`
             */
            Email: string;
            /**
             * 手机号。
             * @example `1381111****`
             */
            Phone: string;
            /**
             * 用户备注。
             * @example `remark1`
             */
            Remark: string;
            /**
             * 用户的显示名。
             * @example `Bean`
             */
            RealNickName: string;
        }[];
        /**
         * 创建失败的便捷账号信息。
         */
        FailedUsers: {
            /**
             * 用户名。
             * @example `test2`
             */
            EndUserId: string;
            /**
             * 邮箱。
             * @example `username2@example.com`
             */
            Email: string;
            /**
             * 手机号。
             * @example `1390000****`
             */
            Phone: string;
            /**
             * 错误码。
             * @example `ExistedEndUserId`
             */
            ErrorCode: string;
            /**
             * 错误信息。
             * @example `The username test is used by another user.`
             */
            ErrorMessage: string;
        }[];
    };
}
