export interface PutCustomMetricRuleRequest {
    /**
     * 自定义监控数据所属应用分组ID。
     * > 0表示上报的自定义监控数据不属于任何一个应用分组。
     * @example `7378****`
     */
    "GroupId"?: string;
    /**
     * 报警规则ID。
     * > 如果报警规则ID已存在，则表示修改报警规则；如果报警规则ID不存在，则表示创建报警规则。
     * @example `MyRuleId1`
     */
    "RuleId": string;
    /**
     * 报警规则名称。
     * @example `CpuUsage`
     */
    "RuleName"?: string;
    /**
     * 监控项名称。
     * > 获取方法请参见[DescribeCustomMetricList](~~115005~~)。
     * @example `cpu_total`
     */
    "MetricName": string;
    /**
     * 报警规则作用的自定义监控数据。由自定义监控数据所属应用分组ID和监控项所属维度组成。
     * @example `[{"groupId":7378****,"dimension":"instanceId=i-hp3543t5e4sudb3s****"}]`
     */
    "Resources": string;
    /**
     * 报警联系人组。多个联系人组之间用英文逗号（,）分隔。
     * @example `ECS_Group`
     */
    "ContactGroups": string;
    /**
     * 报警发生回调时指定的URL地址，向URL发送POST请求。
     * @example `https://www.aliyun.com`
     */
    "Webhook"?: string;
    /**
     * 报警规则生效的时间范围。取值范围：00:00-23:59。
     * @example `00:00-23:59`
     */
    "EffectiveInterval"?: string;
    /**
     * 通道沉默周期。单位：秒，默认值：86400（1天）。
     * > 当监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
     * @example `86400`
     */
    "SilenceTime"?: number;
    /**
     * 自定义监控数据的聚合周期。单位：秒。取值为60或60的整数倍。默认为自定义监控数据的原始上报周期。
     * @example `300`
     */
    "Period"?: string;
    /**
     * 报警邮件主题。
     * @example `ECS实例`
     */
    "EmailSubject"?: string;
    /**
     * 报警阈值。
     * @example `90`
     */
    "Threshold": string;
    /**
     * 报警级别。取值：
     * - CRITICAL：严重。
     * - WARN：警告。
     * - INFO：信息。
     * @example `CRITICAL`
     */
    "Level": string;
    /**
     * 报警重试次数。
     * @example `3`
     */
    "EvaluationCount": number;
    /**
     * 报警统计方法。
     * @example `Average`
     */
    "Statistics": string;
    /**
     * 阈值比较符号。取值：
     * - `>=`
     * - `=`
     * - `<=`
     * - `>`
     * - `<`
     * - `!=`
     * @example `>=`
     */
    "ComparisonOperator": string;
}
