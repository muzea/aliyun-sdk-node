export interface RemoveUsersFromSkillGroupRequest {
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
     * 坐席ID列表。
     * @example `["agent1@ccc-test","agent2@ccc-test"]`
     */
    "UserIdList": string;
}
