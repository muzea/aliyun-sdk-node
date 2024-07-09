export interface ListCampaignTrendingReportResponse {
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
     * @example `6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0`
     */
    RequestId: string;
    /**
     * 统计打点数据列表。
     */
    Data: {
        /**
         * 分段统计的打点时间，格式为Unix时间戳，单位毫秒。
         * @example `1634037840000`
         */
        Datetime: number;
        /**
         * 呼叫并发量，即同时在外呼的通话数量。
         * @example `1`
         */
        Concurrency: number;
        /**
         * 通话中的坐席数量。
         * @example `0`
         */
        TalkAgents: number;
        /**
         * 空闲坐席数。
         * @example `2`
         */
        ReadyAgents: number;
        /**
         * 话后处理中的坐席数量。
         * @example `0`
         */
        WorkAgents: number;
        /**
         * 上线的坐席数量。
         * @example `2`
         */
        LoggedInAgents: number;
        /**
         * 小休坐席数。
         * @example `0`
         */
        BreakAgents: number;
        StatsTime: number;
        TalkingAgents: number;
        WorkingAgents: number;
        BreakingAgents: number;
        OutboundScenarioReadyAgents: number;
        OutboundScenarioBreakingAgents: number;
        OutboundScenarioTalkingAgents: number;
        OutboundScenarioWorkingAgents: number;
    }[];
}
