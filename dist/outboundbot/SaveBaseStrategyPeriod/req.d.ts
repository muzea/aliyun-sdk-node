export interface SaveBaseStrategyPeriodRequest {
    /**
     * 实例id
     * @example `fe51eca2-a904-4b4d-b3ff-31be334b9500`
     */
    "EntryId": string;
    /**
     * 策略级别
     * @example `2`
     */
    "StrategyLevel"?: number;
    /**
     * 是否为周末
     * @example `false`
     */
    "OnlyWeekdays"?: boolean;
    /**
     * 执行时间
     * @example `[{\"beginTime\":\"09:00:00\",\"beginTimeMillis\":324000000000,\"endTime\":\"21:00:00\",\"endTimeMillis\":756000000000}]`
     */
    "WorkingTimeFramesJson"?: string;
    /**
     * 运行时间
     * @example `[]`
     */
    "WorkingTime"?: string[];
    "OnlyWorkdays"?: boolean;
}
