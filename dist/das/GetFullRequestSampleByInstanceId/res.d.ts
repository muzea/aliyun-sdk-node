export interface GetFullRequestSampleByInstanceIdResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0A74B755-98B7-59DB-8724-1321B394****`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 执行SQL的时间，格式为Unix时间戳，单位为毫秒。
         * @example `1660100753556`
         */
        Timestamp: number;
        /**
         * SQL ID。
         * @example `651b56fe9418d48edb8fdf0980ec****`
         */
        SqlId: string;
        /**
         * SQL样本。
         * @example `select * from testdb01 where ****`
         */
        Sql: string;
        /**
         * 数据库名。
         * @example `dbtest`
         */
        Database: string;
        /**
         * 执行耗时，单位为秒。
         * @example `0.409789`
         */
        Rt: number;
        /**
         * 执行SQL的用户名称。
         * @example `testuser`
         */
        User: string;
        /**
         * 锁等待时长，单位为秒。
         * @example `0.0137`
         */
        LockWaitTime: number;
        /**
         * 逻辑读。
         * @example `165848`
         */
        LogicalRead: number;
        /**
         * 物理同步读取。
         * @example `0`
         */
        PhysicalSyncRead: number;
        /**
         * 物理异步读取。
         * @example `0`
         */
        PhysicalAsyncRead: number;
        /**
         * 总扫描行数。
         * > 目前支持该字段的数据库：RDS MySQL、RDS PostgreSQL、PolarDB MySQL版。
         * @example `2048576`
         */
        RowsExamined: number;
        /**
         * 返回行数。
         * @example `14`
         */
        RowsReturned: number;
        /**
         * 访问来源。
         * @example `172.17.XX.XX`
         */
        OriginHost: string;
        /**
         * 扫描行数。
         * @example `0`
         */
        ScanRows: number;
        /**
         * 更新行数。
         * @example `0`
         */
        UpdateRows: number;
        /**
         * SQL语句的类型，取值包括：**SELECT**、**INSERT**、**UPDATE**、**DELETE**、**LOGIN**、**LOGOUT**、**MERGE**、**ALTER**、**CREATEINDEX**、**DROPINDEX**、**CREATE**、**DROP**、**SET**、**DESC**、**REPLACE**、**CALL**、**BEGIN**、**DESCRIBE**、**ROLLBACK**、**FLUSH**、**USE**、**SHOW**、**START**、**COMMIT**和**RENAME**。
         * @example `SELECT`
         */
        SqlType: string;
        /**
         * PolarDB-X 2.0计算节点（CN）的DN请求数。
         * @example `0`
         */
        Scnt: number;
        /**
         * PolarDB-X 2.0计算节点（CN）的更新/返回行数。
         * @example `0`
         */
        Rows: number;
        /**
         * PolarDB-X 2.0计算节点（CN）的拉取行数。
         * @example `0`
         */
        Frows: number;
    }[];
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
