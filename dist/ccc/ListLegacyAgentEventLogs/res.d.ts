export interface ListLegacyAgentEventLogsResponse {
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
     * @example `2802EE59-3B53-513A-A130-85E480AF689D`
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
         * 分页序号，范围1-1000。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-1000。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 坐席事件日志列表
         */
        List: {
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            TargetSelect: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            TargetRequest: string;
            /**
             * 统计时刻。
             * @example `2021-12-03T10:15:30`
             */
            StatisticDate: string;
            /**
             * 坐席分机号。
             * @example `8012****`
             */
            PhoneNo: string;
            /**
             * 坐席签入的技能组ID列表，多个技能组ID用逗号分割。
             * @example `skillgroup1@ccc-test,skillgroup2@ccc-test`
             */
            GroupNo: string;
            /**
             * 事件类型。
             * @example `拨号`
             */
            Event: string;
            /**
             * 话务通道ID。
             * @example `345467****`
             */
            ConnId: string;
            /**
             * 通话类型。
             * @example `呼入`
             */
            CallType: string;
            /**
             * 通话ID。
             * @example `378654****`
             */
            CallId: string;
            /**
             * 主叫号码。
             * @example `08331111****`
             */
            CallerId: string;
            /**
             * 被叫号码。
             * @example `1312343****`
             */
            CalleeId: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AgentNo: string;
            /**
             * 是否为坐席挂机。
             * @example `false`
             */
            AgentDropCall: string;
            /**
             * 转接号码。
             * @example `07518888****`
             */
            TransferNumber: string;
            /**
             * 呼叫方向。
             * @example `内部`
             */
            CallDir: string;
            /**
             * 通话模式。
             * @example `呼入`
             */
            CallMode: string;
            /**
             * 租户ID。
             * @example `acc101`
             */
            TenantId: string;
            /**
             * 坐席是否为仅外呼模式。
             * @example `false`
             */
            OutboundScenario: boolean;
        }[];
    };
}
