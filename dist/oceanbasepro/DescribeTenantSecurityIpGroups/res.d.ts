export interface DescribeTenantSecurityIpGroupsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 白名单分组个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 白名单分组列表。
     */
    SecurityIpGroups: {
        /**
         * 分组名称。
         * @example `test1`
         */
        SecurityIpGroupName: string;
        /**
         * 白名单列表。其为一个用逗号分隔的字符串，每个对象为一个 IP 字符串或者 IP 段。
         * @example `192.***.*.*`
         */
        SecurityIps: string;
        /**
         * 白名单分组类型。
         * - instance: 集成自集群的白名单分组。
         * - tenant：本租户的白名单分组。
         * @example `tenant`
         */
        SecurityIpGroupType: string;
        /**
         * 租户 ID。
         * @example `t4louaeei****`
         */
        TenantId: string;
    }[];
}
