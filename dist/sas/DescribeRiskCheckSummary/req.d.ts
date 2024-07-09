export interface DescribeRiskCheckSummaryRequest {
    /**
     * 要查询的访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 多账号安全管控的成员账户的AliUid。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: string;
}
