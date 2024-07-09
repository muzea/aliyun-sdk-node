export interface UpdateRMSUnifiedAlarmRuleRequest {
    /**
     * 报警规则id
     * @example `1`
     */
    "Id": number;
    /**
     * 报警规则名称
     * @example `TAGS`
     */
    "Name": string;
    /**
     * 规则类型
     * @example `CUSTOM`
     */
    "Category": string;
    /**
     * 报警规则配置
     * @example `{\"trafficType\":\"i\",\"methodName\":\"*\",\"faultInjectRuleItems\":[{\"action\":{\"type\":\"REJECT\"},\"ruleType\":\"ABORT\",\"configs\":{\"faultPercent\":100}}]} `
     */
    "RuleConfig": string;
    /**
     * 报警通知结果数据
     */
    "AlarmNodata": number;
    /**
     * 告警等级
     * @example `2`
     */
    "Level": number;
    /**
     * 应急处理人
     */
    "Emergency"?: string;
    /**
     * 应急处理链接
     */
    "EmergencyUrl"?: string;
    /**
     * 	触发周期
     */
    "PendingHit": number;
    /**
     * 恢复周期
     */
    "RecoveredHit": number;
    /**
     * 检测频率
     * @example `5`
     */
    "Step": number;
    /**
     * 通知静默时间
     * @example `900`
     */
    "SilenceTime": number;
    /**
     * 告警触发时通知 1:勾选 0:不勾选
     */
    "NotifyFiring": number;
    /**
     * 告警恢复时通知 1:勾选 0:不勾选
     */
    "NotifyRecovered": number;
    /**
     * 待修改的告警规则的数量
     */
    "NotifyNodata": number;
    /**
     * 查询告警规则的时间范围
     */
    "NotifyTimeFilterJsonStr"?: string;
    /**
     *
     * 发送状态
     * @example `Firing`
     */
    "Status"?: string;
    /**
     * 暂停开始时间
     */
    "SuspendedStartTime"?: number;
    /**
     * 暂停结束时间
     */
    "SuspendedEndTime"?: number;
    /**
     * 暂停的原因
     */
    "SuspendedReason"?: string;
    /**
     * 工作空间名称
     * @example `prod`
     */
    "WorkspaceName": string;
    /**
     * 告警通知渠道
     */
    "ChannelsRepeatList": string[];
    /**
     * 配额告警通知对象。
     */
    "NotifyTarget"?: {
        /**
         *
         * 订阅者来源
         * @example `LOCAL`
         */
        SubscriberSource: string;
        /**
         * 订阅人的类型
         * @example `USER_GROUP`
         */
        SubscriberType: string;
        /**
         * 通知人id
         * @example `1`
         */
        Subscriber: string;
        /**
         *
         * @example `400`
         */
        SubscriberUuid: string;
        /**
         * 订阅者名称
         * @example `实人认证-灰度测试`
         */
        SubscriberName: string;
    }[];
}
