export interface CreateForwardEntryRequest {
    /**
     *  NAT网关的ID。
     * @example `nat-5t7nh1cfm6kxiszlttr38****`
     */
    "NatGatewayId": string;
    /**
     * 提供公网访问的弹性公网IP地址。
     * @example `121.XXX.XXX.28`
     */
    "ExternalIp": string;
    /**
     * 需要进行端口转发的外部端口或端口段。
     * - 输入的端口范围需要在1~65535之间。
     * - 如果需要在端口段内转发，请在输入时以正斜线（/）隔开起始端口，例如10/20。
     * - 如果ExternalPort设置为端口段，则InternalPort也需要设置为端口段，且端口段的端口个数相同，例如ExternalPort设置为10/20，InternalPort设置为80/90。
     * @example `22`
     */
    "ExternalPort": string;
    /**
     * 通过DNAT条目进行公网通信的实例的私网IP地址。
     * @example `10.0.XXX.XXX`
     */
    "InternalIp": string;
    /**
     * 进行端口转发的内部端口或端口段。
     * - 输入的端口范围需要在1~65535之间。
     * - 如果需要在端口段内转发，请在输入时以正斜线（/）隔开起始端口，例如10/20。
     * @example `22`
     */
    "InternalPort": string;
    /**
     * DNAT规则的名称。长度为2~128个字符，不能以`http://`或`https://`开头。
     * @example `test0`
     */
    "ForwardEntryName"?: string;
    /**
     * 协议类型，取值：
     * - **TCP**：转发TCP协议的报文。
     * - **UDP**：转发UDP协议的报文。
     * - **Any**（默认）：转发所有协议的报文。
     * @example `Any`
     */
    "IpProtocol"?: string;
    /**
     * DNAT的探测端口，需要在内网端口范围内。默认值为空。
     * @example `80`
     */
    "HealthCheckPort"?: number;
    /**
     * 提供公网访问的备用弹性公网IP地址，需要选择绑定在NAT上的备用弹性IP。DNAT创建成功后，备用公网IP会生效。
     * @example `101.XXX.XXX.4`
     */
    "StandbyExternalIp"?: string;
}
