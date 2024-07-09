export interface ModifyHybridMonitorTaskRequest {
    /**
     * 监控任务ID。
     * 关于如何获取监控任务ID，请参见[DescribeHybridMonitorTaskList](~~428624~~)。
     * @example `36****`
     */
    "TaskId": string;
    /**
     * 监控任务名称。
     * 关于如何获取监控任务ID，请参见[DescribeHybridMonitorTaskList](~~428624~~)。
     * @example `SLS_task`
     */
    "TaskName"?: string;
    /**
     * 监控任务描述。
     * @example `SLS日志监控数据。`
     */
    "Description"?: string;
    /**
     * 监控项的采集周期。取值：
     * - 15
     * - 60
     * 单位：秒。
     * @example `15`
     */
    "CollectInterval"?: string;
    /**
     * 监控项的标签。
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
     * SLS日志配置。
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
             * 无。
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
         * 无。
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
}
