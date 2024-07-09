export interface CreateOrUpdateAlertRuleRequest {
    /**
     * 告警规则ID。
     * - 不填代表创建新的告警规则。
     * - 填写代表修改指定告警规则信息。
     * @example `546xxx`
     */
    "AlertId"?: number;
    /**
     * 告警规则名称。
     * @example `Alert Rule Demo`
     */
    "AlertName": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警规则类型：
     * - APPLICATION\_MONITORING\_ALERT_RULE：应用监控告警规则。
     * - BROWSER\_MONITORING\_ALERT_RULE：前端监控告警规则。
     * - PROMETHEUS\_MONITORING\_ALERT_RULE：Prometheus监控告警规则。
     * - XTRACE_MONITORING_ALERT_RULE：可观测链路OpenTelemetry版监控告警规则。
     * - EBPF_MONITORING_ALERT_RULE：EBPF监控告警规则。
     * - RUM_MONITORING_ALERT_RULE：用户体验监控告警规则。
     * @example `APPLICATION_MONITORING_ALERT_RULE`
     */
    "AlertType": string;
    /**
     * 设置告警规则运行状态。
     * - RUNNING（默认）：启动
     * - STOPPED：停止
     * @example `RUNNING`
     */
    "AlertStatus"?: string;
    /**
     * 指定通知策略。
     * - null：不指定通知策略。当完成创建告警规则后，您可以通过新建通知策略并指定匹配规则和匹配条件（如告警规则名称等）来匹配该告警规则。当该告警规则被触发产生告警事件后，告警信息会被发送给通知策略中指定的联系人或联系人组。
     * - 通知策略ID：指定某个通知策略。若选择此项，ARMS会自动在对应的通知策略添加一条匹配规则，匹配规则内容为告警规则ID（以告警规则名称的方式呈现），以确保当前告警规则产生的告警事件一定可以被选择的通知策略匹配到。
     * @example `569xxx`
     */
    "NotifyStrategy"?: string;
    /**
     * 应用监控或前端监控告警规则关联应用的PID。
     * @example `["b590lhguqs@40d8deedfa9******"]`
     */
    "Pids"?: string;
    /**
     * 应用监控或前端监控是否开启新创建应用追加到此告警规则功能。
     * - `true`：开启
     * - `false`：不开启
     * @example `false`
     */
    "AutoAddNewApplication"?: boolean;
    /**
     * 应用监控或前端监控告警规则的告警指标类型。详细信息请参见下方表格。
     * @example `jvm`
     */
    "MetricsType"?: string;
    /**
     * 应用监控或前端监控告警规则的筛选条件。
     * 格式如下：
     * ```
     * "DimFilters": [
     * {
     *  "FilterOpt": "ALL",
     *  "FilterValues": [],         //过滤条件Value。
     *  "FilterKey": "rootIp"     //过滤条件Key。
     * }
     * ]
     * ```
     * **FilterOpt**取值如下：
     * - STATIC： 固定匹配此维度值。
     * - ALL：遍历所有维度值。注意：区间检测不支持遍历操作。
     * - DISABLE：聚合所有维度值为一个值（求和）。
     * @example `{"DimFilters": [             {               "FilterOpt": "ALL",               "FilterValues": [],               "FilterKey": "rootIp"             }           ]         }`
     */
    "Filters"?: string;
    /**
     * 应用监控或前端监控的告警规则内容。**AlertRuleContent**模板如下，模板中各字段含义请参见表格下方的补充说明。
     * ```json
     * {
     *     "Condition": "OR",
     *      "AlertRuleItems": [
     *              { "Operator": "CURRENT_LTE",
     *                  "MetricKey": "appstat.jvm.threadcount",
     *                  "Value": 1000,
     *                  "Aggregate": "AVG",
     *                   "N": 10,
     *                   "Tolerability": 169
     *             }
     *        ]
     *   }
     * ```
     * > 不同的**MetricsType**，**AlertRuleItems.MetricKey**可使用的条件字段不同。应用监控和前端监控支持的指标类型以及各指标对应的告警规则字段，请参见表格下方的补充说明。
     * @example `{
        "Condition": "OR",
         "AlertRuleItems": [
                 { "Operator": "CURRENT_LTE",
                     "MetricKey": "appstat.jvm.threadcount",
                     "Value": 1000,
                     "Aggregate": "AVG",
                      "N": 10,
                      "Tolerability": 169
                }
           ]
      }`
     */
    "AlertRuleContent"?: string;
    /**
     * Prometheus监控告警规则的告警检查类型。
     * - STATIC： 静态阈值类型。 使用静态阈值时，必须指定**MetricsKey**参数，请参考表格下方关于Prometheus监控的**MetricsKey**参数说明填写。
     * - CUSTOM：自定义PromQL类型。使用自定义PromQL时，必须指定**PromQL**、**Duration**和**Message**参数，用以创建Prometheus告警规则。
     * @example `STATIC`
     */
    "AlertCheckType"?: string;
    /**
     * Prometheus监控告警规则的集群ID。
     * @example `ceba9b9ea5b924dd0b6726d2de6******`
     */
    "ClusterId"?: string;
    /**
     * Prometheus告警规则的告警分组ID。
     * - -1：自定义PromQL
     * - 1：Kubernetes负载
     * - 15：Kubernetes节点
     * @example `-1`
     */
    "AlertGroup"?: number;
    /**
     * Prometheus告警规则的PromQL语句。
     * @example `node_memory_MemAvailable_bytes{} / node_memory_MemTotal_bytes{} * 100`
     */
    "PromQL"?: string;
    /**
     * Prometheus告警规则的持续时间，单位为分钟，取值范围[0,1440]。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * Prometheus告警规则的等级。
     * - P1：一般用于影响核心业务可用性，影响范围很大，可能导致严重后果的重大问题的告警通知。
     * - P2：一般用于部分业务出错，会对系统可用性造成一定影响，但是影响范围相对有限的问题的告警通知。
     * - P3：一般用于对可能导致业务出错或者受影响的问题的告警通知，或者在相对重要程度较低的业务发送的告警通知。
     * - P4： 用于需要通知，但是优先级较低，也不会对业务造成影响的场景发送告警通知。
     * - 默认：如果不需要区分告警等级，可以使用默认级别。
     * @example `P2`
     */
    "Level"?: string;
    /**
     * Prometheus告警规则的告警内容。
     * @example `命名空间: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / 容器: {{$labels.container}} 内存使用率超过80%, 当前值{{ printf \\\"%.2f\\\" $value }}%`
     */
    "Message"?: string;
    /**
     * Prometheus告警规则的标签。
     * @example `[  { "Value": "cms_polardb",             "Name": "_aliyun_cloud_product"           }         ]`
     */
    "Labels"?: string;
    /**
     * Prometheus告警规则的注释。
     * @example `[ { "Value": "PolarDB 慢查询数量",             "Name": "_aliyun_display_name"           }`
     */
    "Annotations"?: string;
    /**
     * 告警指标。新建Prometheus告警规则时，如果**AlertCheckType**设置为**STATIC**，**MetricsKey**必填。
     * > 不同的**AlertGroup**，对应的告警指标不同，**AlertGroup**和**MetricsKey**的对应关系请参见表格下方的补充说明。
     * @example `pop.status.error`
     */
    "MetricsKey"?: string;
    /**
     * 告警规则标签（阿里云统一标签）。
     */
    "Tags"?: {
        /**
         * 标签的键(key)。
         * @example `owner`
         */
        Key: string;
        /**
         * 标签的值(value)。
         * @example `John`
         */
        Value: string;
    }[];
    /**
     * 应用标签。用于应用监控告警规则，筛选告警规则关联的应用。
     */
    "MarkTags"?: {
        /**
         * 标签键。
         * @example `service`
         */
        Key: string;
        /**
         * 标签值。
         * @example `proudct`
         */
        Value: string;
    }[];
    /**
     * 数据配置。dataRevision字段指定指标无数据时的数据修复方式。
     * - 补零    0
     * - 补一    1
     * - 补null  2  （默认，不触发告警）
     * @example `{
        "dataRevision": 2
    }`
     */
    "DataConfig"?: string;
    /**
     * 生效时间及通知时间。用于兼容旧版规则。
     * @example `-`
     */
    "Notice"?: string;
    /**
     * 报警发送通道配置。用于兼容旧版规则。
     * @example `-`
     */
    "AlertPiplines"?: string;
    /**
     * 通知模式。普通模式或极简模式。
     * @example `NORMAL_MODE`
     */
    "NotifyMode"?: string;
    /**
     * 创建Prometheus告警规则时传入，后台会校验是否存在此产品，用于区分云产品过滤查询
     */
    "Product"?: string;
    "AutoAddTargetConfig"?: string;
}
