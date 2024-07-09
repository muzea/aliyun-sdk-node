export interface ListCampaignsResponse {
    /**
     * 请求ID。
     * @example `6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 数据。
     */
    Data: {
        /**
         * 预测式外呼活动列表。
         */
        List: {
            /**
             * 预测式外呼活动实际结束时间，格式为Unix时间戳，单位毫秒。
             * @example `1634008800000`
             */
            ActualEndTime: number;
            /**
             * 预测式外呼活动实际开始时间，格式为Unix时间戳，单位毫秒。
             * @example `1634000460000`
             */
            ActualStartTime: number;
            /**
             * 预测式外呼活动的止呼数量，止呼指取消呼叫联系人。
             * @example `0`
             */
            CasesAborted: number;
            /**
             * 预测式外呼活动的未完成数量，未完成指未接通且未达到最大重试次数。
             * @example `0`
             */
            CasesUncompleted: number;
            /**
             * 预测式外呼活动的接通数量。
             * @example `40`
             */
            CasesConnected: number;
            /**
             * 预测式外呼活动的最大尝试次数，表示当活动的号码呼叫失败时，最多重呼几次。
             * @example `1`
             */
            MaxAttemptCount: number;
            /**
             * 预测式外呼活动的最小重呼间隔，表示失败重呼时的最小间隔，单位秒。
             * @example `1`
             */
            MinAttemptInterval: number;
            /**
             * 预测式外呼活动名称。
             * @example `test-campaign`
             */
            Name: string;
            /**
             * 预测式外呼活动计划结束时间，格式为Unix时间戳，单位毫秒。
             * @example `1634054400000`
             */
            PlanedEndTime: number;
            /**
             * 预测式外呼活动计划开始时间，格式为Unix时间戳，单位毫秒。
             * @example `1633968000000`
             */
            PlanedStartTime: number;
            /**
             * 技能组名称。
             * @example `测试技能组`
             */
            QueueName: string;
            /**
             * 号码总数。
             * @example `100`
             */
            TotalCases: number;
            /**
             * 预测式外呼活动状态。
             * @example `Completed`
             */
            State: string;
            /**
             * 预测式外呼活动ID。
             * @example `6badb397-a8b5-40b6-21019d382a09`
             */
            CampaignId: string;
            /**
             * 预测式外呼活动的策略模式。
             * @example `PACING`
             */
            StrategyType: string;
            /**
             * 预测式外呼活动的策略参数，PID策略下的格式参数示例：{"abandonRate":"5","historicalConnectedRate":"35"}，PACING策略下的格式参数示例：{"ratio":1}。abandonRate表示期望呼损率，historicalConnectedRate表示历史参考接通率，ratio表示固定外呼比例。
             * @example `{"ratio":1}`
             */
            StrategyParameters: string;
            /**
             * 关联的技能组ID。
             * @example `skillgroup@ccc-test`
             */
            QueueId: string;
            /**
             * 是否为模拟活动。
             * @example `false`
             */
            Simulation: boolean;
            /**
             * 完成率，参数已废弃，可以使用(TotalCases-CasesUnCompleted) / TotalCases计算得出
             * @example `无`
             */
            CompletionRate: number;
            ContactFlowId: string;
        }[];
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
    };
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
