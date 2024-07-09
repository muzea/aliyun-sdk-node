export interface ListExecutorsRequest {
    /**
     * 查询Executor过滤条件。
     */
    "Filter"?: {
        /**
         * 作业名称。精确过滤，不支持模糊查询。
         * @example `testJob`
         */
        JobName: string;
        /**
         * Executor ID列表，最大支持100条。
         */
        ExecutorIds: string[];
        /**
         * 内网IP地址列表，最大支持100条。
         */
        IpAddresses: string[];
        /**
         * 在此时间之前提交的作业，以所在地域的时间转化为（国内站为东八区）Unix时间戳。
         * @example `1703820113`
         */
        TimeCreatedBefore: number;
        /**
         * 在此时间之后提交的作业，以所在地域的时间转化为（国内站为东八区）Unix时间戳。
         * @example `1703819914`
         */
        TimeCreatedAfter: number;
    };
    /**
     * 分页查询时设置的本页条数。 默认50，最大100。
     * @example `50`
     */
    "PageSize"?: string;
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: string;
}
