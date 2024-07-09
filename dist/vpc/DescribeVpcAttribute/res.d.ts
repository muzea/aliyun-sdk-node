export interface DescribeVpcAttributeResponse {
    /**
     * VPC的创建时间。
     * @example `2021-10-16T07:31:09Z`
     */
    CreationTime: string;
    /**
     * VPC的状态。取值：
     * - **Available**：可用。
     * - **Pending**：配置中。
     * @example `Available`
     */
    Status: string;
    /**
     * VPC的ID。
     * @example `vpc-bp18sth14qii3pnvo****`
     */
    VpcId: string;
    /**
     * 是否是默认VPC。取值：
     * - **true**：是默认VPC。
     * - **false**（默认值）：非默认VPC。
     * @example `false`
     */
    IsDefault: boolean;
    /**
     * 是否开启了ClassicLink功能。取值：
     * - **true**：已开启。
     * - **false**（默认值）：未开启。
     * @example `false`
     */
    ClassicLinkEnabled: boolean;
    /**
     * VPC所属的账号ID。
     * @example `28311773240248****`
     */
    OwnerId: number;
    /**
     * VPC所在的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * VPC的名称。
     * @example `doctest2`
     */
    VpcName: string;
    /**
     * VPC的路由器ID。
     * @example `vrt-bp1jso6ng1at0ajsc****`
     */
    VRouterId: string;
    /**
     * DHCP选项集的状态。取值：
     * - **Available**：可用。
     * - **InUse**：使用中。
     * - **Deleted**：已删除。
     * - **Pending**：配置中。
     * @example `Available`
     */
    DhcpOptionsSetStatus: string;
    /**
     * VPC的IPv4网段。
     * @example `192.168.0.0/16`
     */
    CidrBlock: string;
    /**
     * 请求ID。
     * @example `7486AE4A-129D-43DB-A714-2432C074BA04`
     */
    RequestId: string;
    /**
     * VPC的描述。
     * @example `VPC`
     */
    Description: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazbvgb4ph****`
     */
    ResourceGroupId: string;
    /**
     * DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    DhcpOptionsSetId: string;
    /**
     * VPC的IPv6网段。
     * @example `2408:XXXX:0:a600::/56`
     */
    Ipv6CidrBlock: string;
    VSwitchIds: {
        /**
         * VPC下的交换机列表。
         */
        VSwitchId: string[];
    };
    UserCidrs: {
        /**
         * 用户侧网络的网段，如定义了多个网段，返回时会以半角逗号（,）隔开，最多支持3个网段。
         */
        UserCidr: string[];
    };
    SecondaryCidrBlocks: {
        /**
         * VPC附加IPv4网段。
         */
        SecondaryCidrBlock: string[];
    };
    AssociatedCens: {
        /**
         * 绑定的云企业网列表。
         * 如果VPC未绑定云企业网，则不返回该参数。
         */
        AssociatedCen: {
            /**
             * 云企业网所属账号的ID。
             * @example `28311773240248****`
             */
            CenOwnerId: number;
            /**
             * VPC绑定的云企业网实例ID。
             * @example `cen-7qthudw0ll6jmc****`
             */
            CenId: string;
            /**
             * VPC绑定云企业网的状态。
             * 仅VPC绑定了云企业网时返回**Attached**。
             * @example `Attached`
             */
            CenStatus: string;
        }[];
    };
    CloudResources: {
        /**
         * VPC下的资源列表。
         */
        CloudResourceSetType: {
            /**
             * VPC下的资源数量。
             * @example `1`
             */
            ResourceCount: number;
            /**
             * VPC下的资源类型。取值：
             * - **VSwitch**：交换机。
             * - **VRouter**：路由器。
             * - **RouteTable**：路由表。
             * @example `VSwitch`
             */
            ResourceType: string;
        }[];
    };
    Ipv6CidrBlocks: {
        /**
         * VPC的IPv6网段信息。
         */
        Ipv6CidrBlock: {
            /**
             * VPC的IPv6地址段类型。取值：
             * - **BGP**（默认值）：阿里云BGP IPv6。
             * - **ChinaMobile**：中国移动（单线）。
             * - **ChinaUnicom**：中国联通（单线）。
             * - **ChinaTelecom**：中国电信（单线）。
             * > 如果是开通了单线带宽白名单的用户，该字段可以设置为**ChinaTelecom**（中国电信）、**ChinaUnicom**（中国联通）和**ChinaMobile**（中国移动）。
             * @example `BGP`
             */
            Ipv6Isp: string;
            /**
             * VPC的IPv6网段。
             * @example `2408:XXXX:0:6a::/56`
             */
            Ipv6CidrBlock: string;
        }[];
    };
    /**
     * 是否支持IPv4网关。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    SupportIpv4Gateway: boolean;
    /**
     * IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    Ipv4GatewayId: string;
    Tags: {
        /**
         * 标签列表信息。
         */
        Tag: {
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
    };
    AssociatedPropagationSources: {
        /**
         * VPC关联路由传播源。
         */
        AssociatedPropagationSources: {
            /**
             * 传播源类型。
             * - **CEN**：云企业网。
             * - **VPN**：VPN网关。
             * - **TR**：转发路由器。
             * - **ECR**：专线网关。
             * @example `CEN`
             */
            SourceType: string;
            /**
             * 传播源所属账号的ID。
             * @example `153980532164****`
             */
            SourceOwnerId: number;
            /**
             * 传播源实例ID。
             * @example `cen-dc4vwznpwbobrl****`
             */
            SourceInstanceId: string;
            /**
             * 绑定状态。
             * - **Attaching**：绑定中。
             * - **Attached**：已绑定。
             * - **Detaching**：解绑中。
             * @example `Attaching`
             */
            Status: string;
            /**
             * 是否给本VPC传播路由。
             * @example `true`
             */
            RoutePropagated: boolean;
        }[];
    };
    /**
     * 是否开启IPv6。
     * @example `false`
     */
    EnabledIpv6: boolean;
}
