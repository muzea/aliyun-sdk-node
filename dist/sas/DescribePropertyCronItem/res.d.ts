export interface DescribePropertyCronItemResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-1685-4005-9D34-606B6F78****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的计划任务信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的计划任务信息的总数量。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 当前页面显示的计划任务信息的数量。
         * @example `11`
         */
        Count: number;
    };
    /**
     * 计划任务集合。
     */
    PropertyItems: {
        /**
         * 计划任务的路径。
         * @example `/data`
         */
        Source: string;
        /**
         * 计划任务对应的服务器数量。
         * @example `23`
         */
        Count: number;
    }[];
}
