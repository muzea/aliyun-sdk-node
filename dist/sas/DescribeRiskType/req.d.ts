export interface DescribeRiskTypeRequest {
    /**
     * 访问源IP地址。
     * @example `192.168.X.X`
     */
    "SourceIp"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 数据来源。取值：
     * - **default**：主机基线
     * - **agentless**：agentless基线
     * @example `agentless`
     */
    "Source"?: string;
}
