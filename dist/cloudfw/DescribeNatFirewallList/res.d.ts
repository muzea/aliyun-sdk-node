export interface DescribeNatFirewallListResponse {
    /**
     * NAT边界防火墙的总数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 返回结果的请求ID。
     * @example `15FCCC52-1E23-57AE-B5EF-3E00A3******
    `
     */
    RequestId: string;
    /**
     * 云防火墙列表
     */
    NatFirewallList: {
        /**
         * 云防火墙成员账号的UID。
         * @example `19106481******`
         */
        MemberUid: number;
        /**
         * 阿里云账号的UID。
         * > 云防火墙成员账号的主账号。
         * @example `19106481******
        `
         */
        AliUid: number;
        /**
         * NAT防火墙ID。
         * @example `proxy-nat30******`
         */
        ProxyId: string;
        /**
         * NAT防火墙名称。
         * @example `nat-防火墙测试
        `
         */
        ProxyName: string;
        /**
         * 云防火墙状态。取值：
         * - configuring：创建中
         * - deleting：删除中
         * - normal：正常
         * - abnormal：异常
         * - opening：开启中
         * - closing：关闭中
         * - closed：已关闭
         * @example `normal`
         */
        ProxyStatus: string;
        /**
         * 云防火墙所在的地域ID。
         * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
         * @example `cn-qingdao`
         */
        RegionId: string;
        /**
         * 要查询的NAT网关的ID。
         * @example `ngw-uf6tnblxip4qcxg******`
         */
        NatGatewayId: string;
        /**
         * NAT网关的名称
         * @example `NAT网关测试
        `
         */
        NatGatewayName: string;
        /**
         * VPC实例ID。
         * @example `vpc-2ze26ya******`
         */
        VpcId: string;
        /**
         * VPC的实例名称。
         * @example `vpc-测试实例`
         */
        VpcName: string;
        /**
         * 错误原因。
         * @example `防火墙创建失败`
         */
        ErrorDetail: string;
        /**
         * 是否启用严格模式
         * - 1：启用严格模式
         * - 0：禁用严格模式
         * @example `0`
         */
        StrictMode: number;
        /**
         * NAT网关默认路由条目列表。
         */
        NatRouteEntryList: {
            /**
             * NAT网关默认路由所在路由表。
             * @example `vtb-bp18o0gb******`
             */
            RouteTableId: string;
            /**
             * 原NAT网关下一跳转地址。
             * @example `ngw-2ze0s284r9atg5******`
             */
            NextHopId: string;
            /**
             * 下一跳的网络类型。取值：NatGateway。
             * @example `NatGateway`
             */
            NextHopType: string;
            /**
             * 默认路由目的网段。
             * @example `0.0.0.0/0`
             */
            DestinationCidr: string;
        }[];
    }[];
}
