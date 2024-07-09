export interface DescribeLayer4RulePolicyRequest {
    /**
     * 要查询的端口转发规则。
     * 该参数使用JSON数组转换的字符串表示。JSON数组的每个元素表示一个已创建的端口转发规则。一次最多可以查询1个端口转发规则。
     * > 您可以调用[DescribeNetworkRules](~~157484~~)查询所有已创建的端口转发规则。
     * 每个端口转发规则包含以下字段：
     * - **InstanceId**：String类型，必选，DDoS高防实例的ID。
     * - **Protocol**：String类型，必选，端口转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * @example `[{\"InstanceId\":\"ddosDip-sg-4hr2b3l****\",\"FrontendPort\":2020,\"Protocol\":\"udp\"}]`
     */
    "Listeners": string;
}
