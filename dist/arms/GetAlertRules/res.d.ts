export interface GetAlertRulesResponse {
    /**
     * 请求ID。
     * @example `337B8F7E-0A64-5768-9225-E9B3CF******`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的告警规则总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每一页告警规则数量。
         * @example `20`
         */
        Size: number;
        /**
         * 告警规则列表。
         */
        AlertRules: {
            /**
             * 告警规则ID。
             * @example `5730***`
             */
            AlertId: number;
            /**
             * 告警规则名称。
             * @example `arms-test`
             */
            AlertName: string;
            /**
             * 阿里云账号ID。
             * @example `1131971649******`
             */
            UserId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 告警规则类型。
             * - APPLICATION_ MONITORING_ ALERT_RULE：应用监控告警规则。
             * - BROWSER_ MONITORING_ ALERT_RULE：前端监控告警规则。
             * - PROMETHEUS_ MONITORING_ ALERT_RULE：Prometheus监控告警规则。
             * @example `APPLICATION_MONITORING_ALERT_RULE`
             */
            AlertType: string;
            /**
             * 告警规则运行状态。
             * - RUNNING：运行中
             * - STOPPED：已停止
             * - PAUSED：被暂停
             * > PAUSED状态说明告警规则状态异常，被系统主动暂停，可能原因有告警规则唯独值过大或者关联集群已经被删除等。
             * @example `RUNNING`
             */
            AlertStatus: string;
            /**
             * 告警规则创建时间的时间戳，单位为毫秒。
             * @example `1640333981000`
             */
            CreatedTime: number;
            /**
             * 告警规则更新时间的时间戳，单位为毫秒。
             * @example `1640333981000`
             */
            UpdatedTime: number;
            /**
             * 扩展字段。
             * > 如果是存量应用监控告警规则，字段会包含联系人、告警模板、通知内容等信息。
             * @example `{\"alarmContext\":\"{\\\"content\\\":\\\"报警名称:$报警名称\\\\n筛选条件: $筛选\\\\n报警时间: $报警时间\\\\n报警内容: $报警内容\\\\n注意！：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！\\\",\\\"subTitle\\\":\\\"\\\"}\",\"alertWays\":\"[0,1]\",\"contactGroupIds\":\"381,5075\",\"notice\":\"{\\\"endTime\\\":1480607940000,\\\"noticeEndTime\\\":1480607940000,\\\"noticeStartTime\\\":1480521600000,\\\"startTime\\\":1480521600000}\"}`
             */
            Extend: string;
            /**
             * 通知策略名称。
             * @example `ALERT_MANAGER`
             */
            NotifyStrategy: string;
            /**
             * 应用监控或前端监控告警关联应用的PID。
             */
            Pids: string[];
            /**
             * 应用监控或前端监控是否开启新创建应用追加到此告警规则功能。
             * - `true`：开启
             * - `false`：不开启
             * @example `false`
             */
            AutoAddNewApplication: boolean;
            /**
             * 应用监控或前端监控告警规则的告警指标类型。
             * @example `JVM`
             */
            MetricsType: string;
            /**
             * 应用监控或前端监控的告警规则内容。
             */
            AlertRuleContent: {
                /**
                 * 应用监控或前端监控多个告警条件之间的触发逻辑。
                 * - OR：满足下述任何一个条件。
                 * - AND：同时满足下述条件。
                 * @example `OR`
                 */
                Condition: string;
                /**
                 * 应用监控或前端监控告警规则的告警条件。
                 */
                AlertRuleItems: {
                    /**
                     * 最近N分钟。
                     * @example `1`
                     */
                    N: number;
                    /**
                     * 具体告警条件的指标。
                     * @example `appstat.jvm.non_heap_used`
                     */
                    MetricKey: string;
                    /**
                     * 告警条件聚合方式。
                     * - AVG：平均
                     * - SUM：求和
                     * - MAX：最大值
                     * - MIN：最小值
                     * @example `AVG`
                     */
                    Aggregate: string;
                    /**
                     * 告警条件的判断条件。
                     * - CURRENT_GTE：大于或等于
                     * - CURRENT_LTE：小于或等于
                     * - PREVIOUS_UP：环比上升百分比
                     * - PREVIOUS_DOWN：环比下降百分比
                     * - HOH_UP：与上小时同比上升百分比
                     * - HOH_DOWN：与上小时同比下降百分比
                     * - DOD_UP：与昨日同比上升百分比
                     * - DOD_DOWN：与昨日同比下降百分比
                     * @example `CURRENT_GTE`
                     */
                    Operator: string;
                    /**
                     * 告警条件阈值。
                     * @example `1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 应用监控或前端监控告警规则的过滤项。
             */
            Filters: {
                /**
                 * 应用监控或前端监控告警规则的过滤项信息。
                 */
                DimFilters: {
                    /**
                     * 过滤条件Key。
                     * @example `rootIp`
                     */
                    FilterKey: string;
                    /**
                     * 过滤条件操作关系。
                     * @example `ALL`
                     */
                    FilterOpt: string;
                    /**
                     * 过滤条件参数信息。
                     */
                    FilterValues: string[];
                }[];
                /**
                 * 前端监控告警规则的自定义过滤条件。
                 */
                CustomSLSFilters: {
                    /**
                     * 过滤条件Key。
                     * @example `username`
                     */
                    Key: string;
                    /**
                     * 过滤条件操作关系。
                     * - =：等于
                     * - not：不等于
                     * @example `=`
                     */
                    Opt: string;
                    /**
                     * 过滤条件参数值。
                     * @example `test`
                     */
                    Value: string;
                    /**
                     * 仅用于区分前端监控日志类型，其它过滤条件不包含此字段。
                     * @example `null`
                     */
                    T: string;
                    /**
                     * 此筛选条件是否在前端展示。
                     * @example `false`
                     */
                    Show: boolean;
                }[];
                /**
                 * 聚合维度信息。
                 */
                CustomSLSGroupByDimensions: string[];
                /**
                 * 设置筛选条件信息。
                 */
                CustomSLSWheres: string[];
            };
            /**
             * Prometheus监控告警规则的告警检查类型。
             * - STATIC： 静态阈值类型。
             * - CUSTOM：自定义PromQL类型。
             * @example `STATIC`
             */
            AlertCheckType: string;
            /**
             * Prometheus监控告警规则的集群ID。
             * @example `ceba9b9ea5b924dd0b6726d2de6******`
             */
            ClusterId: string;
            /**
             * Prometheus告警规则的告警分组ID。
             * - -1：自定义PromQL
             * - 1：Kubernetes负载
             * - 15：Kubernetes节点
             * @example `1`
             */
            AlertGroup: number;
            /**
             * Prometheus告警规则的PromQL语句。
             * @example `node_memory_MemAvailable_bytes{} / node_memory_MemTotal_bytes{} * 100`
             */
            PromQL: string;
            /**
             * Prometheus告警规则的持续时间。
             * @example `1`
             */
            Duration: string;
            /**
             * Prometheus告警规则的等级。
             * - P1：一般用于影响核心业务可用性，影响范围很大，可能导致严重后果的重大问题的告警通知。
             * - P2：一般用于部分业务出错，会对系统可用性造成一定影响，但是影响范围相对有限的问题的告警通知。
             * - P3：一般用于对可能导致业务出错或者受影响的问题的告警通知，或者在相对重要程度较低的业务发送的告警通知。
             * - P4： 用于需要通知，但是优先级较低，也不会对业务造成影响的场景发送告警通知。
             * - 默认：如果不需要区分告警等级，可以使用默认级别。
             * @example `P2`
             */
            Level: string;
            /**
             * Prometheus告警规则的告警内容。
             * @example `命名空间: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / 容器: {{$labels.container}} CPU使用率{{$labels.metrics_params_opt_label_value}} {{$labels.metrics_params_value}}%, 当前值{{ printf "%.2f" $value }}%`
             */
            Message: string;
            /**
             * Prometheus告警规则的标签。
             */
            Labels: {
                /**
                 * 标签键。
                 * @example `123`
                 */
                Name: string;
                /**
                 * 标签值。
                 * @example `abc`
                 */
                Value: string;
            }[];
            /**
             * Prometheus告警规则的注释。
             */
            Annotations: {
                /**
                 * 注释键。
                 * @example `123`
                 */
                Name: string;
                /**
                 * 注释值。
                 * @example `abc`
                 */
                Value: string;
            }[];
            /**
             * 告警规则标签。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `type`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `prod`
                 */
                Value: string;
            }[];
        }[];
    };
}
