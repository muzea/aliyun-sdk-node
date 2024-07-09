export interface DescribeAlertLogHistogramRequest {
    /**
     * 查询报警历史的开始时间戳。
     * 单位：毫秒。
     * > - 您只能查询最近一年的报警历史。
     * > - 开始时间（`StartTime`）和结束时间（`EndTime`）之间必须小于等于15天。
     * @example `1609988009694`
     */
    "StartTime"?: number;
    /**
     * 查询报警历史的结束时间戳。
     * 单位：毫秒。
     * > - 您只能查询最近一年的报警历史。
     * > - 开始时间（`StartTime`）和结束时间（`EndTime`）之间必须小于等于15天。
     * @example `1609989009694`
     */
    "EndTime"?: number;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示记录条数。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询报警历史的搜索关键字。
     * @example `alert`
     */
    "SearchKey"?: string;
    /**
     * 应用分组ID。
     * @example `7301****`
     */
    "GroupId"?: string;
    /**
     * 云服务名称缩写。
     * @example `ECS`
     */
    "Product"?: string;
    /**
     * 云服务的命名空间。
     * >关于云服务的命名空间，请参见[云服务监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 报警的级别和通知方式。取值：
     * <props="china">- P2：电话+短信+邮件+钉钉机器人。</props>
     * <props="china">- P3：短信+邮件+钉钉机器人。</props>
     * <props="china">- P4：邮件+钉钉机器人。</props>
     * <props="china">- OK：无报警。</props>
     * <props="intl">- P4：邮件+钉钉机器人。</props>
     * <props="intl">- OK：无报警。</props>
     * <props="partner">- P4：邮件+钉钉机器人。</props>
     * <props="partner">- OK：无报警。</props>
     * @example `P4`
     */
    "Level"?: string;
    /**
     * 报警状态。取值：
     * - 0：发生报警或报警恢复正常。
     * - 1：非生效期。
     * - 2：通道沉默周期。
     * - 3：主机重启中。
     * - 4：不发送报警。
     * <props="china">当报警状态为0时，如果Level的取值为P2、P3或P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
     * <props="intl">当报警状态为0时，如果Level的取值为P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
     * <props="partner">当报警状态为0时，如果Level的取值为P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
     * @example `0`
     */
    "SendStatus"?: string;
    /**
     * 报警联系人组。
     * @example `ECS_Group`
     */
    "ContactGroup"?: string;
    /**
     * 报警规则名称。
     * @example `test123`
     */
    "RuleName"?: string;
    /**
     * 监控项名称。
     * >关于云服务的监控项，请参见[云服务监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 获取日志的周期。单位：分钟。
     * @example `360`
     */
    "LastMin"?: string;
    /**
     * 对数据进行空间维度聚合，相当于SQL中的Group By。取值：
     * - `product`：按照云服务统计。
     * - `level`：按照报警级别统计。
     * - `groupId`：按照应用分组统计。
     * - `contactGroup`：按照报警联系人组统计。
     * - `product,metricName`：按照云服务和监控项统计。
     * @example `product`
     */
    "GroupBy"?: string;
    /**
     * 该参数已废弃，无需关注。
     * @example `无`
     */
    "SourceType"?: string;
    /**
     * 告警类型。取值：
     * - TRIGGERED：告警触发。
     * - RESOLVED：告警恢复。
     * @example `RESOLVED`
     */
    "EventType"?: string;
    /**
     * 报警规则ID。
     * 关于如何获取报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `ae06917_75a8c43178ab66****`
     */
    "RuleId"?: string;
}
