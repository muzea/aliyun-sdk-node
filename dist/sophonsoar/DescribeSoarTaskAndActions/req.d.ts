export interface DescribeSoarTaskAndActionsRequest {
    /**
     * 剧本任务的UUID。
     * @example `1077f2f9-25e8-42d9-bfdf-1528e1313f6d`
     */
    "RequestUuid"?: string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
