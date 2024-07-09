export interface ListIpamResourceCidrsResponse {
    /**
     * IPAM地址池中的资源信息列表。
     */
    IpamResourceCidrs: {
        /**
         * 阿里云账号（主账号）ID。
         * @example `132193271328****`
         */
        AliUid: number;
        /**
         * 资源类型。取值：
         * - **VPC**：表示资源类型为VPC。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * 资源ID。
         * @example `vpc-bp16qjewdsunr41m1****`
         */
        ResourceId: string;
        /**
         * 资源归属的阿里云账号（主账号）ID。
         * @example `132193271328****`
         */
        ResourceOwnerId: number;
        /**
         * 资源的生效地域ID。
         * @example `cn-hangzhou`
         */
        ResourceRegionId: string;
        /**
         * 资源的地址段。
         * @example `192.168.1.0/32`
         */
        Cidr: string;
        /**
         * 源CIDR地址段。
         * @example `192.168.1.0/24`
         */
        SourceCidr: string;
        /**
         * IPAM地址池中的资源状态。取值：
         * - **Created**：表示已创建。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * 资源的管理状态。
         * - **Managed（托管）**：该资源具有从IPAM地址池中分配的CIDR，IPAM 正在监控该资源是否可能与CIDR重叠以及是否符合池分配规则。
         * - **Unmanaged（非托管）**：该资源不具有从 IPAM 池中分配的CIDR，IPAM正在监控该资源是否可能存在符合池分配规则的CIDR。对CIDR进行重叠监控。
         * - **Ignored（已忽略）**：已选择该资源免于监控。不会评估忽略的资源是否存在重叠或分配规则合规性。选择忽略资源时，从IPAM地址池中分配给它的任何空间都将返回到池中，并且不会通过自动导入再次导入该资源（如果在地址池中设置了自动导入分配规则）。
         * @example `Managed`
         */
        ManagementStatus: string;
        /**
         * 资源的合规状态。
         * - **Compliant（合规）**：托管式资源的CIDR符合IPAM地址池的分配规则。
         * - **Noncompliant（不合规）**：托管式资源的CIDR不符合IPAM地址池的一条或多条分配规则。
         * - **Ignored（已忽略）**：已选择该资源免于监控。不会评估忽略的资源是否存在重叠或分配规则合规性。
         * - **Unmanaged（非托管式）**：资源不具备从IPAM地址池中分配的CIDR，IPAM不监控该资源的CIDR是否符合地址池的分配规则，将监控CIDR是否存在重叠。
         * @example `Compliant`
         */
        ComplianceStatus: string;
        /**
         * 资源的重叠状态。
         * - **Nonoverlapping（不重叠）**：资源的CIDR不与相同作用范围内的其他CIDR重叠。
         * - **Overlapping（重叠）**：资源的CIDR与相同作用范围内的另一个CIDR重叠。
         * - **Ignored（已忽略）**：已选择该资源免于监控。不会评估忽略的资源是否存在重叠或分配规则合规性。
         * @example `Nonoverlapping`
         */
        OverlapStatus: string;
        /**
         * IP的利用率，小数形式。
         * @example `0`
         */
        IpUsage: string;
        /**
         * IPAM的实例ID。
         * @example `ipam-uq5dcfc2eqhpf4****`
         */
        IpamId: string;
        /**
         * IPAM作用范围的实例ID。
         * @example `ipam-scope-glfmcyldpm8lsy****`
         */
        IpamScopeId: string;
        /**
         * IPAM地址池的实例ID。
         * @example `ipam-pool-6rcq3tobayc20t***`
         */
        IpamPoolId: string;
        /**
         * IPAM地址池CIDR分配的实例ID。
         * @example `ipam-pool-alloc-112za33e4****`
         */
        IpamAllocationId: string;
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
     * @example `49A9DE56-B68C-5FFC-BC06-509D086F287C`
     */
    RequestId: string;
}
