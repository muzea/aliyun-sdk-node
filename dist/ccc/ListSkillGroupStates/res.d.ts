export interface ListSkillGroupStatesResponse {
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
     * @example `1F69EBB0-63E9-5DDE-887F-9FC040ADF309`
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
         * 分页大小，范围1-100。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 技能组状态数据列表。
         */
        List: {
            /**
             * 话后处理坐席数量。
             * @example `0`
             */
            WorkingAgents: number;
            /**
             * 在线坐席数量。
             * @example `0`
             */
            LoggedInAgents: number;
            /**
             * 处于小休状态的坐席数量。
             * @example `0`
             */
            BreakingAgents: number;
            /**
             * 最大等待时长。
             * @example `0`
             */
            LongestCall: number;
            /**
             * 当前排队电话个数。
             * @example `0`
             */
            WaitingCalls: number;
            /**
             * 正在通话坐席数。
             * @example `0`
             */
            TalkingAgents: number;
            /**
             * 技能组名称。
             * @example `测试技能组`
             */
            SkillGroupName: string;
            /**
             * 技能组ID。
             * @example `skillgroup1@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 空闲坐席数。
             * @example `1`
             */
            ReadyAgents: number;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 平均等待时长，单位秒。
             * @example `3`
             */
            AverageWaitingTime: number;
            /**
             * 等待时长小于10秒的通话的个数。
             * @example `0`
             */
            WaitingCallsLevel10: number;
            /**
             * 等待时长小于20秒的通话的个数。
             * @example `0`
             */
            WaitingCallsLevel20: number;
            /**
             * 等待时长小于30秒的通话的个数。
             * @example `0`
             */
            WaitingCallsLevel30: number;
            /**
             * 处于仅外呼状态并且空闲的坐席数量。
             * @example `0`
             */
            OutboundScenarioReadyAgents: number;
            /**
             * 呼入场景下通话的坐席数量。
             * @example `0`
             */
            InboundTalkingAgents: number;
            /**
             * 外呼场景下通话的坐席数量。
             * @example `0`
             */
            OutboundTalkingAgents: number;
        }[];
    };
}
