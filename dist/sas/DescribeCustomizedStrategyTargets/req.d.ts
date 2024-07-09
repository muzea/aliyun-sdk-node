export interface DescribeCustomizedStrategyTargetsRequest {
    /**
     * 访问源的ip地址。
     * @example `39.170.43.**`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
}
