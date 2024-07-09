export interface DescribeUsersInGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-8ttn55ujj8nj8****`
     */
    "DesktopGroupId": string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 授权用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 用户连接状态。
     * @example `1`
     */
    "ConnectState"?: number;
    /**
     * 是否查询用户详情。
     * @example `true`
     */
    "QueryUserDetail"?: boolean;
    /**
     * 模糊查询字符串。包含该字符串的结果都将被匹配出来。
     * @example `alice`
     */
    "Filter"?: string;
    /**
     * 用户所属的组织ID。
     * @example `org-d0fua2oyukw8j****`
     */
    "OrgId"?: string;
    /**
     * 授权用户ID列表。
     */
    "EndUserIds"?: string[];
}
