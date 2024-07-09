export interface GetEffectiveDaysRequest {
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
}
