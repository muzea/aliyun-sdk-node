export interface AllocateEipAddressProResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 订单ID。
     * <props="china">当InstanceChargeType（要指定申请的EIP的计费方式）取值为PrePaid（包年包月）时，返回该参数。如果AutoPay取值为false，即未开启自动支付账单时，请前往[订单中心](https://usercenter2.aliyun.com/order/list)完成支付。</props>
     * <props="intl">当InstanceChargeType（要指定申请的EIP的计费方式）取值为PrePaid（包年包月）时，返回该参数。如果AutoPay取值为false，即未开启自动支付账单时，请前往[订单中心](https://usercenter2-intl.aliyun.com/order/list)完成支付。</props>
     * @example `20190000`
     */
    OrderId: number;
    /**
     * 资源组ID。仅**InstanceChargeType**取值为**PostPaid**时返回。
     * @example `rg-resourcegroup****`
     */
    ResourceGroupId: string;
    /**
     * 您指定申请的EIP被分配到的IP地址。仅**InstanceChargeType**取值为**PostPaid**时返回。
     * @example `192.0.XX.XX`
     */
    EipAddress: string;
    /**
     * EIP的ID。
     * @example `eip-25877c70gddh****`
     */
    AllocationId: string;
}
