export interface ListHistoricalAgentReportResponse {
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
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
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
         * 坐席历史数据列表。
         */
        List: {
            /**
             * 坐席姓名。
             * @example `坐席小王`
             */
            AgentName: string;
            /**
             * 座席ID。
             * @example `agent1@ccc-test`
             */
            AgentId: string;
            /**
             * 坐席工号。
             * @example `001`
             */
            DisplayId: string;
            /**
             * 呼入数据。
             */
            Inbound: {
                /**
                 * 平均振铃时长，计算公式为：TotalRingTime/CallsRinged，单位秒。
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
                 * 平均话后处理时长，计算公式为：TotalWorkTime/CallsHandled，单位秒。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 直接转入量，若一通电话多次转入给该坐席，每次转入算一次。
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
                 * 咨询转入量，若一通电话多次转入给该坐席，每次转入算一次。
                 * @example `0`
                 */
                CallsAttendedTransferIn: number;
                /**
                 * 直接转出量，若一通电话多次转出给其他坐席，每次转出算一次。
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
                 * 分配量，即分配给此坐席的电话次数，包括其他坐席盲转和咨询转给此坐席的电话。
                 * @example `0`
                 */
                CallsOffered: number;
                /**
                 * 最大通话保持时长，单位秒。
                 * @example `0`
                 */
                MaxHoldTime: number;
                /**
                 * 平均通话时长，计算公式为：TotalTalkTime/CallsHandled，单位秒。
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
                 * 平均通话保持时长，计算公式为：TotalHoldTime/CallsHold，单位秒。
                 * @example `0`
                 */
                AverageHoldTime: number;
                /**
                 * 各渠道的统计数据。
                 */
                AccessChannelTypeDetails: {
                    /**
                     * 渠道类型。
                     * @example `Web`
                     */
                    AccessChannelType: string;
                    /**
                     * 分配的会话数量。
                     * @example `3`
                     */
                    CallsOffered: number;
                }[];
                /**
                 * Chat会话平均首次响应时长，单位为秒。
                 * @example `10`
                 */
                AverageFirstResponseTime: number;
                /**
                 * Chat会话平均响应时长。
                 * @example `12`
                 */
                AverageResponseTime: number;
                /**
                 * 15秒服务水平。
                 * @example `0.85`
                 */
                ServiceLevel15: number;
                /**
                 * Chat会话中总消息发送量。
                 * @example `16`
                 */
                TotalMessagesSent: number;
                /**
                 * Chat会话中坐席发送的总消息量。
                 * @example `7`
                 */
                TotalMessagesSentByAgent: number;
                /**
                 * Chat会话中客户发送的总消息量。
                 * @example `9`
                 */
                TotalMessagesSentByCustomer: string;
            };
            /**
             * 呼出数据。
             */
            Outbound: {
                /**
                 * 平均振铃时长，计算公式为： TotalRingTime/CallsRinged，单位秒。
                 * @example `0`
                 */
                AverageRingTime: number;
                /**
                 * 拨号量。
                 * @example `0`
                 */
                CallsDialed: number;
                /**
                 * 接通量。
                 * @example `0`
                 */
                CallsAnswered: number;
                /**
                 * 总话后处理时长，单位秒。
                 * @example `0`
                 */
                TotalWorkTime: number;
                /**
                 * 咨询转出量，若一通电话多次转出给其他坐席，每次转出算一次。
                 * @example `0`
                 */
                CallsAttendedTransferOut: number;
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
                 * 总通话保持时长，单位秒。
                 * @example `0`
                 */
                TotalHoldTime: number;
                /**
                 * 平均话后处理时长，计算公式为：TotalWorkTime/CallsDialed，单位秒。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 直接转入量，若一通电话多次转入给该坐席，每次转入算一次。
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
                 * 咨询转入量，若一通电话多次转入给该坐席，每次转入算一次。
                 * @example `0`
                 */
                CallsAttendedTransferIn: number;
                /**
                 * 直接转出量，若一通电话多次转出给其他坐席，每次转出算一次。
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
                 * @example `0`
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
                 * 平均通话时长，计算公式为：TotalTalkTime/CallsAnswered，单位秒。
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
                 * 平均通话保持时长，计算公式为：TotalHoldTime/CallsHold，单位秒。
                 * @example `0`
                 */
                AverageHoldTime: number;
                /**
                 * 平均拨号时长，计算公式为：TotalDialingTime/CallsDialed，单位秒。
                 * @example `0`
                 */
                AverageDialingTime: number;
            };
            /**
             * 整体数据。
             */
            Overall: {
                /**
                 * 总通话时长，单位秒。
                 * @example `0`
                 */
                TotalTalkTime: number;
                /**
                 * 总登录时长，不包含小休时长，单位秒。
                 * @example `0`
                 */
                TotalLoggedInTime: number;
                /**
                 * 座席利用率，计算公式为：（TotalworkTime+TotalTalkTime）/TotalLoggedInTime。
                 * @example `0`
                 */
                OccupancyRate: number;
                /**
                 * 总话后处理时长，单位秒。
                 * @example `0`
                 */
                TotalWorkTime: number;
                /**
                 * 最大通话保持时长，单位秒。
                 * @example `0`
                 */
                MaxHoldTime: number;
                /**
                 * 最大话后处理时长，单位秒。
                 * @example `0`
                 */
                MaxWorkTime: number;
                /**
                 * 平均小休时长，计算公式为：TotalBreakTime/小休次数，小休次数为非接口统计字段，单位秒。
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
                 * @example `0`
                 */
                MaxBreakTime: number;
                /**
                 * 平均话后处理时长，计算公式为：TotalWorkTime/TotalCalls，单位秒。
                 * @example `0`
                 */
                AverageWorkTime: number;
                /**
                 * 平均通话时长，计算公式为：TotalTalkTime/（CallsAnswered+CallsHandled），单位秒。
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
                 * @example `0`
                 */
                MaxReadyTime: number;
                /**
                 * 平均就绪时长，计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段，单位秒。
                 * @example `0`
                 */
                AverageReadyTime: number;
                /**
                 * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/（呼入CallsHold+呼出CallsHold）。
                 * @example `0`
                 */
                AverageHoldTime: number;
                /**
                 * 总就绪时长，单位为秒。
                 * @example `0`
                 */
                TotalReadyTime: number;
                /**
                 * 总小休时长，单位秒。
                 * @example `0`
                 */
                TotalBreakTime: number;
                /**
                 * 最大通话时长，单位秒。
                 * @example `0`
                 */
                MaxTalkTime: number;
                /**
                 * 总电话量，计算公式为：CallsOffered+CallsDialed。
                 * @example `0`
                 */
                TotalCalls: number;
                /**
                 * 总场内在线时长，单位秒。
                 * @example `已弃用，请使用TotalOnSiteLoggedInTime代替此参数`
                 */
                TotalOnSiteOnlineTime: number;
                /**
                 * 总场外在线时长，单位秒。
                 * @example `已弃用，请使用TotalOffSiteLoggedInTime代替此参数`
                 */
                TotalOffSiteOnlineTime: number;
                /**
                 * 总办公电话模式在线时长，单位秒。
                 * @example `已弃用，请使用TotalOfficePhoneLoggedInTime代替此参数`
                 */
                TotalOfficePhoneOnlineTime: number;
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
                     * @example `3`
                     */
                    Count: number;
                    /**
                     * 此类型小休的总计发生时长，单位为秒。
                     * @example `120`
                     */
                    Duration: number;
                }[];
                /**
                 * 最早签入时间，格式是unix时间戳，单位毫秒。
                 * @example `1686030515000`
                 */
                FirstCheckInTime: number;
                /**
                 * 最后签出时间，格式是unix时间戳，单位毫秒。
                 * @example `1686030515000`
                 */
                LastCheckOutTime: number;
                /**
                 * 总仅外呼在线时长，单位秒。
                 * @example `已弃用，请使用TotalOutboundScenarioLoggedInTime代替此参数`
                 */
                TotalOutboundScenarioTime: number;
                /**
                 * 总仅外呼空闲时长，单位秒。
                 * @example `100`
                 */
                TotalOutboundScenarioReadyTime: number;
                /**
                 * 总办公电话模式在线时长，单位秒。
                 * @example `3600`
                 */
                TotalOfficePhoneLoggedInTime: number;
                /**
                 * 总场外在线时长，单位秒。
                 * @example `100`
                 */
                TotalOffSiteLoggedInTime: number;
                /**
                 * 总场内在线时长，单位秒。
                 * @example `100`
                 */
                TotalOnSiteLoggedInTime: number;
                /**
                 * 总仅外呼在线时长，单位秒。
                 * @example `100`
                 */
                TotalOutboundScenarioLoggedInTime: number;
            };
            /**
             * 座席所属技能组ID列表，格式为JSON数组的字符串，数组元素为技能组ID。
             * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
             */
            SkillGroupIds: string;
            /**
             * 座席所属技能组名称列表，格式为JSON数组的字符串，数组元素是技能组名称。
             * @example `["测试技能组1","测试技能组2"]`
             */
            SkillGroupNames: string;
            /**
             * 双呼指标。
             */
            Back2Back: {
                /**
                 * 拨号量。
                 * @example `100`
                 */
                CallsDialed: string;
                /**
                 * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
                 * @example `0.6`
                 */
                AnswerRate: string;
                /**
                 * 接通量。
                 * @example `100`
                 */
                CallsAnswered: string;
                /**
                 * 总通话时长，单位秒。
                 * @example `100`
                 */
                TotalTalkTime: string;
                /**
                 * 最大通话时长，单位秒。
                 * @example `100`
                 */
                MaxTalkTime: string;
                /**
                 * 平均通话时长，单位秒。
                 * @example `100`
                 */
                AverageTalkTime: string;
                /**
                 * 总振铃时长，单位秒。
                 * @example `100`
                 */
                TotalRingTime: string;
                /**
                 * 最大振铃时长，单位秒。
                 * @example `100`
                 */
                MaxRingTime: string;
                /**
                 * 平均振铃时长，单位秒。
                 * @example `100`
                 */
                AverageRingTime: string;
                /**
                 * 总客户侧振岭时长，单位秒。
                 * @example `100`
                 */
                TotalCustomerRingTime: string;
                /**
                 * 最大客户侧振铃时长，单位秒。
                 * @example `100`
                 */
                MaxCustomerRingTime: string;
                /**
                 * 平均客户侧振铃时长，单位秒
                 * @example `100`
                 */
                AverageCustomerRingTime: string;
                /**
                 * 坐席接听电话数量。
                 * @example `10`
                 */
                CallsAgentHandled: string;
                /**
                 * 坐席应答率。
                 * @example `1`
                 */
                AgentHandleRate: string;
                /**
                 * 客户接听电话数量。
                 * @example `7`
                 */
                CallsCustomerAnswered: string;
                /**
                 * 客户接通率。
                 * @example `0.7`
                 */
                CustomerAnswerRate: string;
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
                 * 电话呼入数。
                 * @example `100`
                 */
                CallsOffered: number;
                /**
                 * 电话应答数。
                 * @example `100`
                 */
                CallsHandled: number;
                /**
                 * 参与通话次数。
                 * @example `100`
                 */
                CallsTalked: number;
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
            };
        }[];
    };
}
