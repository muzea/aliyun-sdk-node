export interface AddNumbersToSkillGroupRequest {
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
     * 号码列表，请确保号码已在当前实例下。
     * @example `["0103182****","0102387****"]`
     */
    "NumberList"?: string;
    /**
     * 号码集合列表
     * @example `["38f5b191-b764-45b8-bd93-4b65f839e13a"]`
     */
    "InstNumberGroupIdList"?: string;
}
