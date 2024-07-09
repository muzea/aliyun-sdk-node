export interface ModifyUserLevelsOfSkillGroupRequest {
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
     * 坐席技能等级列表，格式为JSON数组的字符串，数组元素是一个对象，包含两个字段：userId和skillLevel，userId填写想要修改的坐席ID，skillLevel填写想要修改的技能等级，取值范围1-10，值越小，业务能力越强，单位时间内能处理更多的通话。
     * @example `[{"userId":"agent1@ccc-test","skillLevel":1},{"userId":"agent2@ccc-test","skillLevel":10}]`
     */
    "UserLevelList": string;
}
