export interface DescribeWebLockProcessBlockStatisticsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 每页显示的数据最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询网页防篡改进程统计得到的总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 查询防篡改进程统计列表。
     */
    List: {
        /**
         * 当前页显示的网页防篡改进程统计数量。
         * @example `20`
         */
        Count: number;
        /**
         * 进程。
         * @example `cron`
         */
        Process: string;
    }[];
}
