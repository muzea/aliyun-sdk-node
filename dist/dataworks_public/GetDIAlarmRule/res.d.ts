export interface GetDIAlarmRuleResponse {
    /**
     * 请求ID。
     * @example `4A807D85-AC9F-55F7-A58F-998D5249CAD9`
     */
    RequestId: string;
    /**
     * 告警规则。
     */
    DIAlarmRule: {
        /**
         * 告警规则ID。
         * @example `34988`
         */
        DIAlarmRuleId: number;
        /**
         * 任务ID，是告警规则关联的任务ID。
         * @example `11170`
         */
        DIJobId: number;
        /**
         * 描述。
         * @example `mysql同步到hologres心跳告警`
         */
        Description: string;
        /**
         * 告警指标类型，可选的枚举值：
         * - Heartbeat（任务状态报警）
         * - FailoverCount（failover次数报警）
         * - Delay（任务延迟报警）
         * @example `Heartbeat`
         */
        MetricType: string;
        /**
         * 告警规则是否启用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 告警触发条件列表，支持多条件。
         */
        TriggerConditions: {
            /**
             * 严重程度，可选的枚举值：
             * - Warning
             * - Critical
             * @example `Warning`
             */
            Severity: string;
            /**
             * 告警计算时间区间，单位分钟。
             * @example `15`
             */
            Duration: number;
            /**
             * 告警阈值。
             * - 任务状态报警：无阈值。
             * - failover次数报警：阈值为failover次数。
             * - 任务延迟报警：阈值为延迟时长，单位秒。
             * @example `5`
             */
            Threshold: number;
        }[];
        /**
         * 告警通知设置。
         */
        NotificationSettings: {
            /**
             * 告警通知渠道，支持多值。
             */
            NotificationChannels: {
                /**
                 * 严重程度，可选的枚举值：
                 * - Warning
                 * - Critical
                 * @example `Warning`
                 */
                Severity: string;
                /**
                 * 通道列表。
                 */
                Channels: string[];
            }[];
            /**
             * 告警通知接收方，支持多值。
             */
            NotificationReceivers: {
                /**
                 * 接收方类型。
                 * - 当告警通知渠道为邮件、电话、短信时，接收方类型为阿里云用户ID。
                 * - 当告警通知渠道为钉钉时，接收方类型为钉钉token。
                 * @example `DingToken`
                 */
                ReceiverType: string;
                /**
                 * 接收方取值列表。
                 */
                ReceiverValues: string[];
            }[];
            /**
             * 告警抑制间隔时长，单位分钟。
             * @example `5`
             */
            InhibitionInterval: number;
        };
        /**
         * 告警规则创建者用户ID。
         * @example `10000001`
         */
        CreatedUid: string;
        /**
         * 告警规则创建时间戳，单位秒。
         * @example `1663573162`
         */
        CreatedTime: number;
        /**
         * 告警规则最近一次更新者用户ID。
         * @example `10000001`
         */
        UpdatedUid: string;
        /**
         * 告警规则最近一次更新时间戳，单位秒。
         * @example `1663573163`
         */
        UpdatedTime: number;
    };
}
