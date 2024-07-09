export interface AttachDatabaseAccountsToUserResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `23120B8E-8737-50BD-A3A3-902A7821F04D`
     */
    RequestId: string;
    /**
     * 接口的调用结果。
     */
    Results: {
        /**
         * 错误码。错误码为**OK**时，表示授权成功；其他错误码表示授权失败。
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
             * @example `6`
             */
            DatabaseAccountId: string;
            /**
             * 错误信息。
             * @example `success`
             */
            Message: string;
        }[];
        /**
         * 数据库实例 ID。
         * @example `22`
         */
        DatabaseId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
        /**
         * 用户ID。
         * @example `1`
         */
        UserId: string;
    }[];
}
