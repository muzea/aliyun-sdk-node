export interface DescribePolicyBindingsRequest {
    /**
     * 获取下一页策略与数据源关联所需的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数。
     * 取值范围：10~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 策略ID。
     * @example `po-000************hky`
     */
    "PolicyId"?: string;
    /**
     * 数据源ID列表。
     */
    "DataSourceIds"?: string[];
    /**
     * 数据源类型。取值范围：
     * * **UDM_ECS**：表示ECS整机备份。
     * @example `UDM_ECS`
     */
    "SourceType"?: string;
    /**
     * 查询过滤器。
     */
    "Filters"?: {
        /**
         * 查询过滤器中的键值。取值包括：
         * - **PolicyId**：备份策略ID
         * - **DataSourceId**：ECS实例ID
         * - **DataSourceType**：数据源类型
         * @example `DataSourceType`
         */
        Key: string;
        /**
         * 匹配方式。默认为IN。即过滤器中Key和Value支持的匹配操作（Operator）方式，取值包括：
         * - **EQUAL**：等于
         * - **NOT_EQUAL**：不等于
         * - **GREATER_THAN**：大于
         * - **GREATER_THAN_OR_EQUAL**：大于等于
         * - **LESS_THAN**：小于
         * - **LESS_THAN_OR_EQUAL**：小于等于
         * - **BETWEEN**：区间，value为JSON数组`[下届,上届]`。
         * - **IN**：在集合中，value为数组。
         * @example `IN`
         */
        Operator: string;
        /**
         * 查询过滤器中的待匹配的值。
         */
        Values: string[];
    }[];
}
