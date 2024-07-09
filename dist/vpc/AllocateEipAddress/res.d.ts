export interface AllocateEipAddressResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 订单ID。<props="china">当InstanceChargeType（EIP的计费方式）取值为PrePaid（包年包月）时，返回该参数。如果AutoPay（自动付费）未打开，即未开启自动支付账单时，请前往[订单中心](https://usercenter2.aliyun.com/order/list)完成支付。</props>
     * <props="intl">当InstanceChargeType（EIP的计费方式）取值为PrePaid（包年包月）时，返回该参数。如果AutoPay（自动付费）未打开，即未开启自动支付账单时，请前往[订单中心](https://usercenter2-intl.aliyun.com/order/list)完成支付。</props>
     * @example `10`
     */
    OrderId: number;
    /**
     * 资源组ID。仅**InstanceChargeType**取值为**PostPaid**时返回。
     * @example `rg-acfmxazfdgdg****`
     */
    ResourceGroupId: string;
    /**
     * 分配的EIP。仅**InstanceChargeType**取值为**PostPaid**时返回。
     * @example `192.0.XX.XX`
     */
    EipAddress: string;
    /**
     * EIP实例的ID。
     * @example `eip-25877c70gddh****`
     */
    AllocationId: string;
}
