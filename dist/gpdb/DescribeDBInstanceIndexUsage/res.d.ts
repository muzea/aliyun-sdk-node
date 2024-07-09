export interface DescribeDBInstanceIndexUsageResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 索引使用详情列表。
     */
    Items: {
        /**
         * 数据库名称。
         * @example `adbtest`
         */
        DatabaseName: string;
        /**
         * Schema名称。
         * @example `schema1`
         */
        SchemaName: string;
        /**
         * 表名称。
         * @example `tab1_ptr_2010`
         */
        TableName: string;
        /**
         * 是否是分区表，取值如下：
         * - **true**：是分区表。
         * - **false**：不是分区表。
         * @example `true`
         */
        IsPartitionTable: boolean;
        /**
         * 父表名。
         * @example `tab1`
         */
        ParentTableName: string;
        /**
         * 索引名称。
         * @example `idx1`
         */
        IndexName: string;
        /**
         * 索引大小，单位为Byte。
         * @example `10000`
         */
        IndexSize: string;
        /**
         * 索引被扫描次数。
         * @example `50000`
         */
        IndexScanTimes: number;
        /**
         * 索引的定义。
         * @example `CREATE INDEX idx1 ON schema1.tab1_ptr_2010`
         */
        IndexDef: string;
        /**
         * 上次更新（DELETE、INSERT或UPDATE操作）表的时间。
         * @example `2022-08-08T20:00:00Z`
         */
        TimeLastUpdated: string;
    }[];
}
