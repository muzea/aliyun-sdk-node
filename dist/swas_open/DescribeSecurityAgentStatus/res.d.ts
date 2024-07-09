export interface DescribeSecurityAgentStatusResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * Agent客户端状态。取值：
     * - pause：暂停保护
     * - online：保护中
     * - offline：未受保护
     * @example `online`
     */
    ClientStatus: string;
}
