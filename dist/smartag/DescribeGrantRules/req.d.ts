export interface DescribeGrantRulesRequest {
    /**
     * 云连接网实例所在的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 云连接网实例ID。
     * @example `ccn-n2935s1mnwv8i*****`
     */
    "AssociatedCcnId"?: string;
    /**
     * 分页查询时每页展示的授权条目数。
     * 默认值为**10**，最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * 默认值是**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
