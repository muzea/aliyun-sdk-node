export interface DescribeParametersResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * 数据库版本号。
     * @example `8.0`
     */
    EngineVersion: string;
    /**
     * 参数模板信息。
     */
    ParamGroupInfo: {
        /**
         * 参数模板名称。
         * @example `mysql_innodb_8.0_basic_normal_high`
         */
        ParameterGroupName: string;
        /**
         * 参数模板描述。
         * @example `sync_binlog=1000, innodb_flush_log_at_trx_commit=2, async`
         */
        ParameterGroupDesc: string;
        /**
         * 参数模板类型。
         * @example `0`
         */
        ParameterGroupType: string;
        /**
         * 参数模板ID。
         * @example `rpg-sys-01040401010200`
         */
        ParamGroupId: string;
    };
    ConfigParameters: {
        /**
         * 正在同步的参数列表。
         * > 修改并提交参数后，需要等待实例同步参数，同步结束后从此列表删除。
         */
        DBInstanceParameter: {
            /**
             * 参数描述。
             * @example `The amount in bytes by which to increase a per-transaction memory pool which needs memory. See the description of transaction_prealloc_size.`
             */
            ParameterDescription: string;
            /**
             * 参数名称。
             * @example `transaction_alloc_block_size`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `8192`
             */
            ParameterValue: string;
        }[];
    };
    RunningParameters: {
        /**
         * 当前运行的参数列表。
         */
        DBInstanceParameter: {
            /**
             * 参数描述。
             * @example `The amount in bytes by which to increase a per-transaction memory pool which needs memory. See the description of transaction_prealloc_size.`
             */
            ParameterDescription: string;
            /**
             * 参数名称。
             * @example `transaction_alloc_block_size`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `1024`
             */
            ParameterValue: string;
            /**
             * 参数值取值范围。
             * @example `1~100`
             */
            ParameterValueRange: string;
            /**
             * 参数默认值。
             * @example `100`
             */
            ParameterDefaultValue: string;
        }[];
    };
}
