export interface DeleteScheduledScalingRuleRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_serverless-cn-vxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 策略名称。
     * > 只有已关闭的策略，或已执行完毕的单次策略，才可以删除。
     * @example `rule-name-test`
     */
    "RuleName": string;
}
