export interface GetCloudMetricLogsRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 查询开始时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1583907780`
     */
    "From": number;
    /**
     * 查询结束时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1583907790`
     */
    "To": number;
    /**
     * 按时间逆序返回日志。
     * 默认值：false。
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * 数据聚合类别。取值范围：
     * - sum：统计和。
     * - avg：平均值。
     * - max：最大值。
     * - min：最小值。
     * 默认不使用聚合。
     * @example `avg`
     */
    "AggregationType"?: string;
    /**
     * 数据聚合间隔。单位：秒。
     * 取值范围：1、10、60、600、3600。
     * 默认值：1。
     * @example `10`
     */
    "AggregationInterval"?: number;
    /**
     * 性能指标的维度。取值范围：
     * - machine： 整机。
     * - process：进程。
     * - network：网络。
     * - disk：磁盘。
     * @example `network`
     */
    "MetricScope"?: string;
    /**
     * 指定过滤条件。JSON格式字符串，包含若干key:value对。key的取值范围：
     * - InstanceId：节点ID。
     * - Hostname：节点主机名称。
     * - NetworkInterface：网络接口名称。
     * - DiskDevice：磁盘设备名称。
     * @example `{"Hostname":"compute000"}`
     */
    "Filter"?: string;
    /**
     * 输出性能指标的类别，多个指标用半角逗号（,）隔开。取值范围：
     * - cpu：CPU。
     * - memory：内存。
     * @example `cpu`
     */
    "MetricCategories"?: string;
}
