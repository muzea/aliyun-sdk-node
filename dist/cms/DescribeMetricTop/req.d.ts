export interface DescribeMetricTopRequest {
    /**
     * 监控数据的统计周期。
     * 取值：15、60、900和3600。
     * 单位：秒。
     * > - 如果不设置统计周期，则按照注册监控项时申请的上报周期来查询监控数据。
     * - 每个云产品的监控项（`MetricName`）的统计周期不同。更多信息，请参见[云产品监控项](~~163515~~)。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 云产品的数据命名空间。
     * 关于云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 云产品的监控项名称。
     * 关于监控项名称，请参见[云产品监控项](~~163515~~)。
     * @example `cpu_idle`
     */
    "MetricName": string;
    /**
     * 查询监控数据的开始时间。
     * - 当您未设置`StartTime`和`EndTime`时，查询当前时间最近一个统计周期`Period`的监控数据。
     * - 当您同时设置`StartTime`和`EndTime`时，查询指定时间段内距离`EndTime`最近一个统计周期`Period`的监控数据。具体如下：
     *    - 当`Period`设置为15秒时，指定时间段必须小于或等于20分钟。例如：StartTime为2021-05-08 08:10:00，EndTime为2021-05-08 08:30:00，统计距离2021-05-08 08:30:00最近一个15秒的监控数据。
     *    - 当`Period`设置为60秒或900秒时，指定时间段必须小于或等于2小时。例如：Period为60秒，StartTime为2021-05-08 08:00:00，EndTime为2021-05-08 10:00:00，统计距离2021-05-08 10:00:00最近一个60秒的监控数据。
     *    - 当`Period`设置为3600秒时，指定时间段必须小于或等于2天。例如：StartTime为2021-05-08 08:00:00，EndTime为2021-05-10 08:00:00，统计距离2021-05-10 08:00:00最近一个3600秒的监控数据。
     * 开始时间支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > - `StartTime`如果设置过早，则无效。
     * - 建议您使用Unix时间戳，避免时区的问题。
     * @example `2021-05-08 08:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询监控数据的结束时间。
     * - 当您未设置`StartTime`和`EndTime`时，查询当前时间最近一个统计周期`Period`的监控数据。
     * - 当您同时设置`StartTime`和`EndTime`时，查询指定时间段内距离`EndTime`最近一个统计周期`Period`的监控数据。具体如下：
     *    - 当`Period`设置为15秒时，指定时间段必须小于或等于20分钟。例如：StartTime为2021-05-08 08:10:00，EndTime为2021-05-08 08:30:00，统计距离2021-05-08 08:30:00最近一个15秒的监控数据。
     *    - 当`Period`设置为60秒或900秒时，指定时间段必须小于或等于2小时。例如：Period为60秒，StartTime为2021-05-08 08:00:00，EndTime为2021-05-08 10:00:00，统计距离2021-05-08 10:00:00最近一个60秒的监控数据。
     *    - 当`Period`设置为3600秒时，指定时间段必须小于或等于2天。例如：StartTime为2021-05-08 08:00:00，EndTime为2021-05-10 08:00:00，统计距离2021-05-10 08:00:00最近一个3600秒的监控数据。
     * 结束时间支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > 建议您使用Unix时间戳，避免时区的问题。
     *
     * @example `2021-05-08 10:00:00`
     */
    "EndTime"?: string;
    /**
     * 指定资源的监控维度。
     * 格式：`key:value`键值对形式的集合，例如：`{"userId":"120886317861****"}`和`{"instanceId":"i-2ze2d6j5uhg20x47****"}`。
     * > 单次请求最多支持批量查询50个实例。
     * @example `[{"instanceId": "i-2ze2d6j5uhg20x47****"}]`
     */
    "Dimensions"?: string;
    /**
     * 排序字段，即按该字段进行排序。取值：
     * - Average：平均值。
     * - Minimum：最小值。
     * - Maximum：最大值。
     * @example `Average`
     */
    "Orderby": string;
    /**
     * 排序方式。取值：
     * - True：由小到大排序。
     * - False（默认值）：由大到小排序。
     * @example `False`
     */
    "OrderDesc"?: string;
    /**
     * 每页显示的记录条数。
     * 用于分页查询，默认值：10。
     * > 单次请求Length的最大值为1440。
     * @example `10`
     */
    "Length"?: string;
    /**
     * 对查询出的现有结果进行实时计算的表达式。
     * > 目前仅支持`groupby`（类似数据库的groupby语句）。
     * @example `{"groupby":["userId","instanceId"]}`
     */
    "Express"?: string;
}
