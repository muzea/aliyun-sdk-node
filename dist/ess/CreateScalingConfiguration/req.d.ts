export interface CreateScalingConfigurationRequest {
    /**
     * 伸缩配置所属的伸缩组的ID。
     * @example `asg-bp14wlu85wrpchm0****`
     */
    "ScalingGroupId": string;
    /**
     * 镜像文件ID，自动创建实例时使用的镜像资源。
     * @example `centos6u5_64_20G_aliaegis****.vhd`
     */
    "ImageId"?: string;
    /**
     * 镜像文件名称，同一个地域内镜像名称唯一。如果设置了ImageId，ImageName将被忽略。
     * 不支持通过ImageName设置镜像市场镜像。
     * @example `image****`
     */
    "ImageName"?: string;
    /**
     * ECS实例的实例规格，更多信息，请参见实例规格族。
     * @example `ecs.g6.large`
     */
    "InstanceType"?: string;
    /**
     * vCPU个数。单位：核。
     * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
     * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
     * @example `2`
     */
    "Cpu"?: number;
    /**
     * 内存大小。单位：GiB。
     * 同时指定CPU和Memory可以定义实例规格范围。例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
     * > 该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
     * @example `16`
     */
    "Memory"?: number;
    /**
     * ECS实例所属的部署集的ID。
     * @example `ds-bp1frxuzdg87zh4pz****`
     */
    "DeploymentSetId"?: string;
    /**
     * ECS实例所属的安全组的ID，同一个安全组内的ECS实例可以互相访问。
     * @example `sg-280ih****`
     */
    "SecurityGroupId"?: string;
    /**
     * 是否为I/O优化实例。取值范围：
     * none：非I/O优化实例。
     * optimized：I/O优化实例。
     * 已停售的实例规格的实例默认值是none，其他实例规格的实例默认值是optimized。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 网络计费类型。取值范围：
     * - PayByBandwidth：按带宽计费。此时InternetMaxBandwidthOut即为所选的固定带宽值。
     * - PayByTraffic：按流量计费。此时InternetMaxBandwidthOut只是一个带宽上限，计费以实际产生的网络流量为依据。
     * 如果未指定该参数，经典网络下默认值为PayByBandwidth，专有网络VPC下默认值为PayByTraffic。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 公网入带宽最大值，单位为Mbps（Mega bit per second），取值范围：1~200。
     * 如果您没有指定该参数，则入带宽将自动被设置为200 Mbps。实例的入数据流量免费，该参数在任何情况下都不涉及计费。
     * @example `100`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbps（Mega bit per second）。取值范围：
     * - 按带宽计费：0~1024，如果您没有指定该参数，则出带宽将自动被设置为0 Mbps。
     * - 按流量计费：0~1024，如果您没有指定该参数，则会出现报错。
     * @example `50`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 系统盘的磁盘种类。取值范围：
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - ephemeral_ssd：本地SSD盘。
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * 该参数不能与`SystemDiskCategories`同时指定。当该参数与`SystemDiskCategories`都未指定时，该参数有默认值：
     * - 对于I/O优化实例，默认值为cloud_efficiency。
     * - 对于非I/O优化实例，默认值为cloud。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 系统盘的大小，单位：GiB。取值范围：
     * - cloud：20~500。
     * - cloud_efficiency：20~500。
     * - cloud_ssd：20~500。
     * - cloud_essd：20~500。
     * - ephemeral_ssd：20~500。
     * 指定该参数后，系统盘大小必须大于等于max{20, ImageSize}。
     * 默认值：max{40, ImageSize}。
     * @example `100`
     */
    "SystemDisk.Size"?: number;
    /**
     * 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `cloud_ssdSystem`
     */
    "SystemDisk.DiskName"?: string;
    /**
     * 系统盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `Test system disk.`
     */
    "SystemDisk.Description"?: string;
    /**
     * 系统盘使用的自动快照策略ID。
     * @example `sp-bp12m37ccmxvbmi5****`
     */
    "SystemDisk.AutoSnapshotPolicyId"?: string;
    /**
     * 当系统盘为ESSD云盘时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 默认值：PL1。
     * @example `PL0`
     */
    "SystemDisk.PerformanceLevel"?: string;
    /**
     * 伸缩配置的名称，2~64英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、短划线（-）或半角句号（.）。
     * 在同一地域下同一伸缩组内伸缩配置名称唯一。如果您没有指定该参数，则默认使用伸缩配置的ID。
     * @example `scalingconfig****`
     */
    "ScalingConfigurationName"?: string;
    /**
     * ECS实例作为负载均衡后端服务器时的权重，取值范围：1~100。
     * 默认值：50。
     * @example `50`
     */
    "LoadBalancerWeight"?: number;
    /**
     * ECS实例的标签。标签以键值对方式传入，最多可以使用20组标签。Key和Value的使用要求如下：
     *
     * - Key最多支持64个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。一旦使用标签，Key不允许为空字符串。
     * - Value最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。Value可以为空字符串。
     * @example `{"key1":"value1","key2":"value2", ... "key5":"value5"}`
     */
    "Tags"?: string;
    /**
     * ECS实例的自定义数据，需要以Base64方式编码，编码前的原始数据最多为32 KB。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * 登录ECS实例时使用的密钥对的名称。
     *
     * - 对Windows实例，该参数将被忽略，默认为空。
     * - 对Linux实例，密码登录方式会被初始化成禁止。
     * @example `KeyPairTest`
     */
    "KeyPairName"?: string;
    /**
     * ECS实例的RAM角色名称。RAM角色名称由RAM提供和维护，您可调用ListRoles查询可用的RAM角色。
     * @example `ramrole****`
     */
    "RamRoleName"?: string;
    /**
     * 是否开启安全加固。取值范围：
     * - Active：启用安全加固，只对公共镜像生效。
     * - Deactive：不启用安全加固，对所有镜像类型生效。
     * @example `Active`
     */
    "SecurityEnhancementStrategy"?: string;
    /**
     * 使用本伸缩配置自动创建的ECS实例的名称。
     * @example `instance****`
     */
    "InstanceName"?: string;
    /**
     * 云服务器的主机名。半角句号（.）或短划线（-）不能作为首尾字符，不能连续使用半角句号（.）或短划线（-）。另外，不同类型实例的命名要求如下：
     * - Windows实例：主机名长度为2~15，可以包含大小写字母、数字和短划线（-）。不能包含半角句号（.），不能全是数字。
     * - 其他类型实例（Linux等）：主机名长度为2~64，可以包含多个半角句号（.）。两个半角句号（.）之间为一段，每段可以包含大小写字母、数字和短划线（-）。
     * @example `host****`
     */
    "HostName"?: string;
    /**
     * 后付费实例的抢占策略。取值范围：
     *
     * - NoSpot：普通的按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * 默认值：NoSpot。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 是否使用镜像预设的密码。使用该参数时，您需要确保使用的镜像已经设置了密码。取值范围：
     * - true：使用镜像预设密码。
     * - false：不使用镜像预设密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * ECS实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * \`()` ~!@#$%^&*-_+=\|{}[]:;'<>,.?/`
     * 其中，Windows实例不能以斜线号（/）为密码首字符。
     * > 如果传入Password参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `123abc****`
     */
    "Password"?: string;
    /**
     * ECS实例所属资源组的ID。
     * @example `rg-resource****`
     */
    "ResourceGroupId"?: string;
    /**
     * ECS实例所属的HPC集群的ID。
     * @example `hpc-clusterid`
     */
    "HpcClusterId"?: string;
    /**
     * ECS实例的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `Test instance.`
     */
    "InstanceDescription"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 为弹性网卡指定随机生成的IPv6地址数量。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 指定突发性能实例的运行模式。取值范围：
     * - Standard：标准模式。
     * - Unlimited：无性能约束模式。
     * 更多信息，请参见[突发性能实例概述](~~59977~~)下的性能模式章节。
     * @example `Standard`
     */
    "CreditSpecification"?: string;
    /**
     * 镜像族系名称，通过设置该参数来获取当前镜像族系内最新的可用镜像，用于创建实例。如果已经设置了参数`ImageId`，则不能设置该参数。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * ECS实例所属的可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 是否在专有宿主机上创建ECS实例。由于专有宿主机不支持创建抢占式实例，指定DedicatedHostId参数后，会自动忽略请求中的SpotStrategy和SpotPriceLimit设置。
     * 您可以调用DescribeDedicatedHosts接口查询专有宿主机ID列表。
     * @example `dh-bp67acfmxazb4p****`
     */
    "DedicatedHostId"?: string;
    /**
     * 专有宿主机实例是否与专有宿主机关联。取值范围：
     * - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。
     * - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。
     * 默认值：default。
     * @example `default`
     */
    "Affinity"?: string;
    /**
     * 是否在专有宿主机上创建实例。取值范围：
     * - default：创建非专有宿主机实例。
     * - host：创建专有宿主机实例。若您不指定DedicatedHostId，则由阿里云自动选择专有宿主机放置实例。
     * 默认值：default。
     * @example `default`
     */
    "Tenancy"?: string;
    /**
     * 调度选项。
     * @example `["testManagedPrivateSpaceId****"]`
     */
    "SchedulerOptions"?: any;
    /**
     * 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值范围：
     * - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。该模式下无需设置PrivatePoolOptions.Id参数。
     * - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。该模式下必须指定私有池ID，即PrivatePoolOptions.Id参数为必填项。
     * - None：不使用模式。实例启动将不使用私有池容量。
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria"?: string;
    /**
     * 私有池ID。即弹性保障服务ID或容量预定服务ID。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id"?: string;
    /**
     * 抢占式实例的保留时长，单位为小时。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的保留或回收。
     * - 0：创建后，阿里云不能保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的保留或回收。
     * >实例被回收前5分钟内，阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * 默认值：1。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 抢占实例中断模式。目前仅支持terminate（默认）直接释放实例。
     * @example `Terminate`
     */
    "SpotInterruptionBehavior"?: string;
    /**
     * 多实例规格参数。如果使用了InstanceTypes，InstanceType将被忽略。
     * 当无法根据优先级较高的实例规格创建出实例时，弹性伸缩服务会自动选择下一优先级的实例规格来创建实例。
     */
    "InstanceTypes"?: string[];
    /**
     * 用于指定的实例规格相关信息。
     */
    "InstanceTypeOverrides"?: {
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，请同时指定本参数和WeightedCapacity。
         * 本参数用于指定实例规格，会覆盖启动模板中的实例规格。您可以指定N个本参数，扩展启动模板支持N个实例规格。N的取值范围：1~10。
         * > 仅当LaunchTemplateId参数指定了启动模板时，本参数生效。
         * InstanceType的取值范围：在售的ECS实例规格。
         * @example `ecs.c5.xlarge`
         */
        InstanceType: string;
        /**
         * 当您需要指定伸缩配置中实例规格的容量时，在指定InstanceTypeOverrides.InstanceType后，再指定本参数。
         * 本参数用于指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
         * 由于每个实例规格的vCPU个数、内存大小等性能指标会有差异，您可以根据自身需求，给不同的实例规格配置不同的权重。
         *  例如：
         * - 当前容量：0。
         * - 期望容量：6。
         * - ecs.c5.xlarge规格容量：4。
         * 为满足期望容量，伸缩组将为用户扩容2台ecs.c5.xlarge实例。
         * >扩容时伸缩组的容量不得超过最大容量（MaxSize）与实例规格的最大权重之和。
         * WeightedCapacity的取值范围：1~500。
         * @example `4`
         */
        WeightedCapacity: number;
    }[];
    /**
     * 数据盘信息的集合。
     */
    "DataDisks"?: {
        /**
         * 当数据盘为ESSD云盘时，设置云盘的性能等级。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * > 关于如何选择ESSD云盘性能等级，请参见[ESSD云盘](~~122389~~)。
         * @example `PL0`
         */
        PerformanceLevel: string;
        /**
         * 数据盘使用的自动快照策略ID。
         * @example `sp-bp19nq9enxqkomib****`
         */
        AutoSnapshotPolicyId: string;
        /**
         * 数据盘是否加密。该参数取值范围：
         * - true：加密。
         * - false：不加密。
         * 默认值：false。
         * @example `false`
         */
        Encrypted: string;
        /**
         * 数据盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
         * @example `Test data disk.
        `
         */
        Description: string;
        /**
         * 创建数据盘时使用的快照。指定该参数后，DataDisks.Size会被忽略，实际创建的磁盘大小为指定快照的大小。
         * 如果该快照创建于2013年7月15日或之前，调用会被拒绝，返回参数中会提示InvalidSnapshot.TooOld。
         * @example `s-280s7****`
         */
        SnapshotId: string;
        /**
         * 数据盘的多磁盘类型。当无法使用高优先级的磁盘类型时，弹性伸缩自动尝试下一优先级的磁盘类型创建数据盘。取值范围：
         * - cloud：普通云盘。随实例创建的普通云盘的DeleteWithInstance属性为true。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * > 指定本参数时，不允许同时指定`DataDisks.Category`。
         */
        Categories: string[];
        /**
         * 数据盘的磁盘大小，内存单位为GiB。取值范围：
         * - cloud：5~2000。
         * - cloud_efficiency：20~32768。
         * - cloud_essd：20~32768。
         * - ephemeral_ssd：5~800。
         * 指定该参数后，磁盘大小必须大于等于快照大小（快照通过SnapshotId指定）。
         * @example `100`
         */
        Size: number;
        /**
         * 数据盘挂载点。如果您没有指定该参数，则默认在自动创建ECS实例时由系统分配，从/dev/xvdb开始，到/dev/xvdz结束。
         * @example `/dev/xvdb`
         */
        Device: string;
        /**
         * 系统盘的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `cloud_ssdData`
         */
        DiskName: string;
        /**
         * 数据盘的磁盘种类。取值范围：
         * - cloud：普通云盘。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - ephemeral_ssd：本地SSD盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * 该参数不能与DataDisk.Categories同时指定。当该参数与DataDisk.Categories都未指定时，该参数默认值：
         * - 对于I/O优化实例，默认值为cloud_efficiency。
         * - 对于非I/O优化实例，默认值为cloud。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * 指定数据盘是否随实例释放。该参数取值范围：
         * - true：释放实例时，该磁盘随实例一起释放。
         * - false：释放实例时，该磁盘保留不释放。
         * 该参数只可对独立云盘设置（DataDisks.Category为cloud、cloud_efficiency、cloud_ssd或cloud_essd），否则会出现报错。
         * 默认值：true。
         * @example `true`
         */
        DeleteWithInstance: boolean;
        /**
         * 数据盘对应的KMS密钥的ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        KMSKeyId: string;
        /**
         * 数据盘预配置的IOPS（Input/Output Operations Per Second）性能指标。
         * > IOPS（Input/Output Operations Per Second）指每秒能处理的I/O个数，表示块存储处理读写（输出/输入）的能力，单位为次。
         * @example `100`
         */
        ProvisionedIops: number;
        /**
         * 系统盘是否开启Burst（性能突发）。取值范围：
         * - true：开启。
         * - false：未开启。
         * > 当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。
         * <props="china">更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。</props>
         * @example `false`
         */
        BurstingEnabled: boolean;
    }[];
    /**
     * 抢占式实例相关的计费信息组成的集合。
     */
    "SpotPriceLimits"?: {
        /**
         * 抢占式实例对应的出价。SpotStrategy取值为SpotWithPriceLimit时生效。
         * @example `0.5`
         */
        PriceLimit: number;
        /**
         * 抢占式实例的实例规格。SpotStrategy取值为SpotWithPriceLimit时生效。
         * @example `ecs.g6.large`
         */
        InstanceType: string;
    }[];
    /**
     * 将ECS实例同时加入多个安全组。更多详情，请参见[使用限制](~~25412~~)下的安全组章节。
     * > 不支持同时指定SecurityGroupId和SecurityGroupIds。
     */
    "SecurityGroupIds"?: string[];
    /**
     * 智能配置的信息集合，用于筛选符合要求的实例规格范围。
     */
    "InstancePatternInfos"?: {
        /**
         * 智能配置模式下，实例规格的vCPU内核数目，用于筛选符合要求的实例规格范围。更多信息，请参见[实例规格族](~~25378~~)。
         * 请注意以下信息：
         * - InstancePatternInfos参数仅适用于伸缩组的网络类型为专有网络。
         * - InstancePatternInfos参数必须同时配置InstancePatternInfos.Cores和InstancePatternInfos.Memory。
         * - 如果您已经通过InstanceType或InstanceTypes参数指定了实例规格，弹性伸缩优先使用您指定的实例规格扩容，当指定的实例规格无库存时，再从符合InstancePatternInfos参数值的实例规格中优先使用价格最低的实例规格扩容。
         * @example `2`
         */
        Cores: number;
        /**
         * 实例规格族级别，用于筛选符合要求的实例规格范围，当`CostOptimization`开启时生效。取值范围：
         * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
         * - EnterpriseLevel：企业级。性能稳定且资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
         * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的业务场景。更多信息，请参见[突发性能实例概述](~~59977~~)。
         * @example `EnterpriseLevel`
         */
        InstanceFamilyLevel: string;
        /**
         * 智能配置模式下，按量付费实例或者抢占式实例可接受的每小时最高价格，用于筛选符合要求的实例规格范围。
         * > SpotStrategy设置为SpotWithPriceLimit时，该参数必选。其他情况下，该参数可选。
         * @example `2`
         */
        MaxPrice: number;
        /**
         * 智能配置模式下，实例规格的内存大小，单位为GiB，用于筛选符合要求的实例规格范围。
         * @example `4`
         */
        Memory: number;
        /**
         * 需要排除的实例规格。通过使用通配符（*）可以排除单个规格或者整个规格族。例如：
         * - ecs.c6.large：表示排除ecs.c6.large实例规格。
         * - ecs.c6.*：表示排除整个c6规格族的实例规格。
         */
        ExcludedInstanceTypes: string[];
        /**
         * 实例规格所属的架构类型。取值范围：
         * - X86：X86计算。
         * - Heterogeneous：异构计算，例如GPU或FPGA等。
         * - BareMental：弹性裸金属服务器。
         * - Arm：Arm计算。
         * - SuperComputeCluster：超级计算集群。
         * 默认值：包含所有架构类型。
         */
        Architectures: string[];
        /**
         * 是否为性能突发实例规格。取值范围：
         * - Exclude：不包含性能突发实例规格。
         * - Include：包含性能突发实例规格。
         * - Required：只包含性能突发实例规格。
         * 默认值：Include。
         * @example `Include`
         */
        BurstablePerformance: string;
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
     * 系统盘的多磁盘类型。当无法使用高优先级的磁盘类型时，弹性伸缩自动尝试下一优先级的磁盘类型创建系统盘。取值范围：
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - cloud_essd：ESSD云盘。
     * > 指定本参数时，不允许同时指定`SystemDisk.Category`。
     */
    "SystemDiskCategories"?: string[];
    /**
     * 是否加密系统盘。取值范围：
     * - true：加密。
     * - false：不加密。
     * 默认值：false。
     * @example `false`
     */
    "SystemDisk.Encrypted"?: boolean;
    /**
     * 系统盘使用的KMS密钥ID。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
     */
    "SystemDisk.KMSKeyId"?: string;
    /**
     * 系统盘采用的加密算法。取值范围：
     * - AES-256。
     * - SM4-128。
     * 默认值：AES-256。
     * @example `AES-256`
     */
    "SystemDisk.EncryptAlgorithm"?: string;
    /**
     * 系统盘预配置的IOPS（Input/Output Operations Per Second）性能指标。
     * > IOPS（Input/Output Operations Per Second）指每秒能处理的I/O个数，表示块存储处理读写（输出/输入）的能力，单位为次。
     * @example `100`
     */
    "SystemDisk.ProvisionedIops"?: number;
    /**
     * 系统盘是否开启Burst（性能突发）。取值范围：
     * - true：开启。
     * - false：未开启。
     * > 当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。
     * <props="china">更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。</props>
     * @example `false`
     */
    "SystemDisk.BurstingEnabled"?: boolean;
    /**
     * ECS实例是否使用ecs-user用户登录，更多信息，请参见[管理ECS实例的登录名](~~388447~~)。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "ImageOptions.LoginAsNonRoot"?: boolean;
    /**
     * 实例释放保护属性，指定是否支持通过ECS控制台或API（DeleteInstance）直接释放实例，防止实例被误删除。取值范围：
     * - true：开启实例释放保护，无法通过ECS控制台或API（DeleteInstance）直接释放实例。
     * - false：关闭实例释放保护，可以通过ECS控制台或API（DeleteInstance）直接释放实例。
     * 默认值：false。
     * >该属性仅适用于按量付费实例，防止弹性伸缩扩容的实例被误删除，不影响正常的缩容活动，开启实例释放保护的实例可以被缩容活动释放掉。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * 存储集ID。
     * @example `ss-bp67acfmxazb4p****`
     */
    "StorageSetId"?: string;
    /**
     * 存储集中的最大分区数量。取值范围：大于等于2。
     * @example `2`
     */
    "StorageSetPartitionNumber"?: number;
    /**
     * ECS实例规格+交换机的自定义优先级。
     * ><notice>仅在伸缩组的扩缩容策略为优先级策略时有效。></notice>
     * 当无法根据优先级较高的实例规格+交换机创建出实例时，弹性伸缩服务会自动选择下一优先级的实例规格+交换机组合来创建实例。
     * > 如果仅指定了部分实例规格+交换机的自定义优先级，则未指定的部分优先级低于指定的部分，且未指定部分仍会依次按照伸缩组的交换机顺序、伸缩配置的实例规格顺序确定优先级。
     * > - 例如：伸缩组的交换机顺序为vsw1、vsw2，伸缩配置的实例规格顺序为type1、type2，自定义优先级顺序为["vsw2+type2", "vsw1+type2"]，则最终优先级为："vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1"
     */
    "CustomPriorities"?: {
        /**
         * ECS 实例的实例规格。
         * ><notice>必须包含在伸缩配置的实例规格列表中。></notice>
         * @example `ecs.g6.large`
         */
        InstanceType: string;
        /**
         * 虚拟交换机的 ID。
         * ><notice>必须包含在伸缩组的交换机列表中。></notice>
         * @example `vsw-bp14zolna43z266bq****`
         */
        VswitchId: string;
    }[];
    /**
     * 弹性网卡列表。
     */
    "NetworkInterfaces"?: {
        /**
         * 弹性网卡类型。使用此参数时，必须使用NetworkInterfaces设置主网卡，同时不能设置SecurityGroupId或SecurityGroupIds 参数取值范围：
         * - Primary：主网卡。
         * - Secondary：辅助网卡。
         * 默认值：Secondary。
         * @example `Primary`
         */
        InstanceType: string;
        /**
         * 网卡的通讯模式。参数取值范围：
         * - Standard：使用TCP通讯模式。
         * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
         * 默认值：Standard。
         * >RDMA模式的弹性网卡数量不能超过该实例规格族的限制。更多信息，请参见[实例规格族](~~25378~~)。
         * @example `HighPerformance`
         */
        NetworkInterfaceTrafficMode: string;
        /**
         * 为主网卡指定随机生成的 IPv6 地址数量。
         * 您需要注意：
         * - NetworkInterface.InstanceType取值为Primary时，设置该参数才会生效。如果NetworkInterface.InstanceType取值为Secondary或空值，则不能设置该参数。
         * - 设置该参数后，您不能再设置Ipv6AddressCount。
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
     * @example `dc-2zedxc67zqzt7lb4****`
     */
    "DedicatedHostClusterId"?: string;
}
