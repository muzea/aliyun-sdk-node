export interface GetCampaignResponse {
    /**
     * 请求ID。
     * @example `6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0`
     */
    RequestId: string;
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
     * 数据
     */
    Data: {
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
         * 取消呼叫的联系人数量。
         * @example `0`
         */
        CasesAborted: number;
        /**
         * 未完呼叫的联系人数量。
         * @example `0`
         */
        CasesUncompleted: number;
        /**
         * 已接通的联系人数量。
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
         * 关联的技能组名称。
         * @example `测试技能组`
         */
        QueueName: string;
        /**
         * 联系人总数。
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
         * 是否为模拟活动，用于测试，普通客户无需关心。
         * @example `false`
         */
        Simulation: boolean;
        /**
         * 模拟活动参数，用于测试，普通客户无需关心。
         * @example `无`
         */
        SimulationParameters: string;
        /**
         * 尝试呼叫过但未接通，且未达到最大尝试次数的联系人数量。即经过重试后呼叫成功的联系人。
         * @example `1`
         */
        CasesUncompletedAfterAttempted: number;
        CasesUncompletedAfterAttempt: string;
        CompletionRate: number;
        ContactFlowId: string;
    };
}
