export interface DetachDatabaseAccountsFromUserResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `79D7E114-CB52-5695-AB15-12776C308387`
     */
    RequestId: string;
    /**
     * 接口调用的结果。
     */
    Results: {
        /**
         * 错误码。错误码为**OK**时，表示移除成功；其他错误码表示移除失败。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库账号信息的列表。
         */
        DatabaseAccounts: {
            /**
             * 错误码。错误码为OK时，表示移除成功；其他错误码表示移除失败。
             * @example `OK`
             */
            Code: string;
            /**
             * 移除授权的数据库账户ID。
             * @example `9`
             */
            DatabaseAccountId: string;
            /**
             * 错误信息。
             * @example `无`
             */
            Message: string;
        }[];
        /**
         * 移除授权的数据库ID。
         * @example `4`
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
