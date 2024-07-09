export interface ListManagedRulesRequest {
    /**
     * 规则模板关键字。
     * @example `CDN`
     */
    "Keyword"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 规则模板的风险等级。取值：
     * - 1：高风险。
     * - 2：中风险。
     * - 3：低风险。
     * @example `1`
     */
    "RiskLevel"?: number;
    /**
     * 规则评估的资源类型。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypes"?: string;
}
