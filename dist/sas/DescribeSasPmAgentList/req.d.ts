export interface DescribeSasPmAgentListRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 要查询的服务器的UUID。多个UUID之间使用半角逗号（,）分隔。
     * @example `inet-cb7ae5ee-b2bc-4581-b616-62495f5d****,inet-37cf0e4f-55cc-4b84-8073-b348b4b4****`
     */
    "Uuids": string;
}
