export interface ListEnrolledAccountsRequest {
    /**
     * 查询返回结果下一页的令牌。
     * 首次调用API不需要NextToken。
     * @example `AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****`
     */
    "NextToken"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
