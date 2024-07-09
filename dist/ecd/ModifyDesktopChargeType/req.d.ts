export interface ModifyDesktopChargeTypeRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要转换的目标计费方式。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 转换成包年包月计费方式时，云电脑的购买时长。单位由`PeriodUnit`指定。当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。
     * - 如果`PeriodUnit`为`Week`，该参数的取值范围为1。
     * - 如果`PeriodUnit`为`Month`，该参数的取值范围为1、2、3、6。
     * - 如果`PeriodUnit`为`Year`，该参数的取值范围为1、2、3、4、5。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 转换成包年包月计费方式时，包年包月计费的时长单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 转换成包年包月计费方式时，是否自动支付订单费用。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 云电脑ID列表。可设置1~20个。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId": string[];
    /**
     * 优惠活动ID。
     * @example `50003836003****`
     */
    "PromotionId"?: string;
    /**
     * > 处于定向邀测中，暂不对外开放。
     * @example `sample`
     */
    "UseDuration"?: number;
}
