export interface DescribeNatGatewaysResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 查询的NAT网关列表条目数。
     * @example `1`
     */
    TotalCount: number;
    NatGateways: {
        /**
         * NAT网关的详细信息。
         */
        NatGateway: {
            /**
             * NAT网关的状态，取值：
             * - **Creating**：创建NAT网关是异步操作，在创建完成之前是**Creating**状态。
             * - **Available**：NAT网关创建完成后的状态，是稳定状态。
             * - **Modifying**：变配NAT网关是异步操作，在变配的过程中是**Modifying**状态。
             * - **Deleting**：删除NAT网关是异步操作，在删除的过程中是**Deleting**状态。
             * - **Converting**：普通型NAT网关转换到增强型NAT网关是异步操作，在转换过程中是**Converting**状态。
             * @example `Creating`
             */
            Status: string;
            /**
             * NAT网关的创建时间。
             * @example `2021-06-08T12:20:20Z`
             */
            CreationTime: string;
            /**
             * NAT网关所属的VPC的ID。
             * @example `vpc-bp15zckdt37pq72z****`
             */
            VpcId: string;
            /**
             * NAT网关的类型，取值：**Enhanced**，增强型。
             * @example `Enhanced`
             */
            NatType: string;
            /**
             * 是否自动支付订单。取值：
             * - **false**：不自动支付订单。
             * - **true**：自动支付订单。
             * @example `false`
             */
            AutoPay: boolean;
            /**
             * <props="china">公网NAT网关的规格，仅当**InstanceChargeType**为**PrePaid**（存量包年包月公网NAT网关）支持按固定规格创建NAT网关，取值：</props>
             * <props="china">
             * - **Small**：小型。
             * - **Middle**：中型。
             * - **Large**：大型。
             * </props>
             * <props="intl">NAT网关的规格，该参数返回值为空。</props>
             * 当**InternetChargeType**为**PayByLcu**时，返回值为空。
             * @example `Small`
             */
            Spec: string;
            /**
             * 是否开启了删除保护功能，取值：
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            DeletionProtection: boolean;
            /**
             * NAT网关的类型，取值：
             * - **internet**：公网NAT网关。
             * - **intranet**：VPC NAT网关。
             * @example `internet`
             */
            NetworkType: string;
            /**
             * 是否开启防火墙功能，取值：
             * - **false**：不开启防火墙功能。
             * - **true**：开启防火墙功能。
             * @example `false`
             */
            SecurityProtectionEnabled: boolean;
            /**
             * <props="china">要查询的NAT网关实例的付费模式，取值：</props>
             * <props="china">
             * - **PostPaid**：按量付费。
             * - **PrePaid**：包年包月。
             * </props>
             * <props="intl">要查询的NAT网关实例的付费模式，取值：**PostPaid**（按量付费）。</props>
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * NAT网关的所在地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 是否开启了网关流量监控功能，取值：
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            EcsMetricEnabled: boolean;
            /**
             * 是否开启ICMP代回。取值：
             * - **true**（默认值）：开启。
             * - **false**：不开启。
             * @example `true`
             */
            IcmpReplyEnabled: boolean;
            /**
             * NAT网关的描述信息。
             * @example `NAT`
             */
            Description: string;
            /**
             * NAT网关的过期时间。
             * @example `2021-08-26T16:00Z`
             */
            ExpiredTime: string;
            /**
             * 资源组ID。
             * @example `rg-bp67acfmxazb4ph****`
             */
            ResourceGroupId: string;
            /**
             * NAT网关的ID。
             * @example `ngw-bp1047e2d4z7kf2ki****`
             */
            NatGatewayId: string;
            /**
             * NAT网关的计费类型，取值：
             * - **PayBySpec**：按固定规格计费。
             * - **PayByLcu**：按使用量计费。
             * @example `PayByLcu`
             */
            InternetChargeType: string;
            /**
             * NAT网关的业务状态，取值：
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定状态。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * NAT网关实例名称。
             * @example `abc`
             */
            Name: string;
            IpLists: {
                /**
                 * 公网NAT网关绑定的EIP列表。
                 */
                IpList: {
                    /**
                     * 公网NAT网关实例绑定的EIP的关联关系。取值：
                     * - **UsedByForwardTable**：使用该EIP配置了DNAT规则。
                     * - **UsedBySnatTable**：使用该EIP配置了SNAT规则。
                     * - **UsedByForwardSnatTable**：使用该EIP配置了DNAT和SNAT规则。
                     * - **Idle**：闲置状态，未配置DNAT和SNAT规则。
                     * @example `UsedByForwardTable`
                     */
                    UsingStatus: string;
                    /**
                     * NAT网关绑定的EIP的IP地址。
                     * @example `116.62.XX.XX`
                     */
                    IpAddress: string;
                    /**
                     * 已经用于DNAT条目的IP，是否还可用于SNAT条目，取值：
                     * - **true**：还可用于SNAT条目。
                     * - **false**：不可用于SNAT条目。
                     * @example `false`
                     */
                    SnatEntryEnabled: boolean;
                    /**
                     * NAT网关绑定的EIP的实例ID。
                     * @example `eip-m5egzuvp3dgixen6****`
                     */
                    AllocationId: string;
                    /**
                     * NAT网关的私网IP地址。
                     * @example `192.168.XX.XX`
                     */
                    PrivateIpAddress: string;
                }[];
            };
            ForwardTableIds: {
                /**
                 * NAT网关的私网IP地址。
                 */
                ForwardTableId: string[];
            };
            SnatTableIds: {
                /**
                 * NAT网关的SNAT表ID。
                 */
                SnatTableId: string[];
            };
            FullNatTableIds: {
                /**
                 * FULLNAT表ID。
                 */
                FullNatTableId: string[];
            };
            /**
             * 增强型公网NAT网关的私网信息。
             * >**NatType**取值为**Normal**时，该列表中返回的参数均为空值。
             */
            NatGatewayPrivateInfo: {
                /**
                 * NAT网关所属的交换机ID。
                 * @example `vsw-bp1s2laxhdf9ayjbo****`
                 */
                VswitchId: string;
                /**
                 * 弹性网卡实例ID。
                 * @example `eni-m5eg4ozy5st8q3q4****`
                 */
                EniInstanceId: string;
                /**
                 * 最大带宽值，单位为Mbps。
                 * @example `5120`
                 */
                MaxBandwidth: number;
                /**
                 * NAT网关的并发连接数。单位：个。
                 * @example `2000000`
                 */
                MaxSessionQuota: number;
                /**
                 * NAT网关的新建连接数。单位：个/秒。
                 * @example `100000`
                 */
                MaxSessionEstablishRate: number;
                /**
                 * 私网IP地址。
                 * @example `192.168.XX.XX`
                 */
                PrivateIpAddress: string;
                /**
                 * NAT网关所属的可用区。
                 * @example `cn-hangzhou-b`
                 */
                IzNo: string;
                /**
                 * 弹性网卡与NAT网关的绑定模式，取值：
                 * - **indirect**：非直通模式。
                 * - 返回值为空：直通模式。
                 * @example `indirect`
                 */
                EniType: string;
            };
            /**
             * 是否支持私网连接，取值：
             * - **true**：支持私网连接。
             * - **false**：不支持私网连接。
             * @example `true`
             */
            PrivateLinkEnabled: boolean;
            /**
             * 私网连接服务转化模式，取值：
             * - **FullNat**：使用FULLNAT模式。
             * - **Geneve**：使用Geneve模式。
             * @example `FullNat`
             */
            PrivateLinkMode: string;
            /**
             * NAT网关的EIP绑定模式，取值：
             * - **MULTI_BINDED**：多EIP网卡可见模式。
             * - **NAT**：EIP普通模式，兼容IPv4网关。
             * >NAT网关的EIP绑定模式为EIP普通模式时，EIP将占用NAT网关所在交换机的一个私网IP，请确保NAT网关所在交换机内私网IP地址充足，如果NAT网关所在的交换机没有可用的空闲私网地址时，将无法绑定新的EIP。NAT网关的EIP绑定模式为EIP普通模式时，NAT网关支持绑定的EIP数量上限为50个。
             * @example `MULTI_BINDED`
             */
            EipBindMode: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 实例的标签键。
                     * @example `KeyTest`
                     */
                    TagKey: string;
                    /**
                     * 实例的标签值。
                     * @example `valueTest`
                     */
                    TagValue: string;
                }[];
            };
            /**
             * 是否开启会话日志，取值：
             * - **true**：已开启会话日志。
             * - **false**：已关闭会话日志。
             * @example `true`
             */
            EnableSessionLog: string;
        }[];
    };
}
