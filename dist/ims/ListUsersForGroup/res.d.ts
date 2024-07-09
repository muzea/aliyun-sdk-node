export interface ListUsersForGroupResponse {
    /**
     * 请求ID。
     * @example `789FF581-B3C8-43A8-9115-54304B46D05C`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。取值：
     * - true：已截断。
     * - false：未截断。
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `EXAMPLE`
     */
    Marker: string;
    Users: {
        /**
         * RAM用户信息。
         */
        User: {
            /**
             * RAM用户的登录名称。
             * @example `test@example.onaliyun.com`
             */
            UserPrincipalName: string;
            /**
             * RAM用户的显示名称。
             * @example `test`
             */
            DisplayName: string;
            /**
             * RAM用户ID。
             * @example `20732900249392****`
             */
            UserId: string;
            /**
             * RAM用户的加入时间（UTC时间）。
             * @example `2020-10-20T06:57:00Z`
             */
            JoinDate: string;
        }[];
    };
}
