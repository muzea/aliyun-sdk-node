export interface DescribeDBInstanceDataSkewResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据倾斜详情列表。
     */
    Items: {
        /**
         * 序号，根据数据倾斜情况由大到小进行排序。
         * @example `1`
         */
        Sequence: number;
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
         * @example `tab1`
         */
        TableName: string;
        /**
         * 表的拥有者。
         * @example `adbpguser`
         */
        Owner: string;
        /**
         * 表的总行数。
         * @example `100000`
         */
        TableSize: string;
        /**
         * 表的倾斜度百分比，取值范围为0~100，单位为%。值越大表示倾斜的越厉害，值越小越有利于数据库的查询性能，0表示没有倾斜。
         * @example `10.23`
         */
        TableSkew: string;
        /**
         * 表的分布键。
         * @example `ItemId`
         */
        DistributeKey: string;
        /**
         * 上次更新（DELETE、INSERT或UPDATE操作）表的时间。
         * @example `2020-09-08T20:00:00Z`
         */
        TimeLastUpdated: string;
    }[];
}
