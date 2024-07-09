export interface DescribeMetricLastRequest {
    /**
     * 云产品的数据命名空间。
     * 关于云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 云产品的监控项名称。
     * 关于监控项名称，请参见[云产品监控项](~~163515~~)。
     * @example `CPUUtilization`
     */
    "MetricName": string;
    /**
     * 监控数据的统计周期。
     * 取值：15、60、900和3600。
     * 单位：秒。
     * > - 如果不设置统计周期，则按照注册监控项时申请的上报周期来查询监控数据。
     *     - 每个云产品的监控项（`MetricName`）的统计周期不同。更多信息，请参见[云产品监控项](~~163515~~)中目标云产品**指标列表**页面中的`Min Periods`列。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 查询监控项的开始时间。
     * @example `2019-01-31 10:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询监控项的结束时间。
     * - 对于秒级数据，查询数据的起始时间是EndTime往前倒推20分钟后与startTime对比的最大值。
     * - 对于分钟级数据，查询数据的起始时间是EndTime往前倒推2小时后与startTime对比的最大值。
     * - 对于小时级数据，查询数据的起始时间是EndTime往前倒推2天后与startTime对比的最大值。
     *
     * @example `2019-01-31 10:10:00`
     */
    "EndTime"?: string;
    /**
     * 指定资源的监控维度。
     * 格式：`key:value`键值对形式的集合，例如：`{"userId":"120886317861****"}`和`{"instanceId":"i-2ze2d6j5uhg20x47****"}`。
     * > 单次请求最多支持批量查询50个实例。
     * @example `[{"instanceId":"i-2ze2d6j5uhg20x47****"}]`
     */
    "Dimensions"?: string;
    /**
     * 分页游标的标识。
     * - 如果匹配查询条件的返回结果超过了分页大小，则会返回这个分页游标。
     * - 如果需要获取下一页数据，将返回的游标值作为请求参数即可，直到无游标值返回，表示已经获取了全部数据。
     * @example `15761432850009dd70bb64cff1f0fff6c0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae****`
     */
    "NextToken"?: string;
    /**
     * 返回监控数据的每页大小，用于分页查询。
     * 默认值：1000，即每页1000条监控数据。
     * > 单次请求Length的最大值为1440。
     * @example `1000`
     */
    "Length"?: string;
    /**
     * 对现有查询结果进行实时计算的表达式。
     * @example `{"groupby":["userId","instanceId"]}`
     */
    "Express"?: string;
}
