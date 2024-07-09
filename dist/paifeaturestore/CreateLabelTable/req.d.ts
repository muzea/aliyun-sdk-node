export interface CreateLabelTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `featurestore-test1`
     */
    "InstanceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 项目ID，可从接口ListProjects获取。
         * @example `3`
         */
        ProjectId: string;
        /**
         * Label表名称。
         * @example `rec_test`
         */
        Name: string;
        /**
         * Label表所在数据源ID，可从接口ListDatasources获取。
         * @example `3`
         */
        DatasourceId: string;
        /**
         * 字段列表。
         */
        Fields: {
            /**
             * 字段名称。
             * @example `lat`
             */
            Name: string;
            /**
             * 字段类型。
             * @example `INT32`
             */
            Type: string;
            /**
             * 字段属性列表，可选值包括：
             * ● Partition-分区字段。
             * ● FeatureField-特征字段。
             * ● FeatureGenerationReserveField-FG保留字段。
             * ● EventTime-事件时间。
             * ● LabelField-Label字段。
             */
            Attributes: string[];
        }[];
    };
}
