export interface DescribeMetricRuleBlackListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D63E76CB-29AA-5B9F-88CE-400A6F28D428`
     */
    RequestId: string;
    /**
     * 报警黑名单策略的总条数。
     * @example `1`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 报警黑名单策略列表。
     */
    DescribeMetricRuleBlackList: {
        /**
         * 报警黑名单策略的生效时间范围。
         * @example `00:00-23:59`
         */
        EffectiveTime: string;
        /**
         * 修改报警黑名单策略的时间戳。
         * 单位：毫秒。
         * @example `1665718373000`
         */
        UpdateTime: string;
        /**
         * 创建报警黑名单策略的时间戳。
         * 单位：毫秒。
         * @example `1665714561000`
         */
        CreateTime: string;
        /**
         * 报警黑名单策略的生效范围。取值：
         * - USER：报警黑名单策略仅在当前阿里云账号中生效。
         * - GROUP：报警黑名单策略在指定应用分组中生效。
         * @example `USER`
         */
        ScopeType: string;
        /**
         * 报警黑名单策略的状态。取值：
         * - true：启用。
         * - false：禁用。
         * @example `true`
         */
        IsEnable: boolean;
        /**
         * 云服务的数据命名空间。
         * @example `acs_ecs_dashboard`
         */
        Namespace: string;
        /**
         * 云服务分类。例如：Redis有`kvstore_standard`（标准版）、`kvstore_sharding`（集群版）和`kvstore_splitrw`（读写分离版）等。
         * @example `ecs`
         */
        Category: string;
        /**
         * 报警黑名单策略的开始时间戳。
         * 单位：毫秒。
         * @example `1640608200000`
         */
        EnableEndTime: number;
        /**
         * 报警黑名单策略的名称。
         * @example `Blacklist-01`
         */
        Name: string;
        /**
         * 报警黑名单策略的结束时间戳。
         * 单位：毫秒。
         * @example `1640237400000`
         */
        EnableStartTime: number;
        /**
         * 报警黑名单策略的ID。
         * @example `93514c96-ceb8-47d8-8ee3-93b6d98b****`
         */
        Id: string;
        /**
         * 实例中的监控指标。
         */
        Metrics: {
            /**
             * 实例的扩展维度信息。例如：`{"device":"C:"}`，表示对云服务器ECS实例下的所有C盘应用黑名单策略。
             * @example `[{"device":"C:"}]`
             */
            Resource: string;
            /**
             * 监控指标名称。
             * @example `disk_utilization`
             */
            MetricName: string;
        }[];
        /**
         * 报警黑名单策略中指定云服务的实例列表。
         */
        Instances: string[];
        /**
         * 应用分组ID列表。
         */
        ScopeValue: string[];
    }[];
}
