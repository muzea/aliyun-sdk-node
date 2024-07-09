export interface DescribeAutoScalingHistoryRequest {
    /**
     * 实例ID。
     * > 当前仅支持RDS MySQL实例。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 查询的弹性伸缩业务种类。当前仅支持**SPEC**，表示仅支持查询自动性能扩展历史信息。
     * @example `SPEC`
     */
    "AutoScalingTaskType": string;
    /**
     * 查询任务的开始时间，格式为Unix时间戳，单位为毫秒。
     * >查询任务的开始时间最大不能早于当前时间45天。
     * @example `1675833788056`
     */
    "StartTime": number;
    /**
     * 查询任务结束时间，格式为Unix时间戳，单位为毫秒。
     * >查询任务结束时间需晚于查询任务开始时间。
     * @example `1676605305796`
     */
    "EndTime": number;
}
