export interface DescribeEventRuleAttributeRequest {
    /**
     * 事件报警规则名称。
     * 关于如何获取事件报警规则名称，请参见[DescribeEventRuleList](~~114996~~)。
     * @example `testRule`
     */
    "RuleName": string;
    /**
     * 通道沉默周期。
     * 单位：秒，默认值：86400（1天）。
     * > 当监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
     * @example `86400`
     */
    "SilenceTime"?: string;
}
