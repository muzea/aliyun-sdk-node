export interface DescribeEipResourcesResponse {
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * EIP资源列表。
     */
    EipList: {
        /**
         * EIP的IP地址。
         * @example `120.xx.xx.112`
         */
        IpAddress: string;
        /**
         * EIP的状态，取值：
         * - `Associating`：绑定中。
         * - `Unassociating`：解绑中。
         * - `InUse`：已分配。
         * - `Available`：可用。
         * @example `InUse`
         */
        Status: string;
        /**
         * EIP实例的ID。
         * @example `eip-2zeerraiwb7ujxscd****`
         */
        AllocationId: string;
        /**
         * EIP类型，取值：
         * - `EcsInstance`：VPC类型的ECS实例。
         * - `SlbInstance`：VPC类型的CLB实例。
         * - `Nat`：NAT网关。
         * - `HaVip`：高可用虚拟IP。
         * - `NetworkInterface`：辅助弹性网卡。
         * 默认值：`EcsInstance`。
         * @example `SlbInstance`
         */
        InstanceType: string;
    }[];
    /**
     * 分页信息。
     */
    PageResult: {
        /**
         * 列表条目数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 当前页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页包含的条目数。
         * @example `10`
         */
        PageSize: number;
    };
}
