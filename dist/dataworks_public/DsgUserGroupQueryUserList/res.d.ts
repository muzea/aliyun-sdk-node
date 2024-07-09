export interface DsgUserGroupQueryUserListResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 用户名称。
         * @example `user1`
         */
        AccountName: string;
        /**
         * 阿里云用户名称或RAM角色名称。基于阿里云账号或RAM角色创建用户组时需使用该参数的返回值。
         * @example `user:user1`
         */
        YunAccount: string;
        /**
         * 用户类型。取值如下：
         * - 1~5：表示阿里云用户。
         * - 6：表示RAM角色。
         * @example `2`
         */
        AccountType: number;
        /**
         * 用户ID或角色ID。
         * @example `234`
         */
        BaseId: string;
        /**
         * 父用户ID。RAM用户会涉及该参数。
         * @example `123`
         */
        ParentAccountId: string;
    }[];
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
