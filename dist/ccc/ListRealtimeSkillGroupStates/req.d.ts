export interface ListRealtimeSkillGroupStatesRequest {
    /**
     * 待查询数据的技能组ID列表。如果不传，查询当前实例下的所有技能组，格式为JSON数组的字符串，数组元素为技能组ID。
     * @example `["skillgroup1@ccc-test", "skillgroup2@ccc-test"]`
     */
    "SkillGroupIdList"?: string;
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
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    "MediaType"?: string;
}
