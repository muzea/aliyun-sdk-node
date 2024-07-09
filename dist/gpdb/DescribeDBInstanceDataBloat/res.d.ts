export interface DescribeDBInstanceDataBloatResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 表数量，该数值除以分页大小等于总页数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据膨胀详情列表。
     */
    Items: {
        /**
         * 序号。
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
         * 表存储类型，取值说明：
         * - **Heap Table**: 堆表。
         * - **Append-Only Heap Table**：Append-Only堆表。
         * - **Append-Only Columnar Table**：列存表。
         * @example `Heap Table`
         */
        StorageType: string;
        /**
         * 期望表大小。
         * 期望表大小为系统判断没有膨胀情况下的表大小。
         * @example `1MB`
         */
        ExpectTableSize: string;
        /**
         * 实际表大小。
         * @example `1.2MB`
         */
        RealTableSize: string;
        /**
         * 膨胀表的大小，为可释放的空间量。
         * @example `0.2MB`
         */
        BloatSize: string;
        /**
         * 数据膨胀的系数，膨胀系数计算公式如下：
         * 系统统计的死行数/系统统计的活跃行数。
         * @example `1.03`
         */
        BloatCeoff: string;
        /**
         * 暂不返回该参数。
         * @example `null`
         */
        SuggestedAction: string;
        /**
         * 上次VACUUM表的时间（UTC时间）。
         * @example `2022-08-08T16:00:00Z`
         */
        TimeLastVacuumed: string;
        /**
         * 上次更新（DELETE、INSERT或UPDATE操作）表的时间。
         * @example `2022-08-08T20:00:00Z`
         */
        TimeLastUpdated: string;
    }[];
}
