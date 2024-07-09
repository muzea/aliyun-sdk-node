export interface DescribeNetworkPackagesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
     * 公网精品带宽ID。可设置1~100个。
     * @example `np-amtp8e8q1o9e4****`
     */
    "NetworkPackageId"?: string[];
    /**
     * 按量付费公网精品带宽的计费方式。
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
}
