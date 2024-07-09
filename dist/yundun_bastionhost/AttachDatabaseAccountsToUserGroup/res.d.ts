export interface AttachDatabaseAccountsToUserGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5D0EB759-CB0A-537D-A2CC-13A9854FA08D`
     */
    RequestId: string;
    /**
     * 接口的调用结果。
     */
    Results: {
        /**
         * 错误码。错误码为OK时，表示授权成功；其他错误码表示授权失败。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库账号信息的列表。
         */
        DatabaseAccounts: {
            /**
             * 错误码。错误码为OK时，表示授权成功；其他错误码表示授权失败。
             * @example `OK`
             */
            Code: string;
            /**
             * 数据库账户ID。
             * @example `8`
             */
            DatabaseAccountId: string;
            /**
             * 错误信息。
             * @example `无`
             */
            Message: string;
        }[];
        /**
         * 数据库实例 ID。
         * @example `2`
         */
        DatabaseId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
        /**
         * 用户组ID。
         * @example `1`
         */
        UserGroupId: string;
    }[];
}
