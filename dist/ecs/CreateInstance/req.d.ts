export interface CreateInstanceRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像文件ID，启动实例时选择的镜像资源。如需使用云市场镜像，您可以在云市场镜像商详情页查看`ImageId`。当您不通过指定`ImageFamily`选用镜像族系最新可用镜像时，此参数必选。
     * @example `ubuntu_18_04_64_20G_alibase_20190624.vhd`
     */
    "ImageId"?: string;
    /**
     * 镜像族系名称，通过设置该参数来获取当前镜像族系内最新可用镜像来创建实例。
     * - 设置了`ImageId`，则不能设置该参数。
     * - 未设置`ImageId`，则可以设置该参数。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * 实例的资源规格。
     * - 产品选型：参见[实例规格族](~~25378~~)或调用[DescribeInstanceTypes](~~25620~~)查看目标实例规格的性能数据，或者参见[选型配置](~~58291~~)了解如何选择实例规格。
     * - 查询库存：调用[DescribeAvailableResource](~~66186~~)查看指定地域或者可用区内的资源供给情况。
     * @example `ecs.g6.large`
     */
    "InstanceType": string;
    /**
     * 指定新创建实例所属于的安全组ID。
     * @example `sg-bp15ed6xe1yxeycg****`
     */
    "SecurityGroupId"?: string;
    /**
     * 实例的名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。如果没有指定该参数，默认值为实例ID。
     * @example `k8s-node-[1,4]-alibabacloud`
     */
    "InstanceName"?: string;
    /**
     * 网络计费类型。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic（默认）：按使用流量计费。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：
     * - true：自动续费。
     * - false（默认）：不自动续费。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 每次自动续费的时长，当参数AutoRenew取值True时，该参数为必填参数。
     * <props="china">PeriodUnit为Week时，AutoRenewPeriod取值：1、2、3。</props>
     * PeriodUnit为Month时，AutoRenewPeriod取值：1、2、3、6、12。
     * @example `2`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 公网入带宽最大值，单位为Mbit/s。取值范围：
     * - 当所购出网带宽小于等于10 Mbit/s时：1~10。默认值为10。
     * - 当所购出网带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
     * @example `50`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围为0~100。
     * 默认值为0。
     * @example `5`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 云服务器的主机名。
     * - 半角句号（.）或短划线（-）不能作为首尾字符，更不能连续使用。
     * - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
     * - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），英文句号之间为一段，每段允许大小写英文字母、数字和短划线（-）。
     * @example `LocalHostName`
     */
    "HostName"?: string;
    /**
     * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 您需要注意：
     * - 如果传入Password参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * - Windows实例不能以正斜线（/）为密码首字符。
     * - 部分操作系统的实例不支持配置密码，仅支持配置密钥对。例如：Others Linux、Fedora CoreOS。
     * @example `TestEcs123!`
     */
    "Password"?: string;
    /**
     * 是否使用镜像预设的密码。使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * 部署集ID。
     * @example `ds-bp1brhwhoqinyjd6****`
     */
    "DeploymentSetId"?: string;
    /**
     * 如果您设置的部署集对应的策略为部署集组高可用策略（AvailabilityGroup）时，可以通过该参数指定实例在部署集中的分组号。取值范围为1~7。
     * @example `1`
     */
    "DeploymentSetGroupNo"?: number;
    /**
     * 实例所属的可用区ID。更多信息，请参见[DescribeZones](~~25610~~)获取可用区列表。
     * > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。
     * 默认值：空，系统自动选择。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 实例所在的集群ID。
     * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `c-bp67acfmxazb4p****`
     */
    "ClusterId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 虚拟局域网ID。
     * @example `10`
     */
    "VlanId"?: string;
    /**
     * 实例的内网IP。
     * @example `192.168.**.**`
     */
    "InnerIpAddress"?: string;
    /**
     * 系统盘大小，单位为GiB。取值范围为：
     * -  普通云盘：20~500
     * -  其他类型云盘：20~2048
     * 该参数的取值必须大于或者等于max{20, ImageSize}。
     * 默认值：max{40, ImageSize} 。
     * @example `40`
     */
    "SystemDisk.Size"?: number;
    /**
     * 系统盘的云盘种类。取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - cloud_essd：ESSD云盘。
     * - cloud：普通云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * - cloud_essd_entry：ESSD Entry云盘。
     * >仅当`InstanceType`设置为[通用算力型实例规格族u1](~~457079~~)（`ecs.u1`）或[经济型实例规格族e](~~108489~~)（`ecs.e`）时，该参数支持取`cloud_essd_entry`值。
     * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 系统盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 默认值为空。
     * @example `SystemDiskName`
     */
    "SystemDisk.DiskName"?: string;
    /**
     * 系统盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值为空。
     * @example `TestDescription`
     */
    "SystemDisk.Description"?: string;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1（默认）：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL1`
     */
    "SystemDisk.PerformanceLevel"?: string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `null`
     */
    "NodeControllerId"?: string;
    /**
     * 实例的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值为空。
     * @example `InstanceTest`
     */
    "Description"?: string;
    /**
     * 如果是创建VPC类型的实例，需要指定交换机ID。您可以调用[DescribeVSwitches](~~35748~~)查询已创建的交换机的相关信息。
     * > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。
     * @example `vsw-bp1s5fnvk4gn2tws0****`
     */
    "VSwitchId"?: string;
    /**
     * 实例私网IP地址。该IP地址必须为交换机（VSwitchId）网段的空闲地址。
     * @example `172.16.236.*`
     */
    "PrivateIpAddress"?: string;
    /**
     * 是否为I/O优化实例。取值范围：
     * - none：非I/O优化。
     * - optimized：I/O优化。
     * [已停售的实例规格](~~55263~~)实例默认值是none。
     * 其他实例规格默认值是optimized。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。
     * @example `true`
     */
    "UseAdditionalService"?: boolean;
    /**
     * 实例的付费方式。取值范围：
     * - PrePaid：包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付，否则将返回 `InvalidPayMethod`的错误提示。
     * - PostPaid（默认）：按量付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 购买资源的时长，单位由`PeriodUnit`指定。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：
     * <props="china">
     * - PeriodUnit=Week时，Period取值：1、2、3、4。
     * - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时，Period取值：1、2、3、6、12。</props>
     * <props="partner">PeriodUnit=Month时，Period取值：1、2、3、6、12。</props>
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买资源的时长。取值范围：
     * <props="china">
     * - Week。
     * - Month。
     * </props>
     * <props="intl">Month。</props>
     * <props="partner">Month。</props>
     * 默认值为Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 实例自定义数据，需要以Base64方式编码，原始数据最多为32 KB。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * 实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
     * - NoSpot（默认）：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 密钥对名称。
     * >Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。
     * @example `KeyPairTestName`
     */
    "KeyPairName"?: string;
    /**
     * 设置实例的每小时最高价格。支持最多3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
     * @example `0.98`
     */
    "SpotPriceLimit"?: number;
    /**
     * 抢占式实例的保留时长，单位为小时。默认值：1。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * > 当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时该参数生效。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
     * @example `Terminate`
     */
    "SpotInterruptionBehavior"?: string;
    /**
     * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `RAMTestName`
     */
    "RamRoleName"?: string;
    /**
     * 是否开启安全加固。取值范围：
     * - Active：启用安全加固，只对系统镜像生效。
     * - Deactive：不启用安全加固，对所有镜像类型生效。
     * @example `Active`
     */
    "SecurityEnhancementStrategy"?: string;
    /**
     * 实例所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例所属的HPC集群ID。
     * @example `hpc-bp67acfmxazb4p****`
     */
    "HpcClusterId"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否在专有宿主机上创建ECS实例。
     * <props="china">您可以通过[DescribeDedicatedHosts](~~134242~~)查询专有宿主机ID列表。</props>
     * <props="intl">您可以通过[DescribeDedicatedHosts](~~134242~~)查询专有宿主机ID列表。</props>
     * 由于专有宿主机不支持创建抢占式实例，指定`DedicatedHostId`参数后，会自动忽略请求中的`SpotStrategy`和`SpotPriceLimit`设置。
     * @example `dh-bp67acfmxazb4p****`
     */
    "DedicatedHostId"?: string;
    /**
     * 设置突发性能实例的运行模式。取值范围：
     * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
     * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
     * @example `Standard`
     */
    "CreditSpecification"?: string;
    /**
     * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
     * -   true：开启实例释放保护。
     * -   false（默认）：关闭实例释放保护。
     * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `false`
     */
    "HibernationOptions.Configured"?: boolean;
    /**
     * 专有宿主机实例是否与专有宿主机关联。取值范围：
     * - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。
     * - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。
     * 默认值为default。
     * @example `default`
     */
    "Affinity"?: string;
    /**
     * 是否在专有宿主机上创建实例。取值范围：
     * - default：在非专有宿主机上创建实例。
     * - host：在专有宿主机上创建实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机部署实例。
     * 默认值为default。
     * @example `default`
     */
    "Tenancy"?: string;
    /**
     * 存储集ID。
     * @example `ss-bp1j4i2jdf3owlhe****`
     */
    "StorageSetId"?: string;
    /**
     * 存储集中的最大分区数量。取值范围：大于等于2。
     * @example `2`
     */
    "StorageSetPartitionNumber"?: number;
    /**
     * 是否启用实例元数据的访问通道。取值范围：
     * - enabled：启用。
     * - disabled：禁用。
     * 默认值为enabled。
     * >有关实例元数据的信息，请参见[实例元数据概述](~~49122~~)。
     * @example `enabled`
     */
    "HttpEndpoint"?: string;
    /**
     * 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
     * - optional：不强制使用。
     * - required：强制使用。设置该取值后，普通模式无法访问实例元数据。
     * 默认值为optional。
     * >有关访问实例元数据的模式，请参见[实例元数据访问模式](~~150575~~)。
     * @example `optional`
     */
    "HttpTokens"?: string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `0`
     */
    "HttpPutResponseHopLimit"?: number;
    /**
     * 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值范围：
     * - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。该模式下无需设置`PrivatePoolOptions.Id`参数。
     * - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。该模式下必须指定私有池ID，即`PrivatePoolOptions.Id`参数为必填项。
     * - None：不使用模式。实例启动将不使用私有池容量。
     * 默认值为None。
     * 以下任一场景，实例启动的私有池容量选项只能取值`None`或不传值。
     * - 创建抢占式实例。
     * - 创建经典网络类型的ECS实例。
     * - 在专有宿主机DDH上创建ECS实例。
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria"?: string;
    /**
     * 私有池ID。即弹性保障服务ID或容量预定服务ID。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id"?: string;
    /**
     * 数据盘列表。
     */
    "DataDisk"?: {
        /**
         * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1（默认）：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
         * @example `PL2`
         */
        PerformanceLevel: string;
        /**
         * 数据盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
         * @example `TestDescription`
         */
        Description: string;
        /**
         * 创建数据盘N使用的快照。N的取值范围为1~16。
         * - 指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。
         * - 不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。
         * @example `s-bp17441ohwka0yuh****`
         */
        SnapshotId: string;
        /**
         * 第n个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：
         * -   cloud_efficiency：20~32768。
         * -   cloud_ssd：20~32768。
         * -   cloud_essd：具体取值范围与 `DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：1~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768。
         * -   cloud：5~2000。
         * >该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。
         * @example `2000`
         */
        Size: number;
        /**
         * 数据盘的挂载点。
         * >该参数仅用于全镜像（整机镜像）场景。您可以通过将此参数设置为全镜像中数据盘对应的挂载点，并修改对应的`DataDisk.N.Size`和`DataDisk.N.Category`参数，达到修改全镜像中数据盘磁盘种类和大小的目的。
         * @example `/dev/xvdb`
         */
        Device: string;
        /**
         * 数据盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
         * @example `DataDiskName`
         */
        DiskName: string;
        /**
         * 数据盘N的云盘种类。取值范围：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - cloud：普通云盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * - cloud_essd_entry：ESSD Entry云盘。
         *   >仅当`InstanceType`设置为`ecs.u1`或`ecs.e`规格族时，该参数支持`cloud_essd_entry`。
         * - elastic_ephemeral_disk_standard：弹性临时盘-标准版。
         * - elastic_ephemeral_disk_premium：弹性临时盘-高级版。
         * I/O优化实例的默认值为cloud_efficiency，非I/O优化实例的默认值为cloud。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * 数据盘是否随实例释放。
         * - true：是。
         * - false：否。
         * 默认值为true。
         * @example `true`
         */
        DeleteWithInstance: boolean;
        /**
         * 云盘使用的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d****`
         */
        KMSKeyId: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        EncryptAlgorithm: string;
        /**
         * 数据盘N是否加密。
         * - true：是。
         * - false：否。
         * 默认值为false。
         * @example `false`
         */
        Encrypted: boolean;
        /**
         * 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为数据盘，请设置该参数。
         * @example `dbsc-j5e1sf2vaf5he8m2****`
         */
        StorageClusterId: string;
    }[];
    /**
     * >该参数正在邀测中，暂不支持使用。
     */
    "Arn"?: {
        /**
         * >该参数正在邀测中，暂不支持使用。
         * @example `Primary`
         */
        RoleType: string;
        /**
         * >该参数正在邀测中，暂不支持使用。
         * @example `acs:ram::123456789012****:role/adminrole`
         */
        Rolearn: string;
        /**
         * >该参数正在邀测中，暂不支持使用。
         * @example `1234567890`
         */
        AssumeRoleFor: number;
    }[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * > 为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `null`
         */
        key: string;
        /**
         * 实例、云盘和主网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例、云盘和主网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 标签值。
         * > 为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `null`
         */
        value: string;
    }[];
    /**
     * 系统盘相关参数，目前专属块存储集群ID（`StorageClusterId`）需要通过该参数设置参数值。
     */
    "SystemDisk"?: {
        /**
         * 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为系统盘，请设置该参数。
         * @example `dbsc-j5e1sf2vaf5he8m2****`
         */
        StorageClusterId: string;
    };
}
