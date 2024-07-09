export interface ListOutboundNumbersOfUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
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
     * 签入技能组ID列表，非必填，默认为空，表示查询UserId归属的所有技能组的外呼号码，如果有值，则查询该值指定的技能组下的外呼号码。注意，此处传入的技能组ID必须是UserId所在的技能组的ID。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SkillGroupIdList"?: string;
}
