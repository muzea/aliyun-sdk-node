export interface GetHoneypotNodeRequest {
    /**
     * 管理节点ID。
     * >调用[ListHoneypotNode](~~ListHoneypotNode~~)接口可以获取该参数。
     * @example `d3dd3864-4e02-4abd-8b6a-8f5f6fec4715`
     */
    "NodeId": string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
