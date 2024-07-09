export interface ListIntervalAgentReportResponse {
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
     * 坐席分段统计数据列表。
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
             * 平均振铃时长，单位秒。计算公式为： TotalRingTime/CallsRinged。
             * @example `0`
             */
            AverageRingTime: number;
            /**
             * 应答量，即坐席应答的次数。
             * @example `0`
             */
            CallsHandled: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `0`
             */
            TotalWorkTime: number;
            /**
             * 咨询转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `0`
             */
            CallsAttendedTransferOut: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `0`
             */
            MaxWorkTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/CallsHandled。
             * @example `0`
             */
            AverageWorkTime: number;
            /**
             * 直接转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `0`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量。
             * @example `0`
             */
            CallsRinged: number;
            /**
             * 咨询转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `0`
             */
            CallsAttendedTransferIn: number;
            /**
             * 直接转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `0`
             */
            CallsBlindTransferOut: number;
            /**
             * 总振铃时长，单位秒。
             * @example `0`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
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
             * 分配量，即分配给此坐席的电话次数, 包括其他坐席盲转和咨询转给此坐席的电话。
             * @example `0`
             */
            CallsOffered: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为：TotalTalkTime/CallsHandled。
             * @example `0`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的次数。
             * @example `0`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `0`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 应答率。计算公式为：CallsHandled / CallsOffered（由于应答事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0`
             */
            HandleRate: number;
            /**
             * 满意度调查响应次数。
             * @example `0`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `0`
             */
            AverageHoldTime: number;
            AccessChannelTypeDetails: {
                AccessChannelType: string;
                CallsOffered: number;
            }[];
            AverageFirstResponseTime: number;
            AverageResponseTime: number;
            ServiceLevel15: number;
            TotalMessagesSent: number;
            TotalMessagesSentByAgent: number;
            TotalMessagesSentByCustomer: number;
        };
        /**
         * 呼出指标。
         */
        Outbound: {
            /**
             * 平均振铃时长，单位秒。计算公式为： TotalRingTime/CallsRinged。
             * @example `0`
             */
            AverageRingTime: number;
            /**
             * 拨号量。
             * @example `5`
             */
            CallsDialed: number;
            /**
             * 接通量。
             * @example `0`
             */
            CallsAnswered: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `4`
             */
            TotalWorkTime: number;
            /**
             * 咨询转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `0`
             */
            CallsAttendedTransferOut: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `2`
             */
            MaxWorkTime: number;
            /**
             * 总拨号时长，单位秒。
             * @example `148`
             */
            TotalDialingTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/CallsDialed。
             * @example `1`
             */
            AverageWorkTime: number;
            /**
             * 直接转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `0`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量。
             * @example `0`
             */
            CallsRinged: number;
            /**
             * 咨询转入量。若一通电话多次转入给该坐席，每次转入算一次。
             * @example `0`
             */
            CallsAttendedTransferIn: number;
            /**
             * 直接转出量。若一通电话多次转出给其他坐席，每次转出算一次。
             * @example `0`
             */
            CallsBlindTransferOut: number;
            /**
             * 总振铃时长，单位秒。
             * @example `0`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
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
             * 最大拨号时长，单位秒。
             * @example `60`
             */
            MaxDialingTime: number;
            /**
             * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0`
             */
            AnswerRate: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为：TotalTalkTime/CallsAnswered。
             * @example `0`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的次数。
             * @example `0`
             */
            CallsHold: number;
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
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 平均拨号时长，单位秒。计算公式为：TotalDialingTime/CallsDialed。
             * @example `30`
             */
            AverageDialingTime: number;
        };
        /**
         * 整体指标。
         */
        Overall: {
            /**
             * 座席利用率，计算公式为： (TotalworkTime + TotalTalkTime ) / TotalLoggedInTime。
             * @example `0`
             */
            OccupancyRate: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `4`
             */
            TotalWorkTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `2`
             */
            MaxWorkTime: number;
            /**
             * 总保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/TotalCalls。
             * @example `1`
             */
            AverageWorkTime: number;
            /**
             * 最大小休时长，单位秒。
             * @example `1`
             */
            MaxBreakTime: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 最大就绪时长，单位秒。
             * @example `435`
             */
            MaxReadyTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
            /**
             * 总就绪时长，单位为秒。
             * @example `763`
             */
            TotalReadyTime: number;
            /**
             * 入参Interval为Daily才有值，当天的最后下线时间。
             * @example `0`
             */
            LastCheckoutTime: number;
            LastCheckOutTime: number;
            /**
             * 总电话量。计算公式为：CallsOffered+CallsDialed。
             * @example `5`
             */
            TotalCalls: number;
            /**
             * 总登录时长，单位秒。_注意：不包含离线和小休时长_。
             * @example `914`
             */
            TotalLoggedInTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `0`
             */
            TotalTalkTime: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 平均小休时长，单位秒。计算公式为：TotalBreakTime/小休次数。小休次数为非接口统计字段。
             * @example `0`
             */
            AverageBreakTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/(CallsAnswered+CallsHandled)。
             * @example `0`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
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
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/(呼入CallsHold+呼出CallsHold)。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 平均就绪时长，单位秒。计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段。
             * @example `0`
             */
            AverageReadyTime: number;
            /**
             * 总小休时长，单位为秒。
             * @example `1`
             */
            TotalBreakTime: number;
            /**
             * 总场内在线时长，单位秒。
             * @example `1`
             */
            TotalOnSiteOnlineTime: number;
            /**
             * 总场外在线时长，单位秒。
             * @example `2`
             */
            TotalOffSiteOnlineTime: number;
            /**
             * 总办公电话在线时长，单位秒
             * @example `3`
             */
            TotalOfficePhoneOnlineTime: number;
            /**
             * 小休详情列表。
             */
            BreakCodeDetailList: {
                /**
                 * 小休码。
                 * @example `会议`
                 */
                BreakCode: string;
                /**
                 * 数量。
                 * @example `10`
                 */
                Count: number;
                /**
                 * 持续时长，单位秒。
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
             * 入参Interval为Daily才有值，当天的首次上线时间。
             * @example `0`
             */
            FirstCheckInTime: number;
            TotalOfficePhoneLoggedInTime: number;
            TotalOffSiteLoggedInTime: number;
            TotalOnSiteLoggedInTime: number;
            TotalOutboundScenarioLoggedInTime: number;
        };
        Back2Back: {
            CallsDialed: number;
            AnswerRate: number;
            CallsAnswered: number;
            TotalTalkTime: number;
            MaxTalkTime: number;
            AverageTalkTime: number;
            TotalRingTime: number;
            MaxRingTime: number;
            AverageRingTime: number;
            TotalCustomerRingTime: number;
            MaxCustomerRingTime: number;
            AverageCustomerRingTime: number;
            CallsAgentHandled: number;
            AgentHandleRate: number;
            CallsCustomerAnswered: number;
            CustomerAnswerRate: number;
        };
        Internal: {
            AverageTalkTime: number;
            CallsAnswered: number;
            CallsDialed: number;
            CallsHandled: number;
            CallsOffered: number;
            CallsTalked: number;
        };
    }[];
}
