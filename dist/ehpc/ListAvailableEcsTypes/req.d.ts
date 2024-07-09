export interface ListAvailableEcsTypesRequest {
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * ECS实例抢占策略。取值范围：
     * - NoSpot：按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * ECS实例的付费类型。取值范围：
     * - PostPaid：按量付费
     * - PrePaid：包年包月
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 是否显示ECS实例已售罄。取值范围：
     * - false：未售罄
     * - true：已售罄
     * 默认值：false
     * @example `false`
     */
    "ShowSoldOut"?: boolean;
}
