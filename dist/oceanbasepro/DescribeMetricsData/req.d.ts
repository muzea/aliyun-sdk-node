export interface DescribeMetricsDataRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 查询监控指标数据的起始时间。 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "StartTime": string;
    /**
     * 查询监控指标数据的结束时间。 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "EndTime": string;
    /**
     * 监控指标。<br>多个指标之间用逗号分隔。例如："tps,qps,qps_rt,tps_rt..."。
     * @example `tps`
     */
    "Metrics": string;
    /**
     * 一组 kv 组成的字符串，key、value 之间用逗号分隔，kv 对之间用逗号分隔。例如："app:OB,clusterId:ob*****,tenantId:t******,serverId:*****,zoneId:cn-hangzhou-j"。<br>
     * k 为固定字段：
     * - app：表示应用类型，目前仅支持 OceanBase。
     * - clusterId：表示 OceanBase 集群 ID。
     * - tenantId：表示 OceanBase 租户 ID。
     * - zoneId：表示 ob zone id
     * - serverId：表示 OBServer 节点 ID。
     * @example `app:OB,clusterId:ob***`
     */
    "Labels": string;
    /**
     * 用于分组的字段。多个字段之间用逗号分隔。例如："app,clusterId,tenantId" 。
     * @example `app,clusterId`
     */
    "GroupByLabels": string;
    /**
     * 排序列。
     * @example `tps`
     */
    "SortMetricKey"?: string;
    /**
     * 排序规则。
     * - 升序：ASC。
     * - 降序：DESC。
     * @example `DESC`
     */
    "SortOrder"?: string;
    /**
     * 排序后返回的 Data 数组长度。
     * @example `5`
     */
    "Limit"?: string;
    "ReplicaType"?: string;
}
