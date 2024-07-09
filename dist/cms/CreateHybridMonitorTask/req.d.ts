export interface CreateHybridMonitorTaskRequest {
    /**
     * 指标仓库名称。
     * 关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
     * @example `aliyun`
     */
    "Namespace": string;
    /**
     * 监控任务描述。
     * @example `阿里云产品数据接入任务。`
     */
    "Description"?: string;
    /**
     * 监控任务名称。
     * - 当`TaskType`为`aliyun_fc`时，输入阿里云产品的数据接入任务名称。
     * - 当`TaskType`为`aliyun_sls`时，输入SLS日志的监控项名称。
     * @example `aliyun_task`
     */
    "TaskName"?: string;
    /**
     * 监控任务类型。取值：
     * - aliyun_fc：阿里云产品的数据接入任务。
     * - aliyun_sls：SLS日志的监控项。
     * @example `aliyun_fc`
     */
    "TaskType": string;
    /**
     * 监控数据的采集目标类型。
     * - 当`TaskType`为`aliyun_fc`时，输入`aliyun_fc`。
     * - 当`TaskType`为`aliyun_sls`时，输入SLS日志的Logstore组名称。
     * @example `aliyun_fc`
     */
    "CollectTargetType": string;
    /**
     * 监控项的采集周期。取值：
     * - 15
     * - 60（默认值）
     * 单位：秒。
     * > 仅当`TaskType`为`aliyun_sls`时，需要设置该参数。
     * @example `60`
     */
    "CollectInterval"?: string;
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * > 仅当`TaskType`为`aliyun_sls`时，需要设置该参数。
     * @example `3607****`
     */
    "GroupId"?: string;
    /**
     * 接入企业云监控的阿里云产品的配置文件。
     * - namespace：阿里云产品的命名空间。关于如何查询阿里云产品的命名空间，请参见[DescribeMetricMetaList](~~98846~~)。
     * - metric_list：阿里云服务的监控项。关于如何查询阿里云产品的监控项，请参见[DescribeMetricMetaList](~~98846~~)。
     * 配置文件示例如下：
     * ```
     * products:
     * - namespace: acs_ecs_dashboard
     *   metric_info:
     *   - metric_list:
     *     - cpu_total
     *     - cpu_idle
     *     - diskusage_utilization
     *     - CPUUtilization
     *     - DiskReadBPS
     *     - InternetOut
     *     - IntranetOut
     *     - cpu_system
     * - namespace: acs_rds_dashboard
     *   metric_info:
     *   - metric_list:
     *     - MySQL_QPS
     *     - MySQL_TPS
     * ```
     * > 当`TaskType`为`aliyun_fc`时，必须设置该参数。
     * @example `products:- namespace: acs_ecs_dashboard  metric_info:  - metric_list:    - cpu_total`
     */
    "YARMConfig"?: string;
    /**
     * 成员ID。
     * 当您通过管理账号调用API时，可以选择将资源目录中的任意成员的阿里云产品接入企业云监控。通过资源目录实现企业跨账号统一监控目标阿里云产品。
     * > 仅当`TaskType`为`aliyun_fc`时，需要设置该参数。
     * @example `120886317861****`
     */
    "TargetUserId"?: string;
    /**
     * 监控项的标签。
     * > 仅当`TaskType`为`aliyun_sls`时，需要设置该参数。
     */
    "AttachLabels"?: {
        /**
         * 监控项的标签值。
         * @example `testValue`
         */
        Value: string;
        /**
         * 监控项的标签键。
         * @example `app_service`
         */
        Name: string;
    }[];
    /**
     * 成员ID。多个成员ID之间用半角逗号（,）分隔。
     * > 仅当您通过管理账号调用本接口时，需要设置该参数。
     * @example `120886317861****`
     */
    "TargetUserIdList"?: string;
    /**
     * SLS日志配置。
     * > 仅当`TaskType`为`aliyun_sls`时，需要设置该参数。
     */
    "SLSProcessConfig"?: {
        /**
         * SLS日志中参数的过滤条件。
         */
        Filter: {
            /**
             * 多个参数过滤条件之间的关系。取值：
             * - and（默认值）：满足所有过滤条件，才处理日志。
             * - or：满足任意过滤条件，即可处理日志。
             * @example `and`
             */
            Relation: string;
            /**
             * SLS日志中参数的过滤条件列表。
             */
            Filters: {
                /**
                 * SLS日志中过滤的参数名称。
                 * @example `code`
                 */
                SLSKeyName: string;
                /**
                 * SLS日志中参数值的过滤方式。取值：
                 * - `contain`：包含。
                 * - `notContain`：不包含。
                 * - `>`：大于。
                 * - `<`：小于。
                 * - `=`：等于。
                 * - `!=`：不等于。
                 * - `>=`：大于等于。
                 * - `<=`：小于等于。
                 * @example `=`
                 */
                Operator: string;
                /**
                 * SLS日志中参数的过滤值。
                 * @example `200`
                 */
                Value: string;
            }[];
        };
        /**
         * SLS日志的统计方式。
         */
        Statistics: {
            /**
             * SLS日志统计的参数名称。
             * @example `name`
             */
            SLSKeyName: string;
            /**
             * 在计算周期内根据选定的统计方法对日志数据进行聚合处理。取值：
             * - count：计数。
             * - sum：求和。
             * - avg：平均值。
             * - max：最大值。
             * - min：最小值。
             * - value：周期内采样。
             * - countps：计算统计周期内指定字段求count后的每秒平均值。
             * - sumps：计算统计周期内指定字段求sum后的每秒平均值。
             * - distinct：去重后计算统计周期内指定字段出现的次数。
             * - distribution：计算字段值在一个区间内的出现次数。
             * - percentile：计算字段值的分布值，例如：P50。
             * @example `count`
             */
            Function: string;
            /**
             * SLS日志统计结果的别名。
             * @example `level_count`
             */
            Alias: string;
            /**
             * SLS日志的统计值。
             * - 当`Function`为`distribution`时，表示统计区间的下限，例如：统计HttpCode的2XX数量，填写200。
             * - 当`Function`为`percentile`时，表示统计分布的百分位，例如：0.5表示P50。
             * @example `200`
             */
            Parameter1: string;
            /**
             * SLS日志的统计值。
             * > 仅当`Function`为`distribution`时，需要设置该参数。表示统计区间的上限，例如：统计HttpCode的2XX数量，填写299。
             * @example `299`
             */
            Parameter2: string;
        }[];
        /**
         * 对数据进行空间维度聚合，相当于SQL中的Group By。
         */
        GroupBy: {
            /**
             * SLS日志统计的参数名称。
             * @example `code`
             */
            SLSKeyName: string;
            /**
             * SLS日志统计结果的别名。
             * @example `ApiResult`
             */
            Alias: string;
        }[];
        /**
         * SLS日志统计结果的扩展字段的四则运算结果。
         */
        Express: {
            /**
             * SLS日志统计结果的扩展字段的四则运算结果。
             * @example `success_count`
             */
            Express: string;
            /**
             * SLS日志统计结果的扩展字段的四则运算结果的别名。
             * @example `SuccRate`
             */
            Alias: string;
        }[];
    };
    /**
     * 其他云厂商接入云监控的主账号ID列表。
     */
    "CloudAccessId"?: string[];
}
