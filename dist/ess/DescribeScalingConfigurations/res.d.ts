export interface DescribeScalingConfigurationsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 伸缩配置的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 伸缩配置信息的集合。
     */
    ScalingConfigurations: {
        /**
         * ECS实例所属的部署集的ID。
         * @example `ds-bp1frxuzdg87zh4p****`
         */
        DeploymentSetId: string;
        /**
         * 伸缩配置的创建时间。
         * @example `2014-08-14T10:58Z`
         */
        CreationTime: string;
        /**
         * 伸缩配置的名称。
         * @example `scalingconfigura****`
         */
        ScalingConfigurationName: string;
        /**
         * 系统盘的描述。
         * @example `Test system disk.`
         */
        SystemDiskDescription: string;
        /**
         * 登录ECS实例时使用的密钥对的名称。
         * @example `keypair****`
         */
        KeyPairName: string;
        /**
         * ECS实例所属的安全组的ID，同一个安全组内的ECS实例可以互相访问。
         * @example `sg-bp18kz60mefs****`
         */
        SecurityGroupId: string;
        /**
         * 私有池ID。即弹性保障服务ID或容量预定服务ID。
         * @example `eap-bp67acfmxazb4****`
         */
        PrivatePoolOptions.Id: string;
        /**
         * 系统盘使用的自动快照策略ID。
         * @example `sp-bp12m37ccmxvbmi5****`
         */
        SystemDiskAutoSnapshotPolicyId: string;
        /**
         * 后付费实例的抢占策略。可能值：
         *
         * - NoSpot：普通的按量付费实例。
         * - SpotWithPriceLimit：设置上限价格的抢占式实例。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * @example `NoSpot`
         */
        SpotStrategy: string;
        /**
         * 伸缩配置所属伸缩组的ID。
         * @example `asg-bp17pelvl720x3v7****`
         */
        ScalingGroupId: string;
        /**
         * 专有宿主机实例是否与专有宿主机关联。可能值：
         * - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。
         * - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。
         * @example `default`
         */
        Affinity: string;
        /**
         * 是否在专有宿主机上创建实例。可能值：
         * - default：创建非专有宿主机实例。
         * - host：创建专有宿主机实例。若您不指定DedicatedHostId，则由阿里云自动选择专有宿主机放置实例。
         * 默认值：default。
         * @example `default`
         */
        Tenancy: string;
        /**
         * 系统盘的磁盘大小。单位为GiB。
         * @example `100`
         */
        SystemDiskSize: number;
        /**
         * 为弹性网卡指定随机生成的IPv6地址数量。
         * @example `1`
         */
        Ipv6AddressCount: number;
        /**
         * 抢占式实例的保留时长，单位为小时。
         * @example `1`
         */
        SpotDuration: number;
        /**
         * 伸缩配置在伸缩组中的状态。可能值：
         * - Active：生效状态。伸缩组会使用处于生效状态的伸缩配置自动创建ECS实例。
         * - Inacitve：未生效状态。处于未生效状态的伸缩配置存在于伸缩组中，但伸缩组不会使用此类伸缩配置自动创建ECS实例。
         * @example `Active`
         */
        LifecycleState: string;
        /**
         * ECS实例的名称。
         * @example `instance****`
         */
        InstanceName: string;
        /**
         * 是否开启安全加固。可能值：
         * - Active：启用安全加固，只对公共镜像生效。
         * - Deactive：不启用安全加固，对所有镜像类型生效。
         * @example `Active`
         */
        SecurityEnhancementStrategy: string;
        /**
         * ECS实例的自定义数据。
         * @example `echo hello ecs!
        `
         */
        UserData: string;
        /**
         * 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。可能值：
         * - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。
         * - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。
         * - None：不使用模式。实例启动将不使用私有池容量。
         * @example `Open`
         */
        PrivatePoolOptions.MatchCriteria: string;
        /**
         * 是否在专有宿主机上创建ECS实例。由于专有宿主机不支持创建抢占式实例，指定DedicatedHostId参数后，会自动忽略请求中的SpotStrategy和SpotPriceLimit设置。
         * 您可以通过调用DescribeDedicatedHosts接口查询专有宿主机ID列表。
         * @example `dh-bp67acfmxazb4p****`
         */
        DedicatedHostId: string;
        /**
         * ECS实例的系列。
         * @example `ecs-3`
         */
        InstanceGeneration: string;
        /**
         * ECS实例所属的HPC集群的ID。
         * @example `hpc-clus****`
         */
        HpcClusterId: string;
        /**
         * 是否使用镜像预设的密码。
         * @example `true`
         */
        PasswordInherit: boolean;
        /**
         * 内存大小，单位为GiB。
         * 同时指定CPU和Memory可以定义实例规格范围。例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
         * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
         * @example `16`
         */
        Memory: number;
        /**
         * 镜像文件ID，自动创建实例时使用的镜像资源。
         * @example `centos6u5_64_20G_aliaegis_2014****.vhd`
         */
        ImageId: string;
        /**
         * 镜像族系名称，通过设置该参数来获取当前镜像族系内最新的可用镜像，用于创建实例。如果已经设置了参数`ImageId`，则不能设置该参数。
         * @example `hangzhou-daily-update`
         */
        ImageFamily: string;
        /**
         * 镜像来源。可能值：
         * - system：阿里云提供的公共镜像。
         * - self：您创建的自定义镜像。
         * - others：其他阿里云用户提供的共享镜像或社区镜像。
         * - marketplace：云市场镜像提供的镜像。
         * @example `system`
         */
        ImageOwnerAlias: string;
        /**
         * ECS实例作为后端服务器时的权重，取值范围：1~100。
         * @example `1`
         */
        LoadBalancerWeight: number;
        /**
         * 系统盘的磁盘种类。可能值：
         * - cloud：普通云盘。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - ephemeral_ssd：本地SSD盘。
         * - cloud_essd：ESSD云盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * @example `cloud`
         */
        SystemDiskCategory: string;
        /**
         * 云服务器的主机名。
         * @example `LocalHost`
         */
        HostName: string;
        /**
         * 系统盘的名称。
         * @example `cloud_ssd_Test`
         */
        SystemDiskName: string;
        /**
         * 公网出带宽最大值，单位为Mbps（Mega bit per second）。取值范围：
         * - 按带宽计费：0~1024，如果您没有指定该参数，则出带宽将自动被设置为0 Mbps。
         * - 按流量计费：0~1024，如果您没有指定该参数，则会出现报错。
         * @example `0`
         */
        InternetMaxBandwidthOut: number;
        /**
         * 公网入带宽最大值，单位为Mbps（Mega bit per second）。可能值：1~200。
         * @example `200`
         */
        InternetMaxBandwidthIn: number;
        /**
         * ECS实例的实例规格。
         * @example `ecs.g6.large`
         */
        InstanceType: string;
        /**
         * ECS实例的描述。
         * @example `FinanceDept`
         */
        InstanceDescription: string;
        /**
         * 是否为I/O优化实例。可能值：
         * - none：非I/O优化。
         * - optimized：I/O优化。
         * @example `none`
         */
        IoOptimized: string;
        /**
         * ECS实例的RAM角色名称。RAM角色名称由RAM提供和维护，您可调用ListRoles查询可用的RAM角色。
         * @example `ramrole****`
         */
        RamRoleName: string;
        /**
         * 当系统盘为ESSD云盘时，ESSD云盘的性能等级。
         * @example `PL1`
         */
        SystemDiskPerformanceLevel: string;
        /**
         * vCPU个数。
         * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
         * > 该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
         * @example `2`
         */
        Cpu: number;
        /**
         * ECS实例所属资源组的ID。
         * @example `rg-aekzn2ou7xo****`
         */
        ResourceGroupId: string;
        /**
         * 实例所属的可用区ID，您可以调用DescribeZones获取可用区列表。
         * @example `cn-hangzhou-g`
         */
        ZoneId: string;
        /**
         * 网络计费类型。取值范围：
         * - PayByBandwidth：按带宽计费。此时InternetMaxBandwidthOut即为所选的固定带宽值。
         * - PayByTraffic：按流量计费。此时InternetMaxBandwidthOut只是一个带宽上限，计费以实际产生的网络流量为依据。
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * 镜像文件名称。
         * @example `centos6u5_64_20G_aliaegis_2014****.vhd
        `
         */
        ImageName: string;
        /**
         * 伸缩配置的ID。
         * @example `asc-bp1ezrfgoyn5kijl****`
         */
        ScalingConfigurationId: string;
        /**
         * 突发性能实例的运行模式。取值范围：
         * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
         * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
         * @example `Standard`
         */
        CreditSpecification: string;
        /**
         * 抢占实例中断模式。
         * @example `Terminate`
         */
        SpotInterruptionBehavior: string;
        /**
         * ECS实例规格+交换机的自定义优先级。
         * ><notice>仅在伸缩组的扩缩容策略为优先级策略时有效。></notice>
         * 当无法根据优先级较高的实例规格+交换机创建出实例时，弹性伸缩服务会自动选择下一优先级的实例规格+交换机组合来创建实例。
         * > 如果仅指定了部分实例规格+交换机的自定义优先级，则未指定的部分优先级低于指定的部分，且未指定部分仍会依次按照伸缩组的交换机顺序、伸缩配置的实例规格顺序确定优先级。
         * > - 例如：伸缩组的交换机顺序为vsw1、vsw2，伸缩配置的实例规格顺序为type1、type2，自定义优先级顺序为["vsw2+type2", "vsw1+type2"]，则最终优先级为："vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1"
         */
        CustomPriorities: {
            /**
             * ECS 实例的实例规格。
             * @example `ecs.c6a.4xlarge`
             */
            InstanceType: string;
            /**
             * 虚拟交换机的 ID。
             * @example `vsw-bp14zolna43z266bq****
            `
             */
            VswitchId: string;
        }[];
        /**
         * 数据盘信息的集合。
         */
        DataDisks: {
            /**
             * 当数据盘为ESSD云盘时，ESSD云盘的性能等级。
             * @example `PL1`
             */
            PerformanceLevel: string;
            /**
             * 数据盘的描述。
             * @example `FinanceDept`
             */
            Description: string;
            /**
             * 创建数据盘使用的快照ID。
             * @example `s-23f2i****`
             */
            SnapshotId: string;
            /**
             * 数据盘的挂载点。
             * @example `/dev/xvdb`
             */
            Device: string;
            /**
             * 数据盘的磁盘大小，内存单位为GiB。取值范围：
             * - cloud：5~2000。
             * - cloud_efficiency：20~32768。
             * - cloud_ssd：20~32768。
             * - cloud_essd：20~32768。
             * - ephemeral_ssd：5~800。
             * @example `200`
             */
            Size: number;
            /**
             * 数据盘的名称。
             * @example `cloud_ssdData`
             */
            DiskName: string;
            /**
             * 数据盘使用的自动快照策略ID。
             * @example `sp-bp19nq9enxqkomib****`
             */
            AutoSnapshotPolicyId: string;
            /**
             * 数据盘的磁盘种类。取值范围：
             * - cloud：普通云盘。随实例创建的普通云盘的DeleteWithInstance属性为true。
             * - cloud_efficiency：高效云盘。
             * - cloud_ssd：SSD云盘。
             * - ephemeral_ssd：本地SSD盘。
             * - cloud_essd：ESSD云盘。
             * - cloud_auto：ESSD AutoPL云盘。
             * @example `cloud`
             */
            Category: string;
            /**
             * 数据盘对应的KMS密钥的ID。
             * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
             */
            KMSKeyId: string;
            /**
             * 数据盘是否随实例释放。取值范围：
             * - true：释放实例时，该磁盘随实例一起释放。
             * - false：释放实例时，该磁盘保留不释放。
             * @example `true`
             */
            DeleteWithInstance: boolean;
            /**
             * 数据盘是否加密。取值范围：
             * - true：加密。
             * - false：不加密。
             * 默认值：false。
             * @example `false`
             */
            Encrypted: string;
            /**
             * 数据盘的多磁盘类型。第一个磁盘类型优先级最高，其他磁盘类型的优先级依次递减。当无法使用高优先级的磁盘类型时，弹性伸缩自动尝试下一优先级的磁盘类型创建数据盘。取值范围：
             * - cloud：普通云盘。随实例创建的普通云盘的DeleteWithInstance属性为true。
             * - cloud_efficiency：高效云盘。
             * - cloud_ssd：SSD云盘。
             * - cloud_essd：ESSD云盘。
             */
            Categories: string[];
            /**
             * 数据盘预配置的IOPS（Input/Output Operations Per Second）性能指标。
             * > IOPS（Input/Output Operations Per Second）指每秒能处理的I/O个数，表示块存储处理读写（输出/输入）的能力，单位为次。
             * @example `100`
             */
            ProvisionedIops: number;
            /**
             * 数据盘是否开启Burst（性能突发）。可能值：
             * - true：开启。
             * - false：未开启。
             * > 当`DataDisk.Category`取值为`cloud_auto`时才显示该参数。
             * <props="china">更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。</props>
             * @example `false`
             */
            BurstingEnabled: boolean;
        }[];
        /**
         * 标签信息的集合。
         */
        Tags: {
            /**
             * 实例的标签键。N的取值范围：1~20。
             * 如果传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `binary`
             */
            Key: string;
            /**
             * 实例的标签值。N的取值范围：1~20。
             * 如果传入该值，则允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
             * @example `alterTable`
             */
            Value: string;
        }[];
        /**
         * 抢占式实例信息的集合。
         */
        SpotPriceLimits: {
            /**
             * 抢占式实例的实例规格。
             * @example `ecs.g6.large
            `
             */
            InstanceType: string;
            /**
             * 抢占式实例对应的出价。
             * @example `0.125
            `
             */
            PriceLimit: number;
        }[];
        /**
         * 智能配置的信息集合，用于筛选符合要求的实例规格范围。
         */
        InstancePatternInfos: {
            /**
             * 按量付费实例或者抢占式实例可接受的每小时最高价格。
             * @example `2`
             */
            MaxPrice: number;
            /**
             * 实例规格的vCPU内核数目。
             * @example `2`
             */
            Cores: number;
            /**
             * 实例规格的内存大小，单位为GiB。
             * @example `4`
             */
            Memory: number;
            /**
             * 实例规格族级别。
             * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
             * - EnterpriseLevel：企业级。性能稳定，资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
             * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的情况。更多信息，请参见[突发性能实例](~~59977~~)。
             * @example `EnterpriseLevel`
             */
            InstanceFamilyLevel: string;
            /**
             * 实例规格所属的架构类型。可能值：
             * - X86：X86计算。
             * - Heterogeneous：异构计算，例如GPU或FPGA等。
             * - BareMental：弹性裸金属服务器。
             * - Arm：Arm计算。
             * - SuperComputeCluster：超级计算集群。
             */
            Architectures: string[];
            /**
             * 是否为性能突发实例规格。可能值：
             * - Exclude：不包含性能突发实例规格。
             * - Include：包含性能突发实例规格。
             * - Required：只包含性能突发实例规格。
             * @example `Include`
             */
            BurstablePerformance: string;
            /**
             * 需要排除的实例规格。通过使用通配符（*）可以排除单个规格或者整个规格族。例如：
             * - ecs.c6.large：表示排除ecs.c6.large实例规格。
             * - ecs.c6.*：表示排除整个c6规格族的实例规格。
             */
            ExcludedInstanceTypes: string[];
            InstanceTypeFamilies: string[];
            MinimumCpuCoreCount: number;
            MaximumCpuCoreCount: number;
            GpuSpecs: string[];
            InstanceCategories: string[];
            CpuArchitectures: string[];
            PhysicalProcessorModels: string[];
            MinimumEniQuantity: number;
            MinimumEniPrivateIpAddressQuantity: number;
            MinimumEniIpv6AddressQuantity: number;
            MinimumInitialCredit: number;
            MinimumBaselineCredit: number;
            MinimumMemorySize: number;
            MaximumMemorySize: number;
            MinimumGpuAmount: number;
            MaximumGpuAmount: number;
        }[];
        /**
         * 系统盘的多磁盘类型。第一个磁盘类型优先级最高，其他磁盘类型的优先级依次递减。当无法使用高优先级的磁盘类型时，弹性伸缩自动尝试下一优先级的磁盘类型创建系统盘。取值范围：
         * - cloud：普通云盘。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         */
        SystemDiskCategories: string[];
        /**
         * 对应指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
         */
        WeightedCapacities: number[];
        /**
         * ECS实例的实例规格的集合。
         */
        InstanceTypes: string[];
        /**
         * ECS实例所属的多个安全组的ID，同一个安全组内的ECS实例可以互相访问。
         */
        SecurityGroupIds: string[];
        /**
         * >该参数正在邀测中，暂未开放使用。
         */
        SchedulerOptions: {
            /**
             * >该参数正在邀测中，暂未开放使用。
             * @example `testManagedPrivateSpaceId`
             */
            ManagedPrivateSpaceId: string;
        };
        /**
         * 系统盘是否加密。可能值：
         * - true：加密。
         * - false：不加密。
         * @example `false`
         */
        SystemDiskEncrypted: boolean;
        /**
         * 系统盘使用的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****
        `
         */
        SystemDiskKMSKeyId: string;
        /**
         * 系统盘采用的加密算法。可能值：
         * - AES-256。
         * - SM4-128。
         * @example `AES-256
        `
         */
        SystemDiskEncryptAlgorithm: string;
        /**
         * 系统盘预配置的IOPS（Input/Output Operations Per Second）性能指标。
         * > IOPS（Input/Output Operations Per Second）指每秒能处理的I/O个数，表示块存储处理读写（输出/输入）的能力，单位为次。
         * @example `100`
         */
        SystemDiskProvisionedIops: number;
        /**
         * 系统盘是否开启Burst（性能突发）。可能值：
         * - true：开启。
         * - false：未开启。
         *
         * > 当SystemDisk.Category取值为cloud_auto时才支持设置该参数。
         * @example `false`
         */
        SystemDiskBurstingEnabled: boolean;
        /**
         * ECS实例是否使用ecs-user用户登录。可能值：
         * - true：是。
         * - false：否。
         * @example `false`
         */
        ImageOptionsLoginAsNonRoot: boolean;
        /**
         * 实例释放保护属性，指定是否支持通过ECS控制台或API（DeleteInstance）直接释放实例。可能值：
         * - true：开启实例释放保护，无法通过ECS控制台或者或API（DeleteInstance）直接释放实例。
         * - false：关闭实例释放保护，可以通过ECS控制台或者或API（DeleteInstance）直接释放实例。
         * >该属性仅适用于按量付费实例，防止弹性伸缩扩容的实例被误删除，不影响正常的缩容活动，开启实例释放保护的实例可以被缩容活动释放掉。
         * @example `false`
         */
        DeletionProtection: boolean;
        /**
         * 存储集ID。
         * @example `ss-bp67acfmxazb4p****`
         */
        StorageSetId: string;
        /**
         * 存储集中的最大分区数量。取值为大于等于2的整数。
         * @example `2`
         */
        StorageSetPartitionNumber: number;
        /**
         * 弹性网卡列表。
         */
        NetworkInterfaces: {
            /**
             * 弹性网卡类型。可能值：
             * - Primary：主网卡。
             * - Secondary：辅助弹性网卡。
             * @example `Primary`
             */
            InstanceType: string;
            /**
             * 弹性网卡的通讯模式。可能值：
             * - Standard：使用TCP通讯模式。
             * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
             * @example `HighPerformance`
             */
            NetworkInterfaceTrafficMode: string;
            /**
             * 为主网卡指定随机生成的IPv6地址数量。
             * @example `1`
             */
            Ipv6AddressCount: number;
            /**
             * 弹性网卡所属的一个或多个安全组 ID。
             */
            SecurityGroupIds: string[];
        }[];
        /**
         * 专有宿主机集群ID。
         * @example `dc-zm04u8r3lohsq****`
         */
        DedicatedHostClusterId: string;
        PasswordSetted: boolean;
    }[];
}
