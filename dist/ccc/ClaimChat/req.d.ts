export interface ClaimChatRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 按技能组ID过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId": string;
    /**
     * 话务ID。
     * @example `chat-65382141036853491`
     */
    "JobId": string;
}
