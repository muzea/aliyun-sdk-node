export interface ListOfficeSiteOverviewRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否刷新缓存。
     * @example `false`
     */
    "ForceRefresh"?: boolean;
    /**
     * 分页查询时，每页最大行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一次查询的令牌（Token）。第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 办公网络ID。可指定1~100个。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string[];
    /**
     * 查询范围。池化云电脑是指云电脑池（原桌面组）中的云电脑。
     * @example `1`
     */
    "QueryRange"?: number;
}
