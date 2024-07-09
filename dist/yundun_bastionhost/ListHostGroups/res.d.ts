export interface ListHostGroupsResponse {
    /**
     * 查询到的资产组总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的资产组列表。
     */
    HostGroups: {
        /**
         * 资产组内的主机数量。
         * @example `1`
         */
        MemberCount: number;
        /**
         * 资产组id。
         * @example `1`
         */
        HostGroupId: string;
        /**
         * 资产组的备注信息。
         * @example `备注`
         */
        Comment: string;
        /**
         * 资产组名称。
         * @example `资产组1`
         */
        HostGroupName: string;
    }[];
}
