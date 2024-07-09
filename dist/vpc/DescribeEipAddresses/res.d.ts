export interface DescribeEipAddressesResponse {
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
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    EipAddresses: {
        /**
         * EIP的详细信息。
         */
        EipAddress: {
            /**
             * 续费生效时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2021-05-23T16:00:00Z`
             */
            ReservationActiveTime: string;
            /**
             * EIP的状态。
             * - **Associating**：绑定中。
             * - **Unassociating**：解绑中。
             * - **InUse**：已分配。
             * - **Available**：可用。
             * - **Releasing**：释放中。
             * @example `Available`
             */
            Status: string;
            /**
             * 续费订单类型。
             * - **RENEWCHANGE**：续费变配。
             * - **TEMP_UPGRADE**：短时升配。
             * - **UPGRADE** ：升级。
             * @example `RENEWCHANGE`
             */
            ReservationOrderType: string;
            /**
             * EIP的创建时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2021-04-23T01:37:38Z`
             */
            AllocationTime: string;
            /**
             * 网络类型。仅取值：**public**，表示公网。
             * @example `public`
             */
            Netmode: string;
            /**
             * EIP的付费模式，取值：
             * - **PostPaid**：按量计费。
             * - **PrePaid**：包年包月。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * EIP的描述信息。
             * @example `abc`
             */
            Description: string;
            /**
             * 绑定模式，取值：
             * - **NAT**：NAT模式（普通模式）。
             * - **MULTI_BINDED**：多EIP网卡可见模式。
             * - **BINDED**：EIP网卡可见模式。
             * @example `NAT`
             */
            Mode: string;
            /**
             * 连续EIP的实例ID。
             * 仅EIP属于连续EIP时才会返回该参数值。
             * @example `eipsg-t4nr90yik5oy38xd****`
             */
            SegmentInstanceId: string;
            /**
             * 续费付费类型。
             * - **PayByBandwidth**：按固定带宽计费。
             * - **PayByTraffic**：按使用流量计费。
             * @example `PayByBandwidth`
             */
            ReservationInternetChargeType: string;
            /**
             * 加入的共享带宽ID。
             * @example `cbwp-bp1ego3i4j07ccdvf****`
             */
            BandwidthPackageId: string;
            /**
             * EIP的IP地址。
             * @example `47.75.XX.XX`
             */
            IpAddress: string;
            /**
             * EIP的带宽峰值。单位：Mbps。
             * @example `5`
             */
            Bandwidth: string;
            /**
             * 续费带宽。单位：Mbps。
             * @example `12`
             */
            ReservationBandwidth: string;
            /**
             * EIP加入共享带宽之前或退出共享带宽之后的带宽。单位：Mbps。
             * @example `101`
             */
            EipBandwidth: string;
            /**
             * EIP的名称。
             * @example `EIP-01`
             */
            Name: string;
            /**
             * EIP所绑定的辅助弹性网卡实例的私网IP地址。
             * @example `192.168.XX.XX`
             */
            PrivateIpAddress: string;
            /**
             * 当前绑定的资源的地域ID。
             * @example ` cn-hangzhou`
             */
            InstanceRegionId: string;
            /**
             * 是否开启了删除保护功能。
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            DeletionProtection: boolean;
            /**
             * 当前绑定的实例的ID。
             * @example `i-bp15zckdt37cdvf****`
             */
            InstanceId: string;
            /**
             * 是否配置了二级限速。
             * - **true**：已配置。
             * - **false**：未配置。
             * @example `false`
             */
            SecondLimited: boolean;
            /**
             * 当前绑定的实例类型。
             * - **EcsInstance**：VPC类型的ECS实例。
             * - **SlbInstance**：VPC类型的CLB实例。
             * - **Nat**：NAT网关。
             * - **HaVip**：高可用虚拟IP。
             * - **NetworkInterface**：辅助弹性网卡。
             * - **IpAddress**：IP地址。
             * @example `EcsInstance`
             */
            InstanceType: string;
            /**
             * EIP是否开启了秒级监控。
             * - **false**：未开启。
             * - **true**：已开启。
             * @example `false`
             */
            HDMonitorStatus: string;
            /**
             * EIP所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * EIP加入的共享带宽的带宽值。单位：Mbps。
             * @example `50`
             */
            BandwidthPackageBandwidth: string;
            /**
             * 是否为托管实例。取值：
             * - **1**：是托管实例。
             * - **0**：不是托管实例。
             * @example `0`
             */
            ServiceManaged: number;
            /**
             * 到期时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2021-05-23T02:00:00Z`
             */
            ExpiredTime: string;
            /**
             * 资源组ID。
             * @example `rg-acfmxazcdxs****`
             */
            ResourceGroupId: string;
            /**
             * EIP的实例ID。
             * @example `eip-2zeerraiwb7ujcdvf****`
             */
            AllocationId: string;
            /**
             * EIP的计费方式。
             * - **PayByBandwidth**：按固定带宽计费。
             * - **PayByTraffic**：按使用流量计费。
             * @example `PayByBandwidth`
             */
            InternetChargeType: string;
            /**
             * EIP实例的业务状态。
             * - **Normal**：正常。
             * - **FinancialLocked**：被锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * 带宽的类型，仅支持返回**CommonBandwidthPackage**（共享带宽）。
             * @example `CommonBandwidthPackage`
             */
            BandwidthPackageType: string;
            /**
             * 是否有续费数据。
             * - **false**：无续费数据。
             * - **true**：有续费数据。只有在入参**IncludeReservationData**为**true**，且有未生效订购数据时才会为**true**。
             * @example `false`
             */
            HasReservationData: string;
            /**
             * 线路类型。
             * - **BGP**：BGP（多线）线路。目前全部地域都支持BGP（多线）线路EIP。
             * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、日本（东京）、马来西亚（吉隆坡）、菲律宾（马尼拉）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路EIP。
             * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
             * 如果您是单线带宽的白名单用户，返回类型还可能为：
             * -  **ChinaTelecom**：中国电信
             * - **ChinaUnicom**：中国联通
             * - **ChinaMobile**：中国移动
             * - **ChinaTelecom_L2**：中国电信L2
             * - **ChinaUnicom_L2**：中国联通L2
             * - **ChinaMobile_L2**：中国移动L2
             * 如果您是杭州金融云用户，返回**BGP_FinanceCloud**。
             * @example `BGP`
             */
            ISP: string;
            OperationLocks: {
                /**
                 * 锁定详情。
                 */
                LockReason: {
                    /**
                     * 锁定类型。
                     * - **financial**：因欠费被锁定。
                     * - **security**：因安全原因被锁定。
                     * @example `financial`
                     */
                    LockReason: string;
                }[];
            };
            Tags: {
                /**
                 * EIP的标签列表。
                 */
                Tag: {
                    /**
                     * EIP的标签键。
                     * @example `KeyTest`
                     */
                    Key: string;
                    /**
                     * EIP的标签值。
                     * @example `ValueTest`
                     */
                    Value: string;
                }[];
            };
            SecurityProtectionTypes: {
                /**
                 * 安全防护级别。
                 * - 返回为空时，表示DDoS防护（基础版）。
                 * - 返回**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
                 */
                SecurityProtectionType: string[];
            };
            /**
             * EIP所属的IP地址池ID。
             * @example `pippool-2vc0kxcedhquybdsz****`
             */
            PublicIpAddressPoolId: string;
            /**
             * 开通了IPv4网关功能且与EIP同地域的VPC ID。
             * EIP绑定IP地址时，系统可以根据该VPC的路由配置，使绑定的IP地址具备公网访问能力。
             * > **InstanceType**为**IpAddress**时，即绑定EIP的实例类型为IP地址时，返回该参数。
             * @example `vpc-bp15zckdt37pq72zv****`
             */
            VpcId: string;
            /**
             * EIP的可用区。
             * 仅当EIP业务类型为云盒时，返回该参数。
             * @example `ap-southeast-1-lzdvn-cb`
             */
            Zone: string;
            /**
             * EIP的业务类型。
             * - **CloudBox**：云盒。仅云盒用户支持该类型。
             * - **Default**（默认值）：默认，表示非特殊类型。
             * @example `CloudBox`
             */
            BizType: string;
        }[];
    };
}
