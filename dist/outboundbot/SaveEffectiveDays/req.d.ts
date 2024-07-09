export interface SaveEffectiveDaysRequest {
    /**
     * 实例id
     * @example `e90b5b8e-c8b4-4182-b28d-a5aa81685e49`
     */
    "EntryId": string;
    /**
     * 策略级别
     * @example `2`
     */
    "StrategyLevel"?: number;
    /**
     * 生效时间
     * @example `30`
     */
    "EffectiveDays"?: number;
}
