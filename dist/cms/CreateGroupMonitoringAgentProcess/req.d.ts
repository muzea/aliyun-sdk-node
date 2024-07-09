export interface CreateGroupMonitoringAgentProcessRequest {
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `3607****`
     */
    "GroupId": string;
    /**
     * 进程名称。
     * @example `Process_Java`
     */
    "ProcessName": string;
    /**
     * 匹配实例的条件。取值：
     * - all：全部。
     * - and：与。
     * - or：或。
     * @example `and`
     */
    "MatchExpressFilterRelation"?: string;
    /**
     * 匹配条件表达式列表。
     * N的取值范围：1~3。
     */
    "MatchExpress"?: {
        /**
         * 匹配实例名称。
         * N的取值范围：1~3。
         * @example `portalHost`
         */
        Value: string;
        /**
         * 匹配条件的类型。
         * N的取值范围：1~3。
         * >目前仅支持Name，即实例名称。
         * @example `name1`
         */
        Name: string;
        /**
         * 匹配条件。取值：
         * - all（默认值）：全部。
         * - startWith：前缀。
         * - endWith：后缀。
         * - contains：包含。
         * - notContains：不包含。
         * - equals：相等。
         * N的取值范围：1~3。
         * @example `startWith`
         */
        Function: string;
    }[];
    /**
     * 报警规则配置列表。
     * N的取值范围：1~3。
     */
    "AlertConfig": {
        /**
         * 通道沉默周期。单位：秒。最小值：3600秒（1小时），默认值：86400秒（1天）。
         * N的取值范围：1~3。
         * >当监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
         * @example `86400`
         */
        SilenceTime: string;
        /**
         * 阈值比较符。取值：
         * - GreaterThanOrEqualToThreshold：大于等于。
         * - GreaterThanThreshold：大于。
         * - LessThanOrEqualToThreshold：小于等于。
         * - LessThanThreshold：小于。
         * - NotEqualToThreshold：不等于。
         * - GreaterThanYesterday：同比昨天时间上涨。
         * - LessThanYesterday：同比昨天时间下降。
         * - GreaterThanLastWeek：同比上周同一时间上涨。
         * - LessThanLastWeek：同比上周同一时间下降。
         * - GreaterThanLastPeriod：环比上周期上涨。
         * - LessThanLastPeriod：环比上周期下降。
         * N的取值范围：1~3。
         * @example `GreaterThanOrEqualToThreshold`
         */
        ComparisonOperator: string;
        /**
         * 报警回调URL地址。
         * N的取值范围：1~3。
         * @example `https://www.aliyun.com`
         */
        Webhook: string;
        /**
         * 报警级别连续出现次数。默认：3次。
         * N的取值范围：1~3。
         * >只有当报警级别连续出现设定的次数且达到报警阈值才会触发报警。
         * @example `3`
         */
        Times: string;
        /**
         * 报警级别。取值：
         * - critical（默认值）：故障。
         * - warn：警告。
         * - info：信息。
         * N的取值范围：1~3。
         * @example `warn`
         */
        EscalationsLevel: string;
        /**
         * 报警规则的生效时间段。
         * N的取值范围：1~3。
         * @example `07:00-22:59`
         */
        EffectiveInterval: string;
        /**
         * 该参数已废弃，无需关注。
         */
        NoEffectiveInterval: string;
        /**
         * 报警阈值。
         * N的取值范围：1~3。
         * 单位：个。
         * @example `5`
         */
        Threshold: string;
        /**
         * 报警统计方式。
         * N的取值范围：1~3。
         * >目前仅支持Average。
         * @example `Average`
         */
        Statistics: string;
        /**
         * 报警触发列表。
         */
        TargetList: {
            /**
             * 报警触发目标ID。
             * 关于如何获取报警触发目标ID，请参见[DescribeMetricRuleTargets](~~121592~~)。
             * @example `1`
             */
            Id: string;
            /**
             * 资源ARN。
             * 关于如何获取资源ARN，请参见[DescribeMetricRuleTargets](~~121592~~)。
             * 资源ARN的格式为`acs:{云产品缩写}:{regionId}:{userId}:/{资源类型}/{资源名称}/message`。例如：`acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`。参数说明如下：
             * - {云产品缩写}：目前仅支持消息服务MNS。
             * - {userId}：阿里云账号ID。
             * - {regionId}：消息队列或主题所在地域。
             * - {资源类型}：接收报警的资源类型。取值：
             *
             *     - **queues**：队列。
             *     - **topics**：主题。
             * - {资源名称}：资源名称。
             *     - 如果资源类型为**queues**，则资源名称为队列名称。
             *     - 如果资源类型为**topics**，则资源名称为主题名称。
             * @example `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`
             */
            Arn: string;
            /**
             * 报警级别。取值：
             * - INFO：信息。
             * - WARN：警告。
             * - CRITICAL：紧急。
             * @example `["INFO", "WARN", "CRITICAL"]`
             */
            Level: string;
            /**
             * 报警回调的JSON格式参数。
             * @example `{"customField1":"value1","customField2":"$.name"}`
             */
            JsonParams: string;
        }[];
    }[];
}
