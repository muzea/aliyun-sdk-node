export interface ListSkillGroupSummaryReportsSinceMidnightRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 待查询的技能组ID列表，格式为JSON数组的字符串，数组元素为技能组ID，非必填，默认为空，表示查询当前分页下的所有技能组。
     * @example `["skillgroup1@ccc-test", "skillgroup2@ccc-test2"]
    `
     */
    "SkillGroups"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
}
