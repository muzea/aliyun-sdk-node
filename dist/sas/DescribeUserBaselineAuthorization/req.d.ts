export interface DescribeUserBaselineAuthorizationRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.3.4`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
