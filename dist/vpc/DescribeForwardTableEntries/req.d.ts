export interface DescribeForwardTableEntriesRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DNAT列表的ID。
     * > **ForwardTableId**和**NatGatewayId**参数至少输入一个。
     * @example `ftb-bp1mbjubq34hlcqpa****`
     */
    "ForwardTableId"?: string;
    /**
     * DNAT条目ID。
     * @example `fwd-8vbn3bc8roygjp0gy****`
     */
    "ForwardEntryId"?: string;
    /**
     * - 当查询公网NAT网关的DNAT条目时，该参数为DNAT条目中提供公网访问的弹性公网IP地址。
     * - 当查询VPC NAT网关的DNAT条目时，该参数为供外部网络访问的NAT IP地址。
     * @example `116.28.XX.XX`
     */
    "ExternalIp"?: string;
    /**
     * - 当查询公网NAT网关的DNAT条目时，该参数为进行端口转发的外部端口或端口段。
     *     - 查询的端口范围需要在**1**~**65535**之间。
     *     - 如果需要查询的是端口段，请在输入时以正斜线（/）隔开起始端口，例如`10/20`。
     *     - 如果查询的**ExternalPort**为端口段，查询的**InternalPort**也需要设置为端口段，且端口段的端口个数相同，例如**ExternalPort**设置为`10/20`，**InternalPort**设置为`80/90`。
     * - 当查询VPC NAT网关的DNAT条目时，该参数为NAT IP地址被外部网络访问的端口，取值范围：**1**~**65535**。
     * @example `8080`
     */
    "ExternalPort"?: string;
    /**
     * 私网IP地址。
     * - 当查询公网NAT网关的DNAT条目时，该参数为通过DNAT条目进行公网通信的ECS实例的私网IP地址。
     * - 当查询VPC NAT网关的DNAT条目时，该参数为需要通过DNAT规则进行通信的私网IP地址。
     * @example `192.168.XX.XX	`
     */
    "InternalIp"?: string;
    /**
     * - 当查询公网NAT网关的DNAT条目时，该参数为进行端口转发的内部端口或端口段，取值范围：**1**~**65535**。
     * - 当查询VPC NAT网关的DNAT条目时，该参数为需要映射的目标ECS实例端口，取值范围：**1**~**65535**。
     * @example `80`
     */
    "InternalPort"?: string;
    /**
     * 协议类型，取值：
     * - **tcp**：转发TCP协议的报文。
     * - **udp**：转发UDP协议的报文。
     * - **any**：转发所有协议的报文。
     * @example `tcp`
     */
    "IpProtocol"?: string;
    /**
     * DNAT条目的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头， 可包含数字、下划线（_）和短划线（-）。
     * @example `ForwardEntry-1`
     */
    "ForwardEntryName"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的NAT网关的ID。
     * > **ForwardTableId**和**NatGatewayId**参数至少输入一个。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId"?: string;
}
