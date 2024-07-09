export interface CreateScalingRuleResponse {
    /**
     * 伸缩规则的唯一标识符。
     * @example `ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****`
     */
    ScalingRuleAri: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 伸缩规则的ID，由系统生成，全局唯一。
     * @example `asr-bp1dvirgwkoowxk7****`
     */
    ScalingRuleId: string;
}
