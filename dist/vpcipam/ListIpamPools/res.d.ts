export interface ListIpamPoolsResponse {
    /**
     * IPAM地址池列表。
     */
    IpamPools: {
        /**
         * IPAM的实例ID。
         * @example `ipam-b5mtlx3q7xcnyr****`
         */
        IpamId: string;
        /**
         * IPAM作用范围的实例ID。
         * @example `ipam-scope-glfmcyldpm8lsy****`
         */
        IpamScopeId: string;
        /**
         * IPAM作用范围的作用域类型。取值：
         * - **public**：表示为公网类型。
         * - **private**：表示为私网类型。
         * @example `private`
         */
        IpamScopeType: string;
        /**
         * IPAM地址池的实例ID。
         * @example `ipam-pool-6rcq3tobayc20t****`
         */
        IpamPoolId: string;
        /**
         * IPAM地址池的名称。
         * @example `test`
         */
        IpamPoolName: string;
        /**
         * IPAM地址池的描述。
         * @example `test description`
         */
        IpamPoolDescription: string;
        /**
         * IPAM地址池的创建时间。
         * @example `2023-04-19T16:49:01Z`
         */
        CreateTime: string;
        /**
         * 查询请求对应的当前地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * IPAM地址池的深度。取值范围：**0~10**。
         * @example `2`
         */
        PoolDepth: number;
        /**
         * 是否为子地址池。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        HasSubPool: boolean;
        /**
         * 源IPAM地址池的实例ID。
         * @example `ipam-pool-lfnwi4jok1ss0g****`
         */
        SourceIpamPoolId: string;
        /**
         * IPAM地址池实例的状态。取值：
         * - **Creating**：表示创建中。
         * - **Created**：表示创建完成。
         * - **Modifying**：表示修改中。
         * - **Deleting**：表示删除中。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * IP的协议版本。仅取值：**IPv4**，表示支持IPv4协议。
         * @example `IPv4`
         */
        IpVersion: string;
        /**
         * IPAM地址池分配的默认网络掩码。
         * IPv4网络掩码取值范围：**0~32**位。
         * @example `28`
         */
        AllocationDefaultCidrMask: number;
        /**
         * IPAM地址池分配的最大网络掩码。
         * IPv4网络掩码取值范围：**0~32**位。
         * @example `32`
         */
        AllocationMaxCidrMask: number;
        /**
         * IPAM地址池分配的最小网络掩码。
         * IPv4网络掩码取值范围：**0~32**位。
         * @example `8`
         */
        AllocationMinCidrMask: number;
        /**
         * 标签列表信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
        /**
         * IPAM地址池生效地域。
         * 查询到的IPAM地址池的生效地域ID。
         * @example `cn-hangzhou`
         */
        PoolRegionId: string;
        /**
         * 查询到的IPAM地址池所属IPAM实例的托管地域。
         * @example `cn-hangzhou`
         */
        IpamRegionId: string;
        /**
         * IPAM地址池资源拥有者的阿里云主账号。
         * @example `1210123456******`
         */
        OwnerId: number;
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
     * 分批次查询时每次显示的条目数。取值范围：1~100，默认值为10。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `B54867DE-83DC-56B4-A57E-69A03119D0B1`
     */
    RequestId: string;
}
