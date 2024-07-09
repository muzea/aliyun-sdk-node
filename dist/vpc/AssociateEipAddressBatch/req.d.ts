export interface AssociateEipAddressBatchRequest {
    /**
     * 要绑定云产品实例的EIP所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要绑定EIP的云产品实例ID。
     * 支持输入NAT网关实例ID、辅助弹性网卡实例ID。
     * @example `ngw-hp3akk9irtd69jad****`
     */
    "BindedInstanceId": string;
    /**
     * 要绑定EIP的实例的类型，取值：
     * - **Nat**：NAT网关。
     * - **NetworkInterface**：辅助弹性网卡。
     * @example `Nat`
     */
    "BindedInstanceType": string;
    /**
     * 绑定模式，仅取值为**MULTI_BINDED**，表示多EIP网卡可见模式。
     * 仅**InstanceType**配置为**NetworkInterface**时，才需要配置该参数。
     * @example `MULTI_BINDED`
     */
    "Mode"?: string;
    /**
     * 需要与云产品实例绑定的EIP列表。
     * 需至少输入1个EIP，最多支持输入50个EIP。
     */
    "InstanceIds": string[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
}
