export interface ListDatabasesResponse {
    /**
     * 实例下面库的个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `5541CDA6-F674-435C-81BD-40C2FB926CE3`
     */
    RequestId: string;
    DatabaseList: {
        /**
         * 数据库详情列表。
         */
        Database: {
            /**
             * 库ID
             * @example `1`
             */
            DatabaseId: string;
            /**
             * 库所属实例的连接地址。
             * @example `xxx.xxx.xxx.xxx`
             */
            Host: string;
            /**
             * 数据库目录名。
             * @example `1`
             */
            CatalogName: string;
            /**
             * 库所属DBA昵称。
             * @example `dba_user`
             */
            DbaName: string;
            /**
             * 库状态，取值和说明如下：
             * - NORMAL： 正常
             * - DISABLE：禁用
             * - OFFLINE：下线
             * - NOT_EXIST：不存在
             * @example `NORMAL`
             */
            State: string;
            /**
             * DBA的ID。
             * @example `1`
             */
            DbaId: string;
            /**
             * 库名。
             * @example `test`
             */
            SchemaName: string;
            /**
             * 库所属实例的ID。
             * @example `1`
             */
            InstanceId: string;
            /**
             * 库所属实例连接端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 库所属环境类型。
             * @example `dev`
             */
            EnvType: string;
            /**
             * 库所属实例的Sid。
             * @example `test`
             */
            Sid: string;
            OwnerIdList: {
                /**
                 * 库Owner ID列表。
                 */
                OwnerIds: string[];
            };
            /**
             * 库编码。
             * @example `utf-8`
             */
            Encoding: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            OwnerNameList: {
                /**
                 * 库Owner昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 搜索数据库的名称。
             * @example `test@xxx.xxx.xxx.xxx:3306`
             */
            SearchName: string;
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
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
