export interface DescribeWebLockFileChangeStatisticsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `709A8C3D-A543-5B79-AB75-361B206F71D9`
     */
    RequestId: string;
    /**
     * 每页显示的数据最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 网页防篡改事件的总数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 网页防篡改事件列表。
     */
    List: {
        /**
         * 尝试次数。
         * @example `33`
         */
        Count: number;
        /**
         * 文件的路径。
         * @example `/tmp`
         */
        File: string;
    }[];
}
