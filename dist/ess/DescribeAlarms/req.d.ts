export interface DescribeAlarmsRequest {
    /**
     * 报警任务所属地域的ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 报警任务关联的伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId"?: string;
    /**
     * 报警任务ID。
     * @example `asg-bp1hvbnmkl10vll5****_f95ce797-dc2e-4bad-9618-14fee7d1****`
     */
    "AlarmTaskId"?: string;
    /**
     * 报警任务的状态。取值范围：
     * - ALARM：报警，已满足报警条件。
     * - OK：正常，尚未满足报警条件。
     * - INSUFFICIENT_DATA：数据不足，不足以判断是否满足了报警条件。
     * @example `OK`
     */
    "State"?: string;
    /**
     * 报警任务是否启用。取值范围：
     * - true：已启用。
     * - false：已停用。
     * @example `true`
     */
    "IsEnable"?: boolean;
    /**
     * 监控项类型。取值范围：
     * - system：使用云监控系统指标。
     * - custom：使用上报到云监控的自定义指标。
     * @example `system`
     */
    "MetricType"?: string;
    /**
     * 监控项名称。
     * @example `CpuUtilization`
     */
    "MetricName"?: string;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 伸缩规则列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
