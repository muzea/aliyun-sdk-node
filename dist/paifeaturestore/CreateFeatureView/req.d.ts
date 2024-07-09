export interface CreateFeatureViewRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 项目ID。
         * @example `3`
         */
        ProjectId: string;
        /**
         * 特征实体ID。
         * @example `4`
         */
        FeatureEntityId: string;
        /**
         * 特征视图名称。
         * @example `FeatureView1`
         */
        Name: string;
        /**
         * 类型。
         * ● Batch-离线特征
         * ● Stream-实时特征
         * @example `Batch`
         */
        Type: string;
        /**
         * 写入方式。
         * ● ByReadyMadeTable-使用现成表注册
         * ● Custom-自定义表结构
         * @example `Custom`
         */
        WriteMethod: string;
        /**
         * 是否写入在线托管存储，取值如下：
         * - true - 是
         * - false - 否
         * @example `false`
         */
        WriteToFeatureDB: boolean;
        /**
         * 注册表名称。
         * @example `table1`
         */
        RegisterTable: string;
        /**
         * 注册表所在数据源ID，可从接口ListDatasources获取。
         * @example `5`
         */
        RegisterDatasourceId: string;
        /**
         * 是否同步在线特征表，取值如下：
         * - true - 是
         * - false - 否
         * @example `true`
         */
        SyncOnlineTable: boolean;
        /**
         * 生命周期（单位：天）。
         * @example `90`
         */
        TTL: number;
        /**
         * 标签列表。
         */
        Tags: string[];
        /**
         * 特征视图配置。
         * @example `{"save_original_field":true}`
         */
        Config: string;
        /**
         * 字段列表。
         */
        Fields: {
            /**
             * 字段名称。
             * @example `age`
             */
            Name: string;
            /**
             * 字段类型。
             * ● INT32
             * ● INT64
             * ● FLOAT
             * ● DOUBLE
             * ● STRING
             * ● BOOLEAN
             * ● TIMESTAMP
             * @example `INT32`
             */
            Type: string;
            /**
             * 字段属性列表，可选值包括：
             * ● Partition-分区字段
             * ● PrimaryKey-主键
             * ● EventTime-事件时间
             */
            Attributes: string[];
        }[];
    };
}
