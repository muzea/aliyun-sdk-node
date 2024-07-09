export interface SaveMaxAttemptsPerDayRequest {
    /**
     * 实例id
     * @example `c8bf820a-6a8a-47bc-99bf-97593df8faa8`
     */
    "EntryId": string;
    /**
     * 策略级别
     * @example `2`
     */
    "StrategyLevel"?: number;
    /**
     * 每日最大重拨次数
     * @example `5`
     */
    "MaxAttemptsPerDay"?: number;
}
