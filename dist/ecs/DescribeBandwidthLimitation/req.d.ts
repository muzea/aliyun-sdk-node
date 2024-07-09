export interface DescribeBandwidthLimitationRequest {
    /**
     * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例的计费方式。更多详情，请参见[计费概览](~~25398~~)。取值范围：
     * - PrePaid：包年包月。
     * - PostPaid：按量付费。
     * 默认值：PostPaid。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 按量付费实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，最高按量付费价格。
     * 默认值：NoSpot。
     * >当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 实例规格。取值请参见[实例规格族](~~25378~~)。
     * @example `ecs.g5.large`
     */
    "InstanceType": string;
    /**
     * 资源ID。
     * > 当您将参数OperationType设置为Upgrade或者Downgrade时，参数ResourceId为必选参数。
     * @example `i-bp67acfmxazb4ph***`
     */
    "ResourceId"?: string;
    /**
     * 查询不同操作方式的公网带宽规格限制。取值范围：
     * - Upgrade：升级公网带宽。
     * - Downgrade：降级公网带宽。
     * - Create：新建ECS实例。
     * 默认值：Create。
     * @example `Upgrade`
     */
    "OperationType"?: string;
}
