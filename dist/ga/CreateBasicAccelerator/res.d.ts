export interface CreateBasicAcceleratorResponse {
    /**
     * 请求ID。
     * @example `F591955F-5CB5-4CCE-A75D-17CF2085CE22`
     */
    RequestId: string;
    /**
     * 订单ID。
     * 当ChargeType（付费类型）取值为 PREPAY（预付费）时，返回该参数。
     * 如果**AutoPay**取值为**false**，即未开启自动支付账单时，请前往<props="china">[订单中心](https://usercenter2.aliyun.com/order/list)</props>
     * <props="intl">[订单中心](https://usercenter2-intl.aliyun.com/order/list)</props>完成支付。
     * @example `2082574365`
     */
    OrderId: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
}
