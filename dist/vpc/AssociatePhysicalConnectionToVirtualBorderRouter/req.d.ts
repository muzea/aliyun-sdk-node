export interface AssociatePhysicalConnectionToVirtualBorderRouterRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-bp186tnz6rijyhj******`
     */
    "VbrId": string;
    /**
     * 物理专线实例ID。
     * @example `pc-bp1qrb3044eqixog****`
     */
    "PhysicalConnectionId": string;
    /**
     * VBR的VLAN ID，取值范围：**0～2999**。
     * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
     * @example `123`
     */
    "VlanId": string;
    /**
     * 运营商为物理专线提供的电路编码。
     * > 只有物理专线的所有者可以指定该参数。
     * @example `longtel001`
     */
    "CircuitCode"?: string;
    /**
     * VBR实例的阿里云侧互联IP。
     * @example `192.168.XX.XX`
     */
    "LocalGatewayIp"?: string;
    /**
     * VBR实例的客户侧互联IP。
     * - 该属性只允许VBR所有者指定或修改。
     * - 为物理专线所有者创建VBR实例时必填。
     * @example `192.168.XX.XX`
     */
    "PeerGatewayIp"?: string;
    /**
     * VBR实例的阿里云侧和客户侧互联IP的子网掩码。
     * 两个IP地址必须位于同一个子网中。
     * @example `255.255.255.0`
     */
    "PeeringSubnetMask"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * VBR实例的阿里云侧互联IPv6地址。
     * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
     */
    "LocalIpv6GatewayIp"?: string;
    /**
     * VBR实例的客户侧互联IPv6地址。
     * - 该属性只允许VBR所有者指定或者修改。
     * - 为物理专线所有者创建VBR实例时必填。
     * @example `2001:XXXX:4:4:4:4:4:4`
     */
    "PeerIpv6GatewayIp"?: string;
    /**
     * VBR实例的阿里云侧和客户侧互联IPv6的子网掩码。
     * 两个IPv6地址必须位于同一个子网中。
     * @example `2408:4004:cc:400::/56`
     */
    "PeeringIpv6SubnetMask"?: string;
    /**
     * 是否启用IPv6。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "EnableIpv6"?: string;
}
