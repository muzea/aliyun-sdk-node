export interface DeleteStrategyRequest {
    /**
     * 访问源的IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要删除的策略的ID。
     * @example `1404656`
     */
    "Id": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
