export interface ListIntervalSkillGroupReportRequest {
    /**
     * 技能组ID。
     * @example `skg-default@ccc-test`
     */
    "SkillGroupId": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 开始时间，格式为Unix时间戳，单位毫秒，非必填，默认为当天的0时，统计的时间精度为小时，向前取整，闭区间。
     * @example `1604639129000`
     */
    "StartTime"?: number;
    /**
     * 截止时间，格式为Unix时间戳，单位毫秒，非必填，默认是当前时间，如果Interval为Daily，StartTime和EndTime最大间隔是180天。如果Interval为Hourly，最大间隔时间为10天。统计的时间精度为小时，向后取整，开区间。例如：开始时间为11:12:20，结束时间为11:45:50，则对齐后的入参时间范围为[11:00:00,12:00:00) ，即大于等于11点，小于12点。
     * @example `1604725528000`
     */
    "EndTime"?: number;
    /**
     * 分段统计类型，默认为Daily（按天汇总）。
     * @example `Hourly`
     */
    "Interval"?: string;
    /**
     * 媒体类型，默认是语音(Audio), 其他可选参数包括Chat和Video.
     * @example `VIDEO`
     */
    "MediaType"?: string;
}
