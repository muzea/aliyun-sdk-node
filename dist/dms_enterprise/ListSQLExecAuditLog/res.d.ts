export interface ListSQLExecAuditLogResponse {
    /**
     * 操作总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `39BC9C86-95AE-58F2-9862-A7C3D896****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingStartTime`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `StartTime is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    SQLExecAuditLogList: {
        /**
         * SQL操作审计列表。
         */
        SQLExecAuditLog: {
            /**
             * 操作时间。
             * @example `2021-11-08 11:04:27`
             */
            OpTime: string;
            /**
             * 操作人昵称。
             * @example `test_UserName`
             */
            UserName: string;
            /**
             * 操作人ID。
             * @example `12****`
             */
            UserId: number;
            /**
             * 数据库名称。
             * > 如果此处为实例级别的操作，则返回实例名称。
             * @example `polar123@pc-bp1h9tgq4st9g****.mysql.polardb.rds.aliyuncs.com:3306【polar_qw_测试】`
             */
            InstanceName: string;
            /**
             * 实例ID。
             * @example `185***`
             */
            InstanceId: number;
            /**
             * 数据库名称。
             * @example `polar123`
             */
            SchemaName: string;
            /**
             * 数据库ID。
             * @example `2157****`
             */
            DbId: number;
            /**
             * 是否为逻辑库，返回值说明如下：
             * - **true**：逻辑库
             * - **false**：物理库
             * @example `false`
             */
            Logic: boolean;
            /**
             * SQL类型，常见SQL类型返回值说明如下：
             * - **SELECT**：查询
             * - **INSERT**：插入
             * - **DELETE**：删除
             * - **CREATE_TABLE**：创建表
             * > 您可以在控制台页面上方**操作审计**->**SQL类型**中查看更多SQL类型返回值。
             * @example `SELECT`
             */
            SQLType: string;
            /**
             * 已执行的SQL语句。
             * @example `SELECT * FROM `polar123`.`p_qw` ORDER BY `id` DESC`
             */
            SQL: string;
            /**
             * 执行状态，返回值说明如下：
             * - **FAIL**：执行失败
             * - **NOEXE**：暂未执行
             * - **RUNNING**：执行中
             * - **CANCEL**：取消执行
             * - **SUCCESS**：执行成功
             * @example `SUCCESS`
             */
            ExecState: string;
            /**
             * 表示执行SQL语句后返回的总行数。比如，SQL语句为查询语句，此参数返回的是查询数据的总行数。
             * @example `2`
             */
            AffectRows: number;
            /**
             * 操作耗时，单位为毫秒。
             * @example `18`
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
