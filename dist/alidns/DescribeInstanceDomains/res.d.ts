export interface DescribeInstanceDomainsResponse {
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `68386699-8B9E-4D5B-BC4C-75A28F6C2A00`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例绑定域名列表。
     */
    InstanceDomains: {
        /**
         * 实例创建时间。
         * @example `2020-03-09T02:15Z`
         */
        CreateTime: string;
        /**
         * 域名。
         * @example `dns-example.top`
         */
        DomainName: string;
        /**
         * 实例创建时间（时间戳）。
         * @example `1583720154000`
         */
        CreateTimestamp: number;
    }[];
    /**
     * 总页数。
     * @example `2`
     */
    TotalPages: number;
    /**
     * 总计。
     * @example `2`
     */
    TotalItems: number;
}
