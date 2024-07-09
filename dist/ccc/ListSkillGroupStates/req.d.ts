export interface ListSkillGroupStatesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组ID列表。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SkillGroupIds"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize"?: number;
}
