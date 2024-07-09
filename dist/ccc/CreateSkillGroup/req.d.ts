export interface CreateSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组名称，长度为1-64个字符，可以包含数字、字母、下划线（_）、短横线（-），必须以字母开头。
     * @example `skillgroup`
     */
    "Name": string;
    /**
     * 技能组展示名，长度为1-64个字符。
     * @example `测试技能组`
     */
    "DisplayName": string;
    /**
     * 技能组的描述，非必填，不填默认为空。
     * @example `云呼叫中心的测试技能组。`
     */
    "Description"?: string;
    /**
     * 媒体类型，默认是语音(AUDIO), 其他可选参数包括CHAT和VIDEO。
     * @example `CHAT`
     */
    "MediaType"?: string;
}
