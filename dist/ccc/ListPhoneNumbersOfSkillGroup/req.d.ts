export interface ListPhoneNumbersOfSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组ID。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId": string;
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
     * 是否关联技能组，若为true，则查询SkillgroupId关联的号码列表，若为false，则查询SkillgroupId可关联但未关联的号码列表。通常和AddNumbersToSkillGroup接口一起使用。
     * @example `true`
     */
    "IsMember": boolean;
    /**
     * 根据号码进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `0833`
     */
    "SearchPattern"?: string;
    /**
     * 号码是否可用，非必填，默认为空，为空表示不过滤。
     * @example `true`
     */
    "Active"?: boolean;
}
