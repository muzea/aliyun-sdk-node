export interface GetInstanceTrendingReportResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `943D8EF3-3321-471F-A104-51C96FCA94D6`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 呼入指标。
         */
        Inbound: {
            /**
             * 分段统计的开始时间点，格式为Unix时间戳，单位毫秒。
             * @example `1604639129000`
             */
            StatsTime: number;
            /**
             * 进入队列的电话数，如果一个电话多次进队列，算一通。
             * @example `0`
             */
            CallsQueued: number;
            /**
             * 振铃放弃量。
             * @example `0`
             */
            CallsAbandonedInRing: number;
            /**
             * 座席应答电话数。一通电话分给多个座席，算一通。
             * @example `0`
             */
            CallsHandled: number;
            /**
             * 总进线量。
             * @example `0`
             */
            TotalCalls: number;
            /**
             * IVR放弃量，即电话进入IVR流程之后在IVR环节放弃。
             * @example `0`
             */
            CallsAbandonedInIVR: number;
            /**
             * 队列放弃量，即电话进入技能组之后在排队环节放弃。
             * @example `0`
             */
            CallsAbandonedInQueue: number;
        }[];
        /**
         * 呼出指标。
         */
        Outbound: {
            /**
             * 分段统计的开始时间点，格式为Unix时间戳，单位毫秒。
             * @example `1604639129000`
             */
            StatsTime: number;
            /**
             * 外呼接通量。
             * @example `0`
             */
            CallsAnswered: number;
            /**
             * 总外呼量。
             * @example `0`
             */
            TotalCalls: number;
        }[];
        /**
         * 整体指标。
         */
        Overall: {
            /**
             * 分段统计的开始时间点，格式为Unix时间戳，单位毫秒。
             * @example `1604639129000`
             */
            StatsTime: number;
            /**
             * 此时间范围内最多同时登录的座席数量。
             * @example `102`
             */
            MaxLoggedInAgents: number;
        }[];
    };
}
