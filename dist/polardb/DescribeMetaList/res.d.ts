export interface DescribeMetaListResponse {
    /**
     * 总页数。
     * @example `1`
     */
    TotalPageCount: string;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: string;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `AA815DE7-B576-4B22-B33C-3FB31A******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 支持恢复的库表信息详情。
     */
    Items: {
        /**
         * 支持恢复的数据库名称。
         * @example `test_db`
         */
        Database: string;
        /**
         * 支持恢复的表名称。
         */
        Tables: string[];
    }[];
    /**
     * 集群ID。
     * @example `pc-bp1s826a1up******`
     */
    DBClusterId: string;
}
