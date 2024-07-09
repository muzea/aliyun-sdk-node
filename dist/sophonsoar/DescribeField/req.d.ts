export interface DescribeFieldRequest {
    /**
     * 全局配置的KEY值，取值：
     * - **soar_filed_tags**：可以获取剧本的输入模板。
     * @example `soar_filed_tags`
     */
    "QueryKey": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
