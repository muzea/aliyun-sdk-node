export interface SearchDatabaseResponse {
    /**
     * 满足条件的记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `E0D21075-CD3E-4D98-8264-FD8AD04A63B6`
     */
    RequestId: string;
    SearchDatabaseList: {
        /**
         * 搜索库详情列表。
         */
        SearchDatabase: {
            /**
             * 数据库ID。
             * @example `2528****`
             */
            DatabaseId: string;
            /**
             * 数据库所在实例的连接地址。
             * @example `rm-xxxx.mysql.rds.aliyuncs.com`
             */
            Host: string;
            /**
             * 实例DBA角色的用户ID。
             * @example `10****`
             */
            DbaId: string;
            /**
             * 数据库名称。
             * @example `test`
             */
            SchemaName: string;
            /**
             * 是否逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
            /**
             * 跨库查询Datalink名称。
             * @example `datalink_name`
             */
            DatalinkName: string;
            /**
             * 数据库所在实例的端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 数据库的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
             * @example `test`
             */
            EnvType: string;
            /**
             * 数据库所在实例Sid。
             * @example `testSid`
             */
            Sid: string;
            OwnerIdList: {
                /**
                 * 数据库Owner的用户ID。
                 */
                OwnerIds: string[];
            };
            /**
             * 数据库的编码方式。
             * @example `utf8`
             */
            Encoding: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            OwnerNameList: {
                /**
                 * 库owner昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 数据库搜索名。
             * @example `test@xxx.xxx.xxx.xxx:3306`
             */
            SearchName: string;
            /**
             * 数据库别名。
             * @example `test_rds`
             */
            Alias: string;
            /**
             * 数据库目录名。
             * > PG系列的数据库将显示数据库名。
             * @example `dmstest`
             */
            CatalogName: string;
        }[];
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
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
