export interface DescribeSecurityIpGroupsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 查询到的白名单分组个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * IP 白名单分组列表信息。
     */
    SecurityIpGroups: {
        /**
         * IP 安全白名单列表。
         * 其为一个 String 格式的数组，数组中每个对象为一个 IP 字符串或者 IP 段。
         * @example `127.*.*.1`
         */
        SecurityIps: string;
        /**
         * 安全组名称。
         * @example `default`
         */
        SecurityIpGroupName: string;
    }[];
}
