export interface CreateBandwidthPackageResponse {
    /**
     * 请求ID。
     * @example `4B6DBBB0-2D01-4C6A-A384-4129266E6B78`
     */
    RequestId: string;
    /**
     * 带宽包ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    BandwidthPackageId: string;
    /**
     * 订单ID。
     * 如果您未自动支付账单，请您前往订单中心完成支付。
     * <props="china">仅当ChargeType取值为PREPAY，即付费方式为预付费时，返回该参数。如果AutoPay取值为false，即未开启自动付费时，请前往[订单中心](https://usercenter2.aliyun.com/order/list)完成支付。</props>
     * <props="intl">仅当ChargeType取值为PREPAY，即付费方式为预付费时，返回该参数。如果AutoPay取值为false，即未开启自动付费时，请前往[订单中心](https://usercenter2-intl.aliyun.com/order/list)完成支付。</props>
     * @example `208257****`
     */
    OrderId: string;
}
