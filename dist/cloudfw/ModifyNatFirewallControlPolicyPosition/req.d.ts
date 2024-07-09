export interface ModifyNatFirewallControlPolicyPositionRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     *  NAT网关的ID。
     * @example `ngw-xxxxxx`
     */
    "NatGatewayId": string;
    /**
     * 访问控制策略的流量方向。
     * 取值：
     * - **out**：内对外流量。
     * @example `out`
     */
    "Direction"?: string;
    /**
     * 为NAT防火墙IPv4访问控制策略设置一个新的优先级。
     * 优先级使用数字表示，输入数字1表示优先级最高，数字越大优先级越低。
     * > 新的优先级数字不能超出您已创建的NAT防火墙IPv4策略优先级的范围，否则会导致调用该接口时出错。
     * 建议您在调用该接口前，先调用DescribeNatFirewallPolicyPriorUsed查询NAT防火墙指定流量方向的IPv4策略优先级范围。
     * @example `5`
     */
    "NewOrder": number;
    /**
     * 安全访问控制策略的唯一标识ID。
     * @example `66461eea-e659-4225-84c9-*****`
     */
    "AclUuid": string;
}
