export interface ModifyVirtualBorderRouterAttributeRequest {
    /**
     * VBR所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-bp1lhl0taikrte****`
     */
    "VbrId": string;
    /**
     * VBR的VLAN ID，取值范围：**0～2999**。
     * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
     * @example `0`
     */
    "VlanId"?: number;
    /**
     * 运营商为物理专线提供的电路编码。
     *
     * > 只有物理专线的所有者可以指定该参数。
     *
     * @example `longtel001`
     */
    "CircuitCode"?: string;
    /**
     * VBR实例的阿里云侧互联IP。
     * 该属性只允许VBR所有者指定或修改。
     * @example `192.168.XX.XX`
     */
    "LocalGatewayIp"?: string;
    /**
     * VBR实例的客户侧互联IP。
     * 该属性只允许VBR所有者指定或修改。
     * @example `192.168.XX.X`
     */
    "PeerGatewayIp"?: string;
    /**
     * VBR实例的阿里云侧和客户侧互联IP的子网掩码。该属性只允许VBR所有者指定或修改。
     * 两个IP地址必须位于同一个子网中。
     * @example `255.255.255.252`
     */
    "PeeringSubnetMask"?: string;
    /**
     * 配置BFD报文的发送间隔，取值：**200～1000**，单位：ms。
     * @example `300`
     */
    "MinTxInterval"?: number;
    /**
     * 配置BFD报文的接收间隔，取值：**200～1000**，单位：ms。
     * @example `300`
     */
    "MinRxInterval"?: number;
    /**
     * 检测时间倍数，即接收方允许发送方发送报文的最大连接丢包数，用来检测链路是否正常。
     * 取值：**3～10**。
     * @example `3`
     */
    "DetectMultiplier"?: number;
    /**
     * VBR的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `desc`
     */
    "Description"?: string;
    /**
     * VBR的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。但不能以`http:// `或`https://`开头。
     * @example `VBR`
     */
    "Name"?: string;
    /**
     * VBR关联的物理专线的列表信息，包含以下参数：
     * - **CircuitCode**：运营商为物理专线提供的电路编码。
     * - **LocalGatewayIp**：VBR实例的阿里云侧互联IP。
     * - **PeerGatewayIp**：VBR实例的客户侧互联IP。
     * - **PeeringSubnetMask**：VBR实例的阿里云侧和客户侧互联IP的子网掩码。
     * - **PhysicalConnectionId**：物理专线实例ID。
     * @example `[   {     "CircuitCode ": "longtel001",     " LocalGatewayIp ": "192.168.XX.XX",     "PeerGatewayIp" : "192.168.XX.XX",     " PeeringSubnetMask ": "255.255.255.252",     " PhysicalConnectionId ": "pc-kojok19****"   } ]`
     */
    "AssociatedPhysicalConnections"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
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
     * - 为物理专线所有者创建VBR实例时必填，为其他账号创建VBR实例时无需填写。
     * @example `2001:XXXX:3c4d:0015:0000:0000:0000:2a2b`
     */
    "PeerIpv6GatewayIp"?: string;
    /**
     * VBR实例的阿里云侧和客户侧互联IPv6的子网掩码。
     * 两个IPv6地址必须位于同一个子网中。
     * @example `2408:4004:cc:400::/56`
     */
    "PeeringIpv6SubnetMask"?: string;
    /**
     * 是否启用IPv6。
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "EnableIpv6"?: boolean;
    /**
     * 带宽值。单位：Mbps。
     * @example `100`
     */
    "Bandwidth"?: number;
    /**
     * 是否允许IDC间业务访问。
     * - true：允许。
     * - false（默认值）：不允许。
     * @example `false`
     */
    "SitelinkEnable"?: boolean;
}
