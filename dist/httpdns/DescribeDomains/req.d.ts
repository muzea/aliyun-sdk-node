export interface DescribeDomainsRequest {
    /**
     * HTTPDNS账户ID。
     * @example `123456`
     */
    "AccountId"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `10`
     */
    "PageSize"?: number;
}
