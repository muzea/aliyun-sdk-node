export interface SetEventSubscriptionRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 支持的事件场景，当前仅支持**AllContext**，表示支持所有场景。
     * @example `AllContext`
     */
    "EventContext"?: string;
    /**
     * 事件通知的语言，当前仅支持**zh-CN**，表示事件通知为中文。
     * @example `zh-CN`
     */
    "Lang"?: string;
    /**
     * 通知最小间隔时间，单位为秒（s）。
     * @example `60`
     */
    "MinInterval"?: string;
    /**
     * 告警事件订阅人名称，多个名称间以英文逗号分隔。
     * @example `默认联系人`
     */
    "ContactName"?: string;
    /**
     * 通知方式。
     * - **hdm\_alarm\_sms**：手机短信。
     * - **dingtalk**：钉钉机器人。
     * - **hdm\_alarm\_sms\_and\_email**：手机短信+邮件。
     * - **hdm\_alarm\_sms,dingtalk**：手机短信+钉钉机器人。
     * @example `hdm_alarm_sms,dingtalk`
     */
    "ChannelType"?: string;
    /**
     * 告警事件订阅组名称，多个名称以英文逗号分隔。
     * @example `默认联系组`
     */
    "ContactGroupName"?: string;
    /**
     * 需要进行通知的事件级别，取值：
     * - **Notice**：通知（包含**Notice**、**Optimization**、**Warn**和**Critical**级别的事件）。
     * - **Optimization**：优化（包含**Optimization**、**Warn**和**Critical**级别的事件）。
     * - **Warn**：警告（包含**Warn**和**Critical**级别的事件）。
     * - **Critical**：严重（仅包含**Critical**级别的事件）。
     * 各个级别事件的含义如下：
     * - 通知：暂无建议的数据库异常事件。
     * - 优化：根据数据库运行情况给出优化建议的事件。
     * - 警告：需要关注的可能会影响数据库的事件。
     * - 严重：影响数据库运行的事件。
     * @example `Optimization`
     */
    "Level"?: string;
    /**
     * 是否启用事件订阅功能：
     * - **0**：关闭。
     * - **1**：开启。
     * @example `1`
     */
    "Active"?: string;
    /**
     * 按照事件类型设置事件的告警级别。
     * 输入格式：`{"事件类型1":"告警级别", "事件类型2":"告警级别"}`。
     * 事件类型：
     * - **AutoScale**：弹性伸缩事件。
     * - **SQLThrottle**：限流事件。
     * - **TimeSeriesAbnormal**：时序异常检测事件。
     * - **SQLOptimize**：SQL优化事件。
     * - **ResourceOptimize**：空间优化事件。
     * 告警级别：
     * - **info**：一般。
     * - **noticed**：通知。
     * - **warning**：警告。
     * - **critical**：严重。
     * @example `{"AutoScale":"critical","SQLThrottle":"info","TimeSeriesAbnormal":"warning"}`
     */
    "Severity"?: string;
    /**
     * 按照事件类型设置事件的消息通知规则，此参数为空时，以**MinInterval**和**ChannelType**设置为准。
     * 输入格式：`{"silenced": {"事件类型1":是否打开自适应静默, "事件类型2":是否打开自适应静默},"min_interval":{"事件类型1":通知最小间隔, "事件类型2":通知最小间隔},"alert_type": {"事件类型1":"通知方式", "事件类型2":"通知方式"}}`。
     * - **silenced**：是否打开自适应静默。打开自适应静默后，事件中连续告警的发送间隔变为**min\_interval**设置值和该事件持续时间1/3中的最大值。
     *     - 1：打开。
     *     - 2：关闭。
     * - **min\_interval**：通知最小间隔时间，单位为秒（s）。
     * - **alert_type**：通知方式，取值：
     *     - **hdm\_alarm\_sms**：手机短信。
     *     - **dingtalk**：钉钉机器人。
     *     - **hdm\_alarm\_sms\_and\_email**：手机短信+邮件。
     *     - **hdm\_alarm\_sms,dingtalk**：手机短信+钉钉机器人。
     * @example `{"silenced": {"AutoScale":1, "SQLThrottle":0, "TimeSeriesAbnormal": 1}, "min_interval": {"AutoScale":300, "SQLThrottle":360, "TimeSeriesAbnormal": 120}, "alert_type": {"AutoScale":"hdm_alarm_sms", "SQLThrottle":"hdm_alarm_sms_and_email", "TimeSeriesAbnormal": "hdm_alarm_sms,dingtalk"}}`
     */
    "DispatchRule"?: string;
}
