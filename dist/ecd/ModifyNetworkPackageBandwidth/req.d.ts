export interface ModifyNetworkPackageBandwidthRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽ID。
     * @example `np-cxj99qb8d34vo****`
     */
    "NetworkPackageId": string;
    /**
     * 公网精品带宽的带宽大小。单位：Mbps。
     * - 如果是包年包月精品带宽，则取值范围是2\~1000。
     * - 如果是按量付费精品带宽，且类型是按使用流量计费（PayByTraffic），则取值范围是2\~200；
     * - 如果是按量付费精品带宽，且类型是按固定带宽计费（PayByBandwidth），则取值范围是2\~1000。
     * @example `10`
     */
    "Bandwidth": number;
    /**
     * 是否自动支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 优惠ID。
     * @example `500033080110596`
     */
    "PromotionId"?: string;
}
