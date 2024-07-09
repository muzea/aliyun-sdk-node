export interface DescribeAvailableResourcesRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 可用区ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId": string;
    /**
     * 付费类型。取值说明：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：包年包月。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
}
