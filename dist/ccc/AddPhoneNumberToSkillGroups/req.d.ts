export interface AddPhoneNumberToSkillGroupsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 号码。
     * @example `0101234****`
     */
    "Number": string;
    /**
     * 技能组ID列表。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SkillGroupIdList": string;
}
