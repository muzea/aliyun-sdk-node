export interface UnassociateEipAddressRequest {
    /**
     * 当EIP绑定了NAT网关，且NAT网关添加了DNAT或SNAT条目时，是否强制解绑EIP，取值：
     * - **false**（默认值）：不强制解绑EIP。
     * - **true**：强制解绑EIP。
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 要解绑的EIP的地域ID。
     *  您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     *  要解绑的EIP的ID。
     * @example `eip-2zeerraiwb7uj6i0d****`
     */
    "AllocationId": string;
    /**
     *  要解绑EIP的云产品实例的ID。
     * @example `i-hp3akk9irtd69jad****`
     */
    "InstanceId"?: string;
    /**
     * 要解绑EIP的云产品类型，取值：
     * - **EcsInstance**（默认值）：专有网络类型的ECS实例。
     * - **SlbInstance**：专有网络类型的SLB实例。
     * - **NetworkInterface**：专有网络类型的辅助弹性网卡。
     * - **Nat**：NAT网关。
     * - **HaVip**：高可用虚拟IP。
     * - **IpAddress**：IP 地址。
     * @example `EcsInstance`
     */
    "InstanceType"?: string;
    /**
     * 要解绑EIP的ECS实例或辅助弹性网卡实例的私网IP地址。
     * @example `192.XX.XX.2`
     */
    "PrivateIpAddress"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11****	`
     */
    "ClientToken"?: string;
}
