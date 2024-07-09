export interface RemovePhoneNumberFromSkillGroupsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 待解绑的号码。
     * @example `0101234****`
     */
    "Number": string;
    /**
     * 待解绑的技能组ID列表，请确保技能组与号码之间原本就存在绑定关系。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SkillGroupIdList": string;
}
