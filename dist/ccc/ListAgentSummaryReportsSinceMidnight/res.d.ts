export interface ListAgentSummaryReportsSinceMidnightResponse {
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
     * @example `27DD30C4-CAE2-481A-97CC-D3C54625341D`
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
    PagedAgentSummaryReport: {
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
         * @example `2`
         */
        TotalCount: number;
        /**
         * 坐席概览数据列表。
         */
        List: {
            /**
             * 座席登录名。
             * @example `agent`
             */
            LoginName: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AgentId: string;
            /**
             * 坐席名称。
             * @example `坐席小王。`
             */
            AgentName: string;
            /**
             * 座席所属技能组名称列表，格式为JSON数组的字符串，数组元素是技能组名称。
             * @example `["测试技能组1","测试技能组2"]`
             */
            SkillGroupNames: string;
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
             * 座席所属技能组ID列表，格式为JSON数组的字符串，数组元素为技能组ID。
             * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]
            `
             */
            SkillGroupIds: string;
            /**
             * 整体指标。
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
                 * 最大话后处理时长，单位秒。
                 * @example `0`
                 */
                MaxWorkTime: number;
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
                 * 平均就绪时长，计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段，单位秒。
                 * @example `0`
                 */
                AverageReadyTime: number;
                /**
                 * 最大就绪时长，单位秒。
                 * @example `37`
                 */
                MaxReadyTime: number;
                /**
                 * 直接转接的通话数量。
                 * @example `0`
                 */
                OneTransferCalls: number;
                /**
                 * 最大通话时长，单位秒。
                 * @example `0`
                 */
                MaxTalkTime: number;
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
                 * 总电话量，计算公式为：CallsOffered+CallsDialed。
                 * @example `0`
                 */
                TotalCalls: number;
            };
            /**
             * 呼入指标。
             */
            Inbound: {
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
                 * 20秒应答率，单位%。
                 * @example `0`
                 */
                ServiceLevel20: number;
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
                 * 电话拨号量。
                 * @example `0`
                 */
                CallsDialed: number;
                /**
                 * 电话接通量。
                 * @example `0`
                 */
                CallsAnswered: number;
                /**
                 * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
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
                MaxWorkTime: string;
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
            };
        }[];
    };
}
