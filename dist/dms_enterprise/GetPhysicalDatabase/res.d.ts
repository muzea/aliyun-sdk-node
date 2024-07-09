export interface GetPhysicalDatabaseResponse {
    /**
     * 请求ID。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 物理库信息。
     */
    Database: {
        /**
         * 物理库ID。
         * @example `43125312`
         */
        DatabaseId: string;
        /**
         * 数据库连接地址。
         * @example `rm-xxxab3r272.mysql.rds.aliyuncs.com`
         */
        Host: string;
        /**
         * 数据库目录名。
         * > PG系列的数据库将显示数据库名。
         * @example `def`
         */
        CatalogName: string;
        /**
         * 目标库的DBA昵称。
         * @example `dmstest`
         */
        DbaName: string;
        /**
         * 库状态，取值说明：
         * - **NORMAL**： 正常
         * - **DISABLE**：禁用
         * - **OFFLINE**：下线
         * - **NOT_EXIST**：不存在
         * @example `NORMAL`
         */
        State: string;
        /**
         * 目标库的DBA的用户ID。
         * @example `43253`
         */
        DbaId: string;
        /**
         * 数据库名。
         * > PG系列的数据库将显示模式名。
         * @example `dmstest`
         */
        SchemaName: string;
        /**
         * 目标库的实例ID。
         * @example `43215325`
         */
        InstanceId: string;
        /**
         * 数据库的连接端口。
         * @example `3306`
         */
        Port: number;
        /**
         * 数据库的环境类型，更多信息，请参见[环境说明](~~163309~~)。
         * @example `product`
         */
        EnvType: string;
        /**
         * 数据库SID。
         * > 仅Oracle数据库显示。
         * @example `def`
         */
        Sid: string;
        OwnerIdList: {
            /**
             * 库Owner User ID列表。
             */
            OwnerIds: string[];
        };
        /**
         * 数据库编码。
         * @example `utf8mb4`
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
         * 库搜索名称。
         * @example `dmstest@rm-xxxab3r272.mysql.rds.aliyuncs.com:3306`
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
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
