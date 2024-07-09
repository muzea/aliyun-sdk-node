export interface CreateSchedruleOnDemandRequest {
    /**
     * 要操作的代播实例的ID。
     * > 您可以调用[DescribeOnDemandInstance](~~152120~~)查询所有代播实例的ID。
     * @example `ddosbgp-cn-z2q1qzxb****`
     */
    "InstanceId": string;
    /**
     * 调度规则的名称。
     * 支持使用英文小写字母、数字、短划线（-）和下划线（_），不超过32个字符。建议您使用代播实例的ID作为调度规则名称，例如，`ddosbgp-cn-z2q1qzxb****`。
     * @example `ddosbgp-cn-z2q1qzxb****`
     */
    "RuleName": string;
    /**
     * 入方向带宽阈值，单位：Mbps。最小值：**100**。
     * @example `100`
     */
    "RuleConditionMbps": string;
    /**
     * 入方向报文数阈值，单位：Kpps。最小值：**10**。
     * @example `10`
     */
    "RuleConditionKpps": string;
    /**
     * 从互联网访问IDC的网络带宽或者报文数量连续超过阈值多少次时，将触发调度规则并开启代播防护。
     * > 带宽阈值通过**RuleConditionMbps**参数设置，报文数阈值通过**RuleConditionKpps**参数设置。
     * @example `3`
     */
    "RuleConditionCnt": string;
    /**
     * 调度动作。取值固定为**declare**，表示宣告路由。
     * @example `declare`
     */
    "RuleAction": string;
    /**
     * 调度规则的开关状态。取值：
     * - **on**：表示开启。
     * - **off**：表示关闭。
     * @example `on`
     */
    "RuleSwitch": string;
    /**
     * 调度规则的停止方式。取值：
     * - **auto**：表示自动停止调度。
     * - **manual**：表示手动停止调度。
     * @example `auto`
     */
    "RuleUndoMode": string;
    /**
     * 自动停止调度的开始时间。使用24小时制表示，格式：`hh:mm`。
     * 当系统检测到攻击停止后，会在此处设置的时间开始停止代播防护。建议您将该时间设置为业务低峰期。
     * > 该参数仅在使用自动停止调度（**RuleUndoMode**设置为**auto**）时生效。
     * @example `03:00`
     */
    "RuleUndoBeginTime": string;
    /**
     * 自动停止调度的结束时间。使用24小时制表示，格式：`hh:mm`。
     * @example `03:05`
     */
    "RuleUndoEndTime"?: string;
    /**
     * 自动停止调度时间对应的时区。使用格林威治时间表示，格式：`GMT-hh:mm`。
     * 例如，`GMT-08:00`表示东八区。
     * > 该参数仅在使用自动停止调度（**RuleUndoMode**设置为**auto**）时生效。
     * @example `GMT-08:00`
     */
    "TimeZone": string;
    /**
     * 代播实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域信息。
     * @example `cn-zhangjiakou`
     */
    "RegionId"?: string;
}
