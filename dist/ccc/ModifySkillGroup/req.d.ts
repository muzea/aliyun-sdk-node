export interface ModifySkillGroupRequest {
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
     * 技能组展示名，长度为1-64个字符。
     * @example `新测试技能组`
     */
    "DisplayName"?: string;
    /**
     * 技能组的描述，非必填，默认为空。
     * @example `云呼叫中心的新测试技能组。`
     */
    "Description"?: string;
}
