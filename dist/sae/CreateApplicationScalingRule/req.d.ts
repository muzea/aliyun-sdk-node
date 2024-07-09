export interface CreateApplicationScalingRuleRequest {
    /**
     * 应用ID。
     * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
     */
    "AppId": string;
    /**
     * 自定义的弹性伸缩策略名。应用内，策略名称不可重复，必须以小写字母开头，仅可包含小写字母、数字及短划线（-），不超过32个字符。
     * > 弹性伸缩策略创建成功后，不可修改策略名。
     * @example `timer-0800-2100`
     */
    "ScalingRuleName": string;
    /**
     * 弹性伸缩策略类型。取值说明如下：
     * - **timing**：定时弹性。
     * - **metric**：监控指标弹性。
     * @example `timing`
     */
    "ScalingRuleType": string;
    /**
     * 定时弹性策略的配置。当您选择定时弹性策略或使用SDK设置时，该参数必选。
     * 参数说明如下：
     * - **beginDate**和**endDate**：**beginDate**为起始日期，**endDate**为结束日期，用于配置定时弹性伸缩策略的时间。取值说明如下：
     *     - 当取值均为**null**时，表示长期执行，为默认值。
     *     - 当取值为具体日期时，例如**beginDate**为**2021-03-25**，**endDate**为**2021-04-25**，表示执行有效期为1个月。
     * - **period**：执行定时弹性伸缩策略的周期。取值说明如下：
     *     - **\* \* \***：每天指定时间执行定时策略。
     *     - **\* \* Fri,Mon**：每周指定天数的指定时间执行定时策略，支持多选，GMT+8时区。取值说明如下：
     *         - **Sun**：星期日
     *         - **Mon**：星期一
     *         - **Tue**：星期二
     *         - **Wed**：星期三
     *         - **Thu**：星期四
     *         - **Fri**：星期五
     *         - **Sat**：星期六
     *     - **1,2,3,28,31 \* \***：每月指定日期的指定时间执行定时策略，支持多选。取值范围\[1,31\]。若当月无31日，则跳过该日期执行定时策略。
     * - **schedules**：弹性伸缩策略触发的时间，以及该时间段内需要保持的应用实例数。最多支持20个时间点。参数说明如下：
     *     - **atTime**：触发时间点。支持格式**时:分**，例如**08:00**。
     *     - **targetReplicas**：该参数可以指定应用的实例数，也可以是每次部署最小存活的实例数。取值范围\[1,50\]。
     *         > 每次滚动部署最小存活的实例数建议大于等于**1**，保证业务不中断。如果设置为**0**，应用在升级过程中将会中断业务。
     * @example `{"beginDate":null,"endDate":null,"period":"* * *","schedules":[{"atTime":"08:00","targetReplicas":10},{"atTime":"20:00","targetReplicas":3}]}`
     */
    "ScalingRuleTimer"?: string;
    /**
     * 监控指标弹性策略的配置。当您选择监控指标弹性策略设置时，该参数必选。
     * 参数说明如下：
     * - **maxReplicas**：应用最大实例数。
     * - **minReplicas**：应用最小实例数。
     * - **metricType**：监控指标触发条件。
     *     - **CPU**：CPU使用率。
     *     - **MEMORY**：内存使用率。
     *     - **QPS**：JAVA应用1分钟内单个实例的平均QPS。
     *     - **RT**：JAVA应用1分钟内应用所有服务接口平均RT值。
     *     - **tcpActiveConn**：30秒内单个实例的平均TCP活跃连接数。
     *     - **SLB\_QPS**：15秒内单个实例的平均公网SLB QPS。
     *     - **SLB\_RT**：15秒内公网SLB平均响应时间。
     *     - **INTRANET\_SLB\_QPS**：15秒内单个实例的平均私网SLB QPS。
     *     - **INTRANET\_SLB\_RT**：15秒内私网SLB平均响应时间。
     * - **metricTargetAverageUtilization**：根据不同的**metricType**，设置对应的监控指标的目标值。
     *     - CPU使用率目标值，单位为百分比。
     *     - 内存使用率目标值，单位为百分比。
     *     - QPS，单位为秒。
     *     - 响应时间，单位为毫秒。
     *     - TCP活跃连接数平均值，单位为个/秒。
     *     - 公网SLB QPS，单位为秒。
     *     - 公网SLB响应时间，单位为毫秒。
     *     - 私网SLB QPS，单位为秒。
     *     - 私网SLB响应时间，单位为毫秒。
     * - **slbId**：SLB ID。
     * - **slbProject**：日志服务Project。
     * - **slbLogstore**：日志服务Logstore。
     * - **vport**：SLB监听端口，支持HTTP协议和HTTPS协议。
     * - **scaleUpRules**：应用扩容规则。
     * - **scaleDownRules**：应用缩容规则。
     * - **step**：弹性扩容或缩容步长。单位时间内最多扩容或缩容的实例数。
     * - **disabled**：是否禁止缩容。开启后将永远不会缩容该应用的实例，能有效防止在流量高峰期缩容造成业务风险。
     *     - **true**：开启。
     *     - **false**：关闭。默认值。
     * - **stabilizationWindowSeconds**：扩容或缩容的冷却时间。取值范围\[0, 3600\]，单位为秒。默认为0秒。
     * > 您可以选择设置一个或多个监控指标。当设置多个监控指标时，只要任何一个指标大于或者等于目标值，则应用进行扩容，扩容后实例数不高于应用最大实例数；如果所有指标均小于目标值，则应用进行缩容，缩容后实例数不低于应用最小实例数。
     * @example `{"maxReplicas":3,"minReplicas":1,"metrics":[{"metricType":"CPU","metricTargetAverageUtilization":20},{"metricType":"MEMORY","metricTargetAverageUtilization":30},{"metricType":"tcpActiveConn","metricTargetAverageUtilization":20},{"metricType":"SLB_QPS","MetricTargetAverageUtilization":25,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"},{"metricType":"SLB_RT","MetricTargetAverageUtilization":35,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"}],"scaleUpRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":0},"scaleDownRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":300}}`
     */
    "ScalingRuleMetric"?: string;
    /**
     * 最小存活实例数。取值说明如下：
     * - 如果设置为**0**，应用在升级过程中将会中断业务。
     * - 如果设置为**-1**，最小存活实例数将使用系统推荐值，即取现有实例数的25%。如果当前为5个实例，5×25%=1.25，向上取整后，最小存活实例数为2。
     * > 每次滚动部署最小存活的实例数建议≥1，保证业务不中断。
     * @example `3`
     */
    "MinReadyInstances"?: number;
    /**
     * 最小存活实例数百分比。取值说明如下：
     * - **-1**：初始化值，表示不采用百分比。
     * - **0~100**：单位为百分比，向上取整。例如设置为50%，如果当前为5个实例，则最小存活实例数为3。
     * > 当**MinReadyInstance**和**MinReadyInstanceRatio**同时传递时，且**MinReadyInstanceRatio**的取值非**-1**时，以**MinReadyInstanceRatio**参数为准。假设**MinReadyInstances**取值为**5**，**MinReadyInstanceRatio**取值为**50**，则会用**50**来计算最小存活实例数。
     * @example `-1`
     */
    "MinReadyInstanceRatio"?: number;
    /**
     * 是否启用弹性伸缩策略。取值说明如下：
     * - **true**：启用状态。
     * - **false**：禁用状态。
     * @example `true`
     */
    "ScalingRuleEnable"?: boolean;
}
