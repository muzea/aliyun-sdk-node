export interface GetHistoricalInstanceReportRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 获取的历史数据的起始时间，格式为Unix时间戳，单位毫秒，非必填，默认为当天的0时，最早为当前时间往前180天，统计的时间精度为小时，向前取整，闭区间。
     * @example `1532448000000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，格式为Unix时间戳，单位毫秒，非必填，默认为当前时间，统计的时间精度为小时，向后取整，开区间。例如：开始时间为11:12:20，结束时间为11:45:50，则对齐后的入参时间范围为[11:00:00,12:00:00) ，即大于等于11点，小于12点。
     * @example `1532707199000`
     */
    "EndTime"?: number;
    /**
     * 媒体类型，默认是语音(Audio), 其他可选参数包括Chat和Video.
     * @example `VIDEO`
     */
    "MediaType"?: string;
}
