interface CreateInstanceRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 镜像文件ID，启动实例时选择的镜像资源。如需使用云市场镜像，您可以在云市场镜像商详情页查看`ImageId`。
    * @example `win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd`
    */ "ImageId": string;
    /**
    * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * @example `ecs.g5.large`
    */ "InstanceType": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 指定新创建实例所属于的安全组代码，同一个安全组内的实例之间可以互相访问。
    * @example `sg-bp15ed6xe1yxeycg7***`
    */ "SecurityGroupId"?: string;
    /**
    * 实例的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。如果没有指定该参数，默认值为实例的InstanceId。
    * @example `yk201812061032`
    */ "InstanceName"?: string;
    /**
    * - PayByBandwidth：按固定带宽计费
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：
    * -   true：自动续费。
    * -   false（默认）：不自动续费。
    * @example `true`
    */ "AutoRenew"?: boolean;
    /**
    * PeriodUnit为Week时，AutoRenewPeriod取值{“1”, “2”, “3”}
    * @example `2`
    */ "AutoRenewPeriod"?: number;
    /**
    * 公网入带宽最大值，单位为Mbit/s。取值范围：1~200
    * 默认值：200
    * @example `200`
    */ "InternetMaxBandwidthIn"?: number;
    /**
    * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100
    * 默认值：0
    * @example `5`
    */ "InternetMaxBandwidthOut"?: number;
    /**
    * 云服务器的主机名。
    * -   点号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
    * -   Windows实例：字符长度为2~15，不支持点号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
    * -   其他类型实例（Linux等）：字符长度为2~64，支持多个点号（.），点之间为一段，每段允许大小写英文字母、数字和短横线（-）。
    * @example `LocalHost`
    */ "HostName"?: string;
    /**
    * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
    * ```
    * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
    * ```
    * 其中，Windows实例不能以斜线号（/）为密码首字符。
    * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
    * @example `EcsV587!`
    */ "Password"?: string;
    /**
    * 是否使用镜像预设的密码。使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。
    * @example `false`
    */ "PasswordInherit"?: boolean;
    /**
    * 部署集ID。
    * @example `ds-bp1brhwhoqinyjd6t***`
    */ "DeploymentSetId"?: string;
    /**
    * 实例所属的可用区ID。更多详情，请参见[DescribeZones](~~25610~~)获取可用区列表。
    * 默认值：空，表示随机选择。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * 实例所在的集群ID。
    * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
    * @example `c-clusterid1`
    */ "ClusterId"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 实例的VLAN ID。
    * @example `10`
    */ "VlanId"?: string;
    /**
    * 实例的内网IP。
    * @example `10.0.0.0`
    */ "InnerIpAddress"?: string;
    /**
    * 系统盘大小，单位为GiB。取值范围：20~500
    * 该参数的取值必须大于或者等于max{20, ImageSize}。
    * 默认值：max{40, ImageSize}
    * @example `40`
    */ "SystemDisk.Size"?: number;
    /**
    * 系统盘的云盘种类。[已停售的实例规格](~~55263~~)且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。取值范围：
    * -   cloud：普通云盘
    * -   cloud_efficiency：高效云盘
    * -   cloud_ssd：SSD云盘
    * -   ephemeral_ssd：本地SSD盘
    * -   cloud_essd：ESSD云盘。
    * @example `cloud_ssd`
    */ "SystemDisk.Category"?: string;
    /**
    * 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `SystemDisk`
    */ "SystemDisk.DiskName"?: string;
    /**
    * 系统盘描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `SystemDiskFinance`
    */ "SystemDisk.Description"?: string;
    /**
    * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
    * - PL1（默认）：单盘最高随机读写IOPS 5万。
    * - PL2：单盘最高随机读写IOPS 10万。
    * - PL3：单盘最高随机读写IOPS 100万。
    * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
    * @example `PL1`
    */ "SystemDisk.PerformanceLevel"?: string;
    "DataDisk"?: string[];
    "Arn"?: string[];
    /**
    * @example `nc-nodecontroller`
    */ "NodeControllerId"?: string;
    /**
    * 实例的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `InstanceFinance`
    */ "Description"?: string;
    /**
    * 如果是创建VPC类型的实例，需要指定虚拟交换机ID。
    * @example `vsw-bp1s5fnvk4gn2tws03***`
    */ "VSwitchId"?: string;
    /**
    * 实例私网IP地址。该IP地址必须为VSwitchId网段的子集网址。
    * @example `172.16.236.14X`
    */ "PrivateIpAddress"?: string;
    /**
    * 是否为I/O优化实例。[已停售的实例规格](~~55263~~)实例默认值是none，其他实例规格默认值是optimized。取值范围：
    * - none：非I/O优化
    * - optimized：I/O优化
    * @example `optimized`
    */ "IoOptimized"?: string;
    /**
    * 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。
    * @example `true`
    */ "UseAdditionalService"?: boolean;
    /**
    * 实例的付费方式。取值范围：
    * -   PrePaid：包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付，否则将返回 `InvalidPayMethod`的错误提示。
    * -   PostPaid（默认）：按量付费。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * PeriodUnit为Week时，Period取值：{“1”, “2”, “3”, “4”}
    * @example `1`
    */ "Period"?: number;
    /**
    * 购买资源的时长。可选值：Week和Month（默认）。
    * @example `Month`
    */ "PeriodUnit"?: string;
    "Tag"?: string[];
    /**
    * 实例自定义数据，需要以Base64方式编码，原始数据最多为16KB。
    * @example `ZWNobyBoZWxsbyBlY3Mh`
    */ "UserData"?: string;
    /**
    * 后付费实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
    * -   NoSpot（默认）：正常按量付费实例。
    * -   SpotWithPriceLimit：设置上限价格的抢占式实例。
    * -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    /**
    * 密钥对名称。
    * -   Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。
    * -   Linux实例的密码登录方式会被初始化成禁止。为提高实例安全性，强烈建议您使用密钥对的连接方式。
    * @example `Instancetest`
    */ "KeyPairName"?: string;
    /**
    * 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
    * @example `0.98`
    */ "SpotPriceLimit"?: number;
    /**
    * @example `1`
    */ "SpotDuration"?: number;
    /**
    * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
    * @example `Terminate`
    */ "SpotInterruptionBehavior"?: string;
    /**
    * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~) 查询您已创建的实例RAM角色。
    * @example `FinanceDept`
    */ "RamRoleName"?: string;
    /**
    * 是否开启安全加固。取值范围：
    * -   Active：启用安全加固，只对系统镜像生效。
    * -   Deactive：不启用安全加固，对所有镜像类型生效。
    * @example `Active`
    */ "SecurityEnhancementStrategy"?: string;
    /**
    * 实例所在的企业资源组ID。
    * @example `rg-resourcegroupid`
    */ "ResourceGroupId"?: string;
    /**
    * 实例所属的HPC集群ID。
    * @example `hpc-hpcclusterid`
    */ "HpcClusterId"?: string;
    /**
    * 是否只预检此次请求。
    * -   true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
    * -   false（默认）：发送正常请求，通过检查后直接创建实例。
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 是否在专有宿主机上创建ECS实例。您可以通过[DescribeDedicatedHosts](~~94572~~)查询专有宿主机ID列表。
    * 由于专有宿主机不支持创建抢占式实例，指定`DedicatedHostId`参数后，会自动忽略请求中的`SpotStrategy`和`SpotPriceLimit`设置。
    * @example `dh-dedicatedhost1`
    */ "DedicatedHostId"?: string;
    /**
    *  修改突发性能实例的运行模式。取值范围：
    * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
    * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
    * 默认值：无。
    * @example `Standard`
    */ "CreditSpecification"?: string;
    /**
    * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
    * -   true：开启实例释放保护。
    * -   false（默认）：关闭实例释放保护。
    * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
    * @example `false`
    */ "DeletionProtection"?: boolean;
    "CapacityReservationId"?: string;
    "CapacityReservationPreference"?: string;
    /**
    * 专有宿主机实例是否与专有宿主机关联。取值范围：
    * - default：实例不与专有宿主机关联。已开启停机不收费功能的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。
    * - host：实例与专有宿主机关联。已开启停机不收费功能的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。
    * 默认值：default
    * @example `default`
    */ "Affinity"?: string;
    /**
    * 是否在专有宿主机上创建实例。取值范围：
    * - default：在非专有宿主机上创建实例。
    * - host：在专有宿主机上创建实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机放置实例。
    * 默认值：default
    * @example `default`
    */ "Tenancy"?: string;
    /**
    * @example `ss-0123`
    */ "StorageSetId"?: string;
    /**
    * @example `1`
    */ "StorageSetPartitionNumber"?: number;
}
export { CreateInstanceRequest };