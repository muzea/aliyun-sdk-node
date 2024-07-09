export interface ListSkillGroupSummaryReportsSinceMidnightResponse {
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
     * @example `2B36CEBC-6D11-5451-9E6B-C6D1927841C5`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据。
     */
    PagedSkillGroupSummaryReport: {
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
         * @example `3`
         */
        TotalCount: number;
        /**
         * 技能组概览数据列表。
         */
        List: {
            /**
             * 统计打点时刻。
             * @example `2018-09-13 00:00:00`
             */
            Timestamp: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 技能组名称。
             * @example `测试技能组`
             */
            SkillGroupName: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 整体指标。
             */
            Overall: {
                /**
                 * 总登录时长，单位秒。
                 * @example `0`
                 */
                TotalLoggedInTime: number;
                /**
                 * 总通话时长，单位秒。
                 * @example `0`
                 */
                TotalTalkTime: number;
                /**
                 * 座席利用率，单位%。
                 * @example `0`
                 */
                OccupancyRate: number;
                /**
                 * 总话后处理时长，单位秒。
                 * @example `0`
                 */
                TotalWorkTime: number;
                /**
                 * 最大话后处理时长，单位秒。
                 * @example `0`
                 */
                MaxWorkTime: number;
                /**
                 * 平均话后处理时长，单位秒。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 平均通话时长，单位秒。
                 * @example `0`
                 */
                AverageTalkTime: number;
                /**
                 * 满意度指数，即满意度按键数字（1位数字）的平均值。
                 * @example `0`
                 */
                SatisfactionIndex: number;
                /**
                 * 满意度调查发送次数。
                 * @example `0`
                 */
                SatisfactionSurveysOffered: number;
                /**
                 * 满意度调查响应次数。
                 * @example `0`
                 */
                SatisfactionSurveysResponded: number;
                /**
                 * 最大空闲时长，单位为秒。
                 * @example `0`
                 */
                MaxReadyTime: number;
                /**
                 * 平均空闲时长，单位为秒。
                 * @example `0`
                 */
                AverageReadyTime: number;
                /**
                 * 总小休时长，单位秒。
                 * @example `0`
                 */
                TotalBreakTime: number;
                /**
                 * 总空闲时长，单位为秒。
                 * @example `0`
                 */
                TotalReadyTime: number;
                /**
                 * 最大通话时长，单位秒。
                 * @example `0`
                 */
                MaxTalkTime: number;
                /**
                 * 总电话量。计算公式为：CallsOffered + CallsDialed。
                 * @example `0`
                 */
                TotalCalls: number;
            };
            /**
             * 呼入指标。
             */
            Inbound: {
                /**
                 * 平均振铃时长，单位秒。
                 * @example `0`
                 */
                AverageRingTime: number;
                /**
                 * 应答量，即坐席应答的次数。一通电话每次进入队列后，若被多个坐席应答，算一次。
                 * @example `0`
                 */
                CallsHandled: number;
                /**
                 * 总话后处理时长，单位秒。
                 * @example `0`
                 */
                TotalWorkTime: number;
                /**
                 * 最大话后处理时长，单位秒。
                 * @example `0`
                 */
                MaxWorkTime: number;
                /**
                 * 队列最大等待时间，单位秒。
                 * @example `0`
                 */
                QueueMaxWaitTimeDuration: number;
                /**
                 * 平均话后处理时长，单位秒。计算公式为： TotalWorkTime/CallsHandled。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 满意度指数，即满意度按键数字（1位数字）的平均值。
                 * @example `0`
                 */
                SatisfactionIndex: number;
                /**
                 * 坐席接起时队列等待时间，单位秒。
                 * @example `0`
                 */
                AnsweredByAgentOfQueueWaitTimeDuration: number;
                /**
                 * 总振铃时长，单位秒。
                 * @example `0`
                 */
                TotalRingTime: number;
                /**
                 * 技能组呼入次数。
                 * @example `0`
                 */
                InComingQueueOfQueueCount: number;
                /**
                 * 总通话时长，单位秒。
                 * @example `0`
                 */
                MaxTalkTime: string;
                /**
                 * 最大振铃时长，单位秒。
                 * @example `0`
                 */
                MaxRingTime: number;
                /**
                 * 总通话时长，单位秒。
                 * @example `0`
                 */
                TotalTalkTime: number;
                /**
                 * 分配量，即分配给该技能组的电话数量。
                 * @example `0`
                 */
                CallsOffered: number;
                /**
                 * 技能组排队放弃次数。
                 * @example `0`
                 */
                AbandonedInQueueOfQueueCount: number;
                /**
                 * 技能组排队超时次数。
                 * @example `0`
                 */
                OverFlowInQueueOfQueueCount: number;
                /**
                 * 坐席接起时队列最大等待时间。
                 * @example `0`
                 */
                AnsweredByAgentOfQueueMaxWaitTimeDuration: number;
                /**
                 * 20秒应答率，单位%。
                 * @example `0`
                 */
                ServiceLevel20: number;
                /**
                 * 平均通话时长，单位秒。
                 * @example `0`
                 */
                AverageTalkTime: number;
                /**
                 * 技能组转人工接起次数。
                 * @example `0`
                 */
                AnsweredByAgentOfQueueCount: number;
                /**
                 * 满意度调查发送次数。
                 * @example `0`
                 */
                SatisfactionSurveysOffered: number;
                /**
                 * 应答率。计算公式为：CallsHandled/CallsOffered（由于应答事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
                 * @example `0`
                 */
                HandleRate: number;
                /**
                 * 满意度调查响应次数。
                 * @example `0`
                 */
                SatisfactionSurveysResponded: number;
                /**
                 * 技能组振铃放弃次数。
                 * @example `0`
                 */
                GiveUpByAgentOfQueueCount: number;
                /**
                 * 队列等待时间。
                 * @example `0`
                 */
                QueueWaitTimeDuration: number;
                /**
                 * 等待20s内坐席接起次数。
                 * @example `0`
                 */
                CallsServiceLevel20: number;
                /**
                 * 等待30s内坐席接起次数。
                 * @example `0`
                 */
                CallsServiceLevel30: number;
                /**
                 * 等待10s内坐席接起次数。
                 * @example `0`
                 */
                CallsServiceLevel10: number;
                /**
                 * 咨询转出量。若一通电话多次转出给其他坐席，每次转出算一次。
                 * @example `0`
                 */
                CallsAttendedTransferOut: number;
                /**
                 * 直接转出量。若一通电话多次转出给其他坐席，每次转出算一次。
                 * @example `0`
                 */
                CallsBlindTransferOut: number;
                CallsQueuingTimeout: number;
                CallsTimeout: number;
                CallsQueuingCanceled: string;
                CallsQueuingFailure: string;
                CallsQueuingRerouted: string;
                CallsAbandoned: number;
                CallsOverflow: string;
            };
            /**
             * 呼出指标。
             */
            Outbound: {
                /**
                 * 总通话时长，单位秒。
                 * @example `0`
                 */
                TotalTalkTime: number;
                /**
                 * 最大拨号时长，单位秒。
                 * @example `0`
                 */
                MaxDialingTime: number;
                /**
                 * 拨号量。
                 * @example `0`
                 */
                CallsDialed: number;
                /**
                 * 电话接通量。
                 * @example `0`
                 */
                CallsAnswered: number;
                /**
                 * 接通率，单位%。
                 * @example `0`
                 */
                AnswerRate: number;
                /**
                 * 总话后处理时长，单位秒。
                 * @example `0`
                 */
                TotalWorkTime: number;
                /**
                 * 最大话后处理时长，单位秒。
                 * @example `0`
                 */
                MaxWorkTime: number;
                /**
                 * 总拨号时长，单位秒。
                 * @example `0`
                 */
                TotalDialingTime: number;
                /**
                 * 平均通话时长，单位秒。
                 * @example `0`
                 */
                AverageTalkTime: number;
                /**
                 * 平均话后处理时长，单位秒。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 满意度指数，即满意度按键数字（1位数字）的平均值。
                 * @example `0`
                 */
                SatisfactionIndex: number;
                /**
                 * 满意度调查发送次数。
                 * @example `0`
                 */
                SatisfactionSurveysOffered: number;
                /**
                 * 满意度调查响应次数。
                 * @example `0`
                 */
                SatisfactionSurveysResponded: number;
                /**
                 * 最大通话时长，单位秒。
                 * @example `0`
                 */
                MaxTalkTime: number;
                /**
                 * 平均拨号时长，单位秒。
                 * @example `0`
                 */
                AverageDialingTime: number;
                /**
                 * 等待30s内坐席接起次数。
                 * @example `0`
                 */
                CallsServiceLevel30: string;
                CallsOffered: number;
                CallsAbandoned: number;
                CallsQueuingTimeout: number;
                CallsQueuingOverflow: number;
                CallsQueuingFailed: number;
                CallsQueuingRerouted: number;
                CallsQueuingCancelled: number;
                CallsQueuingFailure: number;
                TotalWaitTime: number;
                CallsAgentHandled: number;
                CallsServiceLevel30V2: number;
            };
        }[];
    };
}
