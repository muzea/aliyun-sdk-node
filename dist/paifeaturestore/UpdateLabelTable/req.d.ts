export interface UpdateLabelTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `featurestore-test1`
     */
    "InstanceId": string;
    /**
     * Label表ID，可从接口ListLabelTables获取。
     * @example `3`
     */
    "LabelTableId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * label表名称。
         * @example `rec_test`
         */
        Name: string;
        /**
         * label表所在数据源ID。
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
             * @example `DOUBLE`
             */
            Type: string;
            /**
             * 字段属性列表。
             */
            Attributes: string[];
        }[];
    };
}
