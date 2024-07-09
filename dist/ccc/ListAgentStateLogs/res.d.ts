export interface ListAgentStateLogsResponse {
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
         * 状态开始时间，格式为Unix时间戳，单位毫秒。
         * @example `1620259200000`
         */
        StartTime: number;
        /**
         * 子状态，状态码的补充说明，某些坐席状态由State和StateCode共同标识，例如：监听场景，状态为Talking，子状态为Monitoring。
         * @example `CHECK_IN_BREAK`
         */
        StateCode: string;
        /**
         * 状态持续时长，单位秒。
         * @example `32`
         */
        Duration: number;
        /**
         * 状态码。
         * @example `Break`
         */
        State: string;
        /**
         * 坐席是否为仅外呼状态。
         * @example `false`
         */
        OutboundScenario: boolean;
        /**
         * 小休码。
         * @example `会议`
         */
        BreakCode: string;
        /**
         * 工作模式。
         * @example `ON_SITE`
         */
        WorkMode: string;
    }[];
}
