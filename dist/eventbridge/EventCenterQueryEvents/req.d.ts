export interface EventCenterQueryEventsRequest {
    /**
     * 总线名称
     * @example `default`
     */
    "BusName"?: string;
    /**
     * 用于请求下一页检索的结果。
     * @example `100`
     */
    "NextToken"?: string;
    /**
     * 允许返回的最大结果数目。 取值范围：0~10000，默认100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * Body参数
     */
    "Body": {
        /**
         * Schema ID。
         * @example `ecs:GeneralSchema`
         */
        SchemaId: string;
        /**
         * 查询类型：
         * - **timeseries**：查询时序数据
         * - **table**：查询表格数据
         * - **timeseries_and_table**：同时查询时序数据和表格数据
         * @example `timeseries_and_table`
         */
        QueryType: string;
        /**
         * 查询参数。
         */
        Parameters: {
            /**
             * 将数据集按照特定维度（列名）进一步拆分。
             */
            Breakdowns: string[];
            /**
             * 对指定的列用操作符计算。
             */
            Calculations: {
                /**
                 * 操作符。
                 * @example `COUNT_DISTINCT`
                 */
                Op: string;
                /**
                 * 列名。
                 * @example `source`
                 */
                Column: string;
            }[];
            /**
             * 筛选条件列表。
             */
            Filters: {
                /**
                 * 列名。
                 * @example `source`
                 */
                Column: string;
                /**
                 * 操作符。
                 * @example `=`
                 */
                Op: string;
                /**
                 * 与操作符配合使用的值。
                 */
                Values: string[];
            }[];
            /**
             * 筛选条件组合的逻辑。
             * @example `AND`
             */
            FilterCombination: string;
            /**
             * 时间粒度，即查询时序数据的最小时间单元，单位秒，最小值为1。
             * 此参数为建议值，实际粒度以返回值为准。
             * @example `30`
             */
            Granularity: number;
            /**
             * 对查询结果排序，仅对QueryType为table的查询有意义。
             */
            Orders: {
                /**
                 * 操作符。
                 * @example `AVG`
                 */
                Op: string;
                /**
                 * 列名。
                 * @example `source`
                 */
                Column: string;
                /**
                 * 是否降序排列
                 * @example `true`
                 */
                Desc: boolean;
            }[];
            /**
             * 本次查询的起始位置，从 0 开始。
             * @example `0`
             */
            Offset: number;
            /**
             * 查询事件的最大个数，取值范围为1~10000。
             * @example `100`
             */
            Limit: number;
            /**
             * 时间范围，单位毫秒，最小值1000。
             * @example `1000000`
             */
            TimeRange: number;
            /**
             * 查询事件的开始时间戳，单位毫秒。
             * @example `1687860901814`
             */
            StartTime: number;
            /**
             * 查询事件的结束时间戳，单位毫秒。
             * @example `1687861201814`
             */
            EndTime: number;
        };
    };
}
