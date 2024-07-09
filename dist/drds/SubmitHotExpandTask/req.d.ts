export interface SubmitHotExpandTaskRequest {
    /**
     * 实例ID。
     * @example `drdshbga1138****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 任务名称。
     * @example `test`
     */
    "TaskName"?: string;
    /**
     * 任务描述。
     * @example `test`
     */
    "TaskDesc"?: string;
    /**
     * 目标实例数据列表。
     */
    "InstanceDbMapping": {
        /**
         * 目标热点分库。
         * @example `hot_test_****_****`
         */
        DbList: string;
        /**
         * 目标热点库所在的RDS实例名称。
         * @example `rm-bp1t1mk5a5bdj****`
         */
        InstanceName: string;
    }[];
    /**
     * 目标数据库数据列表。
     */
    "Mapping": {
        /**
         * 热点库名称。
         * @example `hot_test_****_****`
         */
        HotDbName: string;
        /**
         * 表级拆分键值。
         * @example `test`
         */
        ShardTbValue: string;
        /**
         * 热点分表名称，必须以逻辑表名为前缀。
         * @example `test_table_*****`
         */
        HotTableName: string;
        /**
         * 数据库级拆分键值。
         * @example `test`
         */
        ShardDbValue: string;
        /**
         * 关联表表拆分键。
         * @example `platform`
         */
        TbShardColumn: string;
        /**
         * 关联表数据库拆分键。
         * @example `platform`
         */
        DbShardColumn: string;
        /**
         * 热点扩容的逻辑表名称。
         * @example `test_table`
         */
        LogicTable: string;
    }[];
    /**
     * 超级账户数据列表。
     */
    "SupperAccountMapping"?: {
        /**
         * 拥有高权限的RDS实例ID。
         * @example `rm-bp1t1mk5a5bdj****`
         */
        InstanceName: string;
        /**
         * RDS实例高权限账号的名称。
         * @example `test`
         */
        SupperAccount: string;
        /**
         * RDS实例高权限账号的密码。
         * @example `11111111`
         */
        SupperPassword: string;
    }[];
    /**
     * 扩容数据列表。
     */
    "ExtendedMapping": {
        /**
         * 源物理分库名称。
         * @example `test`
         */
        SrcDb: string;
        /**
         * 源物理分库所在RDS实例ID。
         * @example `rm-bp1t1mk5a5bdj****`
         */
        SrcInstanceId: string;
    }[];
}
