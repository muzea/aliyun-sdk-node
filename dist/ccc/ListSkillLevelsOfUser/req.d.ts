export interface ListSkillLevelsOfUserRequest {
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
     * 是否与传入的坐席关联，如果值为true，表示获取传入的坐席关联的技能组的技能等级列表，如果值为false，表示获取坐席可关联但未关联的技能组列表。默认值为true。
     * @example `true`
     */
    "IsMember"?: boolean;
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
     * 根据技能组名称或技能组展示名进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `skillgroup`
     */
    "SearchPattern"?: string;
}
