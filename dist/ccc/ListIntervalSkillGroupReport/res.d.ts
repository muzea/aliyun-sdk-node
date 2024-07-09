export interface ListIntervalSkillGroupReportResponse {
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
     * 技能组分段统计数据列表。
     */
    Data: {
        /**
         * 时间段的开始时间，格式为Unix时间戳，单位毫秒。
         * @example `1604639129000`
         */
        StatsTime: number;
        /**
         * 呼入指标。
         */
        Inbound: {
            /**
             * 平均振铃时长，单位秒。计算公式为： TotalRingTime/CallsRinged。
             * @example `11`
             */
            AverageRingTime: number;
            /**
             * 溢出量，即发生队列（技能组）溢出的电话数量。若一通电话多次进入同一队列，每次溢出算一次。
             * @example `0`
             */
            CallsOverflow: number;
            /**
             * 振铃放弃量，即坐席振铃中客户挂机的数量。
             * @example `0`
             */
            CallsAbandonedInRing: number;
            /**
             * 应答量，即坐席应答的次数。一通电话每次进入队列后，若被多个坐席应答，算一次。
             * @example `2`
             */
            CallsHandled: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `23`
             */
            TotalWorkTime: number;
            /**
             * 总振铃放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonedInRingTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `19`
             */
            MaxWorkTime: number;
            /**
             * 咨询转出量，即由该技能组发起的咨询转接到其他技能组的电话数量，同一技能组内坐席间的转接不计数。
             * @example `0`
             */
            CallsAttendedTransferOut: number;
            /**
             * 平均等待时长，平均每通电话的坐席接起前等待时长。计算公式为：TotalWaitTime/CallsHandled。
             * @example `11`
             */
            AverageWaitTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 最大放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为： TotalWorkTime/CallsHandled。
             * @example `8`
             */
            AverageWorkTime: number;
            /**
             * 呼入场景进入队列（技能组）的电话数量，若一通电话多次进入同一队列，每次进入算一次。
             * @example `3`
             */
            CallsQueued: number;
            /**
             * 直接转入量，即由其他技能组发起的直接转接到该技能组的电话数量，同一技能组内坐席间的转接不计数。若一个坐席同时签入多个技能组，则该电话的统计归属于签入的第一个技能组。若一通电话由其他技能组多次转接到该技能组，每次转接算一次。下同。
             * @example `0`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 平均振铃放弃时长，单位秒。计算公式为： TotalAbandonedInRingTime/CallsAbandonedInRing。
             * @example `0`
             */
            AverageAbandonedInRingTime: number;
            /**
             * 平均放弃时长，单位秒。计算公式为：TotalAbandonTime/CallsAbandoned。
             * @example `0`
             */
            AverageAbandonTime: number;
            /**
             * 坐席振铃的电话数量，一通电话每次进入队列后，若分配给多个座席并产生了振铃，算一次。
             * @example `3`
             */
            CallsRinged: number;
            /**
             * 直接转出量，即由该技能组发起的直接转接到其他技能组的电话数量，同一技能组内坐席间的转接不计数。
             * @example `0`
             */
            CallsBlindTransferOut: number;
            /**
             * 咨询转入量，即由其他技能组发起的咨询转接到该技能组的电话数量，同一技能组内坐席间的转接不计数。若一个坐席同时迁入多个技能组，则该电话的统计归属于签入的第一个技能组。若一通电话由其他技能组多次转接到该技能组，每次转接算一次。下同。
             * @example `0`
             */
            CallsAttendedTransferIn: number;
            /**
             * 放弃量。计算公式为：CallsAbandonedInQueue+CallsAbandonedInRing。
             * @example `0`
             */
            CallsAbandoned: number;
            /**
             * 最大排队放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonedInQueueTime: number;
            /**
             * 总等待时长，单位秒。
             * @example `33`
             */
            TotalWaitTime: number;
            /**
             * 总振铃时长，单位秒。
             * @example `33`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `6`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `18`
             */
            MaxRingTime: number;
            /**
             * 放弃率。计算公式为：CallsAbandoned/CallsOffered（由于放弃事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0`
             */
            AbandonRate: number;
            /**
             * 总通话时长，单位秒。
             * @example `9`
             */
            TotalTalkTime: number;
            /**
             * 总放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonTime: number;
            /**
             * 分配量，即分配给该技能组的电话数量，包括通过队列分配的电话数量和通过转接（咨询转接和直接转接）分配的电话数量。计算公式为：CallsQueued+CallsBlindTransferIn+CallsAttentandedTransferIn。
             * @example `3`
             */
            CallsOffered: number;
            /**
             * 最大振铃放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonedInRingTime: number;
            /**
             * 最大等待时长，单位秒。
             * @example `18`
             */
            MaxWaitTime: number;
            /**
             * 平均排队放弃时长，单位秒。计算公式为： TotalAbandonedInQueueTime/CallsAbandonedInQueue。
             * @example `0`
             */
            AverageAbandonedInQueueTime: number;
            /**
             * 20秒服务水平，等待时长小于等于20秒的电话数量/CallsQueued。
             * @example `0`
             */
            ServiceLevel20: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/CallsHandled。
             * @example `5`
             */
            AverageTalkTime: number;
            /**
             * 保持量，即发生通话保持的次数。一通电话每次进入队列后，若发生多次通话保持，算一次。
             * @example `0`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `0`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 应答率。计算公式为：CallsHandled/CallsOffered（由于应答事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0.6666666666666666`
             */
            HandleRate: number;
            /**
             * 超时量，即发生队列（技能组）超时的电话数量。若一通电话多次进入同一队列，每次超时算一次。
             * @example `0`
             */
            CallsTimeout: number;
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
             * 总排队放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonedInQueueTime: number;
            /**
             * 队列放弃量，即电话进入队列之后在排队环节客户挂机的数量。
             * @example `0`
             */
            CallsAbandonedInQueue: number;
            /**
             * 队列溢出的通话数量，即通话在IVR排队时队列溢出。
             * @example `0`
             */
            CallsQueuingOverflow: number;
            /**
             * 在排队阶段超时的通话数量。
             * @example `0`
             */
            CallsQueuingTimeout: number;
            /**
             * Chat会话中总消息发送量。
             * @example `12`
             */
            TotalMessagesSent: number;
            /**
             * Chat会话中坐席发送的总消息量。
             * @example `7`
             */
            TotalMessagesSentByAgent: number;
            /**
             * Chat会话中客户发送的总消息量。
             * @example `5`
             */
            TotalMessagesSentByCustomer: number;
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
             * @example `2`
             */
            CallsDialed: number;
            /**
             * 接通量。
             * @example `1`
             */
            CallsAnswered: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `5`
             */
            TotalWorkTime: number;
            /**
             * 咨询转出量，即由该技能组发起的咨询转接到其他技能组的电话数量，同一技能组内坐席间的转接不计数。
             * @example `0`
             */
            CallsAttendedTransferOut: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `4`
             */
            MaxWorkTime: number;
            /**
             * 总拨号时长，单位秒。
             * @example `60`
             */
            TotalDialingTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/CallsDialed。
             * @example `3`
             */
            AverageWorkTime: number;
            /**
             * 直接转入量，即由其他技能组发起的直接转接到该技能组的电话数量，同一技能组内坐席间的转接不计数。若一个坐席同时签入多个技能组，则该电话的统计归属于签入的第一个技能组。若一通电话由其他技能组多次转接到该技能组，每次转接算一次。下同。
             * @example `0`
             */
            CallsBlindTransferIn: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量，一通电话每次进入队列后，若分配给多个座席并产生了振铃，算一次。
             * @example `0`
             */
            CallsRinged: number;
            /**
             * 咨询转入量，即由其他技能组发起的咨询转接到该技能组的电话数量，同一技能组内坐席间的转接不计数。若一个坐席同时迁入多个技能组，则该电话的统计归属于签入的第一个技能组。若一通电话由其他技能组多次转接到该技能组，每次转接算一次。下同。
             * @example `0`
             */
            CallsAttendedTransferIn: number;
            /**
             * 直接转出量，即由该技能组发起的直接转接到其他技能组的电话数量，同一技能组内坐席间的转接不计数。
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
             * @example `5`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `0`
             */
            MaxRingTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `5`
             */
            TotalTalkTime: number;
            /**
             * 最大拨号时长，单位秒。
             * @example `49`
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
             * @example `5`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的电话数量。一通电话在转出当前技能组之前，若发生多次通话保持，算一次。
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
             * 总通话时长，单位秒。
             * @example `13`
             */
            TotalTalkTime: number;
            /**
             * 总登录时长，单位秒。
             * @example `9236`
             */
            TotalLoggedInTime: number;
            /**
             * 座席利用率，计算公式为： (TotalworkTime + TotalTalkTime ) / TotalLoggedInTime。
             * @example `0.00422315148470254`
             */
            OccupancyRate: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `27`
             */
            TotalWorkTime: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `19`
             */
            MaxWorkTime: number;
            /**
             * 平均小休时长，单位秒。计算公式为：TotalBreakTime/小休次数。小休次数为非接口统计字段。
             * @example `0`
             */
            AverageBreakTime: number;
            /**
             * 总保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 最大小休时长，单位秒。
             * @example `1`
             */
            MaxBreakTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/TotalCalls。
             * @example `6`
             */
            AverageWorkTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/(CallsAnswered+CallsHandled)。
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
             * 最大就绪时长，单位秒。
             * @example `4927`
             */
            MaxReadyTime: number;
            /**
             * 平均就绪时长，单位秒。计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段。
             * @example `0`
             */
            AverageReadyTime: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/(呼入CallsHold+呼出CallsHold)。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 总就绪时长，单位为秒。
             * @example `9106`
             */
            TotalReadyTime: number;
            /**
             * 总小休时长，单位为秒。
             * @example `5`
             */
            TotalBreakTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `6`
             */
            MaxTalkTime: number;
            /**
             * 总电话量。计算公式为：CallsOffered + CallsDialed。
             * @example `5`
             */
            TotalCalls: number;
            /**
             * 各类型小休统计数据。
             */
            BreakCodeDetailList: {
                /**
                 * 小休类型代码。
                 * @example `会议`
                 */
                BreakCode: string;
                /**
                 * 此类型小休的发生次数。
                 * @example `1`
                 */
                Count: number;
                /**
                 * 此类型小休的总计发生时长，单位为秒。
                 * @example `120`
                 */
                Duration: number;
            }[];
        };
        /**
         * 双呼指标。
         */
        Back2Back: {
            /**
             * 最大振铃时长，单位秒。
             * @example `100`
             */
            MaxRingTime: number;
            /**
             * 平均客户侧振铃时长，单位秒
             * @example `100`
             */
            AverageCustomerRingTime: number;
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
             * 总振铃时长，单位秒。
             * @example `100`
             */
            TotalRingTime: number;
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
             * 总通话时长，单位秒。
             * @example `100`
             */
            TotalTalkTime: number;
            /**
             * 平均振铃时长，单位秒。
             * @example `100`
             */
            AverageRingTime: number;
            /**
             * 最大客户侧振铃时长，单位秒。
             * @example `100`
             */
            MaxCustomerRingTime: number;
            /**
             * 总客户侧振岭时长，单位秒。
             * @example `100`
             */
            TotalCustomerRingTime: number;
            /**
             * 坐席应答率。
             * @example `1`
             */
            AgentHandleRate: number;
            /**
             * 最大通话时长，单位秒。
             * @example `100`
             */
            MaxTalkTime: string;
            /**
             * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0.5`
             */
            AnswerRate: string;
            /**
             * 平均通话时长，单位秒。
             * @example `100`
             */
            AverageTalkTime: string;
            /**
             * 坐席接听电话数量。
             * @example `5`
             */
            CallsAgentHandled: number;
        };
    }[];
}
