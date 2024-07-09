export interface ModifyScheduledScalingRuleRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *
     * 实例ID。
     * @example `alikafka_serverless-cn-vxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 策略名称。
     * @example `contact-id`
     */
    "RuleName": string;
    /**
     * 启用或禁用定时任务策略。取值范围如下：
     * - **true**：启用。
     * - **false**：禁用。
     * > 如果是单次调度的策略类型，需要保证开始执行时间晚于当前时间30分钟以上，策略才可以置为启用状态。
     * @example `true`
     */
    "Enable": boolean;
}
