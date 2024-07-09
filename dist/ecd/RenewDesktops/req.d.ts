export interface RenewDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 续费时长。取值范围由参数`PeriodUnit`的值决定。
     * - `PeriodUnit`为`Month`时，取值范围为：1、2、3、6。
     * - `PeriodUnit`为`Year`时，取值范围为：1~5。
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 续费时长的单位，即参数`Period`的单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 云电脑ID列表。仅支持续费包年包月云电脑。
     * @example `ecd-ia2zw38bi6cm7****`
     */
    "DesktopId": string[];
    /**
     * 优惠活动ID。
     * @example `50003098015****`
     */
    "PromotionId"?: string;
    "AutoRenew"?: boolean;
}
