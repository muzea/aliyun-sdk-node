export interface CreateNetworkPackageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽的带宽大小。单位：Mbps。
     * - 如果是包年包月精品带宽，则取值范围是2\~1000。
     * - 如果是按量付费精品带宽，且类型是按使用流量计费（PayByTraffic），则取值范围是2\~200；
     * - 如果是按量付费精品带宽，且类型是按固定带宽计费（PayByBandwidth），则取值范围是2\~1000。
     * @example `2`
     */
    "Bandwidth": number;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * 付费类型。
     * @example `PrePaid`
     */
    "PayType"?: string;
    /**
     * 公网精品带宽的计费方式。
     * - 当参数`PayType`取值为`PrePaid`时，取值范围：
     *     - PayByBandwidth：按固定带宽计费。
     * - 当参数`PayType`取值为`PostPaid`时，取值范围：
     *     - PayByTraffic：按使用流量计费。
     *     - PayByBandwidth：按固定带宽计费。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 包年包月精品带宽的购买时长。当参数`PayType`取值为`PrePaid`时才生效，且为必选值。取值范围由参数`PeriodUnit`的值决定。
     * - `PeriodUnit`为`Week`时，取值范围为：1。
     * - `PeriodUnit`为`Month`时，取值范围为：1、2、3、6。
     * - `PeriodUnit`为`Year`时，取值范围为：1、2、3。
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 包年包月精品带宽的购买时长单位。当参数`PayType`取值为`PrePaid`时才生效，且为必选值。
     * @example `Week`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否自动续费。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 优惠活动ID。
     * @example `23141`
     */
    "PromotionId"?: string;
}
