export interface DescribeAppliedAdvicesResponse {
    /**
     * 详情。
     */
    Items: {
        /**
         * 建议ID。
         * @example `7417db9c-914d-43f3-a123-4d0e448f****`
         */
        AdviceId: string;
        /**
         * 建议下发的时间，格式：yyMMddHHmm（UTC时间）。
         * @example `2208131600`
         */
        SubmitTime: string;
        /**
         * 建议的下发状态。
         * 取值说明：
         * - **SUCCEED**：成功。
         * - **FAILED**：失败。
         * @example `SUCCEED`
         */
        SubmitStatus: string;
        /**
         * 应用建议的SQL语句。
         * @example `alter table `schema1`.`table1` drop key col1_1_idx`
         */
        SQL: string;
        /**
         * 回滚建议的SQL语句。
         * @example `alter table `schema1`.`table1` add key col1_1_idx(col1)`
         */
        RollbackSQL: string;
        /**
         * 执行建议的任务的状态。
         * 取值说明：
         * - **SUCCEED**：成功。
         * - **FAILED**：失败。
         * @example `SUCCEED`
         */
        JobStatus: string;
        /**
         * 建议的收益。
         * @example `节省0.4 GB的存储空间`
         */
        Benefit: string;
        /**
         * 执行Build任务的SQL语句。
         * @example `build table `schema1`.`table1``
         */
        BuildSQL: string;
        /**
         * 返回的建议总数，取值为：大于等于0且不超过Integer数据类型的最大值，默认值为0。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 每页记录数，取值：
         * - **30**（默认值）
         * - **50**
         * - **100**
         * @example `30`
         */
        PageSize: number;
        /**
         * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 数据库名。
         * @example `adb_demo`
         */
        SchemaName: string;
        /**
         * 表名。
         * @example `test`
         */
        TableName: string;
    }[];
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `84489769-3065-5A28-A4CB-977CD426F1C3`
     */
    RequestId: string;
    /**
     * 返回的结果总数，取值为：大于等于0且不超过Integer数据类型的最大值，默认值为0。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 数据库名和表名的字符串拼接列表。
     */
    SchemaTableNames: string[];
}
