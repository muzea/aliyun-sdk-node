export interface DescribeVirtualBorderRoutersForPhysicalConnectionResponse {
    /**
     * 请求ID。
     * @example `7C5AE8B3-A2D8-428D-A2FF-93A225C0821E`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值：**50**。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    VirtualBorderRouterForPhysicalConnectionSet: {
        /**
         * 查询到的VBR实例信息合集。
         */
        VirtualBorderRouterForPhysicalConnectionType: {
            /**
             * VBR实例状态。取值：
             *
             * - **unconfirmed**：等待他人确认。
             * - **active**：正常。
             * - **terminating**：终止接入中。
             * - **terminated**：已终止接入。
             * - **recovering**：恢复中。
             * - **deleting**：删除中。
             * @example `Active`
             */
            Status: string;
            /**
             * 创建VBR的时间。
             * @example `2021-06-08T12:20:55`
             */
            CreationTime: string;
            /**
             * VBR类型。
             * @example `pconnVBR`
             */
            Type: string;
            /**
             * VBR实例的客户侧互联IPv6地址。
             * 为物理专线所有者创建VBR实例时必填，为其他账号创建VBR实例时无需填写。
             * @example `2001:XXXX:3c4d:0015:0000:0000:0000:1a2b`
             */
            PeerIpv6GatewayIp: string;
            /**
             * 运营商为物理专线提供的电路编码。
             * @example `longtel0**`
             */
            CircuitCode: string;
            /**
             * VBR实例的阿里云侧互联IPv6地址。
             * @example `ipv6bw-uf6hcyzu65v98v3du****`
             */
            LocalIpv6GatewayIp: string;
            /**
             * 物理专线绑定的VBR到期时间。
             * @example `2021-06-10T12:20:55`
             */
            PConnVbrExpireTime: string;
            /**
             * VBR实例的阿里云侧互联IPv4地址。
             * @example `192.168.XX.X`
             */
            LocalGatewayIp: string;
            /**
             * 带宽生效状态。取值：
             * - **Active**：正常。
             * - **Inactive**：异常。
             * @example `Active`
             */
            BandwidthStatus: string;
            /**
             * VBR第一次激活的时间。
             * @example `2021-06-08T12:20:55`
             */
            ActivationTime: string;
            /**
             * VBR所有者的账号ID。
             * VBR和物理专线的所有者相同时该参数为空。
             * @example `253460731706911258`
             */
            VbrOwnerUid: number;
            /**
             * VBR实例的阿里云侧和客户侧互联IPv4的子网掩码。
             * 两个IPv4地址必须位于同一个子网。
             * @example `255.255.255.0`
             */
            PeeringSubnetMask: string;
            /**
             * 是否启用IPv6。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            EnableIpv6: boolean;
            /**
             * 高速上云服务实例ID。
             * @example `ecc-sjghe****`
             */
            EccId: string;
            /**
             * 物理专线下绑定的边界路由器带宽值，单位：Mbps。
             * @example `10`
             */
            Bandwidth: string;
            /**
             * VBR最近一次从Terminated状态恢复到Active状态的时间。
             * @example `2021-06-08T12:20:55`
             */
            RecoveryTime: string;
            /**
             * VBR最近一次被终止的时间。
             * @example `2021-06-07T12:20:55`
             */
            TerminationTime: string;
            /**
             * 物理专线绑定的VBR运行状态。取值：
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定。
             * @example `Normal`
             */
            PConnVbrBussinessStatus: string;
            /**
             * VBR实例的客户侧互联IPv4地址。
             * @example `162.62.XX.XX`
             */
            PeerGatewayIp: string;
            /**
             * VBR实例的阿里云侧和客户侧互联IPv6的子网掩码。
             * 两个IPv6地址必须位于同一个子网。
             * @example `2408:4004:cc:400::/56`
             */
            PeeringIpv6SubnetMask: string;
            /**
             * VBR实例ID。
             * @example `vbr-bp16ksp61j7e0tk****`
             */
            VbrId: string;
            /**
             * 物理专线绑定的边界路由器付费类型。取值：
             * * **PrePaid**：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付或信用支付。
             * * **PostPaid**：按量付费。
             * @example `PrePaid`
             */
            PConnVbrChargeType: string;
            /**
             * VBR实例的VLAN ID。
             * @example `1678`
             */
            VlanId: number;
        }[];
    };
}
