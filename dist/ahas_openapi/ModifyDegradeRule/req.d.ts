export interface ModifyDegradeRuleRequest {
    /**
     * 阈值类型，即降级的策略，取值为0时表示按慢调用比例降级，取值为1时表示按异常比例降级。
     * @example `0`
     */
    "Strategy"?: number;
    /**
     * 阈值类型所对应的降级阈值，超过该值时会触发接口的降级。
     * @example `0.5`
     */
    "Threshold"?: number;
    /**
     * 降级规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 熔断时长。在该时间段内，该接口的请求都会快速失败，单位毫秒。
     * @example `2000`
     */
    "RecoveryTimeoutMs"?: number;
    /**
     * 统计窗口时长，单位MS。默认值为1000。
     * @example `2000`
     */
    "StatDurationMs"?: number;
    /**
     * 慢调用RT。请求的响应时间超过该值时统计为慢调用。阈值类型为“慢调用比例”时需设置该字段。
     * @example `3000`
     */
    "SlowRtMs"?: number;
    /**
     * 触发熔断的最小请求数目，若当前统计窗口请求数小于此值，即使达到熔断条件规则也不会触发。默认值为5。
     * @example `10`
     */
    "MinRequestAmount"?: number;
    /**
     * 熔断恢复每步最小通过数目，默认值为5。
     * @example `3`
     */
    "HalfOpenBaseAmountPerStep"?: number;
    /**
     * 熔断恢复阶段数，默认值为1。
     * @example `2`
     */
    "HalfOpenRecoveryStepNum"?: number;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
