export interface ExecStrategyRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 基线检查策略ID。
     * >调用[DescribeStrategy](~~DescribeStrategy~~)接口可以获取该参数。
     * @example `215421`
     */
    "StrategyId"?: number;
}
