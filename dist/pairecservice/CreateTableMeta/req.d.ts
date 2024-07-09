export interface CreateTableMetaRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 数据表名称。
         * @example `table_test`
         */
        Name: string;
        /**
         * 资源 ID，可通过ListInstanceResources获取。
         * @example `reso-2s416t146ffjc3yefx`
         */
        ResourceId: string;
        /**
         * 数据库中的表名。
         * @example `table_mysql`
         */
        TableName: string;
        /**
         * 表的模块。
         * - ABTest-实验数据表。
         * - ExperimentTool-实验工具表。
         * - DataDiagnosis-数据诊断
         * @example `ABTest`
         */
        Module: string;
        /**
         * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test123`
         */
        InstanceId: string;
        /**
         * 字段列表。
         */
        Fields: {
            /**
             * 字段名称。
             * @example `gender`
             */
            Name: string;
            /**
             * 字段含义。
             * @example `this is gender of people`
             */
            Meaning: string;
            /**
             * 字段类型。
             * @example `BIGINT`
             */
            Type: string;
            /**
             * 是否是维度字段。
             * @example `false`
             */
            IsDimensionField: boolean;
            /**
             * 字段的数据类型。
             * @example `primary_key`
             */
            DataType: string;
            /**
             * 是否为分区字段。
             * @example `true`
             */
            IsPartitionField: string;
        }[];
        /**
         * 数据表描述。
         * @example `this is a test table`
         */
        Description: string;
    };
}
