export interface DescribeTablePartitionDiagnoseResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 总页数。
     * @example `123`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `34`
     */
    PageNumber: number;
    /**
     * 集群ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    DBClusterId: string;
    /**
     * 建议每个二级分区的最大行数。
     * @example `640000000`
     */
    SuggestMaxRecordsPerPartition: number;
    /**
     * 建议每个二级分区的最小行数。
     * @example `64000000`
     */
    SuggestMinRecordsPerPartition: number;
    /**
     * 表统计信息。
     */
    Items: {
        /**
         * 表名。
         * @example `user`
         */
        TableName: string;
        /**
         * 不合理分区。
         * @example `[20210110, 20210113,20210123]`
         */
        PartitionDetail: string;
        /**
         * 数据库名。
         * @example `test_db`
         */
        SchemaName: string;
        /**
         * 分区个数。
         * @example `34`
         */
        PartitionNumber: number;
        /**
         * 表空间占比，单位：%。
         * > 计算公式为：表空间占比 = 表总数据量 / 实例总数据量 * 100。
         * @example `66.23`
         */
        SpaceRatio: number;
        /**
         * 总数据量，单位：Byte。
         * @example `42949672960`
         */
        TotalSize: number;
    }[];
    /**
     * 检测项及检测结果列表。
     */
    DetectionItems: {
        /**
         * 检测项名字。
         * @example `表分区合理性检测`
         */
        Name: string;
        /**
         * 检测结果信息。
         * @example `检测到表存在分区不合理的情况`
         */
        Message: string;
        /**
         * 检测结果状态。取值：
         * - NORMAL
         * - WARNING
         * - CRITICAL
         * @example `WARNING`
         */
        Status: string;
    }[];
}
