export interface ListTransitRouterCidrAllocationResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0876E54E-3E36-5C31-89F0-9EE8A9266F9A`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * - 如果您未指定请求参数**MaxResults**的值，则表示您不需要分批次查询。返回参数**MaxResults**的值表示列表条目总数。
     * - 如果您指定了请求参数**MaxResults**的值，则表示您需要分批次查询。返回参数**MaxResults**的值表示当前查询批次下列表条目的数量。
     * @example `1`
     */
    MaxResults: number;
    /**
     * 转发路由器地址段分配详情。
     */
    TransitRouterCidrAllocations: {
        /**
         * 转发路由器地址段ID。
         * @example `cidr-0zv0q9crqpntzz****`
         */
        TransitRouterCidrId: string;
        /**
         * 转发路由器地址段下已分配地址的网段。
         * @example `192.168.10.0/28`
         */
        AllocatedCidrBlock: string;
        /**
         * 网络实例连接ID。
         * @example `tr-attach-2nalp6yksc805w****`
         */
        AttachmentId: string;
        /**
         * 转发路由器地址段。
         * @example `192.168.10.0/24`
         */
        Cidr: string;
        /**
         * 网络实例连接的名称。
         * @example `nametest`
         */
        AttachmentName: string;
    }[];
}
