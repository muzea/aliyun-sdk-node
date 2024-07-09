export interface AddUsersToSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组ID。
     * @example `test1@ccc-test`
     */
    "SkillGroupId": string;
    /**
     * 坐席技能组等级列表，格式为JSON数组的字符串，数组元素是一个对象，包含两个字段，userId和skillLevel，userId为待添加的坐席ID，skillLevel为该坐席加入技能组后的技能等级，技能等级为1-10，值越小，服务能力越强，单位时间内能处理更多的通话。
     * @example `[{"userId":"agent1@ccc-test","skillLevel":10},{"userId":"agent2@ccc-test","skillLevel":10}]`
     */
    "UserSkillLevelList": string;
}
