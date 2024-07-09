export interface DescribeLatestRecordSchemaRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `c5c88b5e-97ca-435d-8c20-xxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
