export interface DescribeAlertLogListRequest {
    /**
     * 查询报警历史的开始时间戳。
     * 单位：毫秒。
     * 您只能查询最近一年的报警历史，如果查询时间大于一年，则参数`AlertLogList`的返回值为空。
     * > 开始时间（`StartTime`）和结束时间（`EndTime`）之间必须小于等于15天，并且需要同时填写或同时不填写。如果不填，则默认查询最近15分钟的报警历史。
     * @example `1609988009694`
     */
    "StartTime"?: number;
    /**
     * 查询报警历史的结束时间戳。
     * 单位：毫秒。
     * 您只能查询最近一年的报警历史，如果查询时间大于一年，则参数`AlertLogList`的返回值为空。
     * > 开始时间（`StartTime`）和结束时间（`EndTime`）之间必须小于等于15天，并且需要同时填写或同时不填写。如果不填，则默认查询最近15分钟的报警历史。
     * @example `1610074409694`
     */
    "EndTime"?: number;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
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
     * 云产品的命名空间。
     * > 关于云产品的命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 云产品名称缩写。
     * 关于如何获取云产品名称缩写，请参见[DescribeProductsOfActiveMetricRule](~~114930~~)。
     * @example `ECS`
     */
    "Product"?: string;
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
     * >关于云产品的监控项，请参见[云产品监控项](~~163515~~)。
     * @example `IntranetInRate`
     */
    "MetricName"?: string;
    /**
     * 获取日志的周期。单位：分钟。
     * @example `360`
     */
    "LastMin"?: string;
    /**
     * 对数据进行空间维度聚合，相当于SQL中的Group By。取值：
     * - `product`：按照云产品统计。
     * - `level`：按照报警级别统计。
     * - `groupId`：按照应用分组统计。
     * - `contactGroup`：按照报警联系人组统计。
     * - `product,metricName`：按照云产品和监控项统计。
     * @example `product`
     */
    "GroupBy"?: string;
    /**
     * 报警规则ID。
     * 关于如何查询报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `bc369e8_30f87e517ed2fc****`
     */
    "RuleId"?: string;
    /**
     * 报警规则类型。取值：METRIC，表示时序指标报警规则。
     * @example `METRIC`
     */
    "SourceType"?: string;
    /**
     * 告警类型。取值：
     * - TRIGGERED：告警触发。
     * - RESOLVED：告警恢复。
     * @example `TRIGGERED`
     */
    "EventType"?: string;
}
