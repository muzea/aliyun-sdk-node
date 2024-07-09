export interface PickOutboundNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 被叫号码。
     * @example `1388888****`
     */
    "CalledNumber": string;
    /**
     * 希望返回的可选号码数量， 默认1。
     * @example `1`
     */
    "Count"?: number;
    /**
     * 技能组ID集合，格式为JSON数组的字符串，数组元素是技能组ID，号码与技能组是关联的，此参数用于指定从哪些技能组挑选号码。
     * @example `["skillgroup@ccc-test"]`
     */
    "SkillGroupIdList": string;
}
