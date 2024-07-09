export interface CreatePhysicalConnectionOccupancyOrderRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 物理专线的实例ID。
     * @example `pc-bp1hp0wr072f6****`
     */
    "PhysicalConnectionId": string;
    /**
     * 购买时长。
     * - 当**PricingCycle**取值**Month**时，**Period**取值范围为**1～9**。
     * - 当**PricingCycle**取值**Year**时，**Period**取值范围为**1～5**。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 实例的付费方式。取值：
     * **PrePaid**：预付费，包年包月。选择该类付费方式时，您必须确认您阿里云账号支持余额支付或信用支付。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 是否自动支付。取值：
     * - **true**：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
     * - **false**（默认值）：只生成订单不扣费。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     *  预付费的计费周期，取值：
     * - **Month**（默认值）：按月购买。
     * - **Year**：按年购买。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * @example `CBCE910E-D396-4944`
     */
    "ClientToken"?: string;
}
