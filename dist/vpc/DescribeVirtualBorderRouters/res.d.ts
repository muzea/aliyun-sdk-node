export interface DescribeVirtualBorderRoutersResponse {
    /**
     * 请求ID。
     * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    VirtualBorderRouterSet: {
        /**
         * 查询到的VBR合集。
         */
        VirtualBorderRouterType: {
            /**
             * VBR的创建时间。
             * @example `2020-06-08T12:20:55`
             */
            CreationTime: string;
            /**
             * VBR实例状态。
             *
             * - **unconfirmed**：等待他人确认。
             * - **active**：正常。
             * - **terminating**：终止接入中。
             * - **terminated**：已终止接入。
             * - **recovering**：恢复中。
             * - **deleting**：删除中。
             * @example `active`
             */
            Status: string;
            /**
             * VBR类型。
             * @example `pconnVBR`
             */
            Type: string;
            /**
             * 配置BFD报文的发送间隔，取值：**200～1000**，单位为ms。
             * @example `300`
             */
            MinTxInterval: number;
            /**
             * VBR实例的客户侧互联IPv6地址。
             * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
             */
            PeerIpv6GatewayIp: string;
            /**
             * 计费VBR的超期时间。
             * @example `2021-06-08T12:20:55`
             */
            PConnVbrExpireTime: string;
            /**
             * 物理专线所属的账号ID。
             * @example `1688000000000****`
             */
            PhysicalConnectionOwnerUid: string;
            /**
             * VBR第一次激活的时间。
             * @example `2021-06-08T12:20:55`
             */
            ActivationTime: string;
            /**
             * 物理专线业务状态。
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定。
             * @example `Normal`
             */
            PhysicalConnectionBusinessStatus: string;
            /**
             * VBR的描述信息。
             * @example `desc`
             */
            Description: string;
            /**
             * VBR最近一次被终止的时间。
             * @example `2021-06-08T12:20:55`
             */
            TerminationTime: string;
            /**
             * 配置BFD报文的接收间隔，取值：**200～1000**，单位为ms。
             * @example `300`
             */
            MinRxInterval: number;
            /**
             * VBR实例的客户侧互联IPv4地址。
             * @example `192.168.XX.XX`
             */
            PeerGatewayIp: string;
            /**
             * VBR实例名称。
             * @example `test`
             */
            Name: string;
            /**
             * VBR实例ID。
             * @example `vbr-bp1jcg5cmxjbl9xgc****`
             */
            VbrId: string;
            /**
             * VBR实例的VLAN ID。
             * @example `10`
             */
            VlanId: number;
            /**
             * VBR的路由器接口的ID。
             * @example `ri-2zeo3xzyf38r4xx****`
             */
            VlanInterfaceId: string;
            /**
             * 运营商为物理专线提供的电路编码。
             * @example `longtel0****`
             */
            CircuitCode: string;
            /**
             * VBR实例的阿里云侧互联IPv6地址。
             * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
             */
            LocalIpv6GatewayIp: string;
            /**
             * VBR实例的阿里云侧互联IPv4地址。
             * @example `192.168.XX.XX`
             */
            LocalGatewayIp: string;
            /**
             * VBR实例的阿里云侧互联IPv4和客户侧互联IPv4的子网掩码。
             * @example `255.255.255.252`
             */
            PeeringSubnetMask: string;
            /**
             * 是否启用IPv6。
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            EnableIpv6: boolean;
            /**
             * VBR的路由表ID。
             * @example `rtb-bp1****`
             */
            RouteTableId: string;
            /**
             * 检测时间倍数。
             * 即接收方允许发送方发送报文的最大连接丢包数，用来检测链路是否正常。
             * 取值：**3～10**。
             * @example `3`
             */
            DetectMultiplier: number;
            /**
             * 高速上云服务实例ID。
             * @example `ecc-h****`
             */
            EccId: string;
            /**
             * 云盒实例ID。
             * @example `cb-****`
             */
            CloudBoxInstanceId: string;
            /**
             * VBR最近一次从**terminated**状态恢复到**active**状态的时间。
             * @example `2021-05-08T12:20:55`
             */
            RecoveryTime: string;
            /**
             * 物理专线状态。
             * - **Initial**：申请中。
             * - **Approved**：审批通过。
             * - **Allocating**：正在分配资源。
             * - **Allocated**：接入施工中。
             * - **Confirmed**：等待用户确认。
             * - **Enabled**：已开通。
             * - **Rejected**：申请被拒绝。
             * - **Canceled**：已取消。
             * - **Allocation Failed**：资源分配失败。
             * - **Terminated**：已终止。
             * @example `Normal`
             */
            PhysicalConnectionStatus: string;
            /**
             * VBR实例的阿里云侧互联IPv6与客户侧互联IPv6的子网掩码。
             * @example `2000:1234:0:a000::/55`
             */
            PeeringIpv6SubnetMask: string;
            /**
             * 物理专线接入点的ID。
             * @example `ap-cn-kojok1x****`
             */
            AccessPointId: string;
            /**
             * 物理专线绑定的边界路由器付费类型。
             * - **PrePaid**：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付或信用支付。
             * - **PostPaid**：按量付费。
             * @example `PrePaid`
             */
            PConnVbrChargeType: string;
            /**
             * VBR所属的物理专线的ID。
             * @example `pc-119mfjzm7x****`
             */
            PhysicalConnectionId: string;
            AssociatedPhysicalConnections: {
                /**
                 * 关联的物理专线信息。
                 */
                AssociatedPhysicalConnection: {
                    /**
                     * VBR实例状态。
                     *
                     * - **unconfirmed**：等待他人确认。
                     * - **active**：正常。
                     * - **terminating**：终止接入中。
                     * - **terminated**：已终止接入。
                     * - **recovering**：恢复中。
                     * - **deleting**：删除中。
                     * @example `active`
                     */
                    Status: string;
                    /**
                     * VBR的路由器接口ID，可以作为VBR路由的下一跳。
                     * @example `ri-kojok19x3j0q6k****`
                     */
                    VlanInterfaceId: string;
                    /**
                     * 运营商为物理专线提供的电路编码。
                     * @example `longtel0**`
                     */
                    CircuitCode: string;
                    /**
                     * VBR实例的客户侧互联IPv6地址。
                     * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
                     */
                    PeerIpv6GatewayIp: string;
                    /**
                     * VBR实例的阿里云侧互联IPv6地址。
                     * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
                     */
                    LocalIpv6GatewayIp: string;
                    /**
                     * 物理专线所有者的账号ID。
                     * @example `12345678****`
                     */
                    PhysicalConnectionOwnerUid: string;
                    /**
                     * VBR实例的阿里云侧互联IPv4地址。
                     * @example `192.168.XX.XX`
                     */
                    LocalGatewayIp: string;
                    /**
                     * 物理专线业务状态。
                     * - **Normal**：正常。
                     * - **FinancialLocked**：欠费锁定。
                     * @example `Normal`
                     */
                    PhysicalConnectionBusinessStatus: string;
                    /**
                     * VBR实例的阿里云侧和客户侧互联IPv4的子网掩码。
                     * 两个IPv4地址必须位于同一个子网。
                     * @example `255.255.255.252`
                     */
                    PeeringSubnetMask: string;
                    /**
                     * 是否启用IPv6。
                     * - **true**：开启。
                     * - **false**：关闭。
                     * @example `true`
                     */
                    EnableIpv6: boolean;
                    /**
                     * 物理专线状态。
                     * - **Initial**：申请中。
                     * - **Approved**：审批通过。
                     * - **Allocating**：正在分配资源。
                     * - **Allocated**：接入施工中。
                     * - **Confirmed**：等待用户确认。
                     * - **Enabled**：已开通。
                     * - **Rejected**：申请被拒绝。
                     * - **Canceled**：已取消。
                     * - **Allocation Failed**：资源分配失败。
                     * - **Terminated**：已终止。
                     * @example `Enabled`
                     */
                    PhysicalConnectionStatus: string;
                    /**
                     * VBR实例的客户侧互联IPv4地址。
                     * @example `116.62.XX.XX`
                     */
                    PeerGatewayIp: string;
                    /**
                     * VBR实例的阿里云侧和客户侧互联IPv6的子网掩码。
                     * 两个IPv6地址必须位于同一个子网。
                     * @example `2408:4004:cc:400::/56`
                     */
                    PeeringIpv6SubnetMask: string;
                    /**
                     * 物理专线ID。
                     * @example `pc-119mfjzm7****`
                     */
                    PhysicalConnectionId: string;
                    /**
                     * VBR实例的VLAN ID。
                     * @example `0`
                     */
                    VlanId: string;
                }[];
            };
            AssociatedCens: {
                /**
                 * 关联的云企业网实例信息。
                 */
                AssociatedCen: {
                    /**
                     * 云企业网实例所属账号的ID。
                     * @example `1688000000000****`
                     */
                    CenOwnerId: number;
                    /**
                     * 云企业网实例ID。
                     * @example `cen-kojok19xxx****`
                     */
                    CenId: string;
                    /**
                     * 云企业网状态。
                     * - **Attached**：已关联。
                     * - **Attaching**：关联中。
                     * - **Detached**：已取消关联。
                     * - **Detaching**：取消关联中。
                     * - 空：未关联。
                     * @example `Attached`
                     */
                    CenStatus: string;
                }[];
            };
            /**
             * VBR实例的带宽值，单位：Mbps。
             * @example `50`
             */
            Bandwidth: number;
            /**
             * 资源组ID。
             * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
             * @example `rg-acfmxazb4ph6aiy****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 资源的标签。
                 */
                Tags: {
                    /**
                     * 资源的标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 资源的标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
            /**
             * 关联的专线网关实例ID。
             * @example `ecr-7vrbqv9lcgvzqbwwkm`
             */
            EcrId: string;
            /**
             * 是否允许IDC间业务访问。取值：
             * * **true**：是。
             * * **false**：否。
             * >如果不传入任何取值表示不允许IDC间业务访问。
             * @example `false`
             */
            SitelinkEnable: boolean;
            /**
             * 专线网关关联状态。
             * - **Attached**：已关联。
             * - **Attaching**：关联中。
             * - **Detached**：已取消关联。
             * - **Detaching**：取消关联中。
             * - **空**：未关联。
             * @example `Attached`
             */
            EcrAttatchStatus: string;
            EcrOwnerId: string;
        }[];
    };
}
