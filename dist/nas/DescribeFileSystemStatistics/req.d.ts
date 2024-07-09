export interface DescribeFileSystemStatisticsRequest {
    /**
     * 分页查询时，每个分页包含的文件系统统计信息的个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
}
