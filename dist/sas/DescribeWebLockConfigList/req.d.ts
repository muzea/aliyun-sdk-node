export interface DescribeWebLockConfigListRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.3.4`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定要查询防护配置的服务器的UUID。
     * @example `inet-1234567****`
     */
    "Uuid": string;
}
