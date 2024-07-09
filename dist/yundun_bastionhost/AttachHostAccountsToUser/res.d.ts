export interface AttachHostAccountsToUserResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 接口调用的结果信息。
     */
    Results: {
        /**
         * 接口调用的结果。取值：
         * - **OK**：操作成功。
         * - **UNEXPECTED**：未知错误。
         * - **INVALID_ARGUMENT**：请求参数设置错误。
         *     > 请检查请求参数，确保参数正确后重新调用接口。
         * - **OBJECT_NOT_FOUND**：操作的对象不存在。
         *     > 请检查该堡垒机实例的ID是否存在，主机是否存在，主机ID是否填写正确，然后重新调用接口。
         * - **OBJECT_AlREADY_EXISTS** ：操作的对象已存在。
         * @example `OK`
         */
        Code: string;
        /**
         * 该参数已废弃，无需关注。
         * @example `无`
         */
        Message: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 用户ID。
         * @example `1`
         */
        UserId: string;
        /**
         * 为用户授权主机账户操作返回的结果信息。
         */
        HostAccounts: {
            /**
             * 为用户授权主机账户操作返回的结果。取值：
             * - **OK**：操作成功。
             * - **UNEXPECTED**：未知错误。
             * - **INVALID_ARGUMENT**：请求参数设置错误。
             * - **OBJECT_NOT_FOUND**：操作的对象不存在。
             * - **OBJECT_AlREADY_EXISTS** ：操作的对象已存在。
             * @example `OK`
             */
            Code: string;
            /**
             * 该参数已废弃，无需关注。
             * @example `无`
             */
            Message: string;
            /**
             * 主机账户ID。
             * @example `1`
             */
            HostAccountId: string;
        }[];
    }[];
}
