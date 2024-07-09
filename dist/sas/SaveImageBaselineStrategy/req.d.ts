export interface SaveImageBaselineStrategyRequest {
    /**
     * 基线子项列表。
     * >调用[DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~)接口可以获取该参数。
     * @example `ak_leak`
     */
    "BaselineItemList": string;
    /**
     * 基线检查策略ID。
     * >调用[DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~)接口可以获取该参数。
     * @example `8639`
     */
    "StrategyId"?: number;
    /**
     * 基线检查策略的名称。
     * @example `default`
     */
    "StrategyName"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文。
     * - **en**：英文。
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
