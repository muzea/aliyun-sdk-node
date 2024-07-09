export interface DescribeNetworkRuleAttributesRequest {
    /**
     * 要查询的端口转发规则，使用JSON格式的字符串表述，具体结构如下。
     * - **InstanceId**：String类型，必选，DDoS高防实例ID。
     * - **Protocol**：String类型，必选，转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * @example `[{"InstanceId":"ddoscoo-cn-mp91j1ao****","Protocol":"tcp","FrontendPort":8080}]`
     */
    "NetworkRules": string;
}
