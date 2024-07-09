export interface DescribeMultiZoneAvailableResourceRequest {
    /**
     * 付费类型：
     * - Prepaid：预付费。
     * - Postpaid：后付费。
     * @example `Prepaid`
     */
    "ChargeType": string;
    /**
     * 地域Id。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可选值，不填时查询该region下全部的组合。
     * @example `cn-hangzhou-bef-aliyun`
     */
    "ZoneCombination"?: string;
}
