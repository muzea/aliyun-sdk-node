export interface GetSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组ID，格式为：技能组名称@实例ID。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId": string;
}
