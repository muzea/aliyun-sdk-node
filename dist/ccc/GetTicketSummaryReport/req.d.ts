export interface GetTicketSummaryReportRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单状态。
     * - Processing(处理中)
     * - Withdrawal(已撤回)
     * - Rejected(已退回)
     * - Closed(已关单)
     * @example `无`
     */
    "State"?: string;
    /**
     * 工单类目ID。
     * @example `43c2671b-***-***-86d0-6bd187905cc8`
     */
    "CategoryId"?: string;
    /**
     * 开始时间，基于工单创建时间过滤。
     * @example `1716998400000`
     */
    "StartTime"?: number;
    /**
     * 结束时间，基于工单创建时间过滤。
     * @example `1719590399999`
     */
    "EndTime"?: number;
    /**
     * 创建人ID。
     * @example `creator@ccc-test`
     */
    "Creator"?: string;
    /**
     * 处理者ID(坐席ID或技能组ID)。
     * @example `assignee@ccc-test
    `
     */
    "Assignee"?: string;
    /**
     * 处理者类型。
     * - Agent(坐席)
     * - SkillGroup(技能组)
     * @example `Agent`
     */
    "AssigneeType"?: string;
    /**
     * 参与人ID。
     * @example `participant@ccc-test
    `
     */
    "Participant"?: string;
    /**
     * 分页参数。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize"?: number;
}
