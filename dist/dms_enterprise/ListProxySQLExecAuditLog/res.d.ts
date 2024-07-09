export interface ListProxySQLExecAuditLogResponse {
    /**
     * 操作总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `50ECB006-2C35-5FCA-91B9-01987A0B****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidStartTime`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Specified parameter StartTime is not valid.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    ProxySQLExecAuditLogList: {
        /**
         * 安全代理审计信息列表。
         */
        ProxySQLExecAuditLog: {
            /**
             * 操作时间戳，格式为标准的UNIX_TIMESTAMP时间戳形式。
             * @example `1636876446000`
             */
            OpTime: string;
            /**
             * 操作人昵称。
             * @example `testNickName`
             */
            UserName: string;
            /**
             * 操作人ID。
             * @example `4****`
             */
            UserId: number;
            /**
             * 实例名称。
             * @example `pc-uf662nrg017c6****.mysql.polardb.rds.aliyuncs.com:3306【test】`
             */
            InstanceName: string;
            /**
             * 实例ID。
             * @example `4***`
             */
            InstanceId: number;
            /**
             * 数据库名称。
             * @example `test_db`
             */
            SchemaName: string;
            /**
             * SQL类型，常见SQL类型返回值说明如下：
             * - **SELECT**：查询
             * - **INSERT**：插入
             * - **DELETE**：删除
             * - **CREATE_TABLE**：创建表
             * > 您可以在控制台页面上方操作审计->安全访问代理中查看更多SQL类型返回值。
             * @example `SELECT`
             */
            SQLType: string;
            /**
             * 已执行的SQL语句。
             * @example `select 1;`
             */
            SQL: string;
            /**
             * 执行状态，返回值说明如下：
             * - **FAIL**：执行失败
             * - **CANCEL**：取消执行
             * - **SUCCESS**：执行成功
             * @example `SUCCESS`
             */
            ExecState: string;
            /**
             * 表示执行SQL语句后返回的总行数。比如，SQL语句为查询语句，此参数返回的是查询数据的总行数。
             * @example `1`
             */
            AffectRows: number;
            /**
             * 操作耗时，单位为毫秒。
             * @example `1324`
             */
            ElapsedTime: number;
            /**
             * 备注信息。
             * @example `success`
             */
            Remark: string;
        }[];
    };
}
