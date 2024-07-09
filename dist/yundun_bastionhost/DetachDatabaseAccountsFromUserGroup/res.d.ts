export interface DetachDatabaseAccountsFromUserGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `AC528ED1-C302-56E5-9CB5-ADA625D64FF9`
     */
    RequestId: string;
    /**
     * 返回结果信息。
     */
    Results: {
        /**
         * 错误码。错误码为**OK**时，表示移除成功；其他错误码表示移除失败。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库账户信息。
         */
        DatabaseAccounts: {
            /**
             * 错误码。错误码为**OK**时，表示移除成功；其他错误码表示移除失败。
             * @example `OK`
             */
            Code: string;
            /**
             * 移除授权的数据库账户ID。
             * @example `5`
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
         * @example `27`
         */
        DatabaseId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
        /**
         * 用户组ID。
         * @example `3`
         */
        UserGroupId: string;
    }[];
}
