export interface ListIpamPoolAllocationsResponse {
    /**
     * IPAM地址池CIDR分配的实例ID列表。
     */
    IpamPoolAllocations: {
        /**
         * IPAM地址池CIDR分配的实例ID。
         * @example `ipam-pool-alloc-112za33e4****`
         */
        IpamPoolAllocationId: string;
        /**
         * 分配的地址段。
         * @example `192.168.1.0/24`
         */
        Cidr: string;
        /**
         * 源地址段。
         * @example `192.168.0.0/16`
         */
        SourceCidr: string;
        /**
         * 分配给的资源ID。
         * @example `vpc-bp16qjewdsunr41m1****`
         */
        ResourceId: string;
        /**
         * 分配给的资源类型。取值：
         * - **VPC**：表示资源的类型为VPC。
         * - **IpamPool**：表示资源的类型为子地址池。
         * - **Custom**：表示资源的类型为自定义预留网段。
         * @example `Custom`
         */
        ResourceType: string;
        /**
         * 资源生效的地域ID。
         * @example `cn-hangzhou`
         */
        ResourceRegionId: string;
        /**
         * 资源归属的阿里云账号（主账号）ID。
         * @example `132193271328****`
         */
        ResourceOwnerId: number;
        /**
         * 资源所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * IPAM地址池的实例ID。
         * @example `ipam-pool-6rcq3tobayc20t****`
         */
        IpamPoolId: string;
        /**
         * 实例的状态。取值：
         * - **Created**：表示创建完成。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * 实例创建时间。
         * @example `2023-05-19T08:59:18Z`
         */
        CreationTime: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 本次请求条件下的数据总量。
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
     * @example `3748DEFF-68BE-5EED-9937-7C1D0C21BAB4`
     */
    RequestId: string;
}
