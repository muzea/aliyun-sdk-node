export interface CreateApplicationScalingRuleResponse {
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
         * 定时弹性伸缩。
         */
        Timer: {
            /**
             * 定时弹性伸缩策略的短期结束日期。
             * - 当**BeginDate**和**EndDate**取值均为**null**时，表示长期执行，为默认值。
             * - 当取值为具体日期时，例如**BeginDate**为2021-03-25，**EndDate**为2021-04-25，表示执行有效期为1个月。
             * @example `2021-04-25`
             */
            EndDate: string;
            /**
             * 定时弹性伸缩策略的短期起始日期。
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
                 * @example `10`
                 */
                MaxReplicas: number;
                /**
                 * 最小实例数。
                 * @example `5`
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
         * 弹性伸缩策略的更新时间。单位：毫秒。
         * @example `1616642248938`
         */
        UpdateTime: number;
        /**
         * 应用ID。
         * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
         */
        AppId: string;
        /**
         * 弹性伸缩策略的创建时间。单位：毫秒。
         * @example `1616642248938`
         */
        CreateTime: number;
        /**
         * 最近一次禁用弹性伸缩策略的时间。
         * @example `1641882854484`
         */
        LastDisableTime: number;
        /**
         * 是否启用弹性伸缩策略。取值说明如下：
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
                 * 监控指标触发条件。取值说明如下：
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
                 * SLB端口。
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
         * 弹性伸缩策略的名称。
         * @example `test`
         */
        ScaleRuleName: string;
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
