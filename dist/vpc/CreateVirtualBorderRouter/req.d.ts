export interface CreateVirtualBorderRouterRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线实例ID。
     * 可以为独享专线创建VBR实例，也可以为共享专线创建VBR实例。
     * @example `pc-2zextbehcx****`
     */
    "PhysicalConnectionId": string;
    /**
     * VBR实例所有者的账号ID。
     * 默认为登录的阿里云账号ID。
     * @example `168811111****`
     */
    "VbrOwnerId"?: number;
    /**
     * VBR实例的VLAN ID，取值范围：**0～2999**。
     * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
     * @example `0`
     */
    "VlanId": number;
    /**
     * 运营商为物理专线提供的电路编码。
     *
     * > 只有物理专线所有者可以指定该参数。
     * @example `longtel001`
     */
    "CircuitCode"?: string;
    /**
     * VBR实例的阿里云侧互联IP。 该属性只允许VBR所有者指定或者修改。
     * 为物理专线所有者创建VBR实例时必填。
     * @example `192.168.XX.XX`
     */
    "LocalGatewayIp"?: string;
    /**
     * VBR实例的客户侧互联IP。该属性只允许VBR所有者指定或者修改。
     * 为物理专线所有者创建VBR实例时必填。
     * @example `116.62.XX.XX`
     */
    "PeerGatewayIp"?: string;
    /**
     * VBR实例的阿里云侧和客户侧互联IP的子网掩码。
     * 两个IP地址必须位于同一个子网中。
     * @example `255.255.255.252`
     */
    "PeeringSubnetMask"?: string;
    /**
     * VBR实例的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
     * @example `desc`
     */
    "Description"?: string;
    /**
     * VBR实例的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * VBR实例的阿里云侧互联IPv6地址。该属性只允许VBR所有者指定或者修改。
     * 为物理专线所有者创建VBR实例时必填。
     * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
     */
    "LocalIpv6GatewayIp"?: string;
    /**
     * VBR实例的客户侧互联IPv6地址。该属性只允许VBR所有者指定或者修改。
     * 为物理专线所有者创建VBR实例时必填。
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
     * 是否启用IPv6功能。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `true`
     */
    "EnableIpv6"?: boolean;
    /**
     * VBR实例的带宽值，单位：Mbps。
     * - 当为独享专线创建VBR实例时，取值分别为**50**、**100**、**200**、**300**、**400**、**500**、**1000**、**2048**、**5120**、**8192**、**10240**、**20480**、**40960**、**50120**、**61440**和**102400**。
     * - 当为共享专线创建VBR实例时，无需配置，VBR的带宽即为创建共享物理专线时设置的共享专线带宽。
     * @example `100`
     */
    "Bandwidth"?: number;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tags"?: {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。如需传入该值，不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
