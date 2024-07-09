export interface DescribeProjectStepMetricRequest {
    /**
     * 项目的 ID。
     * @example `np_dr****`
     */
    "ProjectId": string;
    /**
     * 项目运行步骤的名称，包括 `FULL_TRANSFER`、`INCR_TRANSFER`、`FULL_VERIFIER` 和 `REVERSE_INCR_TRANSFER`。
     * @example `FULL_TRANSFER`
     */
    "StepName": string;
    /**
     * 项目运行步骤对应的指标。<ul><li>`FULL_TRANSFER` 对应的指标包括 RPS、IOPS、SOURCE_READ_TIME、SOURCE_SLICE_TIME 和 SINK_EXECUTE_TIME。 </li><li>`INCR_TRANSFER` 对应的指标包括 DELAY、IOPS、RPS、SINK_COMMIT_TIME 和 SINK_EXECUTE_TIME。 </li><li>`FULL_VERIFIER` 对应的指标包括 FULL_VERIFY_SOURCE_RPS、FULL_VERIFY_SOURCE_READ_IOPS、FULL_VERIFY_DEST_RPS 和 FULL_VERIFY_DEST_READ_IOPS。</li> <li>`REVERSE_INCR_TRANSFER` 对应的指标包括 RPS、IOPS、DELAY、SINK_EXECUTE_TIME 和 SINK_COMMIT_TIME。 </li> </ul>
     * @example `RPS`
     */
    "MetricType": string;
    /**
     * 聚合算子，包括 `AVG`（平均数据折线图）和 `NONE`（瞬时数据折线图）。默认值为 `NONE`。
     * @example `AVG`
     */
    "Aggregator": string;
    /**
     * 开始时间，单位为秒级时间戳。开始时间和结束时间的间隔不低于 1 小时。
     * @example `1689244696`
     */
    "BeginTimestamp": number;
    /**
     * 结束时间，单位为秒级时间戳。结束时间不能晚于当前时间。
     * @example `1689254646`
     */
    "EndTimestamp": number;
    /**
     * 最大查询点数。取值范围： 5~7*24*60，建议值：时间段（单位分钟）/maxPointNum > 5。
     * @example `6`
     */
    "MaxPointNum"?: number;
}
