export interface DescribeAnomalySQLListResponse {
    /**
     * 总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 可疑 SQL 列表。
     */
    AnomalySQLList: {
        /**
         * 返回数据序号
         * @example `1`
         */
        Key: number;
        /**
         * 诊断规则
         * @example `全表扫描有索引未用`
         */
        DiagnosisRule: string;
        /**
         * SQL 文本。
         * @example `SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC`
         */
        SQLText: string;
        /**
         * 建议。
         * @example `请确认业务场景、数据分布变化、请求量突涨、执行计划变化等情况`
         */
        Suggestion: string;
        /**
         * 数据库名。
         * @example `database1`
         */
        DbName: string;
        /**
         * 请求时间（零时区）。
         * @example `2022-01-11T07:08:00Z`
         */
        RequestTimeUTCString: string;
        /**
         * 平均 CPU 时间。单位：毫秒。
         * @example `50.13`
         */
        CpuTime: number;
        /**
         * SQLID。
         * @example `99E9D3BF****B486239E6C7BC79B****`
         */
        SQLId: string;
        /**
         * 诊断信息。
         * @example `全表扫描有索引未用`
         */
        Diagnosis: string;
        /**
         * 请求时间。单位：毫秒。
         * @example `50.00`
         */
        RequestTime: number;
        /**
         * 执行次数。
         * @example `89043`
         */
        Executions: number;
        /**
         * 用户名。
         * @example `tester`
         */
        UserName: string;
    }[];
}
