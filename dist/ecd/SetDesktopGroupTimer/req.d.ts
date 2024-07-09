export interface SetDesktopGroupTimerRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-dbdkfmh883****`
     */
    "DesktopGroupId": string;
    /**
     * 定时任务类型。
     * @example `1`
     */
    "TimerType": number;
    /**
     * 定时任务Cron表达式。当`TimerType`设为2、3、4时为必填参数。
     * @example `0 0 9 * * ?`
     */
    "CronExpression"?: string;
    /**
     * 重置类型。
     * @example `1`
     */
    "ResetType"?: number;
    /**
     * 是否强制执行。
     * @example `true`
     */
    "Force"?: boolean;
}
