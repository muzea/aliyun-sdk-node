export interface DescribeLogstoreStorageRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 请求来源标识，固定取值为**sas**。
     * @example `sas`
     */
    "From": string;
}
