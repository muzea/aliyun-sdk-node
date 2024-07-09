export interface DescribeBackupDBsResponse {
    /**
     * 查询结果中数据库的数量。
     * @example `5`
     */
    TotalCount: number;
    Databases: {
        /**
         * 数据库列表。
         */
        Database: {
            /**
             * 数据库名。
             * @example `mongodbtest`
             */
            DBName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `1AF0AD89-ED4F-44AD-B65F-BFC1D5CD9455`
     */
    RequestId: string;
    /**
     * 每页可展示的记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
}
