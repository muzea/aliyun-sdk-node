export interface RenewNetworkPackagesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 续费时长。取值范围由参数`PeriodUnit`的值决定。
     * - `PeriodUnit`为`Week`时，取值范围为：1。
     * - `PeriodUnit`为`Month`时，取值范围为：1、2、3、6。
     * - `PeriodUnit`为`Year`时，取值范围为：1、2、3。
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 续费时长单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 公网精品带宽ID列表。可设置1~100个。
     */
    "NetworkPackageId": string[];
    /**
     * 优惠ID。
     * @example `500038360030606`
     */
    "PromotionId"?: string;
}
