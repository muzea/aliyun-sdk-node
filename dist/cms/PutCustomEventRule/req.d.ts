export interface PutCustomEventRuleRequest {
    /**
     * 应用分组ID。获取方法请参见[DescribeCustomEventAttribute](~~115262~~)。
     * > 0表示上报的自定义事件不属于任何一个应用分组。
     * @example `7378****`
     */
    "GroupId": string;
    /**
     * 报警规则ID。
     * > 如果报警规则ID已存在，则表示修改报警规则；如果报警规则ID不存在，则表示创建报警规则。
     * @example `CustomRuleId1`
     */
    "RuleId": string;
    /**
     * 报警规则名称。
     * @example `CustomeRule`
     */
    "RuleName": string;
    /**
     * 自定义事件名称。获取方法请参见[DescribeCustomEventAttribute](~~115262~~)。
     * @example `HostDown`
     */
    "EventName": string;
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
     * 自定义事件监控数据的聚合周期。单位：秒。取值为60或60的整数倍。默认值：300。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 报警邮件主题。
     * @example `ECS实例`
     */
    "EmailSubject"?: string;
    /**
     * 报警阈值。
     * @example `99`
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
}
