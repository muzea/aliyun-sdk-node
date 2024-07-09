export interface StartDIJobRequest {
    /**
     * 任务ID。
     * @example `11743`
     */
    "DIJobId": number;
    /**
     * 实时同步启动设置。
     */
    "RealtimeStartSettings"?: {
        /**
         * 实时同步起始位点时间戳，单位秒。不填默认为不重置位点。
         * @example `1671516776`
         */
        StartTime: number;
        /**
         * Failover设置。
         */
        FailoverSettings: {
            /**
             * Failover时间区间，单位分钟。
             * @example `10`
             */
            Interval: number;
            /**
             * Failover次数上限。
             * @example `30`
             */
            UpperLimit: number;
        };
    };
    /**
     * 是否强制重跑全部同步步骤。不填默认为不强制重跑。
     * @example `true`
     */
    "ForceToRerun"?: boolean;
}
