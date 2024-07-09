export interface DescribeSqlPatternResponse {
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * SQL Pattern详情。
     */
    Items: {
        /**
         * 平均Stage个数。
         * @example `2`
         */
        AvgStageCount: string;
        /**
         * 最大计算耗时，单位：ms。
         * @example `17`
         */
        MaxCpuTime: string;
        /**
         * 客户端IP。
         * > 仅当`Type`参数设置为`accessip`时，支持返回该参数。
         * @example `100.104.***.***`
         */
        AccessIP: string;
        /**
         * 平均扫描量，单位：KB。
         * @example `0`
         */
        AvgScanSize: string;
        /**
         * 最大扫描量，单位：KB。
         * @example `0`
         */
        MaxScanSize: string;
        /**
         * 最大峰值内存，单位：KB。
         * @example `480096`
         */
        MaxPeakMemory: string;
        /**
         * 平均计算耗时，单位：ms。
         * @example `1.0625`
         */
        AvgCpuTime: string;
        /**
         * 用户名。
         * > 仅当`Type`参数留空或设置为`user`时，支持返回该参数。
         * @example `test_acc`
         */
        User: string;
        /**
         * 平均峰值内存，单位：KB。
         * @example `240048`
         */
        AvgPeakMemory: string;
        /**
         * 最大Stage个数。
         * @example `2`
         */
        MaxStageCount: string;
        /**
         * 最大Task个数。
         * @example `2`
         */
        MaxTaskCount: string;
        /**
         * 集群ID。
         * @example `am-bp1r053byu48p****`
         */
        InstanceName: string;
        /**
         * 查询总数。
         * @example `16`
         */
        QueryCount: string;
        /**
         * 查询日期。
         * @example `2021-08-30`
         */
        ReportDate: string;
        /**
         * SQL Pattern。
         * @example `SELECT table_name, table_schema AS schema_name, create_time, create_time AS last_ddl_time, table_comment AS description , ceil((data_length + index_length) / ? / ?) AS store_capacity , data_length AS data_bytes, index_length AS index_bytes, table_collation AS collation, auto_increment, table_rows AS num_rows , engine FROM information_schema.tables WHERE table_type != ? AND table_schema = ? AND table_name IN (?) ORDER BY 1`
         */
        Pattern: string;
        /**
         * 平均Task个数。
         * @example `2`
         */
        AvgTaskCount: string;
    }[];
    /**
     * 请求ID。
     * @example `B6F2D1B4-2C9F-5622-B424-5E7965******`
     */
    RequestId: string;
}
