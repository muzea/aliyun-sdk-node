export interface DescribeUserMetricsRequest {
    /**
     * 开始时间（秒级时间戳）
     * @example `1567152000`
     */
    "startTime": number;
    /**
     * 结束时间（秒级时间戳）
     * @example `1658110530`
     */
    "endTime": number;
    /**
     * 查询数据类型：
     * - pvCtr
     * - uvCtr
     * @example `pvCtr`
     */
    "metricType": string;
    /**
     * 实例ID
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
}
