export interface ConfigNetworkRulesRequest {
    /**
     * 端口转发规则的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **InstanceId**：String类型，必选，DDoS高防实例ID。
     * - **Protocol**：String类型，必选，转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * - **BackendPort**：Integer类型，必选，源站端口。
     * - **RealServers**：JSON数组类型，必选，源站IP地址列表。最多支持20个IP地址。
     * > 编辑端口转发规则时，只可以修改**RealServers**，即源站IP地址。
     * @example `[{"InstanceId":"ddoscoo-cn-mp91j1ao****","Protocol":"tcp","FrontendPort":8080,"BackendPort":8080,"RealServers":["1.1.1.1","2.2.2.2","3.3.3.3"]}]`
     */
    "NetworkRules": string;
}
