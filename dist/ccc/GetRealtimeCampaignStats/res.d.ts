export interface GetRealtimeCampaignStatsResponse {
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
     * @example `42970829-E2C8-515A-8F42-5A6B59F852A7`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 在线坐席数。
         * @example `10`
         */
        LoggedInAgents: number;
        /**
         * 空闲坐席数。
         * @example `3`
         */
        ReadyAgents: number;
        /**
         * 小休坐席数。
         * @example `1`
         */
        BreakingAgents: number;
        /**
         * 通话中坐席数。
         * @example `4`
         */
        TalkingAgents: number;
        /**
         * 话后处理坐席数。
         * @example `2`
         */
        WorkingAgents: number;
        /**
         * 每秒并发呼叫量，并发指同时呼叫。
         * @example `5`
         */
        Caps: number;
        /**
         * 所有坐席数量。
         * @example `10`
         */
        TotalAgents: number;
        /**
         * 处于仅外呼模式且在空闲状态的坐席数量。
         * @example `1`
         */
        OutboundScenarioReadyAgents: number;
        /**
         * 处于仅外呼模式且在小休状态的坐席数量。
         * @example `1`
         */
        OutboundScenarioBreakingAgents: number;
        /**
         * 处于仅外呼模式且在通话中状态的坐席数量。
         * @example `1`
         */
        OutboundScenarioTalkingAgents: number;
        /**
         * 处于仅外呼模式且在话后处理状态的坐席数量。
         * @example `1`
         */
        OutboundScenarioWorkingAgents: number;
    };
}
