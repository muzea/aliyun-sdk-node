export interface GetInstanceResourceTableResponse {
    /**
     * 请求ID。
     * @example `74D958EF-3598-56FA-8296-FF1575CE43DF`
     */
    RequestId: string;
    /**
     * 表名。
     * @example `test_table`
     */
    TableName: string;
    /**
     * 表的字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `age`
         */
        Name: string;
        /**
         * 字段类型。
         * @example `BIGINT`
         */
        Type: string;
        /**
         * 字段含义。
         * @example `""`
         */
        Meaning: string;
        /**
         * 是否是维度字段。
         * @example `false`
         */
        IsDimensionField: boolean;
        /**
         * 是否为分区字段。
         * @example `true`
         */
        IsPartitionField: boolean;
    }[];
}
