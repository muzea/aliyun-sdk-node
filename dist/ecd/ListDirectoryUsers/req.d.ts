export interface ListDirectoryUsersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 模糊查询字符串。包含该字符串的结果都将被匹配出来。
     * @example `alice`
     */
    "Filter"?: string;
    /**
     * AD目录ID。
     * @example `cn-hangzhou+dir-jedbpr4sl9l37****`
     */
    "DirectoryId": string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
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
     * 指定用户所属的AD域组织单元（OU）。可通过[ListUserAdOrganizationUnits](~~311259~~)接口获取。
     * @example `example.com/Domain Controllers`
     */
    "OUPath"?: string;
}
