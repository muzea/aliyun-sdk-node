export interface ConfigLayer4RulePolicyRequest {
    /**
     * 设置端口转发规则。
     * 该参数使用JSON数组转换的字符串表示。JSON数组的每个元素表示一个已创建的端口转发规则。一次最多可以设置1个端口转发规则。
     * > 您可以调用[DescribeNetworkRules](~~157484~~)查询所有已创建的端口转发规则。
     * 每个端口转发规则包含以下字段：
     * - **InstanceId**：String类型，必选，DDoS高防实例的ID。
     * - **Protocol**：String类型，必选，转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * - **BackendPort**：Integer类型，必选，源站端口。
     * - **PriRealServers**：JSON数组类型，必选，主源站IP地址列表。JSON数组的每个元素表示一个主源站IP地址。最多支持设置20个主源站IP地址。
     *     每个主源站IP地址包含以下字段：
     *     - **RealServer**：String类型，必选，主源站IP地址。
     * - **SecRealServers**：JSON数组类型，必选，备源站IP地址列表。JSON数组的每个元素表示一个备源站IP地址。最多支持设置20个备源站IP地址。
     *     每个备源站IP地址包含以下字段：
     *
     *     - **RealServer**：String类型，必选，备源站IP地址。
     *
     * - **CurrentRsIndex**：Integer类型，必选，要生效的源站类型。取值：
     *     - **1**：表示主源站设置生效（DDoS高防将业务流量转发到主源站IP地址）。
     *     - **2**：表示备源站设置生效（DDoS高防将业务流量转发到备源站IP地址）。
     * @example `[{\"InstanceId\":\"ddosDip-sg-4hr2b3l****\",\"Protocol\":\"udp\",\"FrontendPort\":2020,\"BackendPort\":2022,\"PriRealServers\":[{\"RealServer\":\"192.0.2.1\"},{\"RealServer\":\"192.0.2.2\"}],\"SecRealServers\":[{\"RealServer\":\"192.0.2.3\"},{\"RealServer\":\"192.0.2.4\"}],\"CurrentRsIndex\":1}]`
     */
    "Listeners": string;
}
