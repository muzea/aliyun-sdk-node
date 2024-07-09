export interface ListAlertsResponse {
    /**
     * 请求ID。
     * @example `2FC13182-B9AF-4E6B-BE51-72669B7C****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PageBean: {
        /**
         * 查询到的告警总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页展示的告警数。
         * @example `20`
         */
        Size: number;
        /**
         * 告警发送历史信息组。
         */
        ListAlerts: {
            /**
             * 告警名称。
             * @example `告警测试`
             */
            AlertName: string;
            /**
             * 告警等级。告警严重程度从P6、P5、P4、P3、P2、P1逐级上升。
             * @example `P6`
             */
            Severity: string;
            /**
             * 告警状态：
             * - 0：待处理
             * - 1：处理中
             * - 2：已处理
             * @example `0`
             */
            State: number;
            /**
             * 通知策略ID。
             * @example `12345`
             */
            DispatchRuleId: number;
            /**
             * 通知策略名称。
             * @example `钉群通知`
             */
            DispatchRuleName: string;
            /**
             * 告警创建时间。
             * @example `2022-01-18 00:21:35`
             */
            CreateTime: string;
            /**
             * 活动列表。
             */
            Activities: {
                /**
                 * 活动操作时间。
                 * @example `2021-12-20 19:08:57`
                 */
                Time: string;
                /**
                 * 活动类型。
                 * - 1：认领
                 * - 2：取消认领
                 * - 3：评论
                 * - 4：关闭
                 * - 5：通知
                 * @example `1`
                 */
                Type: number;
                /**
                 * 处理人名称。
                 * @example `运维A`
                 */
                HandlerName: string;
                /**
                 * 活动描述。
                 * @example `[告警认领]认领了该告警`
                 */
                Description: string;
                /**
                 * 告警通知内容。
                 * @example `【通知策略: 钉群通知】 主机监控 节点机IP: 10.76.XX.XX 节点机内存利用率最近1分钟求平均 >= 1.0 %, 当前值84.7454 %`
                 */
                Content: string;
            }[];
            /**
             * 事件列表。
             */
            AlertEvents: {
                /**
                 * 事件名称。
                 * @example `测试触发的告警`
                 */
                AlertName: string;
                /**
                 * 事件等级。
                 * - critical
                 * - error
                 * - warning
                 * - info
                 * @example `warning`
                 */
                Severity: string;
                /**
                 * 事件状态。
                 * - Active：未恢复
                 * - Silenced：静默
                 * - Resolved：已恢复
                 * @example `Active`
                 */
                State: string;
                /**
                 * 事件开始时间。
                 * @example `2022-01-18 00:14:00`
                 */
                StartTime: string;
                /**
                 * 事件结束时间。
                 * @example `2022-01-19 17:10:31`
                 */
                EndTime: string;
                /**
                 * 事件创建时间。
                 * @example `2022-01-19 17:05:42`
                 */
                ReceiveTime: string;
                /**
                 * 事件对应的集成名称。
                 * @example `ARMS`
                 */
                IntegrationName: string;
                /**
                 * 事件对应的集成类型。
                 * - ARMS
                 * - CLOUD_MONITOR
                 * - MSE
                 * - ARMS\_CLOUD_DIALTEST
                 * - PROMETHEUS
                 * - LOG_SERVICE
                 * - CUSTOM
                 * - ARMS_PROMETHEUS
                 * - ARMS\_APP_MON
                 * - ARMS\_FRONT_MON
                 * - ARMS_CUSTOM
                 * - XTRACE
                 * - GRAFANA
                 * - ZABBIX
                 * - SKYWALKING
                 * - EVENT_BRIDGE
                 * - NAGIOS
                 * - OPENFALCON
                 * - ARMS_INSIGHTS
                 * @example `ARMS_APP_MON`
                 */
                IntegrationType: string;
                /**
                 * 事件地址。
                 * @example `http://arms.console.aliyun.com`
                 */
                GeneratorURL: string;
                /**
                 * 事件描述。
                 * @example `主机监控 节点机IP: 10.76.XX.XX 节点机内存利用率最近1分钟求平均 >= 1.0 %, 当前值84.7454 %`
                 */
                Description: string;
                /**
                 * 注释列表。
                 * @example `{ "_aliyun_arms_alert_value":"4.0" "_aliyun_arms_alert_traceId":"ac10c43116421327442277073d5461-105075299"}`
                 */
                Annotations: string;
                /**
                 * 标签列表。
                 * @example `{ "severity":"warning" "_aliyun_arms_alert_level":"ERROR" "_aliyun_arms_entropy":"0.30170457417889235"}`
                 */
                Labels: string;
            }[];
            /**
             * 告警ID
             * @example `2279`
             */
            AlertId: number;
            /**
             * 告警解决方案
             * @example `重启解决`
             */
            Solution: string;
            Owner: string;
            Handler: string;
            AcknowledgeTime: number;
            RecoverTime: number;
            NotifyRobots: string;
            Describe: string;
        }[];
    };
}
