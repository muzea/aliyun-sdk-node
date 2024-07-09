export interface DescribeExcludeSystemPathResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FBBEB173-1F43-505F-A876-C03ECDF6****`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的系统排除目录的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的系统排除目录的总数量。
         * @example `55`
         */
        TotalCount: number;
        /**
         * 当前页面显示的系统排除目录的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 系统排除目录列表。
     */
    ExcludePaths: {
        /**
         * 目录的绝对路径。
         * @example `/bin/`
         */
        Path: string;
        /**
         * 服务器的操作系统。取值：
         * - **linux**：Linux。
         * - **windows**：Windows。
         * @example `linux`
         */
        Os: string;
    }[];
}
