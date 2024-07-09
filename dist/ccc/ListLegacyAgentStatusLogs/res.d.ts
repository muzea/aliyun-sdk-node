export interface ListLegacyAgentStatusLogsResponse {
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
     * @example `4C9A5D93-33A6-57F3-A423-4C83BD0A8455`
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
         * 坐席状态数据列表。
         */
        List: {
            /**
             * 转接号码。
             * @example `07551231****`
             */
            TransferNo: string;
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
             * 坐席状态。
             * @example `振铃`
             */
            Status: string;
            /**
             * 统计时刻。
             * @example `2021-12-03T10:15:30`
             */
            StatisticDate: string;
            /**
             * 状态持续时间，单位秒。
             * @example `3`
             */
            StatisticTime: number;
            /**
             * 坐席分机号。
             * @example `8012****`
             */
            PhoneNo: string;
            /**
             * 被监听号码。
             * @example `8012****`
             */
            MonitedAgentPhoneNo: string;
            /**
             * 监听号码。
             * @example `8032****`
             */
            MonitedAgentNo: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            GroupNo: string;
            /**
             * 话务通道ID。
             * @example `487326****`
             */
            ConnId: string;
            /**
             * 通话类型。
             * @example `呼入`
             */
            CallType: string;
            /**
             * 通话ID。
             * @example `454326****`
             */
            CallId: string;
            /**
             * 主叫号码。
             * @example `08337676****`
             */
            CallerId: string;
            /**
             * 被叫号码。
             * @example `1312121****`
             */
            CalleeId: string;
            /**
             * 呼叫方向。
             * @example `内部`
             */
            CallDir: string;
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
             * 挂断原因。
             * @example `无`
             */
            AliHangupCause: string;
            /**
             * 转接号码。
             * @example `05711231****`
             */
            TransferNumber: string;
            /**
             * 自定义扩展字段。
             * @example `无`
             */
            Extend1: string;
            /**
             * 自定义扩展字段。
             * @example `无`
             */
            Extend2: string;
            /**
             * 自定义扩展字段。
             * @example `无`
             */
            Extend3: string;
            /**
             * 自定义扩展字段。
             * @example `无`
             */
            Extend4: string;
            /**
             * 租户ID。
             * @example `acc6736`
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
