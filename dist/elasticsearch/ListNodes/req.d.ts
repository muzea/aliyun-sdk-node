export interface ListNodesRequest {
    /**
     * 返回结果的分页数。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页的结果数。
     * @example `10`
     */
    "size"?: number;
    /**
     * ECS实例ID列表。
     * @example `i-bp1ei8ysh7orb6eq****`
     */
    "ecsInstanceIds"?: string;
    /**
     * ECS实例名称。
     * @example `test`
     */
    "ecsInstanceName"?: string;
    /**
     * ECS实例的标签信息。必须包含标签键（tagKey）和标签值（tagValue）。
     * @example `[{"tagKey":"abc","tagValue":"xyz"}]`
     */
    "tags"?: string;
    /**
     * 采集器ID。
     * @example `ct-cn-l871nd0u73c45****`
     */
    "ResId": string;
}
