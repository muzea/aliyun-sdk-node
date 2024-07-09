export interface DescribeMetricRuleBlackListRequest {
    /**
     * 云服务的数据命名空间。
     * 关于云服务的命名空间，请参见[云服务监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 当前页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的记录条数。
     * 默认值：10。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 查询结果按时间的排序方式。取值：
     * - DESC（默认值）：降序。
     * - ASC：升序。
     * @example `DESC`
     */
    "Order"?: number;
    /**
     * 云服务分类。例如：Redis有`kvstore_standard`（标准版）、`kvstore_sharding`（集群版）和`kvstore_splitrw`（读写分离版）等。
     * @example `ecs`
     */
    "Category"?: string;
    /**
     * 报警黑名单策略的ID列表。
     */
    "Ids"?: string[];
    /**
     * 报警黑名单策略名称。
     * 该参数支持模糊查询。
     * @example `Blacklist-01`
     */
    "Name"?: string;
    /**
     * 报警黑名单策略的生效范围。取值：
     * - USER：报警黑名单策略仅在当前阿里云账号中生效。
     * - GROUP：报警黑名单策略在指定应用分组中生效。
     * @example `USER`
     */
    "ScopeType"?: string;
    /**
     * 报警黑名单策略的启用状态。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "IsEnable"?: boolean;
    /**
     * 报警黑名单策略中的实例ID列表。
     * N的取值范围：0~10。
     */
    "InstanceIds"?: string[];
}
