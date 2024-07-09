export interface CreateCustomizedDictRequest {
    /**
     * 访问源的IP地址。
     * @example `106.11.43.***`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
