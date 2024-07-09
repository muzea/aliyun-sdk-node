export interface GetDataSourceMetaResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用的唯一ID。用于出现错误后定位日志，排查问题。
     * @example `0000-ABCD-EFG	`
     */
    RequestId: string;
    /**
     * 获取目标数据源Meta信息的返回的结果。
     */
    Data: {
        /**
         * 获取目标数据源Meta信息的结果状态。取值如下：
         * - success：表示获取目标数据源的Meta信息成功。
         * - fail：表示获取目标数据源的Meta信息失败。您可以查看Message参数定位失败原因。
         * @example `success`
         */
        Status: string;
        /**
         * 获取目标数据源Meta信息失败后的原因描述。如果获取目标数据源的Meta信息成功，则该参数的返回值为空。
         * @example `read datasource time out`
         */
        Message: string;
        /**
         * 返回的目标数据源的Meta信息。返回的信息为JSON格式。
         * `{"dbTables":[{"dbName":"testdb","schema":[{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table1","tableName":"table1"}]},{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table2","tableName":"table2"}]}]}]}`
         * 参数描述如下：
         * - dbName：数据源所在的数据库名称。
         * - schema：数据库所属的模式。
         * - enable：数据库是否可用，包含true（表示数据库可用），false（表示数据库不可用）取值。
         * - tableName：数据库包含的表名称。
         * - tableInfos：数据库中表的信息。
         * @example `{"dbTables":[{"dbName":"testdb","schema":[{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table1","tableName":"table1"}]},{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table2","tableName":"table2"}]}]}]}`
         */
        Meta: string;
    };
}
