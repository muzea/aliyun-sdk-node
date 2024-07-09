export interface ListIntervalAgentSkillGroupReportResponse {
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
     * @example `2778FA12-EDD6-42AA-9B15-AF855072E5E5`
     */
    RequestId: string;
    /**
     * 坐席在对应技能组中的分段统计数据列表。
     */
    Data: {
        /**
         * 时间段的开始时间，格式为Unix时间戳，单位毫秒。
         * @example `1620291600000`
         */
        StatsTime: number;
        /**
         * 呼入指标。
         */
        Inbound: {
            /**
             * 平均振铃时长，单位秒。
             * @example `11`
             */
            AverageRingTime: number;
            /**
             * 应答量，即坐席应答的次数。
             * @example `7`
             */
            CallsHandled: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `85`
             */
            TotalWorkTime: number;
            /**
             * 咨询转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `10`
             */
            CallsAttendedTransferOut: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `100`
             */
            MaxWorkTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `100`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为： TotalWorkTime/CallsHandled。
             * @example `100`
             */
            AverageWorkTime: number;
            /**
             * 直接转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `100`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `100`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量。
             * @example `100`
             */
            CallsRinged: number;
            /**
             * 咨询转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `100`
             */
            CallsAttendedTransferIn: number;
            /**
             * 直接转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `100`
             */
            CallsBlindTransferOut: number;
            /**
             * 总振铃时长，单位秒。
             * @example `100`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `100`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `100`
             */
            MaxRingTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 分配量，即分配给此坐席的电话次数, 包括其他坐席盲转和咨询转给此坐席的电话。
             * @example `100`
             */
            CallsOffered: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `100`
             */
            MaxHoldTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/CallsHandled。
             * @example `100`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0.5`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的次数。
             * @example `100`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `100`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 应答率。计算公式为：CallsHandled/CallsOffered（由于应答事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0.5`
             */
            HandleRate: number;
            /**
             * 满意度调查响应次数。
             * @example `100`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `100`
             */
            AverageHoldTime: number;
            /**
             * Chat会话平均首次响应时长，单位为秒。
             * @example `6`
             */
            AverageFirstResponseTime: number;
            /**
             * Chat会话平均响应时长。
             * @example `18`
             */
            AverageResponseTime: number;
            /**
             * Chat会话中总消息发送量。
             * @example `12`
             */
            TotalMessagesSent: number;
            /**
             * Chat会话中坐席发送的总消息量。
             * @example `8`
             */
            TotalMessagesSentByAgent: number;
            /**
             * Chat会话中客户发送的总消息量。
             * @example `5`
             */
            TotalMessagesSentByCustomer: number;
        };
        /**
         * 呼出指标。
         */
        Outbound: {
            /**
             * 平均振铃时长，单位秒。
             * @example `100`
             */
            AverageRingTime: number;
            /**
             * 拨号量。
             * @example `100`
             */
            CallsDialed: number;
            /**
             * 接通量。
             * @example `100`
             */
            CallsAnswered: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `100`
             */
            TotalWorkTime: number;
            /**
             * 咨询转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `100`
             */
            CallsAttendedTransferOut: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `100`
             */
            MaxWorkTime: number;
            /**
             * 总拨号时长，单位秒。
             * @example `100`
             */
            TotalDialingTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `100`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/CallsDialed。
             * @example `100`
             */
            AverageWorkTime: number;
            /**
             * 直接转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `100`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `100`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量。
             * @example `100`
             */
            CallsRinged: number;
            /**
             * 咨询转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `100`
             */
            CallsAttendedTransferIn: number;
            /**
             * 直接转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `100`
             */
            CallsBlindTransferOut: number;
            /**
             * 总振铃时长，单位秒。
             * @example `100`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `100`
             */
            MaxRingTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 最大拨号时长，单位秒。
             * @example `100`
             */
            MaxDialingTime: number;
            /**
             * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0.5`
             */
            AnswerRate: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `100`
             */
            MaxHoldTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为：TotalTalkTime/CallsAnswered。
             * @example `100`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `100`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的次数。
             * @example `100`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `100`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 满意度调查响应次数。
             * @example `100`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `100`
             */
            AverageHoldTime: number;
            /**
             * 平均拨号时长，单位秒。计算公式为：TotalDialingTime/CallsDialed。
             * @example `100`
             */
            AverageDialingTime: number;
        };
        /**
         * 整体指标。
         */
        Overall: {
            /**
             * 座席利用率。
             * @example `0.4`
             */
            OccupancyRate: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `100`
             */
            TotalWorkTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `100`
             */
            MaxWorkTime: number;
            /**
             * 总保持时长，单位秒。
             * @example `100`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/TotalCalls。
             * @example `100`
             */
            AverageWorkTime: number;
            /**
             * 最大小休时长，单位秒
             * @example `100`
             */
            MaxBreakTime: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `1.4`
             */
            SatisfactionIndex: number;
            /**
             * 最大就绪时长，单位秒。
             * @example `100`
             */
            MaxReadyTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `100`
             */
            MaxTalkTime: number;
            /**
             * 总就绪时长，单位秒。
             * @example `100`
             */
            TotalReadyTime: number;
            /**
             * 最后签出时间，格式是unix时间戳，单位毫秒。
             * @example `1712548421000`
             */
            LastCheckOutTime: number;
            /**
             * 总电话量。计算公式为：CallsOffered + CallsDialed。
             * @example `100`
             */
            TotalCalls: number;
            /**
             * 总登录时长，单位秒。_注意：不包含离线和小休时长_。
             * @example `100`
             */
            TotalLoggedInTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `100`
             */
            MaxHoldTime: number;
            /**
             * 平均小休时长，单位秒。
             * @example `100`
             */
            AverageBreakTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/(CallsAnswered+CallsHandled)。
             * @example `100`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `100`
             */
            SatisfactionRate: number;
            /**
             * 满意度调查发送次数。
             * @example `100`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 入参Interval为Daily才有值，当天的首次上线时间。
             * @example `100`
             */
            FirstCheckInTime: number;
            /**
             * 满意度调查响应次数。
             * @example `100`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/(呼入CallsHold+呼出CallsHold)。
             * @example `100`
             */
            AverageHoldTime: number;
            /**
             * 平均就绪时长，单位秒。计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段。
             * @example `100`
             */
            AverageReadyTime: number;
            /**
             * 总小休时长，单位秒
             * @example `100`
             */
            TotalBreakTime: number;
            /**
             * 小休详情列表。
             */
            BreakCodeDetailList: {
                /**
                 * 小休码。
                 * @example `开会`
                 */
                BreakCode: string;
                /**
                 * 次数。
                 * @example `1`
                 */
                Count: number;
                /**
                 * 时长，单位秒。
                 * @example `100`
                 */
                Duration: number;
            }[];
            /**
             * 总仅外呼时长，单位秒。
             * @example `100`
             */
            TotalOutboundScenarioTime: number;
            /**
             * 总仅外呼空闲时长，单位秒。
             * @example `100`
             */
            TotalOutboundScenarioReadyTime: number;
            /**
             * 总仅外呼在线时长，单位秒。
             * @example `100`
             */
            TotalOutboundScenarioLoggedInTime: number;
            /**
             * 总场外在线时长，单位秒。
             * @example `100`
             */
            TotalOffSiteLoggedInTime: string;
            /**
             * 办公电话在线时长，单位秒
             * @example `100`
             */
            TotalOfficePhoneLoggedInTime: string;
            /**
             * 总场内在线时长，单位秒。
             * @example `100`
             */
            TotalOnSiteLoggedInTime: string;
            /**
             * 入参Interval为Daily才有值，当天的最后下线时间。
             * @example `100`
             */
            LastCheckoutTime: number;
        };
        /**
         * 内部呼叫指标。
         */
        Internal: {
            /**
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 平均通话时长，单位秒。
             * @example `100`
             */
            AverageTalkTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `100`
             */
            MaxTalkTime: number;
            /**
             * 分配量，即分配给此坐席的电话次数, 包括其他坐席盲转和咨询转给此坐席的电话。
             * @example `100`
             */
            CallsOffered: number;
            /**
             * 应答量，即坐席应答的次数。一通电话每次进入队列后，若被多个坐席应答，算一次。
             * @example `100`
             */
            CallsHandled: number;
            /**
             * 已废弃，该字段参考CallsTalked。
             * @example `100`
             */
            CallsTalk: number;
            /**
             * 拨号量。
             * @example `100`
             */
            CallsDialed: number;
            /**
             * 接通量。
             * @example `100`
             */
            CallsAnswered: number;
            /**
             * 参与通话次数。
             * @example `100`
             */
            CallsTalked: number;
        };
        /**
         * 双呼指标。
         */
        Back2Back: {
            /**
             * 拨号量。
             * @example `100`
             */
            CallsDialed: number;
            /**
             * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0.5`
             */
            AnswerRate: number;
            /**
             * 接通量。
             * @example `100`
             */
            CallsAnswered: number;
            /**
             * 坐席测应答率。
             * @example `100`
             */
            AgentAnswerRate: number;
            /**
             * 客户测接起次数。
             * @example `100`
             */
            CallsCustomerHandled: number;
            /**
             * 客户测接起率。
             * @example `100`
             */
            CustomerHandleRate: number;
            /**
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `100`
             */
            MaxTalkTime: number;
            /**
             * 平均通话时长，单位秒。
             * @example `100`
             */
            AverageTalkTime: number;
            /**
             * 总振铃时长，单位秒。
             * @example `100`
             */
            TotalRingTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `100`
             */
            MaxRingTime: number;
            /**
             * 平均振铃时长，单位秒。
             * @example `100`
             */
            AverageRingTime: number;
            /**
             * 总客户测振岭时长，单位秒。
             * @example `100`
             */
            TotalCustomerRingTime: number;
            /**
             * 最大客户测振铃时长，单位秒。
             * @example `100`
             */
            MaxCustomerRingTime: number;
            /**
             * 平均客户测振铃时长，单位秒
             * @example `100`
             */
            AverageCustomerRingTime: number;
            /**
             * 坐席应答率。
             * @example `1`
             */
            AgentHandleRate: number;
            /**
             * 客户接听电话数量。
             * @example `12`
             */
            CallsCustomerAnswered: number;
            /**
             * 客户接通率。
             * @example `0.6`
             */
            CustomerAnswerRate: number;
            /**
             * 坐席接听电话数量。
             * @example `5`
             */
            CallsAgentHandled: number;
        };
    }[];
}
