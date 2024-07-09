export interface DeleteHoneypotNodeRequest {
    /**
     * 管理节点ID。
     * >调用[ListHoneypotNode](~~ListHoneypotNode~~)接口可以获取该参数。
     * @example `670baeee-86c4-46b9-8200-a2c38141a453`
     */
    "NodeId": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "Lang"?: string;
}
