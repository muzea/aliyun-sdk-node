export interface ListTicketsRequest {
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单ID。
     * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb`
     */
    "TicketId"?: string;
    /**
     * 工单标题。
     * @example `标题`
     */
    "Title"?: string;
    /**
     * 工单状态。
     * @example `Processing`
     */
    "State"?: string;
    /**
     * 工单类目ID。
     * @example `43c2671b-****-4223-86d0-6bd187905cc8`
     */
    "CategoryId"?: string;
    /**
     * 创建者。
     * @example `creator@cccV2-kmz`
     */
    "Creator"?: string;
    /**
     * 开始时间，基于工单创建时间过滤。
     * @example `1646841600000`
     */
    "StartTime"?: number;
    /**
     * 结束时间，基于工单创建时间过滤。
     * @example `1646928000000`
     */
    "EndTime"?: number;
    /**
     * 客户ID，联络中心客户资料ID。
     * @example `51e155ce-3747-*****-b402-13c69597b920`
     */
    "CustomerId"?: string;
    /**
     * 话务ID列表。
     * @example `["job-12******","job-23****"]`
     */
    "JobIdList"?: string;
    /**
     * 处理者ID。
     * @example `assignee@cccV2-kmz
    `
     */
    "Assignee"?: string;
    /**
     * 处理者类型。
     * @example `Agent`
     */
    "AssigneeType"?: string;
    /**
     * 参与人ID。
     * @example `participant@cccV2-kmz
    `
     */
    "Participant"?: string;
}
