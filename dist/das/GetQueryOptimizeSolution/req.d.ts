export interface GetQueryOptimizeSolutionRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **PolarDBMySQL**
     * - **PostgreSQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * SQL模板ID。
     * 您可调用[GetQueryOptimizeDataStats](~~405261~~)接口查询SQL模板ID。
     * @example `05fecf7e7b3efd123c4d5197035f****`
     */
    "SqlId": string;
    /**
     * 规则ID，具体信息请参见[查询治理](~~290038~~)。
     * @example `LARGE_ROWS_EXAMINED`
     */
    "RuleIds": string;
    /**
     * 实例ID。
     * 您可调用[GetQueryOptimizeDataStats](~~405261~~)接口查询实例ID。
     * @example `rm-bp1o3z6beqpej****`
     */
    "InstanceId"?: string;
}
