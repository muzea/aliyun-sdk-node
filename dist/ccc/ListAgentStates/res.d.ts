export interface ListAgentStatesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-300。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 列表。
         */
        List: {
            /**
             * 座席登录名。
             * @example `agent`
             */
            LoginName: string;
            /**
             * 坐席分机号。
             * @example `8030****`
             */
            Dn: string;
            /**
             * 坐席状态持续时长。
             * @example `10`
             */
            StateDuration: string;
            /**
             * 坐席状态。
             * @example `Ready`
             */
            State: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AgentId: string;
            /**
             * 座席名称。
             * @example `坐席小王`
             */
            AgentName: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 小休码。
             * @example `Warm-up`
             */
            BreakCode: string;
            /**
             * 坐席是否处于仅外呼模式。
             * @example `false`
             */
            OutboundScenario: boolean;
        }[];
    };
}
