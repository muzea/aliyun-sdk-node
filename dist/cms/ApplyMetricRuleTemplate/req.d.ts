export interface ApplyMetricRuleTemplateRequest {
    /**
     * 通道沉默周期。单位：秒。默认值：86400。
     * > 当监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
     * @example `86400`
     */
    "SilenceTime"?: number;
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 报警模板ID。
     * 关于如何获取报警模板ID，请参见[DescribeMetricRuleTemplateList](~~114982~~)。
     * @example `700****`
     */
    "TemplateIds": string;
    /**
     * 报警生效的开始时间。取值范围：00~23，表示00:00到23:00。
     * @example `00`
     */
    "EnableStartTime"?: number;
    /**
     * 报警生效的结束时间。取值范围：00~23，表示00:59到23:59。
     * @example `23`
     */
    "EnableEndTime"?: number;
    /**
     * 报警通知方式。取值：
     * <props="china">- 2：电话+短信+邮箱+旺旺+钉钉机器人。</props>
     * <props="china">- 3：短信+邮箱+旺旺+钉钉机器人。</props>
     * <props="china">- 4：旺旺+钉钉机器人。</props>
     * <props="intl">4：旺旺+钉钉机器人。</props>
     * <props="partner">4：旺旺+钉钉机器人。</props>
     * @example `4`
     */
    "NotifyLevel"?: number;
    /**
     * 模板应用方式。取值：
     * - GROUP_INSTANCE_FIRST：应用分组实例优先。应用报警模板时，以应用分组实例优先，如果应用分组中不存在该实例，则忽略模板中的规则。
     * - ALARM_TEMPLATE_FIRST：报警模板实例优先。应用报警模板时，不管应用分组中是否存在该实例，都创建报警规则。
     * @example `GROUP_INSTANCE_FIRST`
     */
    "ApplyMode"?: string;
    /**
     * 报警发生时会回调指定的URL地址并发送POST请求。
     * @example `https://www.aliyun.com`
     */
    "Webhook"?: string;
    /**
     * 模板应用策略。取值：
     * - all：删除已选择分组上所有通过报警模板创建的规则，然后按模板创建新的报警规则（默认值）。
     * - append：删除已选择分组上通过该报警模板创建的规则，然后按当前模板创建新的报警规则。
     * @example `all`
     */
    "AppendMode"?: string;
}
