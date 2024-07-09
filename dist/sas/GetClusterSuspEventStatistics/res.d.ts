export interface GetClusterSuspEventStatisticsResponse {
    /**
     * 按等级区分的告警数量。
     */
    SuspStatistics: {
        /**
         * 等级为紧急的告警数量。
         * @example `1`
         */
        Serious: number;
        /**
         * 等级为可疑的告警数量。
         * @example `2`
         */
        Suspicious: number;
        /**
         * 等级为提醒的告警数量。
         * @example `1`
         */
        Remind: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ACF97412-FD09-4D1F-994F-34DF12BR****`
     */
    RequestId: string;
}
