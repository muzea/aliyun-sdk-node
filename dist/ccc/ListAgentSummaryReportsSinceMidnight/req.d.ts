export interface ListAgentSummaryReportsSinceMidnightRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 按技能组ID过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
    /**
     * 按坐席ID列表过滤，范围0-100 。
     * > 如果坐席ID列表不为空，则直接按照坐席ID列表进行查询，此时pageSize和pageNumber参数无效，数据直接返回，如：请求参数：pageNumber = 3 则响应参数中pageNumber = 3 。
     * @example `["agent1@ccc-test", "agent2@ccc-test"]`
     */
    "AgentIds"?: string;
    /**
     * 分页序号，范围1-100，非必填，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-100，非必填，默认10。
     * @example `10`
     */
    "PageSize"?: number;
}
