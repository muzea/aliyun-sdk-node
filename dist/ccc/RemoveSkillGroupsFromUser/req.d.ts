export interface RemoveSkillGroupsFromUserRequest {
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
     * 取消关联的技能组ID列表，格式为JSON数组的字符串，数组元素是技能组ID。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SkillGroupIdList": string;
}
