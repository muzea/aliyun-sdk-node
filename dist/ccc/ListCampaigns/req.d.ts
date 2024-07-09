export interface ListCampaignsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 按预测式外呼活动状态过滤，非必填，默认为空。
     * @example `Draft`
     */
    "State"?: string;
    /**
     * 按预测式外呼活动名称过滤，不支持模糊匹配，非必填，默认为空，表示不过滤。
     * @example `test-campaign`
     */
    "Name"?: string;
    /**
     * 外呼活动计划开始时间，非必填，默认查询所有时间范围。
     * @example `2021-10-14 00:00:00`
     */
    "PlanedStartTimeFrom"?: string;
    /**
     * 外呼活动计划结束时间，非必填，默认查询所有时间范围。
     * @example `2021-10-14 20:59:59`
     */
    "PlanedStartTimeTo"?: string;
    /**
     * 外呼活动实际开始时间，非必填，默认查询所有时间范围。
     * @example `2021-10-14 20:59:59`
     */
    "ActualStartTimeFrom"?: string;
    /**
     * 外呼活动实际结束时间，非必填，默认查询所有时间范围。
     * @example `2021-10-14 20:59:59`
     */
    "ActualStartTimeTo"?: string;
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
     * 按技能组ID过滤，非必填，默认为空，表示不过滤。
     * @example `skillgroup@ccc-test`
     */
    "QueueId"?: string;
}
