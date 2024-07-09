export interface UpdateVirtualPhysicalConnectionRequest {
    /**
     * 共享专线的VLAN ID。取值范围：**0**~**2999**。
     * - VLAN ID为**0**时，表示边界路由器VBR（Virtual Border Router）的物理交换机端口不使用VLAN模式，而使用三层路由接口模式。三层路由接口模式下每一条物理专线对应一个VBR。
     * - VLAN ID为**1**~**2999**时，表示VBR的物理交换机端口使用基于VLAN的三层子接口。三层子接口模式下每个VLAN ID对应一个VBR。此时，该VBR的物理专线可以连接多个账号下的VPC。不同VLAN下的VBR二层网络隔离，无法互通。
     * @example `1`
     */
    "VlanId": number;
    /**
     * 共享专线实例ID。
     * @example `pc-bp1mrgfbtmc9brre7****`
     */
    "InstanceId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `CBCE910E-D396-4944-8****`
     */
    "Token"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - **true**：发送检查请求，不会修改共享专线的VLAN ID。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改共享专线的VLAN ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 共享专线的预计带宽值。完成支付后，带宽值才能生效。
     * 取值：**50M**、**100M**、**200M**、**300M**、**400M**、**500M**、**1G**、**2G**、**5G**、**8G**、**10G**。
     * <props="china">
     * > **2G**、**5G**、**8G**、**10G**的带宽值默认不开放，如需使用，请向您的客户经理申请。</props>
     * <props="intl">
     * > **2G**、**5G**、**8G**、**10G**的带宽值默认不开放，如需使用，请向您的客户经理申请。</props>
     * 单位：**M**表示Mbps，**G**表示Gbps。
     * @example `50M`
     */
    "ExpectSpec"?: string;
    /**
     * 共享专线所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
