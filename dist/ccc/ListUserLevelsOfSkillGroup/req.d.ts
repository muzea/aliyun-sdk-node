export interface ListUserLevelsOfSkillGroupRequest {
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
     * 是否与传入的技能组关联，如果值为true，表示获取SkillgroupId关联的坐席的技能等级列表，如果值为false，表示获取可关联但未关联SkillgroupId的坐席列表。默认值为true。
     * @example `true`
     */
    "IsMember": boolean;
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
     * 根据坐席登录名或坐席展示名进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `测试坐席`
     */
    "SearchPattern"?: string;
}
