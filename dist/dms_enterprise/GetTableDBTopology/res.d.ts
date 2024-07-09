export interface GetTableDBTopologyResponse {
    /**
     * 请求ID。
     * @example `853F7FD4-D922-4EFB-931C-D253EF159E06`
     */
    RequestId: string;
    /**
     * DB拓扑信息。
     */
    DBTopology: {
        /**
         * 表名。
         * > - 如果查询逻辑表，将返回逻辑表表名。
         * > - 如果查询物理表，将返回物理表表名。
         * @example `yuyang_test`
         */
        TableName: string;
        /**
         * 数据源列表。
         */
        DataSourceList: {
            /**
             * 数据源SID。
             * @example `def`
             */
            Sid: string;
            /**
             * 数据源的连接地址。
             * @example `xxx.mysql.polardb.rds.aliyuncs.com`
             */
            Host: string;
            /**
             * 数据库类型，取值请参考[dbType参数说明](~~198106~~)。
             * @example `MySQL`
             */
            DbType: string;
            /**
             * 物理分库列表。
             */
            DatabaseList: {
                /**
                 * 库ID。
                 * @example `489347`
                 */
                DbId: string;
                /**
                 * 物理库库名。
                 * @example `db-test`
                 */
                DbName: string;
                /**
                 * 数据库类型，取值请参考[dbType参数说明](~~198106~~)。
                 * @example `MySQL`
                 */
                DbType: string;
                /**
                 * 物理分表列表。
                 */
                TableList: {
                    /**
                     * 物理表表名。
                     * @example `151977812`
                     */
                    TableName: string;
                    /**
                     * 表类型，保留字段。
                     * @example `yuyang_test_0000`
                     */
                    TableType: string;
                    /**
                     * 表ID。
                     * @example `NORMAL`
                     */
                    TableId: string;
                }[];
                /**
                 * 环境类型，取值和说明如下：
                 * - **product**：生产环境
                 * - **dev**：开发环境
                 * - **pre**：预发环境
                 * - **test**：测试环境
                 * - **sit**：SIT环境
                 * - **uat**：UAT环境
                 * - **pet**：压测环境
                 * - **stag**：STAG环境
                 * > 更多信息，请参见[实例环境说明](~~163309~~)。
                 * @example `pre`
                 */
                EnvType: string;
            }[];
            /**
             * 数据源连接端口。
             * @example `3306`
             */
            Port: number;
        }[];
        /**
         * 表在DMS中的唯一识别码GUID（Globally Unique Identifier）。
         * @example `IDB_L_9032.db-test.yuyang_test`
         */
        TableGuid: string;
    };
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
