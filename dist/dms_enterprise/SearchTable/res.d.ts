export interface SearchTableResponse {
    SearchTableList: {
        /**
         * 搜索表详情列表。
         */
        SearchTable: {
            /**
             * 所属的库ID。
             * @example `1`
             */
            DatabaseId: string;
            /**
             * 表名。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 表所对应的库搜索名。
             * @example `test`
             */
            DBSearchName: string;
            /**
             * 是否为逻辑表，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
            /**
             * 环境类型。
             * @example `test`
             */
            EnvType: string;
            /**
             * 库名。
             * @example `test`
             */
            DbName: string;
            OwnerIdList: {
                /**
                 * 表Owner ID列表。
                 */
                OwnerIds: string[];
            };
            /**
             * 描述信息。
             * @example `test`
             */
            Description: string;
            /**
             * 表编码。
             * @example `utf8`
             */
            Encoding: string;
            /**
             * 数据库类型，取值为：
             * - **MySQL**
             * - **SQLServer**
             * - **PostgreSQL**
             * - **Oracle**
             * - **DRDS**
             * - **OceanBase**
             * - **Mongo**
             * - **Redis**
             * @example `mysql`
             */
            DbType: string;
            OwnerNameList: {
                /**
                 * 表Owner昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 表所对应库名。
             * @example `test@xxx.xxx.xxx.xxx:3306`
             */
            TableSchemaName: string;
            /**
             * 表GUID。
             * @example `IDB_L_9032.db-test.yuyang_test`
             */
            TableGuid: string;
            /**
             * 表引擎。
             * @example `innodb`
             */
            Engine: string;
            /**
             * 表ID。
             * @example `1`
             */
            TableId: string;
        }[];
    };
    /**
     * 满足搜索条件的记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `1489257F-1B5D-4B5B-89EF-923C12CEEBD1`
     */
    RequestId: string;
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
