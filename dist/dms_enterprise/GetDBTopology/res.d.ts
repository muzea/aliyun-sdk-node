export interface GetDBTopologyResponse {
    /**
     * 请求ID。
     * @example `C5B8E84B-42B6-4374-AD5A-6264E1753378`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 拓扑信息
     */
    DBTopology: {
        /**
         * 逻辑库ID。
         * @example `1234`
         */
        LogicDbId: number;
        /**
         * 逻辑库名。
         * @example `logic_db_test`
         */
        LogicDbName: string;
        /**
         * 逻辑库搜索名。
         * @example `logic_db_test`
         */
        SearchName: string;
        /**
         * 逻辑库别名。
         * @example `logic_db_test`
         */
        Alias: string;
        /**
         * 数据库类型，取值请参考[dbType参数说明](~~198106~~)。
         * @example `polardb`
         */
        DbType: string;
        /**
         * 逻辑库的环境类型，取值和说明如下：
         * - **product**：生产环境
         * - **dev**：开发环境
         * - **pre**：预发环境
         * - **test**：测试环境
         * - **sit**：SIT环境
         * - **uat**：UAT环境
         * - **pet**：压测环境
         * - **stag**：STAG环境
         * > 更多信息，请参见[实例环境说明](~~163309~~)。
         * @example `dev`
         */
        EnvType: string;
        /**
         * 分库拓扑信息列表。
         */
        DBTopologyInfoList: {
            /**
             * 库ID
             * @example `423532`
             */
            DbId: number;
            /**
             * 库名。
             * > 若数据库类型是PG系列，此处为PG模式名。
             * @example `db_test@rm-xxx:3306`
             */
            SchemaName: string;
            /**
             * 数据库目录名。
             * > 若数据库类型为PG系列，此处表示PG数据库名。
             * @example `def`
             */
            CatalogName: string;
            /**
             * 库搜索名。
             * @example `db_test`
             */
            SearchName: string;
            /**
             * 数据库类型，取值请参考[dbType参数说明](~~198106~~)。
             * @example `polardb`
             */
            DbType: string;
            /**
             * 逻辑库的环境类型，取值和说明如下：
             * - **product**：生产环境
             * - **dev**：开发环境
             * - **pre**：预发环境
             * - **test**：测试环境
             * - **sit**：SIT环境
             * - **uat**：UAT环境
             * - **pet**：压测环境
             * - **stag**：STAG环境
             * > 更多信息，请参见[实例环境说明](~~163309~~)。
             * @example `dev`
             */
            EnvType: string;
            /**
             * 实例ID。
             * @example `4325325`
             */
            InstanceId: number;
            /**
             * 实例所在地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例资源ID，取值如下：
             * - RDS：阿里云数据库实例ID
             * - ECS_OWN：阿里云ECS实例ID
             * - PUBLIC_OWN：空
             * - VPC_ID：VPC ID
             * - GATEWAY：数据库网关实例ID
             * @example `rm-xxx`
             */
            InstanceResourceId: string;
            /**
             * 实例来源，取值如下：
             * - **RDS**：阿里云数据库实例
             * - **ECS_OWN**：阿里云ECS自建库实例
             * - **PUBLIC_OWN**：公网自建库实例
             * - **VPC_ID**：VPC专线IDC数据库实例
             * - **GATEWAY**：数据库网关实例
             * @example `RDS`
             */
            InstanceSource: string;
        }[];
    };
}
