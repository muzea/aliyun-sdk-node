export interface ListHistoricalAgentSkillGroupReportRequest {
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 坐席ID列表，列表大小0-100。
     * @example `["agent1@ccc-test", "agent2@ccc-test"]`
     */
    "AgentIdList"?: string;
    /**
     * 开始时间戳，默认为当天的0时。统计的时间精度为小时，向前取整，闭区间。
     * @example `1634140800000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，格式为Unix时间戳，单位毫秒，非必填，默认为当前时间，统计的时间精度为小时，向后取整，开区间。例如：开始时间为11:12:20，结束时间为11:45:50，则对齐后的入参时间范围为[11:00:00,12:00:00) ，即大于等于11点，小于12点。
     * @example `1620273600000`
     */
    "EndTime"?: number;
    /**
     * 实例ID。
     * @example `ccc-test
    `
     */
    "InstanceId": string;
    /**
     * 技能组ID列表，列表大小0-100。
     * @example `[
          "skg1@ccc-test",
          "skg2@ccc-test"
    ]`
     */
    "SkillGroupIdList"?: string;
    "MediaType"?: string;
}
