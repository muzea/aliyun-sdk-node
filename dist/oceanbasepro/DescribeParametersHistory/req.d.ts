export interface DescribeParametersHistoryRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 参数类型。
     * 当前支持集群（CLUSTER）和租户（TENANT）。
     * @example `TENANT`
     */
    "Dimension": string;
    /**
     * 参数类型的资源标识。
     * 如为集群参数可不填，若为租户的参数，则传入租户的 TenantId。
     * @example `t4qx8****`
     */
    "DimensionValue"?: string;
    /**
     * 参数历史查看的起始时间。
     * @example `2021-06-13 15:40:43`
     */
    "StartTime": string;
    /**
     * 参数历史查看的结束时间。
     * @example `2021-09-13 15:40:43`
     */
    "EndTime": string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber": number;
}
