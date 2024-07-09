export interface GetUserGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的用户组详细信息。
     */
    UserGroup: {
        /**
         * 用户组名称。
         * @example `UserGroup01`
         */
        UserGroupName: string;
        /**
         * 用户组备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 用户组ID。
         * @example `1`
         */
        UserGroupId: string;
    };
}
