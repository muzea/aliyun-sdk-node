export interface AssignUsersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 角色ID，坐席导入成功后在实例中的角色，包括管理员、技能组组长和坐席三种角色。
     * @example `Agent@ccc-test`
     */
    "RoleId": string;
    /**
     * 技能组的技能等级列表，格式为JSON数组的字符串，数组元素是一个对象，包含两个字段：skillGroupId和skillLevel，skillGroupId填写坐席想要关联的技能组ID，skillLevel填写坐席在该技能组的技能等级，取值范围1-10，值越小，业务能力越强，单位时间内能处理更多的通话。
     * @example `[{"skillGroupId":"skillgroup@ccc-test","skillLevel":5}]`
     */
    "SkillLevelList"?: string;
    /**
     * 待添加的RAM用户ID列表。
     * @example `["28036411123456****","29234301123456****"]`
     */
    "RamIdList": string;
    /**
     * 工作模式。
     * @example `ON_SITE`
     */
    "WorkMode": string;
}
