export interface DescribeTableAccessCountResponse {
    /**
     * 请求ID。
     * @example `C242707A-01D1-54DA-A5F6-671557******`
     */
    RequestId: string;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 表使用详情。
     */
    Items: {
        /**
         * 表使用日期。
         * @example `2021-08-30`
         */
        ReportDate: string;
        /**
         * 表所属的数据库。
         * @example `tpch`
         */
        TableSchema: string;
        /**
         * 表被访问的次数。
         * @example `6`
         */
        AccessCount: string;
        /**
         * 表名。
         * @example `CUSTOMER`
         */
        TableName: string;
        /**
         * 表所属集群的集群ID。
         * @example `am-bp1r053byu48p****`
         */
        InstanceName: string;
    }[];
}
