export interface UpdateTableMetaRequest {
    /**
     * 数据表ID。
     * @example `1`
     */
    "TableMetaId": string;
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
         * 资源ID，可通过[ListInstanceResource](~~2672886~~)获取。
         * @example `reso-2s416t***`
         */
        ResourceId: string;
        /**
         * 数据库中的表名。
         * @example `table_mysql`
         */
        TableName: string;
        /**
         * 数据表模块。
         * - ABTest：实验数据表。
         * - ExperimentTool：实验工具表。
         * - DataDiagnosis：数据诊断
         * @example `ABTest`
         */
        Module: string;
        /**
         * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test1`
         */
        InstanceId: string;
        /**
         * 表字段列表。
         */
        Fields: {
            /**
             * 字段名。
             * @example `name`
             */
            Name: string;
            /**
             * 字段含义。
             * @example `名称字段`
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
         * 表的描述信息。
         * @example `this is a test table`
         */
        Description: string;
    };
}
