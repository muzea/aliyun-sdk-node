export interface ListOfficeSiteUsersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 模糊查询字符串。
     * @example `*jin*`
     */
    "Filter"?: string;
    /**
     * 办公网络ID。仅支持基于企业AD账号的办公网络。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 指定的AD域组织单元。
     * @example `example.com/Domain Controllers`
     */
    "OUPath"?: string;
}
