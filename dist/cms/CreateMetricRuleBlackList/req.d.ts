export interface CreateMetricRuleBlackListRequest {
    /**
     * 报警黑名单策略的名称。
     * @example `Blacklist-01`
     */
    "Name": string;
    /**
     * 云服务的数据命名空间。
     * 关于云服务的命名空间，请参见[云服务监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 云服务的类型分类。例如：Redis有`kvstore_standard`（标准版）、`kvstore_sharding`（集群版）和`kvstore_splitrw`（读写分离版）等。
     * @example `ecs`
     */
    "Category": string;
    /**
     * 报警黑名单策略的生效范围。取值：
     * - USER（默认值）：报警黑名单策略仅在当前阿里云账号中生效。
     * - GROUP：报警黑名单策略在指定应用分组中生效，您需要选择指定应用分组。
     *   关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `USER`
     */
    "ScopeType"?: string;
    /**
     * 应用分组ID列表。格式为JSON Array。
     * > 仅当`ScopeType`为`GROUP`时，需要设置该参数。
     * @example `["67****","78****"]`
     */
    "ScopeValue"?: string;
    /**
     * 报警黑名单策略生效的开始时间戳。
     * 单位：毫秒。
     * @example `1640237400000`
     */
    "EnableStartTime"?: string;
    /**
     * 报警黑名单策略生效的结束时间戳。
     * 单位：毫秒。
     * @example `1640608200000`
     */
    "EnableEndTime"?: string;
    /**
     * 报警黑名单策略的生效时间范围。
     * - 如果您未设置该参数，则报警黑名单策略永久有效。
     * - 如果您已设置该参数，则黑名单策略仅在指定的时间范围内有效。该参数有以下两种格式示例：
     *     - `03:00-04:59`：本地时间凌晨3点到凌5点（不包含05:00）报警黑名单策略有效。
     *     - `03:00-04:59 UTC+0700`：东7区时间凌晨3点到凌晨5点（不包含05:00）报警黑名单策略有效。
     * @example `03:00-04:59`
     */
    "EffectiveTime"?: string;
    /**
     * 报警黑名单策略中指定云服务的实例列表。
     */
    "Instances": string[];
    /**
     * 实例中的监控指标。
     * - 如果您未设置该参数，则报警黑名单策略应用于指定云服务下的所有监控指标。
     * - 如果您已设置该参数，则黑名单策略仅应用于当前监控指标。
     */
    "Metrics"?: {
        /**
         * 监控指标名称。
         * N的取值范围：1~10。
         * @example `disk_utilization`
         */
        MetricName: string;
        /**
         * 实例的扩展维度信息。例如：`{"device":"C:"}`，表示对云服务器ECS实例下的所有C盘应用黑名单策略。
         * N的取值范围：1~10。
         * @example `{"device":"C:"}`
         */
        Resource: string;
    }[];
}
