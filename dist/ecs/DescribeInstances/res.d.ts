export interface DescribeInstancesResponse {
    /**
     * 本次调用返回的查询凭证值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询到的实例总数。
     * > 使用`MaxResults`和`NextToken`参数进行分页查询时，返回的`TotalCount`参数值无意义。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 由Instances组成的数组格式，返回实例的信息。
         */
        Instance: {
            /**
             * 实例创建时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](~~25696~~)。
             * @example `2017-12-10T04:04Z`
             */
            CreationTime: string;
            /**
             * 实例序列号。
             * @example `51d1353b-22bf-4567-a176-8b3e12e4****`
             */
            SerialNumber: string;
            /**
             * 实例状态。
             * @example `Running`
             */
            Status: string;
            /**
             * 部署集ID。
             * @example `ds-bp67acfmxazb4p****`
             */
            DeploymentSetId: string;
            /**
             * 密钥对名称。
             * @example `testKeyPairName`
             */
            KeyPairName: string;
            /**
             * > 该参数已弃用，不再返回有意义的数据。
             * @example `month`
             */
            SaleCycle: string;
            /**
             * 按量实例的竞价策略。可能值：
             * - NoSpot：正常按量付费实例。
             * - SpotWithPriceLimit：设置上限价格的抢占式实例。
             * - SpotAsPriceGo：系统自动出价，最高按量付费价格的抢占式实例。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 实例是否可以挂载数据盘。
             * - true：可以挂载数据盘。
             * - false：不可以挂载数据盘。
             * @example `true`
             */
            DeviceAvailable: boolean;
            /**
             * 实例挂载的本地存储容量。单位：GiB。
             * @example `1000`
             */
            LocalStorageCapacity: number;
            /**
             * 实例描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 抢占式实例的保留时长，单位为小时。可能值：
             * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
             * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
             * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
             * >当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时返回该参数。
             * @example `1`
             */
            SpotDuration: number;
            /**
             * 实例网络类型。可能值：
             * - classic：经典网络。
             * - vpc：专有网络VPC。
             * @example `vpc`
             */
            InstanceNetworkType: string;
            /**
             * 实例名称。
             * @example `InstanceNameTest`
             */
            InstanceName: string;
            /**
             * 实例操作系统的英文名称。
             * @example `CentOS  7.4 64 bit`
             */
            OSNameEn: string;
            /**
             * 实例所属的HPC集群ID。
             * @example `hpc-bp67acfmxazb4p****`
             */
            HpcClusterId: string;
            /**
             * 实例的每小时最高价格。支持最大3位小数，参数SpotStrategy=SpotWithPriceLimit时，该参数生效。
             * @example `0.98`
             */
            SpotPriceLimit: number;
            /**
             * 内存大小，单位为MiB。
             * @example `16384`
             */
            Memory: number;
            /**
             * 实例的操作系统名称。
             * @example `CentOS  7.4 64 位`
             */
            OSName: string;
            /**
             * ECS实例绑定部署集分散部署时，实例在部署集中的分组位置。
             * @example `1`
             */
            DeploymentSetGroupNo: number;
            /**
             * 实例运行的镜像ID。
             * @example `m-bp67acfmxazb4p****`
             */
            ImageId: string;
            /**
             * 实例的VLAN ID。
             * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
             * @example `10`
             */
            VlanId: string;
            /**
             * 实例所在的集群ID。
             * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
             * @example `c-bp67acfmxazb4p****`
             */
            ClusterId: string;
            /**
             * 实例规格附带的GPU类型。
             * @example `NVIDIA V100`
             */
            GPUSpec: string;
            /**
             * 按量付费实例的自动释放时间。
             * @example `2017-12-10T04:04Z`
             */
            AutoReleaseTime: string;
            /**
             * 实例释放保护属性，指定是否支持通过控制台或API（DeleteInstance）释放实例。
             * - true：已开启实例释放保护。
             * - false：未开启实例释放保护。
             * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
             * @example `false`
             */
            DeletionProtection: boolean;
            /**
             * 实例停机后是否继续收费。可能值：
             * - KeepCharging：停机后继续收费，为您继续保留库存资源。
             * - StopCharging：停机后不收费。停机后，我们释放实例对应的资源，例如vCPU、内存和公网IP等资源。重启是否成功依赖于当前地域中是否仍有资源库存。
             * - Not-applicable：本实例不支持停机不收费功能。
             * @example `KeepCharging`
             */
            StoppedMode: string;
            /**
             * 实例规格附带的GPU数量。
             * @example `4`
             */
            GPUAmount: number;
            /**
             * 实例主机名。
             * @example `testHostName`
             */
            HostName: string;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            /**
             * 公网出带宽最大值，单位：Mbit/s。
             * @example `5`
             */
            InternetMaxBandwidthOut: number;
            /**
             * 公网入带宽最大值，单位：Mbit/s。
             * @example `50`
             */
            InternetMaxBandwidthIn: number;
            /**
             * 实例规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 实例的计费方式。可能值：
             * - PrePaid：包年包月。
             * - PostPaid：按量付费。
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * 实例所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 是否为I/O优化型实例。
             * - true：是。
             * - false：否。
             * @example `true`
             */
            IoOptimized: boolean;
            /**
             * 实例最近一次的启动时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](~~25696~~)。
             * @example `2017-12-10T04:04Z`
             */
            StartTime: string;
            /**
             * vCPU数。
             * @example `8`
             */
            Cpu: number;
            /**
             * 实例挂载的本地存储数量。
             * @example `2`
             */
            LocalStorageAmount: number;
            /**
             * 过期时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](~~25696~~)。
             * @example `2017-12-10T04:04Z`
             */
            ExpiredTime: string;
            /**
             * 实例所属的企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 网络计费类型。可能值：
             * - PayByBandwidth：按固定带宽计费。
             * - PayByTraffic：按使用流量计费。
             * @example `PayByTraffic`
             */
            InternetChargeType: string;
            /**
             * 实例所属可用区。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 实例是否可以回收。
             * @example `false`
             */
            Recyclable: boolean;
            /**
             * > 该参数正在邀测中，暂未开放使用。
             * @example `null`
             */
            ISP: string;
            /**
             * 突发性能实例的运行模式。可能值：
             * - Standard：标准模式。有关实例性能的更多信息，请参见[什么是突发性能实例](~~59977~~)中的性能约束模式章节。
             * - Unlimited：无性能约束模式，有关实例性能的更多信息，请参见[什么是突发性能实例](~~59977~~)中的无性能约束模式章节。
             * @example `Standard`
             */
            CreditSpecification: string;
            /**
             * 实例规格族。
             * @example `ecs.g5`
             */
            InstanceTypeFamily: string;
            /**
             * 实例的操作系统类型，分为Windows Server和Linux两种。可能值：
             * - windows。
             * - linux。
             * @example `linux`
             */
            OSType: string;
            NetworkInterfaces: {
                /**
                 * 实例包含的弹性网卡集合。
                 */
                NetworkInterface: {
                    /**
                     * 弹性网卡类型。可能值：
                     * - Primary：主网卡。
                     * - Secondary：辅助弹性网卡。
                     * @example `Primary`
                     */
                    Type: string;
                    /**
                     * 弹性网卡的MAC地址。
                     * @example `00:16:3e:32:b4:**`
                     */
                    MacAddress: string;
                    /**
                     * 弹性网卡主私有IP地址。
                     * @example `172.17.**.***`
                     */
                    PrimaryIpAddress: string;
                    /**
                     * 弹性网卡的ID。
                     * @example `eni-2zeh9atclduxvf1z****`
                     */
                    NetworkInterfaceId: string;
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
                             * 是否是主私网IP地址。
                             * - true：是。
                             * - false：否。
                             * @example `true`
                             */
                            Primary: boolean;
                        }[];
                    };
                    Ipv6Sets: {
                        /**
                         * 弹性网卡已分配的IPv6地址集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。
                         */
                        Ipv6Set: {
                            /**
                             * 弹性网卡已分配的IPv6地址。
                             * @example `2408:4321:180:1701:94c7:bc38:3bfa:***`
                             */
                            Ipv6Address: string;
                        }[];
                    };
                    Ipv4PrefixSets: {
                        /**
                         * 弹性网卡已分配的IPv4前缀集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。
                         */
                        Ipv4PrefixSet: {
                            /**
                             * 弹性网卡已分配的IPv4前缀。
                             * @example `192.168.*.*​/28`
                             */
                            Ipv4Prefix: string;
                        }[];
                    };
                    Ipv6PrefixSets: {
                        /**
                         * 弹性网卡已分配的IPv6前缀集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。
                         */
                        Ipv6PrefixSet: {
                            /**
                             * 弹性网卡已分配的IPv6前缀。
                             * @example `2001:1111:*:*::/80`
                             */
                            Ipv6Prefix: string;
                        }[];
                    };
                }[];
            };
            OperationLocks: {
                /**
                 * 实例的锁定原因。
                 */
                LockReason: {
                    /**
                     * 实例被锁定的描述信息。
                     * @example `The specified instance is locked due to financial reason.`
                     */
                    LockMsg: string;
                    /**
                     * 锁定类型。可能值：
                     * - financial：因欠费被锁定。
                     * - security：因安全原因被锁定。
                     * - Recycling：抢占式实例的待释放锁定状态。
                     * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
                     * - refunded：因退款被锁定。
                     * @example `Recycling`
                     */
                    LockReason: string;
                }[];
            };
            Tags: {
                /**
                 * 实例的标签集合。
                 */
                Tag: {
                    /**
                     * 实例的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 实例的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            RdmaIpAddress: {
                /**
                 * HPC实例的RDMA网络IP列表。
                 */
                IpAddress: string[];
            };
            SecurityGroupIds: {
                /**
                 * 实例所属安全组ID列表。
                 */
                SecurityGroupId: string[];
            };
            PublicIpAddress: {
                /**
                 * 实例公网IP地址列表。
                 */
                IpAddress: string[];
            };
            InnerIpAddress: {
                /**
                 * 经典网络类型实例的内网IP地址列表。
                 */
                IpAddress: string[];
            };
            /**
             * 专有网络VPC属性。
             */
            VpcAttributes: {
                /**
                 * 专有网络VPC ID。
                 * @example `vpc-2zeuphj08tt7q3brd****`
                 */
                VpcId: string;
                /**
                 * 云产品的IP，用于VPC云产品之间的网络互通。
                 * @example `172.17.**.**`
                 */
                NatIpAddress: string;
                /**
                 * 虚拟交换机ID。
                 * @example `vsw-2zeh0r1pabwtg6wcs****`
                 */
                VSwitchId: string;
                PrivateIpAddress: {
                    /**
                     * 私有IP地址列表。
                     */
                    IpAddress: string[];
                };
            };
            /**
             * 弹性公网IP绑定信息。
             */
            EipAddress: {
                /**
                 * 是否可以解绑弹性公网IP。
                 * @example `true`
                 */
                IsSupportUnassociate: boolean;
                /**
                 * 弹性公网IP的计费方式。
                 * - PayByBandwidth：按带宽计费。
                 * - PayByTraffic：按流量计费。
                 * @example `PayByTraffic`
                 */
                InternetChargeType: string;
                /**
                 * 弹性公网IP。
                 * @example `42.112.**.**`
                 */
                IpAddress: string;
                /**
                 * 弹性公网IP的公网带宽限速，单位为Mbit/s。
                 * @example `5`
                 */
                Bandwidth: number;
                /**
                 * 弹性公网IP的ID。
                 * @example `eip-2ze88m67qx5z****`
                 */
                AllocationId: string;
            };
            /**
             * > 该参数正在邀测中，暂未开放使用。
             */
            HibernationOptions: {
                /**
                 * > 该参数正在邀测中，暂未开放使用。
                 * @example `false`
                 */
                Configured: boolean;
            };
            /**
             * 由专有宿主机集群ID（DedicatedHostClusterId）、专有宿主机ID（DedicatedHostId）和名称（DedicatedHostName）组成的宿主机属性数组。
             */
            DedicatedHostAttribute: {
                /**
                 * 专有宿主机ID。
                 * @example `dh-bp67acfmxazb4p****`
                 */
                DedicatedHostId: string;
                /**
                 * 专有宿主机名称。
                 * @example `testDedicatedHostName`
                 */
                DedicatedHostName: string;
                /**
                 * 专有宿主机集群ID。
                 * @example `dc-bp67acfmxazb4h****`
                 */
                DedicatedHostClusterId: string;
            };
            /**
             * 云服务器ECS的容量预留相关参数。
             */
            EcsCapacityReservationAttr: {
                /**
                 * 容量预留偏好。
                 * @example `cr-bp67acfmxazb4p****`
                 */
                CapacityReservationPreference: string;
                /**
                 * 容量预留ID。
                 * @example `cr-bp67acfmxazb4p****`
                 */
                CapacityReservationId: string;
            };
            /**
             * 专有宿主机实例的属性。
             */
            DedicatedInstanceAttribute: {
                /**
                 * 专有宿主机实例是否与专有宿主机关联。可能值：
                 * - default：专有宿主机实例不与专有宿主机关联。停机不收费实例重启后，可能会放置在自动资源部署池中的其它专有宿主机上。
                 * - host：专有宿主机实例与专有宿主机关联。停机不收费实例重启后，仍放置在原专有宿主机上。
                 * @example `default`
                 */
                Affinity: string;
                /**
                 * 实例的宿主机类型是否为专有宿主机。可能值：
                 * - default：实例的宿主机类型不是专有宿主机。
                 * - host：实例的宿主机类型为专有宿主机。
                 * @example `default`
                 */
                Tenancy: string;
            };
            /**
             * CPU配置详情。
             */
            CpuOptions: {
                /**
                 * >该参数已废弃。
                 * @example `null`
                 */
                Numa: string;
                /**
                 * 物理CPU核心数。
                 * @example `2`
                 */
                CoreCount: number;
                /**
                 * CPU线程数。
                 * @example `4`
                 */
                ThreadsPerCore: number;
                /**
                 * 实例的CPU拓扑类型。可能值：
                 * - HT离散模式：ContinuousCoreToHTMapping
                 * - HT连续模式：DiscreteCoreToHTMapping
                 * @example `DiscreteCoreToHTMapping`
                 */
                TopologyType: string;
            };
            /**
             * 元数据选项集合。
             */
            MetadataOptions: {
                /**
                 * 是否启用实例元数据的访问通道。可能值：
                 * - enabled：启用。
                 * - disabled：禁用。
                 * @example `enabled`
                 */
                HttpEndpoint: string;
                /**
                 * > 该参数暂未开放使用。
                 * @example `0`
                 */
                HttpPutResponseHopLimit: number;
                /**
                 * 访问实例元数据时是否强制使用加固模式（IMDSv2）。可能值：
                 * - optional：不强制使用。
                 * - required：强制使用。
                 * @example `optional`
                 */
                HttpTokens: string;
            };
            /**
             * 镜像相关属性信息。
             */
            ImageOptions: {
                /**
                 * 使用该镜像的实例是否支持使用ecs-user用户登录。可能值：
                 * - true：是。
                 * - false：否。
                 * @example `false`
                 */
                LoginAsNonRoot: boolean;
            };
            /**
             * 平台发起抢占式实例中断时，抢占式实例的中断模式。可能值：
             * - Terminate：释放。
             * - Stop：节省停机。
             * @example `Terminate`
             */
            SpotInterruptionBehavior: string;
        }[];
    };
}
