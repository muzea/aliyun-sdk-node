export interface ListIpamPoolCidrsResponse {
    /**
     * IPAM地址池的实例ID列表。
     */
    IpamPoolCidrs: {
        /**
         * IPAM地址池的实例ID。
         * @example `ipam-pool-6rcq3tobayc20t****`
         */
        IpamPoolId: string;
        /**
         * 预置的CIDR地址段。
         * @example `192.168.1.0/24`
         */
        Cidr: string;
        /**
         * IPAM地址池预置CIDR的实例状态。取值：
         * - **Created**：表示创建完成。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        Status: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 查询的条目总数。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `9E7CCB95-62E0-534D-9B9A-71F27E8B71B1`
     */
    RequestId: string;
}
