export interface GetDatasourceTableResponse {
    /**
     * 请求ID。
     * @example `D7B2F8C4-49C7-5CFA-8075-9D715A114873`
     */
    RequestId: string;
    /**
     * 数据表名称。
     * @example `table1`
     */
    TableName: string;
    /**
     * 字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `field1`
         */
        Name: string;
        /**
         * 字段类型，可选的值包括：
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
         * 字段属性列表，可能出现的值包括：
         * ● Partition-分区字段
         * ● EventTime-事件时间
         * ● PrimaryKey-主键
         */
        Attributes: string[];
    }[];
}
