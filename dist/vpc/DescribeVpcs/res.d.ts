export interface DescribeVpcsResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `C6532AA8-D0F7-497F-A8EE-094126D441F5`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    Vpcs: {
        /**
         * VPC的详细信息。
         */
        Vpc: {
            /**
             * VPC的创建时间。
             * @example `2021-04-18T15:02:37Z`
             */
            CreationTime: string;
            /**
             * VPC的状态，取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * VPC的ID。
             * @example `vpc-bp1qpo0kug3a20qqe****`
             */
            VpcId: string;
            /**
             * 是否是该地域的默认VPC。取值：
             * - **true**：是该地域的默认VPC。
             * - **false**：不是该地域的默认VPC。
             * @example `false`
             */
            IsDefault: boolean;
            /**
             * VPC所属的阿里云账号ID。
             * @example `253460731706911258`
             */
            OwnerId: number;
            /**
             * VPC所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * VPC的名称。
             * @example `vpc1`
             */
            VpcName: string;
            /**
             * VPC路由器的ID。
             * @example `vrt-bp1jcg5cmxjbl9xgc****`
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
             * VPC的描述信息。
             * @example `This is my VPC.`
             */
            Description: string;
            /**
             * VPC所属的资源组ID。
             * @example `rg-acfmxazb4ph****`
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
            /**
             * VPC绑定云企业网的状态。
             * 仅VPC绑定了云企业网时返回**Attached**。
             * @example `Attached`
             */
            CenStatus: string;
            Tags: {
                /**
                 * VPC的标签信息。
                 */
                Tag: {
                    /**
                     * VPC绑定的标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * VPC绑定的标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
            Ipv6CidrBlocks: {
                /**
                 * VPC的IPv6网段信息。
                 */
                Ipv6CidrBlock: {
                    /**
                     * VPC的IPv6地址段类型，取值：
                     * - **BGP**：阿里云BGP IPv6。
                     * - **ChinaMobile**：中国移动（单线）。
                     * - **ChinaUnicom**：中国联通（单线）。
                     * - **ChinaTelecom**：中国电信（单线）。
                     * > 如果是开通了单线带宽白名单的用户，该字段可以设置为**ChinaTelecom**（中国电信）、**ChinaUnicom**（中国联通）和**ChinaMobile**（中国移动）。
                     * @example `BGP`
                     */
                    Ipv6Isp: string;
                    /**
                     * VPC的IPv6网段。
                     * @example `2408:XXXX:0:a600::/56`
                     */
                    Ipv6CidrBlock: string;
                }[];
            };
            VSwitchIds: {
                /**
                 * 查询到的VPC中交换机的列表信息。
                 * 最多可以查询到VPC中最近创建的300个交换机的信息。如果您需要查询VPC中全部交换机的信息，可以执行[DescribeVSwitches](~~35748~~)接口查询。
                 */
                VSwitchId: string[];
            };
            SecondaryCidrBlocks: {
                /**
                 * 附加网段信息。
                 */
                SecondaryCidrBlock: string[];
            };
            UserCidrs: {
                /**
                 * 用户侧网段的列表。
                 */
                UserCidr: string[];
            };
            NatGatewayIds: {
                /**
                 * NAT网关的ID。
                 */
                NatGatewayIds: string[];
            };
            RouterTableIds: {
                /**
                 * 路由表信息。
                 */
                RouterTableIds: string[];
            };
            /**
             * 是否开启IPv6。
             * @example `false`
             */
            EnabledIpv6: boolean;
        }[];
    };
}
