export interface GetQueryOptimizeDataStatsResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 总数据量。
         * @example `10`
         */
        Total: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageNo: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: string;
        /**
         * 模板数据列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * SQL所属数据库名。
             * @example `testdb01`
             */
            Dbname: string;
            /**
             * SQL模板ID。
             * @example `2e8147b5ca2dfc640dfd5e43d96a****`
             */
            SqlId: string;
            /**
             * SQL类别。
             * @example `INSERT`
             */
            SqlType: string;
            /**
             * SQL模板。
             * @example `select 1`
             */
            Psql: string;
            /**
             * SQL模板下执行最慢的SQL样本。
             * @example `select 2`
             */
            SqlSample: string;
            /**
             * SQL执行次数。
             * @example `100`
             */
            Count: number;
            /**
             * 最大查询时间，单位为秒。
             * @example `1.1`
             */
            MaxQueryTime: number;
            /**
             * 平均查询时间，单位为秒。
             * @example `1.1`
             */
            AvgQueryTime: number;
            /**
             * 最大锁等待时间，单位为秒。
             * @example `0.1`
             */
            MaxLockTime: number;
            /**
             * 平均锁等待时间，单位为秒。
             * @example `0.1`
             */
            AvgLockTime: number;
            /**
             * 最大扫描行数。
             * @example `100000`
             */
            MaxRowsExamined: number;
            /**
             * 平均扫描行数。
             * @example `100.1`
             */
            AvgRowsExamined: number;
            /**
             * 最大返回行数。
             * @example `10000`
             */
            MaxRowsSent: number;
            /**
             * 平均返回行数。
             * @example `100.1`
             */
            AvgRowsSent: number;
            /**
             * 最大影响行数。
             * > 取值为-1说明暂未采集到该字段。
             * @example `10000`
             */
            MaxRowsAffected: number;
            /**
             * 平均影响行数。
             * > 取值为-1说明暂未采集到该字段。
             * @example `100.1`
             */
            AvgRowsAffected: number;
            /**
             * 规则列表。
             */
            RuleList: {
                /**
                 * 规则名，具体信息请参见[查询治理](~~290038~~)。
                 * @example `DAS_NOT_IMPORTANT`
                 */
                Name: string;
                /**
                 * 规则类别：
                 * - **Predefined**：系统预定义。
                 * - **UserDefined**：用户自定义。
                 * @example `Predefined`
                 */
                Type: string;
            }[];
            /**
             * 数据库账号。
             * @example `testUser`
             */
            User: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
