export interface ListHostGroupsForUserGroupResponse {
    /**
     * 查询到的主机组总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机组列表。
     */
    HostGroups: {
        /**
         * 主机组ID。
         * @example `1`
         */
        HostGroupId: string;
        /**
         * 主机组的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 主机组名称。
         * @example `group`
         */
        HostGroupName: string;
    }[];
}
