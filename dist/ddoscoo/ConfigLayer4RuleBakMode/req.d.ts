export interface ConfigLayer4RuleBakModeRequest {
    /**
     * 设置回源模式。取值：
     * - **0**：表示默认回源模式，即DDoS高防将业务流量转发到您调用[CreateNetworkRules](~~157482~~)创建该端口转发规则时指定的源站IP地址。
     * - **1**：表示主备回源模式，即DDoS高防将业务流量转发到您调用[ConfigLayer4RulePolicy](~~312684~~)设置的主源站IP地址或备源站IP地址。
     * @example `1`
     */
    "BakMode": string;
    /**
     * 要设置的端口转发规则。
     * 该参数使用JSON数组转换的字符串表示。JSON数组的每个元素表示一个已创建的端口转发规则。一次最多可以设置1个端口转发规则。
     * > 您可以调用[DescribeNetworkRules](~~157484~~)查询所有已创建的端口转发规则。
     * 每个端口转发规则包含以下字段：
     * - **InstanceId**：String类型，必选，DDoS高防实例的ID。
     * - **Protocol**：String类型，必选，端口转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * @example `[{\"InstanceId\":\"ddosDip-sg-4hr2b3l****\",\"FrontendPort\":2020,\"Protocol\":\"udp\"}]`
     */
    "Listeners": string;
}
