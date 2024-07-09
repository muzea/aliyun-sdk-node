export interface CreateRMSUnifiedAlarmRuleRequest {
    /**
     * 报警规则名称
     * @example `uitest1645783390369`
     */
    "Name": string;
    /**
     * 规则类型
     * @example `CUSTOM`
     */
    "Category": string;
    /**
     * 规则配置信息
     * @example `{\"trafficType\":\"i\",\"methodName\":\"*\",\"faultInjectRuleItems\":[{\"action\":{\"type\":\"REJECT\"},\"ruleType\":\"ABORT\",\"configs\":{\"faultPercent\":100}}]} `
     */
    "RuleConfig": string;
    /**
     * 报警通知结果数据
     */
    "AlarmNodata": number;
    /**
     * Prometheus告警规则的等级。
     * - P1：一般用于影响核心业务可用性，影响范围很大，可能导致严重后果的重大问题的告警通知。
     * - P2：一般用于部分业务出错，会对系统可用性造成一定影响，但是影响范围相对有限的问题的告警通知。
     * - P3：一般用于对可能导致业务出错或者受影响的问题的告警通知，或者在相对重要程度较低的业务发送的告警通知。
     * - P4： 用于需要通知，但是优先级较低，也不会对业务造成影响的场景发送告警通知。
     * - 默认：如果不需要区分告警等级，可以使用默认级别。
     * @example `1`
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
     * @example `1`
     */
    "Step": number;
    /**
     * 通知静默时间
     * @example `300`
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
     * 待删除的订阅数据总量
     */
    "NotifyNodata": number;
    /**
     * 查询告警规则的时间范围
     */
    "NotifyTimeFilterJsonStr"?: string;
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
     * 告警通知对象。取值：accountContact。
     */
    "NotifyTarget"?: {
        /**
         *
         * 订阅者来源
         * @example `LOCAL`
         */
        SubscriberSource: string;
        /**
         * 订阅者类型
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
         * 告警对象的名称
         * @example `实人认证-灰度测试`
         */
        SubscriberName: string;
    }[];
}
