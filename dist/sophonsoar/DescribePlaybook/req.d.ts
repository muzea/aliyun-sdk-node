export interface DescribePlaybookRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `9030076b-6733-4842-b05a-xxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 剧本配置的MD5值。
     * @example `7a8f608dc64c242632aa578xxxxx`
     */
    "TaskflowMd5"?: string;
    /**
     * 线上版本与调试版本的标记，取值：
     * - **1**：表示获取调试版本
     * - **0**：表示获取线上发布版本
     * @example `0`
     */
    "DebugFlag"?: number;
}
