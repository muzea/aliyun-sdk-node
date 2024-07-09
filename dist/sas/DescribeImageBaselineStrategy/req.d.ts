export interface DescribeImageBaselineStrategyRequest {
    /**
     * 基线检测策略ID。
     * @example `8037`
     */
    "StrategyId"?: number;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 数据来源，为空时默认查询镜像基线策略。取值：
     * - **default**：镜像
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
}
