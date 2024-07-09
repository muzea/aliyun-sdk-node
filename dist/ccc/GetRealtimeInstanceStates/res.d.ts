export interface GetRealtimeInstanceStatesResponse {
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
         * 处于话后处理状态的坐席数量。
         * @example `0`
         */
        WorkingAgents: number;
        /**
         * 当前正在排队的来电的最大排队等待时长。
         * @example `0`
         */
        LongestWaitingTime: number;
        /**
         * 在线坐席数量（包括就绪，小休，通话等非下线状态的坐席）。
         * @example `0`
         */
        LoggedInAgents: number;
        /**
         * 总坐席数。
         * @example `0`
         */
        TotalAgents: number;
        /**
         * 当前正在排队的来电的个数。
         * @example `0`
         */
        WaitingCalls: number;
        /**
         * 处于小休状态的坐席数量。
         * @example `0`
         */
        BreakingAgents: number;
        /**
         * 处于通话状态的坐席数量。
         * @example `0`
         */
        TalkingAgents: number;
        /**
         * 正在IVR中交互的电话的数量。
         * @example `0`
         */
        InteractiveCalls: number;
        /**
         * 处于就绪状态的坐席数量。
         * @example `0`
         */
        ReadyAgents: number;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 各个小休码次数分布列表。
         */
        BreakCodeDetailList: {
            /**
             * 小休码。
             * @example `默认`
             */
            BreakCode: string;
            /**
             * 小休次数。
             * @example `1`
             */
            Count: number;
        }[];
    };
}
