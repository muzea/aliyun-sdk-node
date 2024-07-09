export interface ModifyPlaybookInstanceStatusRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `9fcd3829-80ff-4681-be1e-xxxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本的状态标识。取值：
     * - **1**：表示启动剧本。
     * - **0**：表示停止剧本。
     * @example `1`
     */
    "Active": number;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
