export interface DescribeUserLayoutAuthorizationRequest {
    /**
     * 访问源的IP地址。
     * @example `59.82.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
