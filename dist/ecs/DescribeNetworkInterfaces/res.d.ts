export interface DescribeNetworkInterfacesResponse {
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 分页查询参数。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `1`
     */
    PageSize: number;
    /**
     * 分页查询参数。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的弹性网卡总数。
     * > 使用`MaxResults`和`NextToken`参数进行分页查询时，返回的`TotalCount`参数值无意义。
     * @example `2`
     */
    TotalCount: number;
    NetworkInterfaceSets: {
        /**
         * 弹性网卡信息组成的集合。
         */
        NetworkInterfaceSet: {
            /**
             * 创建时间。
             * @example `2019-12-25T12:31:31Z`
             */
            CreationTime: string;
            /**
             * 弹性网卡所属的专有网络VPC ID。
             * @example `vpc-bp1j7w3gc1cexjqd****`
             */
            VpcId: string;
            /**
             * 弹性网卡的类型。
             * @example `Secondary`
             */
            Type: string;
            /**
             * 弹性网卡的状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 弹性网卡的通讯模式。可能值：
             * - Standard：使用TCP通讯模式。
             * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
             * > HighPerformance参数值只支持RDMA增强型实例规格族c7re，目前仅支持在华北2（北京）的可用区K设置该参数值。
             * @example `Standard`
             */
            NetworkInterfaceTrafficMode: string;
            /**
             * 弹性网卡的名称。
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
             * @example `0`
             */
            QueuePairNumber: number;
            /**
             * 弹性网卡ID。
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
             * VPC的交换机ID。
             * @example `vsw-bp16usj2p27htro3****`
             */
            VSwitchId: string;
            /**
             * 描述。
             * @example `DescriptionTest`
             */
            Description: string;
            /**
             * 资源组ID。
             * @example `rg-2ze88m67qx5z****`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            ZoneId: string;
            /**
             * 弹性网卡的私网IP地址。
             * @example `172.17.**.**`
             */
            PrivateIpAddress: string;
            /**
             * 弹性网卡的队列数。
             * - 如果辅助网卡是已挂载（InUse）状态且没有修改过队列数，则返回实例规格默认的辅助网卡队列数。
             * - 如果辅助网卡修改过队列数，则返回修改后的队列数。
             * - 如果辅助网卡是未挂载（Available）状态且未修改过队列数，则返回值为空。
             * - 主网卡返回实例规格默认的主网卡队列数。
             * @example `8`
             */
            QueueNumber: number;
            PrivateIpSets: {
                /**
                 * PrivateIpSet组成的集合。
                 */
                PrivateIpSet: {
                    /**
                     * 实例的私网IP地址。
                     * @example `172.17.**.**`
                     */
                    PrivateIpAddress: string;
                    /**
                     * 是否是主私网IP地址。可能值：
                     * - true：主私网IP
                     * - false：辅助私网IP
                     * @example `true`
                     */
                    Primary: boolean;
                    /**
                     * 弹性网卡关联的弹性公网IP。
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
                 * 弹性网卡已分配的IPv6地址集合。
                 */
                Ipv6Set: {
                    /**
                     * 弹性网卡已分配的IPv6地址。
                     * @example `2408:4321:180:1701:94c7:bc38:3bfa:****`
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
                 * 标签。
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
            SecurityGroupIds: {
                /**
                 * 所属的安全组集合。
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
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                AllocationId: string;
            };
            /**
             * > 该参数正在邀测中，暂未开放使用。
             */
            Attachment: {
                /**
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `0`
                 */
                DeviceIndex: number;
                /**
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                InstanceId: string;
                /**
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `null`
                 */
                TrunkNetworkInterfaceId: string;
                /**
                 * 网卡挂载指定的物理网卡索引。
                 * - 如果网卡是未挂载（Available）状态或者挂载时未指定索引，则不返回此值。
                 * - 如果网卡是已挂载（InUse）状态且挂载时指定，此值表示网卡挂载指定的物理网卡索引。
                 * @example `0`
                 */
                NetworkCardIndex: number;
            };
            /**
             * 释放实例时是否保留网卡。可能值：
             * - true：不保留。
             * - false：保留。
             * @example `true`
             */
            DeleteOnRelease: boolean;
        }[];
    };
}
