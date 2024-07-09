export interface CreateForwardEntryRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DNAT列表的ID。
     * @example `ftb-bp1mbjubq34hlcqpa****`
     */
    "ForwardTableId": string;
    /**
     * - 当为公网NAT网关配置DNAT条目时，提供公网访问的弹性公网IP地址。
     * - 当为VPC NAT网关配置DNAT条目时，提供外部网络访问的NAT IP地址。
     * @example `116.28.XX.XX`
     */
    "ExternalIp": string;
    /**
     * - 当为公网NAT网关配置DNAT条目时， 需要进行端口转发的外部端口或端口段。
     *
     *     - 输入的端口范围需要在**1**~**65535**之间。
     *     - 如果需要在端口段内转发，请在输入时以正斜线（/）隔开起始端口，例如`10/20`。
     *     - 如果**ExternalPort**设置为端口段，则**InternalPort**也需要设置为端口段，且端口段的端口个数相同，例如**ExternalPort**设置为`10/20`，**InternalPort**设置为`80/90`。
     * - 当为VPC NAT网关配置DNAT条目时，NAT IP地址被外部网络访问的端口，取值范围：**1**~**65535**。
     * @example `8080`
     */
    "ExternalPort": string;
    /**
     * - 当为公网NAT网关配置DNAT条目时，需要进行公网通信的ECS实例的私网IP地址，该私网IP地址需满足以下条件：
     *
     *     - 必须属于NAT网关所在的VPC的网段。
     *     - 必须被一个ECS实例使用且该实例没有绑定EIP时，DNAT条目才生效。
     * - 当为VPC NAT网关配置DNAT条目时，需要通过DNAT规则进行通信的私网IP地址。
     * @example `192.168.XX.XX`
     */
    "InternalIp": string;
    /**
     * - 当为公网NAT网关配置DNAT条目时，需要进行端口转发的内部端口或端口段，取值范围：**1**~**65535**。
     * - 当为VPC NAT网关配置DNAT条目时，需要映射的目标ECS实例端口，取值范围：**1**~**65535**。
     * @example `80`
     */
    "InternalPort": string;
    /**
     * 协议类型，取值：
     * - **TCP**：转发TCP协议的报文。
     * - **UDP**：转发UDP协议的报文。
     * - **Any**：转发所有协议的报文。如果**IpProtocol**配置为**Any**，则**ExternalPort**和**InternalPort**也必须配置为**Any**，实现DNAT IP映射。
     * @example `TCP`
     */
    "IpProtocol": string;
    /**
     * DNAT规则的名称。
     * 长度为2~128个字符，必须以大小写字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `ForwardEntry-1`
     */
    "ForwardEntryName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe6****`
     */
    "ClientToken"?: string;
    /**
     * 是否开启端口突破，取值：
     * - **true**：开启端口突破。
     * - **false**（默认值）：不开启端口突破。
     * >当DNAT条目和SNAT条目使用同一个公网IP地址时，如果您需要配置大于1024的端口号，您需要指定**PortBreak**为**true**。
     * @example `false`
     */
    "PortBreak"?: boolean;
}
