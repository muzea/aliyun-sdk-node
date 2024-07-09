export interface ModifyDesktopTimerRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     */
    "DesktopId": string[];
    /**
     * 云电脑定时任务详情。
     */
    "DesktopTimers"?: {
        /**
         * 定时任务类型。
         * @example `TimerBoot`
         */
        TimerType: string;
        /**
         * 定时任务Cron表达式。
         * ><notice>需要传入UTC标准时间，即北京时间每天0点应该传入0 0 16 ? * 1,2,3,4,5,6,7></notice>
         * @example `0 0 16 ? * 1,2,3,4,5,6,7`
         */
        CronExpression: string;
        /**
         * 时间间隔，单位为分钟。
         * @example `10`
         */
        Interval: number;
        /**
         * 是否强制执行。
         * @example `true`
         */
        Enforce: boolean;
        /**
         * 云电脑重置类型。
         * @example `RESET_TYPE_SYSTEM`
         */
        ResetType: string;
        /**
         * 是否允许终端用户自行配置定时任务。
         * @example `true`
         */
        AllowClientSetting: boolean;
        /**
         * 定时任务操作类型，目前仅断连定时任务支持。
         * @example `Shutdown`
         */
        OperationType: string;
    }[];
    /**
     * 是否使用`DesktopTimers`，**需要传入`true`**。
     * @example `true`
     */
    "UseDesktopTimers"?: boolean;
}
