export interface SearchMetaTablesResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 搜索结果。
     */
    Data: {
        /**
         * 分页查询页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页查询每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 表的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 查询返回的表列表。
         */
        DataEntityList: {
            /**
             * 表的名称。
             * @example `test_name`
             */
            TableName: string;
            /**
             * 数据库名称。
             * @example `abc`
             */
            DatabaseName: string;
            /**
             * 表的类型：
             * - 0表示table。
             * - 1表示view。
             * @example `0`
             */
            EntityType: number;
            /**
             * 工作空间的名称。
             * @example `test`
             */
            ProjectName: string;
            /**
             * 工作空间的ID。
             * @example `323`
             */
            ProjectId: number;
            /**
             * 表的唯一标识。
             * @example `odps.engine_name.test_name`
             */
            TableGuid: string;
            /**
             * 工作空间Owner的云账号ID。
             * @example `123`
             */
            OwnerId: string;
            /**
             * EMR集群ID。
             * @example `abc`
             */
            ClusterId: string;
            /**
             * 环境类型：
             * - 1表示生产环境。
             * - 0表示开发环境。
             * @example `1`
             */
            EnvType: number;
            /**
             * 租户ID。
             * @example `12345`
             */
            TenantId: number;
            /**
             * 表Schema信息。在ODPS，用户启动了三层模型需要填写Schema信息
             * @example `default`
             */
            Schema: string;
        }[];
    };
}
