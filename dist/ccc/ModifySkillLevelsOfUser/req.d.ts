export interface ModifySkillLevelsOfUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId": string;
    /**
     * 技能组的技能等级列表，格式为JSON数组的字符串，数组元素是一个对象，包含两个字段：skillGroupId和skillLevel，skillGroupId填写想要修改的技能组ID，skillLevel填写想要修改的技能等级，取值范围1-10，值越小，业务能力越强，单位时间内能处理更多的通话。
     * @example `[{"skillGroupId":"skillgroup1@ccc-test","skillLevel":1},{"skillGroupId":"skillgroup2@ccc-test","skillLevel":10}]`
     */
    "SkillLevelList": string;
}
