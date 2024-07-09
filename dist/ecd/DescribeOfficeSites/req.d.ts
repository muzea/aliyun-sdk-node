export interface DescribeOfficeSitesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络的账号体系类型。
     * @example `SIMPLE`
     */
    "OfficeSiteType"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 办公网络ID。可设置1~100个。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string[];
    /**
     * 办公网络状态。
     * @example `REGISTERED`
     */
    "Status"?: string;
}
