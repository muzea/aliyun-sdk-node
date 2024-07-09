export interface RemovePhoneNumbersFromSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 号码列表。
     * @example `["0101234****","0105678****"]`
     */
    "NumberList": string;
    /**
     * 技能组ID。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId": string;
}
