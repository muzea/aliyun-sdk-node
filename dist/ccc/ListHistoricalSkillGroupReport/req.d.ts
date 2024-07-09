export interface ListHistoricalSkillGroupReportRequest {
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize": number;
    /**
     * 待查询的技能组ID列表，格式为JSON数组的字符串，数组元素为技能组ID，非必填，默认为空，表示查询当前分页下的所有技能组。
     * @example `["skillgroup1@ccc-test", "skillgroup2@ccc-test2"]`
     */
    "SkillGroupIdList"?: string;
    /**
     * 获取的历史数据的起始时间，格式为Unix时间戳，单位毫秒，非必填，默认为当天的0时，最早为当前时间往前180天，统计的时间精度为小时，向前取整，闭区间。
     * @example `1532448000000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，格式为Unix时间戳，单位毫秒，非必填，默认为当前时间，统计的时间精度为小时，向后取整，开区间。例如：开始时间为11:12:20，结束时间为11:45:50，则对齐后的入参时间范围为[11:00:00, 12:00:00) ，即大于等于11点，小于12点。
     * @example `1532707199000`
     */
    "EndTime"?: number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    "MediaType"?: string;
}
