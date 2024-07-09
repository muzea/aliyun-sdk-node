export interface RemoveUsersResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CF8`
     */
    RequestId: string;
    /**
     * 用户列表。
     */
    Users: {
        /**
         * 状态码，成功返回0，失败返回错误码描述。
         * @example `0`
         */
        Code: number;
        /**
         * 用户ID。
         * @example `1811****`
         */
        UserId: string;
        /**
         * 删除终端操作结果。取值：
         * - **Success**：成功。
         * - **Failed**：失败。
         * @example `Success`
         */
        Message: string;
    }[];
}
