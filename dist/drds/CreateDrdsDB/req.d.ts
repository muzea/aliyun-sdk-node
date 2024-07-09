export interface CreateDrdsDBRequest {
    /**
     * 实例ID。
     * @example `drdshbgal154****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DbName"?: string;
    /**
     * 数据库所用编码。
     * @example `utf8`
     */
    "Encode"?: string;
    /**
     * 数据库访问密码。
     * @example `drds_sample_password`
     */
    "Password"?: string;
    /**
     * 库的拆分方式。取值范围如下：
     * - **HORIZONTAL**：表示水平拆分，即通常所说的分库分表方式。
     * - **VERTICAL**：表示垂直拆分。
     * @example `HORIZONTAL`
     */
    "Type"?: string;
    /**
     * 挂载的存储类型，目前仅支持RDS。
     * @example `RDS`
     */
    "DbInstType"?: string;
    /**
     * 建库所涉及的RDS是否正在创建中。
     * @example `false`
     */
    "DbInstanceIsCreating"?: boolean;
    /**
     * 该参数仅在垂直拆分时使用。
     * 参数表示垂直拆分场景下，拥有所有RDS上相应数据库访问权限的一个账号名称。
     * @example `drds_sample_account`
     */
    "AccountName"?: string;
    /**
     * RDS实例列表。
     * @example `["drds_sample_rds_id1", "drds_sample_rds_id2"]`
     */
    "RdsInstance"?: string[];
    /**
     * RDS超级账户信息列表。
     */
    "RdsSuperAccount"?: {
        /**
         * RDS超级账号密码。
         * @example `drds_sample_rds_super_password`
         */
        Password: string;
        /**
         * RDS实例ID。
         * @example `drds_sample_rds_id`
         */
        DbInstanceId: string;
        /**
         * RDS超级账号名称。
         * @example `drds_sample_rds_super_account`
         */
        AccountName: string;
    }[];
    /**
     * 数据库列表。
     */
    "InstDbName"?: {
        /**
         * 需要垂直拆分的RDS ID，该参数仅在垂直拆分时使用。
         * @example `drds_sample_rds_id`
         */
        DbInstanceId: string;
        /**
         * 拆分数据库列表。
         * @example `["drds_sample_db1", "drds_sample_db2"]`
         */
        ShardDbName: string[];
    }[];
}
