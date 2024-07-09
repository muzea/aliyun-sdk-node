export interface GetDatabaseResponse {
    /**
     * 请求ID。
     * @example `3CDB8601-AD74-4A47-8114-08E08CD6****`
     */
    RequestId: string;
    /**
     * 数据库详情信息。
     */
    Database: {
        /**
         * 数据库ID。
         * @example `984****`
         */
        DatabaseId: string;
        /**
         * 数据库连接地址。
         * @example `192.168.XX.XX`
         */
        Host: string;
        /**
         * 数据库目录名。
         * @example `def`
         */
        CatalogName: string;
        /**
         * 目标数据库的DBA昵称。
         * @example `dba_name`
         */
        DbaName: string;
        /**
         * 数据库状态，返回值说明如下：
         * - **NORMAL**： 正常。
         * - **DISABL**E：禁用。
         * - **OFFLINE**：下线。
         * - **NOT_EXIST**：不存在。
         * @example `NORMAL`
         */
        State: string;
        /**
         * 目标数据库的DBA的用户ID。
         * @example `27****`
         */
        DbaId: string;
        /**
         * 数据库名称。
         * @example `mysql`
         */
        SchemaName: string;
        /**
         * 实例ID。
         * @example `149****`
         */
        InstanceId: string;
        /**
         * 数据库连接端口。
         * @example `3306`
         */
        Port: number;
        /**
         * 数据库环境类型，返回值如下：
         * - **product**：生产环境。
         * - **dev**：开发环境。
         * - **pre**：预发环境。
         * - **test**：测试环境。
         * - **sit**：SIT环境。
         * - **uat**：UAT环境。
         * - **pet**：压测环境。
         * - **stag**：STAG环境。
         * @example `product`
         */
        EnvType: string;
        /**
         * 数据库Sid。
         * > 仅Oracle数据库显示。
         * @example `test_sid`
         */
        Sid: string;
        OwnerIdList: {
            /**
             * 数据库Owner的用户ID列表。
             */
            OwnerIds: string[];
        };
        /**
         * 数据库编码。
         * @example `utf8mb4`
         */
        Encoding: string;
        /**
         * 数据库类型，返回值请参见[DbType参数说明](~~198106~~)。
         * @example `mysql`
         */
        DbType: string;
        OwnerNameList: {
            /**
             * 数据库Owner昵称列表。
             */
            OwnerNames: string[];
        };
        /**
         * 数据库的搜索名称。
         * @example `mysql@192.168.XX.XX:3306`
         */
        SearchName: string;
        /**
         * 实例别名。
         * @example `test`
         */
        InstanceAlias: string;
    };
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `An unknown error occurred.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
