export interface ListHistoricalAgentReportRequest {
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
     * 坐席ID列表，范围0-100 。
     * > 如果坐席ID列表不为空，则直接按照坐席ID列表进行查询，此时pageSize和pageNumber参数无效，数据直接返回，如：请求参数：pageNumber = 3 则响应参数中pageNumber = 3 。
     * @example `["agent1@ccc-test", "agent2@ccc-test"]`
     */
    "AgentIdList"?: string;
    /**
     * 获取的历史数据的起始时间，默认为当天的0时，最早为当前时间往前180天。统计的时间精度为小时，向前取整，闭区间，格式为Unix时间戳，单位毫秒。
     * @example `1532448000000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，默认为当前时间。统计的时间精度为小时，向后取整，开区间。例如：开始时间为 11:12:20，结束时间为 11:45:50，则对齐后的入参时间范围为 [11:00:00, 12:00:00) ，即大于等于11点，小于12点，格式为Unix时间戳，单位毫秒。
     * @example `1532707199000`
     */
    "StopTime"?: number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 媒体类型，默认是语音(Audio), 其他可选参数包括Chat和Video.
     * @example `VIDEO`
     */
    "MediaType"?: string;
    /**
     * 技能组ID。
     * @example `wwtest@test_yunhu`
     */
    "SkillGroupId"?: string;
}
