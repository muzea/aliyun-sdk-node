export interface CreateAcceleratorResponse {
    /**
     * 请求ID。
     * @example `F591955F-5CB5-4CCE-A75D-17CF2085CE22`
     */
    RequestId: string;
    /**
     * 订单ID。
     * <props="china">当InstanceChargeType（付费类型）取值为PREPAY（预付费）时，返回该参数。如果AutoPay取值为false，即未开启自动支付账单时，请前往[订单中心](https://usercenter2.aliyun.com/order/list)完成支付。</props>
     * <props="intl">当InstanceChargeType（付费类型）取值为PREPAY（预付费）时，返回该参数。如果AutoPay取值为false，即未开启自动支付账单时，请前往[订单中心](https://usercenter2-intl.aliyun.com/order/list)完成支付。</props>
     * @example `208257****`
     */
    OrderId: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
}
