export interface DescribeNetworkInterfaceAttributeResponse {
    ConnectionTrackingConfiguration: {
        TcpClosedAndTimeWaitTimeout: number;
        TcpEstablishedTimeout: number;
        UdpTimeout: number;
    };
    /**
     * 弹性网卡的创建时间。
     * @example `2019-12-25T12:31:31Z`
     */
    CreationTime: string;
    /**
     * 弹性网卡所属的专有网络VPC ID。
     * @example `vpc-bp67acfmxazb4p****`
     */
    VpcId: string;
    /**
     * 弹性网卡类型。可能值：
     * * Primary：主网卡。
     * * Secondary：辅助弹性网卡。
     * @example `Secondary`
     */
    Type: string;
    /**
     * 弹性网卡的状态。可能值：
     * * Available：可用。
     * * Attaching：附加中。
     * * InUse：已附加。
     * * Detaching：分离中。
     * * Deleting：删除中。
     * 默认值：空，表示查询所有状态。
     * @example `Available`
     */
    Status: string;
    NetworkInterfaceTrafficConfig: {
        NetworkInterfaceTrafficMode: string;
        QueueNumber: number;
        QueuePairNumber: number;
    };
    /**
     * 弹性网卡的通讯模式。可能值：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * > HighPerformance参数值只支持RDMA增强型实例规格族c7re，目前仅支持在华北2（北京）的可用区K设置该参数值。
     * @example `Standard`
     */
    NetworkInterfaceTrafficMode: string;
    /**
     * 弹性网卡名称。
     * @example `my-eni-name`
     */
    NetworkInterfaceName: string;
    /**
     * 弹性网卡的MAC地址。
     * @example `00:16:3e:12:**:**`
     */
    MacAddress: string;
    /**
     * > 该参数正在邀测中，暂未开放使用。
     * @example `22`
     */
    QueuePairNumber: number;
    /**
     * 弹性网卡的ID。
     * @example `eni-bp125p95hhdhn3ot****`
     */
    NetworkInterfaceId: string;
    /**
     * 弹性网卡对应的虚商ID。
     * @example `12345678910`
     */
    ServiceID: number;
    /**
     * 弹性网卡附加的实例ID。
     * > 由其他阿里云服务管理和控制的弹性网卡不会返回实例ID。
     * @example `i-bp1e2l6djkndyuli****`
     */
    InstanceId: string;
    /**
     * 弹性网卡的所属账号ID。
     * @example `123456****`
     */
    OwnerId: string;
    /**
     * 该弹性网卡的使用者是否为云产品或虚商。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * 弹性网卡所属的交换机ID。
     * @example `vsw-bp1s5fnvk4gn2tws0****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 弹性网卡描述。
     * @example `testDescription`
     */
    Description: string;
    /**
     * 实例所属的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    ResourceGroupId: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-g`
     */
    ZoneId: string;
    /**
     * 弹性网卡的私网IP地址。
     * @example `10.1.**.**`
     */
    PrivateIpAddress: string;
    /**
     * 弹性网卡的队列数。
     * * 弹性网卡为主网卡：返回实例规格默认的主网卡队列数。
     * * 弹性网卡为辅助网卡：
     *     * 辅助网卡是已附加（InUse）状态：
     *         * 辅助网卡没有修改过队列数，则返回实例规格默认的辅助网卡队列数。
     *         * 辅助网卡修改过队列数，则返回修改后的队列数。
     *     * 辅助网卡是可用（Available）状态：
     *         * 辅助网卡未修改过队列数，则返回值为空。
     *         * 辅助网卡修改过队列数，则返回修改后的队列数。
     * @example `8`
     */
    QueueNumber: number;
    SecurityGroupIds: {
        /**
         * 弹性网卡所属的安全组集合。
         */
        SecurityGroupId: string[];
    };
    /**
     * 弹性网卡辅助私有IP地址关联的弹性公网IP。
     */
    AssociatedPublicIp: {
        /**
         * 弹性公网IP地址。
         * @example `116.62.**.**`
         */
        PublicIpAddress: string;
        /**
         * 弹性公网IP的ID。
         * @example `null`
         */
        AllocationId: string;
    };
    /**
     * > 该参数正在邀测中，暂未开放使用。
     */
    Attachment: {
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `hide`
         */
        DeviceIndex: number;
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `hide`
         */
        InstanceId: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `hide`
         */
        TrunkNetworkInterfaceId: string;
        MemberNetworkInterfaceIds: {
            /**
             * > 该参数正在邀测中，暂未开放使用。
             */
            MemberNetworkInterfaceId: string[];
        };
        /**
         * 网卡挂载指定的物理网卡索引。
         * - 如果网卡是未挂载（Available）状态或者挂载时未指定索引，则不返回此值。
         * - 如果网卡是已挂载（InUse）状态且挂载时指定，此值表示网卡挂载指定的物理网卡索引。
         * @example `0`
         */
        NetworkCardIndex: number;
    };
    PrivateIpSets: {
        /**
         * PrivateIpSet组成的集合。
         */
        PrivateIpSet: {
            /**
             * 弹性网卡的私网IP地址。
             * @example `172.17.**.**`
             */
            PrivateIpAddress: string;
            /**
             * 是否是主私网IP地址。可能值：
             * - true：主私网IP。
             * - false：辅助私网IP。
             * @example `true`
             */
            Primary: boolean;
            /**
             * 弹性网卡辅助私有IP地址关联的弹性公网IP。
             */
            AssociatedPublicIp: {
                /**
                 * 弹性公网IP地址。
                 * @example `116.62.**.**`
                 */
                PublicIpAddress: string;
                /**
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                AllocationId: string;
            };
        }[];
    };
    Ipv6Sets: {
        /**
         * 弹性网卡已分配的IPv6地址。
         */
        Ipv6Set: {
            /**
             * 为弹性网卡指定的IPv6地址。
             * @example `2001:db8:1234:1a00::****`
             */
            Ipv6Address: string;
        }[];
    };
    Ipv4PrefixSets: {
        /**
         * 弹性网卡已分配的IPv4前缀集合。
         */
        Ipv4PrefixSet: {
            /**
             * 弹性网卡已分配的IPv4前缀。
             * @example `192.168.**.0/28`
             */
            Ipv4Prefix: string;
        }[];
    };
    Ipv6PrefixSets: {
        /**
         * 弹性网卡已分配的IPv6前缀集合。
         */
        Ipv6PrefixSet: {
            /**
             * 弹性网卡已分配的IPv6前缀。
             * @example `2001:db8:1234:1a00:****::/80`
             */
            Ipv6Prefix: string;
        }[];
    };
    Tags: {
        /**
         * 弹性网卡的标签集合。
         */
        Tag: {
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
    /**
     * >该参数正在邀测中，暂未开放使用。
     */
    BondInterfaceSpecification: {
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        BondMode: string;
        SlaveInterfaceSpecification: {
            /**
             * >该参数正在邀测中，暂未开放使用。
             */
            SlaveInterfaceSpecificationSet: {
                /**
                 * >该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                SlaveNetworkInterfaceId: string;
                /**
                 * >该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                WorkState: string;
                /**
                 * >该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                BondNetworkInterfaceId: string;
            }[];
        };
    };
    /**
     * >该参数正在邀测中，暂未开放使用。
     */
    SlaveInterfaceSpecification: {
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        SlaveNetworkInterfaceId: string;
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        WorkState: string;
        /**
         * >该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        BondNetworkInterfaceId: string;
    };
    /**
     * 释放实例时是否保留网卡。可能值：
     * - true：不保留。
     * - false：保留。
     * @example `true`
     */
    DeleteOnRelease: boolean;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    TcpOptionAddressEnabled: string;
    EnhancedNetwork: {
        EnableSriov: boolean;
    };
}
