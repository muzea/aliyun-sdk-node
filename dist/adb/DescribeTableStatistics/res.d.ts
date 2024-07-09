export interface DescribeTableStatisticsResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `4C4433FF-5D3A-4C3E-A19C-6D93B2******`
     */
    RequestId: string;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 集群ID。
     * @example `am-****************`
     */
    DBClusterId: string;
    Items: {
        /**
         * 表统计信息列表。
         */
        TableStatisticRecords: {
            /**
             * 数据库名称。
             * @example `test_schema`
             */
            SchemaName: string;
            /**
             * 表名称。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 表行数。
             * @example `3`
             */
            RowCount: number;
            /**
             * 表记录数据量，单位：Byte。
             * > 表记录数据量，不包含普通索引、主键索引的数据。
             * @example `15592`
             */
            DataSize: number;
            /**
             * 普通索引数据量，单位：Byte。
             * @example `3076`
             */
            IndexSize: number;
            /**
             * 主键索引数据量，单位：Byte。
             * @example `16340`
             */
            PrimaryKeyIndexSize: number;
            /**
             * 分区数。
             * @example `1`
             */
            PartitionCount: number;
            /**
             * 冷数据总量，单位：Byte。
             * > 仅内核版本为3.1.3.4或以上集群才会返回该参数。
             * @example `0`
             */
            ColdDataSize: number;
            /**
             * 表空间占比，单位：%。
             * > 计算公式为：表空间占比 = 表总数据量 / 实例总数据量 * 100。
             * @example `66.23`
             */
            SpaceRatio: number;
            /**
             * 总数据量，单位：Byte。
             * > 总数据量的计算，以下2个公式都成立。计算公式1：总数据量 = 热数据量 + 冷数据量，计算公式2：总数据量 = 表记录数据量 + 普通索引数据量 + 主键索引数据量 + 其他。
             * @example `1577`
             */
            TotalSize: number;
            /**
             * 热数据量，单位：Byte。
             * @example `1048576`
             */
            HotDataSize: number;
            /**
             * 其他，单位：Byte。
             * @example `1048576`
             */
            OtherSize: number;
        }[];
    };
}
