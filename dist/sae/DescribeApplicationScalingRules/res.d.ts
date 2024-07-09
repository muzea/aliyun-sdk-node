export interface DescribeApplicationScalingRulesResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 应用弹性伸缩策略总数。
         * @example `3`
         */
        TotalSize: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 应用弹性伸缩策略列表。
         */
        ApplicationScalingRules: {
            /**
             * 定时弹性伸缩。
             */
            Timer: {
                /**
                 * 定时弹性伸缩策略的短期结束日期。取值说明如下：
                 * - 当**BeginDate**和**EndDate**取值均为**null**时，表示长期执行，为默认值。
                 * - 当取值为具体日期时，例如**BeginDate**为2021-03-25，**EndDate**为2021-04-25，表示执行有效期为1个月。
                 * @example `2021-04-25`
                 */
                EndDate: string;
                /**
                 * 定时弹性伸缩策略的短期起始日期。取值说明如下：
                 * - 当**BeginDate**和**EndDate**取值均为**null**时，表示长期执行，为默认值。
                 * - 当取值为具体日期时，例如**BeginDate**为2021-03-25，**EndDate**为2021-04-25，表示执行有效期为1个月。
                 * @example `2021-03-25`
                 */
                BeginDate: string;
                /**
                 * 单天内触发时间点。
                 */
                Schedules: {
                    /**
                     * 时间点。格式：**时:分**。
                     * @example `08:00`
                     */
                    AtTime: string;
                    /**
                     * 目标实例数。
                     * @example `3`
                     */
                    TargetReplicas: number;
                    /**
                     * 最大实例数。
                     * @example `50`
                     */
                    MaxReplicas: number;
                    /**
                     * 最小实例数。
                     * @example `1`
                     */
                    MinReplicas: number;
                }[];
                /**
                 * 执行定时弹性伸缩策略的周期。取值说明如下：
                 * - **\* \* \***：每天指定时间执行定时策略。
                 * - **\* \* Fri,Mon**：每周指定天数的指定时间执行定时策略，支持多选，GMT+8时区。取值说明如下：
                 *     - **Sun**：星期日
                 *     - **Mon**：星期一
                 *     - **Tue**：星期二
                 *     - **Wed**：星期三
                 *     - **Thu**：星期四
                 *     - **Fri**：星期五
                 *     - **Sat**：星期六
                 * - **1,2,3,28,31 \* \***：每月指定日期的指定时间执行定时策略，支持多选。取值范围\[1,31\]。若当月无31日，则跳过该日期执行定时策略。
                 * @example `* * *`
                 */
                Period: string;
            };
            /**
             * 弹性伸缩策略更新时间。单位：毫秒。
             * @example `1616642248938`
             */
            UpdateTime: number;
            /**
             * 应用ID。
             * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
             */
            AppId: string;
            /**
             * 弹性伸缩策略创建时间。单位：毫秒。
             * @example `1616642248938`
             */
            CreateTime: number;
            /**
             * 最近一次禁用弹性伸缩策略的时间。
             * @example `1641882854484`
             */
            LastDisableTime: number;
            /**
             * 弹性伸缩策略是否启用。取值说明如下：
             * - **true**：启用状态。
             * - **false**：禁用状态。
             * @example `true`
             */
            ScaleRuleEnabled: boolean;
            /**
             * 弹性伸缩策略类型。取值说明如下：
             * - **timing**：定时弹性。
             * - **metric**：监控指标弹性。
             * - **mix**：混合弹性。
             * @example `timing`
             */
            ScaleRuleType: string;
            /**
             * 监控指标弹性伸缩。
             */
            Metric: {
                /**
                 * 监控指标弹性伸缩列表。
                 */
                Metrics: {
                    /**
                     * 监控指标的目标值。
                     * - CPU使用率目标值，单位为百分比。
                     * - 内存使用率目标值，单位为百分比。
                     * - QPS，单位为秒。
                     * - 响应时间，单位为毫秒。
                     * - TCP活跃连接数平均值，单位为个/秒。
                     * - 公网SLB QPS，单位为秒。
                     * - 公网SLB响应时间，单位为毫秒。
                     * - 私网SLB QPS，单位为秒。
                     * - 私网SLB响应时间，单位为毫秒。
                     * @example `20`
                     */
                    MetricTargetAverageUtilization: number;
                    /**
                     * 监控指标的触发条件。取值说明如下：
                     * - **CPU**：CPU使用率。
                     * - **MEMORY**：内存使用率。
                     * - **QPS**：JAVA应用1分钟内单个实例的平均QPS。
                     * - **RT**：JAVA应用1分钟内应用所有服务接口平均RT值。
                     * - **tcpActiveConn**：30秒内单个实例的平均TCP活跃连接数。
                     * - **SLB\_QPS**：15秒内单个实例的平均公网SLB QPS。
                     * - **SLB\_RT**：15秒内公网SLB平均响应时间。
                     * - **INTRANET\_SLB\_QPS**：15秒内单个实例的平均私网SLB QPS。
                     * - **INTRANET\_SLB\_RT**：15秒内私网SLB平均响应时间。
                     * @example `CPU`
                     */
                    MetricType: string;
                    /**
                     * SLB访问日志Project。
                     * @example `test`
                     */
                    SlbProject: string;
                    /**
                     * SLB访问日志Logstore。
                     * @example `test`
                     */
                    SlbLogstore: string;
                    /**
                     * SLB实例端口。
                     * @example `80`
                     */
                    Vport: string;
                    /**
                     * SLB实例ID。
                     * @example `lb-xxx`
                     */
                    SlbId: string;
                }[];
                /**
                 * 监控指标弹性状态。
                 */
                MetricsStatus: {
                    /**
                     * 目标实例数。
                     * @example `2`
                     */
                    DesiredReplicas: number;
                    /**
                     * 下一次监控指标弹性的周期。
                     * @example `3`
                     */
                    NextScaleTimePeriod: number;
                    /**
                     * 当前实例数。
                     * @example `2`
                     */
                    CurrentReplicas: number;
                    /**
                     * 最近一次弹性扩缩的时间。
                     * @example `2022-01-11T08:14:32Z`
                     */
                    LastScaleTime: string;
                    /**
                     * 当前监控指标弹性列表。
                     */
                    CurrentMetrics: {
                        /**
                         * 数据类型。与监控指标关联。
                         * - **Resource**：**cpu**、**memory**的指标取值。
                         * - **Pods**：**tcpActiveConn**的指标取值。
                         * - **External**：**arms**、**slb**的指标取值。
                         * @example `Resource`
                         */
                        Type: string;
                        /**
                         * 当前值。
                         * @example `0`
                         */
                        CurrentValue: number;
                        /**
                         * 触发条件的名称。
                         * - **cpu**：CPU使用率。
                         * - **memory**：内存使用率。
                         * - **arms\_incall\_qps\_v2**：Java应用QPS。
                         * - **arms\_incall\_rt**：Java应用响应时间。
                         * - **tcpActiveConn**：TCP活跃连接数。
                         * - **slb\_incall\_qps**：公网SLB QPS。
                         * - **slb\_incall\_rt**：公网SLB响应时间。
                         * - **intranet\_slb\_incall\_qps**：私网SLB QPS。
                         * - **intranet\_slb\_incall\_rt**：私网SLB响应时间。
                         * @example `cpu`
                         */
                        Name: string;
                    }[];
                    /**
                     * 下一次监控指标弹性列表。
                     */
                    NextScaleMetrics: {
                        /**
                         * 下一次触发扩容条件的监控指标弹性的百分比数值。
                         * @example `21`
                         */
                        NextScaleOutAverageUtilization: number;
                        /**
                         * 下一次触发缩容条件的监控指标弹性的百分比数值。
                         * @example `10`
                         */
                        NextScaleInAverageUtilization: number;
                        /**
                         * 触发条件的名称。
                         * - **cpu**：CPU使用率。
                         * - **memory**：内存使用率。
                         * - **arms\_incall\_qps\_v2**：JAVA应用 QPS。
                         * - **arms\_incall\_rt**：AVA应用响应时间。
                         * - **tcpActiveConn**：TCP活跃连接数。
                         * - **slb\_incall\_qps**：公网SLB QPS。
                         * - **slb\_incall\_rt**：公网SLB响应时间。
                         * - **intranet\_slb\_incall\_qps**：私网SLB QPS。
                         * - **intranet\_slb\_incall\_rt**：私网SLB响应时间。
                         * @example `cpu`
                         */
                        Name: string;
                    }[];
                    /**
                     * 最大实例数。
                     * @example `3`
                     */
                    MaxReplicas: number;
                    /**
                     * 最小实例数。
                     * @example `1`
                     */
                    MinReplicas: number;
                };
                /**
                 * 最大实例数。
                 * @example `3`
                 */
                MaxReplicas: number;
                /**
                 * 最小实例数。
                 * @example `1`
                 */
                MinReplicas: number;
                /**
                 * 应用扩容规则。
                 */
                ScaleUpRules: {
                    /**
                     * 弹性扩容步长。单位时间内最多扩容的实例数。
                     * @example `100`
                     */
                    Step: number;
                    /**
                     * 扩容冷却时间。取值范围\[0, 3600\]，单位为秒。默认为0秒。
                     * @example `300`
                     */
                    StabilizationWindowSeconds: number;
                    /**
                     * 是否禁止缩容。取值说明如下：
                     * - **true**：开启。
                     * - **false**：关闭。
                     * > 开启后将永远不会缩容该应用的实例，能有效防止在流量高峰期缩容造成业务风险。默认关闭。
                     * @example `false`
                     */
                    Disabled: boolean;
                };
                /**
                 * 应用缩容规则。
                 */
                ScaleDownRules: {
                    /**
                     * 弹性缩容步长。单位时间内最多缩容的实例数。
                     * @example `100`
                     */
                    Step: number;
                    /**
                     * 缩容冷却时间。取值范围\[0, 3600\]，单位为秒。默认为0秒。
                     * @example `300`
                     */
                    StabilizationWindowSeconds: number;
                    /**
                     * 是否禁止缩容。取值说明如下：
                     * - **true**：开启。
                     * - **false**：关闭。
                     * > 开启后将永远不会缩容该应用的实例，能有效防止在流量高峰期缩容造成业务风险。默认关闭。
                     * @example `false`
                     */
                    Disabled: boolean;
                };
            };
            /**
             * 弹性伸缩策略名称。
             * @example `test`
             */
            ScaleRuleName: string;
            /**
             * 最小存活实例数。取值说明如下：
             * - 如果设置为**0**，应用在升级过程中将会中断业务。
             * - 如果设置为**-1**，最小存活实例数将使用系统推荐值，即取现有实例数的25%。如果当前为5个实例，5×25%=1.25，向上取整后，最小存活实例数为2。
             * > 每次滚动部署最小存活的实例数建议≥1，保证业务不中断。
             * @example `1`
             */
            MinReadyInstances: number;
            /**
             * 最小存活实例数百分比。取值说明如下：
             * - **-1**：初始化值，表示不采用百分比。
             * - **0~100**：单位为百分比，向上取整。例如设置为50%，如果当前为5个实例，则最小存活实例数为3。
             * > 当和**MinReadyInstanceRatio**同时传递时，且**MinReadyInstanceRatio**的取值非**-1**时，以**MinReadyInstanceRatio**参数为准。假设**MinReadyInstances**取值为**5**，**MinReadyInstanceRatio**取值为**50**，则会用**50**来计算最小存活实例数。
             * @example `-1`
             */
            MinReadyInstanceRatio: number;
        }[];
    };
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 重启应用实例是否成功。取值说明如下：
     * - **true**：重启成功。
     * - **false**：重启失败。
     * @example `true`
     */
    Success: boolean;
}
