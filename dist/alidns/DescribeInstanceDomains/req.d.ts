export interface DescribeInstanceDomainsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 实例ID。
     * @example `dns-cn-9lb38ldq9**`
     */
    "InstanceId": string;
}
