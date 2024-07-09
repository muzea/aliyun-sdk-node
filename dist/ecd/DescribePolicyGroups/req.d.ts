export interface DescribePolicyGroupsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100
     * - 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 策略ID数组。可设置一个或多个。
     * @example `system-all-enabled-policy`
     */
    "PolicyGroupId"?: string[];
    /**
     * 策略的生效范围。取值范围：
     * - GLOBAL：全局生效。
     * - IP：根据IP生效。
     * - ALL: 全部策略。
     * 默认为GLOBAL。
     * @example `ALL`
     */
    "Scope"?: string;
}
