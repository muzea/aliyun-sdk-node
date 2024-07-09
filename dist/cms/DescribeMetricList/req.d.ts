export interface DescribeMetricListRequest {
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
     * 监控数据的统计周期。
     * 取值：15、60、900和3600。
     * 单位：秒。
     * > - 如果不设置统计周期，则按照注册监控项时申请的上报周期来查询监控数据。
     * - 每个云产品的监控项（`MetricName`）的统计周期不同。更多信息，请参见[云产品监控项](~~163515~~)。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 开始时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > - 开始和结束时间执行的是左开右闭的模式，StartTime不能等于或大于EndTime。
     * - StartTime和EndTime之间的间隔小于等于31天。
     * @example `2019-01-30 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 结束时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > StartTime和EndTime之间的间隔小于等于31天。
     *
     * @example `2019-01-30 00:10:00`
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
     * 分页游标标识。
     * >如果不设置该参数，则表示获取第一页的数据。当该参数有返回值时，说明还有下一页，您可以将返回的NextToken作为参数再次请求获得下一页的数据，直到返回为Null为止，表示获取到了所有的数据。
     * @example `15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****`
     */
    "NextToken"?: string;
    /**
     * 每页显示的记录条数，用于分页查询。
     * > 单次请求Length的最大值为1440。
     * @example `1000`
     */
    "Length"?: string;
    /**
     * 查询出的现有结果进行实时计算的表达式。
     * > 目前仅支持groupby，类似数据库的groupby语句。
     * @example `{"groupby":["userId","instanceId"]}`
     */
    "Express"?: string;
}
