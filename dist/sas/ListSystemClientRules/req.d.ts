export interface ListSystemClientRulesRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 系统规则名称。
     * @example `规则****`
     */
    "RuleName"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 系统规则类型。
     */
    "RuleTypes"?: number[];
    /**
     * 操作系统类型。取值：
     * - **2**：Windows
     * - **1**：Linux
     * - **0**：全部
     * @example `0`
     */
    "SystemType"?: number;
    /**
     * 规则聚类ID。
     */
    "AggregationIds"?: number[];
    /**
     * 是否只查询容器镜像。取值：
     * - **0**：否
     * - **1**：是
     * @example `1`
     */
    "IsContainer"?: number;
}
