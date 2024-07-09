export interface GetMetricsRequest {
    /**
     * 指标保存的云监控的空间。
     * @example `acs_pai_dsw`
     */
    "Namespace"?: string;
    /**
     * DSW 实例 ID。
     * @example `dsw-328d2bbf605*****`
     */
    "InstanceId"?: string;
    /**
     * 请求参数。
     * @example `{"userId":"16122852825*****","jobId":"dsw-328d2bbf605*****","regionId":"cn-wulanchabu","pod":"dsw-45680-76766f8778-95gxh"}`
     */
    "Dimensions"?: string;
    /**
     * 每一页显示的最大记录数，不超过1440。
     * @example `10`
     */
    "Length"?: string;
    /**
     * 截止时间，默认是当前。
     * @example `2020-11-08T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 时间间隔。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 分页游标标识。
     * @example `15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****`
     */
    "NextToken"?: string;
    /**
     * 监控指标的名字。
     * @example `INSTANCE_SPEC_MEMORY_SWAP`
     */
    "MetricName"?: string;
    /**
     * 起始时间，默认是1小时前。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
}
