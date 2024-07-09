export interface DescribeStrategyRequest {
    /**
     * 访问源IP地址。
     * @example `1.2.X.X`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的策略的ID。多个ID之间使用半角逗号（,）隔开。
     * @example `8164248`
     */
    "StrategyIds"?: string;
    /**
     * 要查询的策略的类型。取值：
     * - **common**：标准策略
     * - **custom**：自定义策略
     * @example `custom`
     */
    "CustomType"?: string;
}
