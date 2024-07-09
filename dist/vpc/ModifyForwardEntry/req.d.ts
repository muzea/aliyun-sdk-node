export interface ModifyForwardEntryRequest {
    /**
     * DNAT条目所属的DNAT列表的ID。
     * @example `ftb-8vbx8xu2lqj9qb334****`
     */
    "ForwardTableId": string;
    /**
     * 要修改的DNAT条目的ID。
     * @example `fwd-8vbn3bc8roygjp0gy****`
     */
    "ForwardEntryId": string;
    /**
     * - 当修改公网NAT网关的DNAT条目时，该参数为提供公网访问的公网IP地址。
     * - 当修改VPC NAT网关的DNAT条目时，该参数为供外部网络访问的NAT IP地址。
     * @example `116.85.XX.XX`
     */
    "ExternalIp"?: string;
    /**
     * - 当修改公网NAT网关的DNAT条目时，该参数为DNAT条目中进行端口转发的外部端口或端口段。
     *     - 修改的端口范围需要在**1**~**65535**之间。
     *     - 如果需要修改端口段，请在输入时以正斜线（/）隔开起始端口，例如`10/20`。
     *     - 如果需要同时修改**ExternalPort**和**InternalPort**，而且**ExternalPort**为端口段，则**InternalPort**也需要设置为端口段，且端口段的端口个数相同，例如**ExternalPort**设置为`10/20`，**InternalPort**设置为`80/90`。
     * - 当修改VPC NAT网关的DNAT条目时，该参数为被外部网络访问的端口，取值范围：**1**~**65535**。
     * @example `80`
     */
    "ExternalPort"?: string;
    /**
     * - 当修改公网NAT网关的DNAT条目时，该参数为通过DNAT条目进行公网通信的ECS实例的私网IP地址。
     * - 当修改VPC NAT网关的DNAT条目时，该参数为需要通过DNAT规则进行通信的私网IP地址。
     * @example `10.0.0.78`
     */
    "InternalIp"?: string;
    /**
     * - 当修改公网NAT网关的DNAT条目时，该参数为DNAT条目中进行端口转发的内部端口或端口段，取值范围：**1**~**65535**。
     * - 当修改VPC NAT网关的DNAT条目时，该参数为需要映射的目标ECS实例端口，取值范围：**1**~**65535**。
     * @example `80`
     */
    "InternalPort"?: string;
    /**
     * 协议类型，取值：
     *
     * - **TCP**：转发TCP协议的报文。
     *
     * - **UDP**：转发UDP协议的报文。
     *
     * - **Any**：转发所有协议的报文。
     * @example `TCP`
     */
    "IpProtocol"?: string;
    /**
     * 修改后的DNAT条目名称。
     * 长度为2~128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `test`
     */
    "ForwardEntryName"?: string;
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example ` cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否开启端口突破，取值：
     * - **true**：开启端口突破。
     * - **false**：不开启端口突破。当DNAT条目和SNAT条目使用同一个公网IP地址时，如果您需要配置大于`1024`的端口号，您需要指定`PortBreak`为`true`。
     * @example `false`
     */
    "PortBreak"?: boolean;
}
