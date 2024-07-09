export interface UpdateQuotaAlarmRequest {
    /**
     * 配额告警ID。
     * > 关于如何获取配额告警ID，请参见[ListQuotaAlarms](~~440561~~)。
     * @example `a2efa7fc-832f-47bb-8054-39e28012****`
     */
    "AlarmId": string;
    /**
     * 配额告警名称。
     * > 关于如何获取配额告警名称，请参见[ListQuotaAlarms](~~440561~~)。
     * @example `规则创建数量告警`
     */
    "AlarmName": string;
    /**
     * 配额告警类型。取值：
     * - used（默认值）：已使用量告警。
     * - usable：剩余可用量告警。
     * @example `usable`
     */
    "ThresholdType"?: string;
    /**
     * 配额告警阈值的数值。取值：
     * - 当`ThresholdType`选择`used`时，如果配额的已使用量大于等于预设数值，您会收到告警通知。配额告警阈值必须大于配额的已使用量。
     * - 当`ThresholdType`选择`usable`时，如果配额的剩余可用量小于等于预设数值，您会收到告警通知。配额告警阈值必须小于配额的剩余可用量。
     * > 该参数与ThresholdPercent必须设置一个。
     * @example `160`
     */
    "Threshold"?: number;
    /**
     * 配额告警阈值的百分比。取值：
     * - 当`ThresholdType`选择`used`时，如果配额的已使用量大于等于预设百分比，您会收到告警通知。取值范围：（50%, 100%]。
     * - 当`ThresholdType`选择`usable`时，如果配额的剩余可用量小于等于预设百分比，您会收到告警通知。取值范围：（0%, 50%]。
     * > 该参数与Threshold必须设置一个
     * @example `51`
     */
    "ThresholdPercent"?: number;
    /**
     * 配额中心将告警信息通过HTTP协议的POST请求发送到指定公网的URL地址。
     * @example `https://alert.aliyun.com/callback`
     */
    "WebHook"?: string;
}
