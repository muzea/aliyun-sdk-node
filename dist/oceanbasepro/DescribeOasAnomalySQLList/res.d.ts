export interface DescribeOasAnomalySQLListResponse {
    /**
     * 可疑 SQL 信息列表。
     */
    Data: {
        /**
         * 可疑 SQL 的平均 CPU 时间。
         * @example `100.24`
         */
        AvgCpuTime: number;
        /**
         * 可疑 SQL 的平均响应时间。
         * @example `100.28`
         */
        AvgElapsedTime: number;
        /**
         * 可疑 SQL 的平均获取执行计划的时间。
         * @example `0`
         */
        AvgGetPlanTime: number;
        /**
         * 可疑 SQL 的 CPU 时间。
         * @example `100.23`
         */
        CpuTime: number;
        /**
         * 数据库名称。
         * @example `db_***`
         */
        DbName: string;
        /**
         * 诊断类型。
         */
        DiagTypes: string[];
        /**
         * 诊断详情。
         * > <br>此参数已废弃。
         * @example `-`
         */
        Diagnosis: string;
        /**
         * 可疑 SQL 的总执行次数。
         * @example `1`
         */
        Executions: number;
        /**
         * 最后一次执行可疑 SQL 的时间。
         * @example `2023-04-12T04:38:38Z`
         */
        LastExecutedTime: number;
        /**
         * 危险等级。
         * @example `high`
         */
        RiskLevel: string;
        /**
         * SQL ID。
         * @example `8D6E84****0B8FB1823D199E2CA1****`
         */
        SqlId: string;
        /**
         * SQL 文本前缀。
         * @example `delete /*+ XXX PARALLEL(4) *​/ from`
         */
        SqlTextShort: string;
        /**
         * 可疑 SQL 的建议。
         * @example `review`
         */
        Suggestion: string;
        /**
         * 可疑 SQL 的总响应时间。
         * @example `11452126.36`
         */
        SumElapsedTime: string;
        /**
         * 用户名。
         * @example `test_user`
         */
        UserName: string;
        /**
         * 是否动态 SQL。
         * @example `false`
         */
        DynamicSql: boolean;
        /**
         * SQL 列表。
         */
        SqlList: {
            /**
             * 平均 CPU 时间。
             * @example `100.24`
             */
            AvgCpuTime: number;
            /**
             * 平均响应时间。
             * @example `100.28`
             */
            AvgElapsedTime: number;
            /**
             * 生成计划的平均时间。
             * @example `0`
             */
            AvgGetPlanTime: number;
            /**
             * 总 CPU 时间。
             * @example `100.23`
             */
            CpuTime: number;
            /**
             * 数据库名。
             * @example `test_hsp****eway`
             */
            DbName: string;
            /**
             * 诊断类型。
             */
            DiagTypes: string[];
            /**
             * 诊断详情。
             * > <br>此参数已废弃。
             * @example `-`
             */
            Diagnosis: string;
            /**
             * 总执行次数。
             * @example `100`
             */
            Executions: number;
            /**
             * 最后一次运行时间。
             * @example `2023-04-12T04:38:38Z`
             */
            LastExecutedTime: number;
            /**
             * 危险等级。
             * @example `LOW`
             */
            RiskLevel: string;
            /**
             * SQL ID
             * @example `3A645****789F13DE0CF6D084FF9****`
             */
            SqlId: string;
            /**
             * SQL 文本。
             * @example `select * from test`
             */
            SqlTextShort: string;
            /**
             * 可疑 SQL 的建议。
             * @example `{'Role': 'eSG', 'Result': '100', 'Suggestion': 'TRACER_OTHER_ERR'}`
             */
            Suggestion: string;
            /**
             * 总响应时间。
             * @example `11452126.36`
             */
            SumElapsedTime: string;
            /**
             * 用户名。
             * @example `test_user`
             */
            UserName: string;
            /**
             * 平均数据库时间。
             * @example `100`
             */
            AvgDbTime: number;
            /**
             * 总数据库时间。
             * @example `100`
             */
            SumDbTime: number;
            AvgRetryCount: number;
            SumRetryCount: number;
            AvgLogicalReads: number;
        }[];
        /**
         * 平均数据库时间。
         * @example `100`
         */
        AvgDbTime: number;
        /**
         * 总数据库时间
         * @example `100`
         */
        SumDbTime: number;
        AvgRetryCount: number;
        SumRetryCount: number;
        AvgLogicalReads: number;
    }[];
    /**
     * 请求 ID。
     * @example `473469**-AA6F-4D**-B3DB-A***********`
     */
    RequestId: string;
    /**
     * 总数量。
     * @example `9`
     */
    TotalCount: number;
}
