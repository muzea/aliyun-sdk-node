export interface BatchModifyInstanceStatusRequest {
    /**
     * 剧本的UUID，如果操作多个剧本，UUID以逗号分隔。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `8baa6cff-319e-4ede-97bc-1xxxxxx,s8df2e-s8dfs-xxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本启动停止状态：
     * - **0**：表示停止剧本
     * - **1**：表示启用剧本
     * @example `1`
     */
    "Active": number;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
