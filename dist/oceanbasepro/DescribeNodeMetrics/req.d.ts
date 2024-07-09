export interface DescribeNodeMetricsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户 ID。
     * @example `tfafd34fs****`
     */
    "TenantId"?: string;
    /**
     * 监控数据的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "StartTime": string;
    /**
     * 监控数据的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-09-13T15:40:43Z`
     */
    "EndTime": string;
    /**
     * 监控指标项。
     * <props="china">当前可支持的指标及说明请参考 [节点监控数据详情](~~212099~~)。</props>
     * <props="intl">当前可支持的指标及说明请参考 [节点监控数据详情](https://www.alibabacloud.com/help/zh/apsaradb-for-oceanbase/latest/node-statistics)。</props>
     * @example `tps`
     */
    "Metrics": string;
    /**
     * 节点名称。
     * @example `i-bp16niirq4zdmgvm****`
     */
    "NodeName"?: string;
    /**
     * 节点列表。
     * @example `[i-bp16niirq4zdmgvm****,i-bp16n56hq4z4fgvm****]`
     */
    "NodeIdList"?: string;
}
