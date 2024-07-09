export interface ModifyInstanceNetworkSpecRequest {
    /**
     * 需要修改网络配置的实例ID。
     * @example `i-bp67acfmxazb4****`
     */
    "InstanceId": string;
    /**
     * 公网出带宽最大值，单位：Mbit/s（Megabit per second）。取值范围：0~100。
     * @example `10`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 设置公网入带宽最大值，单位：Mbit/s（Megabit per second）。取值范围：
     * - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
     * - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
     * @example `10`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * > 该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "ISP"?: string;
    /**
     * 转换网络计费方式。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    "NetworkChargeType"?: string;
    /**
     * 是否分配公网IP地址。
     * 默认值：false
     * @example `false`
     */
    "AllocatePublicIp"?: boolean;
    /**
     * 临时带宽升级开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddThh:mmZ。精确到**分钟**（mm）。
     * @example `2017-12-05T22:40Z`
     */
    "StartTime"?: string;
    /**
     * 临时带宽升级结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddThhZ。精确到**小时**（hh）。
     * > 临时升级带宽的结束时间和开始时间的间隔必须大于或等于3小时。
     * @example `2017-12-06T22Z`
     */
    "EndTime"?: string;
    /**
     * 是否自动支付。取值范围：
     * - true：变更带宽配置后，自动扣费。当您将参数Autopay置为true时，您需要确保账户余额充足，如果账户余额不足会生成异常订单，此订单暂时不支持通过ECS控制台支付，只能作废。
     * <props="china">
     * - false：变更带宽配置后，只生成订单不扣费。如果您的支付方式余额不足，可以将参数Autopay置为false，即取消自动支付，此时调用该接口会生成正常的未支付订单，此订单可登录[ECS管理控制台](https://ecs.console.aliyun.com)支付。
     * </props>
     * <props="intl">
     * - false：变更带宽配置后，只生成订单不扣费。如果您的支付方式余额不足，可以将参数Autopay置为false，即取消自动支付，此时调用该接口会生成正常的未支付订单，此订单可登录[ECS管理控制台](https://ecs.console.aliyun.com)支付。
     * </props>
     * 默认值：true
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
