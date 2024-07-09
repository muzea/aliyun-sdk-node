export interface DescribeSQLLogsResponse {
    /**
     * 每页包含的记录个数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `A7941C94-B92F-46A0-BD3E-2D**********`
     */
    RequestId: string;
    /**
     * 查询结果页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 结果列表。
     */
    Items: {
        /**
         * 操作类别。
         * @example `DQL`
         */
        OperationClass: string;
        /**
         * 执行状态。
         * - **success**：成功
         * - **fail**：失败
         * @example `success`
         */
        ExecuteState: string;
        /**
         * 执行耗时。
         * @example `2`
         */
        ExecuteCost: number;
        /**
         * SQL语句内容。
         * @example `select 1`
         */
        SQLText: string;
        /**
         * 来源端口。
         * @example `50514`
         */
        SourcePort: number;
        /**
         * 数据库角色。
         * @example `master`
         */
        DBRole: string;
        /**
         * 执行SQL的类型。
         * @example `SELECT`
         */
        OperationType: string;
        /**
         * 来源IP。
         * @example `100.**.**.90`
         */
        SourceIP: string;
        /**
         * SQL执行计划。
         * @example `""`
         */
        SQLPlan: string;
        /**
         * 执行结果返回的行数。
         * @example `1`
         */
        ReturnRowCounts: number;
        /**
         * 数据库名称。
         * @example `adbpgadmin`
         */
        DBName: string;
        /**
         * 执行时间。
         * @example `2021-03-15T17:02:32Z`
         */
        OperationExecuteTime: string;
        /**
         * 扫描行数。
         * @example `1`
         */
        ScanRowCounts: number;
        /**
         * 执行SQL的数据库账号。
         * @example `testadmin`
         */
        AccountName: string;
    }[];
}
