interface RunInstancesRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](~~25534~~)查询您可以使用的镜像资源。如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，`ImageId`为必选参数。
    * @example `win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd`
    */ "ImageId"?: string;
    /**
    * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * 如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，`InstanceType`为必选参数。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组最多能管理1000台实例。
    * > SecurityGroupId决定了实例的网络类型，例如，如果指定安全组的网络类型为专有网络VPC，实例则为VPC类型，并同时需要指定参数VSwitchId。
    * 如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，`SecurityGroupId`为必选参数。
    * @example `sg-bp15ed6xe1yxeycg7o***`
    */ "SecurityGroupId"?: string;
    "SecurityGroupIds"?: string[];
    /**
    * 虚拟交换机ID。如果您创建的是VPC类型ECS实例，需要指定虚拟交换机ID。
    * @example `vsw-bp1s5fnvk4gn2tws03***`
    */ "VSwitchId"?: string;
    /**
    * 实例名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https://开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）。默认值为实例的`InstanceId`。
    * > 创建多台ECS实例时，您可以使用`UniqueSuffix`为这些实例设置不同的实例名称。您也可以使用`name_prefix[begin_number,bits]name_suffix`的命名格式设置有序的实例名称，例如，设置`InstanceName`取值为`k8s-node-[1,4]-alibabacloud`，则第一台ECS实例的实例名称为`k8s-node-0001-alibabacloud` 。详情请参见[API FAQ](~~122617#howToAddSequentialSuffix~~)。
    * 当实例名称或主机名称不设置命名后缀`name_suffix`，即命名格式为`name_prefix[begin_number,bits]`时，`UniqueSuffix`不生效。例如，当`InstanceName`取值为`instance-[99,3]`，`UniqueSuffix`取值为`true`时，生效的实例名称为`instance099`，而不是`instance099001`。
    * @example `k8s-node-[1,4]-alibabacloud`
    */ "InstanceName"?: string;
    /**
    * 实例的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
    * @example `FinaceDept`
    */ "Description"?: string;
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
    * 实例主机名称。
    * -   点号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
    * -   Windows实例：字符长度为2~15，不支持点号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
    * -   其他类型实例（Linux等）：字符长度为2~64，支持多个点号（.），点之间为一段，每段允许大小写英文字母、数字和短横线（-）。
    * > 创建多台ECS实例时，您可以使用`UniqueSuffix`为这些实例设置不同的主机名称。您也可以使用`name_prefix[begin_number,bits]name_suffix`的命名格式设置有序的主机名称，例如，设置`HostName`取值为`k8s-node-[1,4]-ecshost`，则第一台ECS实例的主机名称为`k8s-node-0001-ecshost` 。详情请参见[API FAQ](~~122617#howToAddSequentialSuffix~~)。
    * 当实例名称或主机名称不设置命名后缀`name_suffix`，即命名格式为`name_prefix[begin_number,bits]`时，`UniqueSuffix`不生效。例如，当`InstanceName`取值为`instance-[99,3]`，`UniqueSuffix`取值为`true`时，生效的实例名称为`instance099`，而不是`instance099001`。
    * @example `k8s-node-[1,4]-ecshost`
    */ "HostName"?: string;
    /**
    * 是否为`HostName`和`InstanceName`添加有序后缀，有序后缀从001开始递增，最大不能超过999。例如，`LocalHost001`，`LocalHost002`和`MyInstance001`，`MyInstance002`。默认值：false
    * @example `true`
    */ "UniqueSuffix"?: boolean;
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
    * 实例所属的可用区编号，您可以调用[DescribeZones](~~25610~~)获取可用区列表。
    * 默认值：系统随机选择。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * - PayByBandwidth：按固定带宽计费
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 系统盘大小，单位为GiB。取值范围：20~500
    * 该参数的取值必须大于或者等于max{20, ImageSize}。默认值：max{40, 参数ImageId对应的镜像大小}
    * @example `40`
    */ "SystemDisk.Size"?: string;
    /**
    * 系统盘的云盘种类。[已停售的实例规格](~~55263~~)且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。取值范围：
    * -   cloud：普通云盘
    * -   cloud_efficiency：高效云盘
    * -   cloud_ssd：SSD云盘
    * -   ephemeral_ssd：本地SSD盘
    * -   cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "SystemDisk.Category"?: string;
    /**
    * 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `cloud_ssdSystem`
    */ "SystemDisk.DiskName"?: string;
    /**
    * 系统盘的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
    * @example `FinanceDept`
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
    /**
    * 是否为I/O优化实例。[已停售的实例规格](~~55263~~)实例默认值是none，其他实例规格默认值是optimized。取值范围：
    * - none：非I/O优化
    * - optimized：I/O优化
    * @example `optimized`
    */ "IoOptimized"?: string;
    "NetworkInterface"?: string[];
    /**
    * 实例自定义数据。需要以Base64方式编码，原始数据最多为16 KB。
    * @example `ZWNobyBoZWxsbyBlY3Mh`
    */ "UserData"?: string;
    /**
    * 密钥对名称。
    * -   Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。
    * -   Linux实例的密码登录方式会被初始化成禁止。
    * @example `Instancetest`
    */ "KeyPairName"?: string;
    /**
    * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
    * @example `FinanceDept`
    */ "RamRoleName"?: string;
    /**
    * 指定创建ECS实例的数量。取值范围：1~100
    * 默认值：1
    * @example `3`
    */ "Amount"?: number;
    /**
    * 指定ECS实例最小购买数量。取值范围：1~100
    * - 当ECS库存数量小于最小购买数量，会创建失败。
    * - 当ECS库存数量大于等于最小购买数量，按照库存数量创建。
    * @example `2`
    */ "MinAmount"?: number;
    /**
    * 自动释放时间。按照[ISO8601](~~25696~~)标准表示，使用UTC +0时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
    * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
    * - 最短释放时间为当前时间半小时之后。
    * - 最长释放时间不能超过当前时间三年。
    * @example `2018-01-01T12:05:00Z`
    */ "AutoReleaseTime"?: string;
    /**
    * 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
    * -   NoSpot（默认）：正常按量付费实例。
    * -   SpotWithPriceLimit：设置上限价格的抢占式实例。
    * -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    "SpotDuration"?: number;
    /**
    * 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
    * @example `0.97`
    */ "SpotPriceLimit"?: number;
    /**
    * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
    * @example `Terminate`
    */ "SpotInterruptionBehavior"?: string;
    /**
    * 是否开启安全加固。取值范围：
    * -   Active：启用安全加固，只对公共镜像生效。
    * -   Deactive：不启用安全加固，对所有镜像类型生效。
    * @example `Active`
    */ "SecurityEnhancementStrategy"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    "Tag"?: string[];
    /**
    * 实例所属的EHPC集群ID。
    * @example `hpc-clusterid`
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
    * 启动模板ID。更多详情，请调用[DescribeLaunchTemplates](~~73759~~)。
    * 您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
    * @example `lt-bp1apo0bbbkuy0rj3***`
    */ "LaunchTemplateId"?: string;
    /**
    * 启动模板名称。您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
    * @example `JoshuaWinPostPaid`
    */ "LaunchTemplateName"?: string;
    /**
    * 启动模板版本。如果您指定了`LaunchTemplateId`或`LaunchTemplateName`而不指定启动模板版本号，则采用默认版本。
    * @example `3`
    */ "LaunchTemplateVersion"?: number;
    /**
    * 实例所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
    /**
    * 购买资源的时长，单位为：月。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：
    * -   `PeriodUnit=Week`时，Period取值：{“1”, “2”, “3”, “4”}
    * -   `PeriodUnit=Month`时，Period取值：{ “1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “12”, “24”, “36”,”48”,”60”}
    * @example `1`
    */ "Period"?: number;
    /**
    * 购买资源的时长。可选值：
    * - Week
    * - Month（默认）
    * @example `Month`
    */ "PeriodUnit"?: string;
    /**
    * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：
    * -   True：自动续费。
    * -   False（默认）：不自动续费。
    * @example `true`
    */ "AutoRenew"?: boolean;
    /**
    * 单次自动续费的续费时长。取值范围：
    *
    * - `PeriodUnit=Week`时：{“1”, “2”, “3”}
    * - `PeriodUnit=Month`时：{“1”, “2”, “3”, “6”, “12”, "24", "36", "48", "60"}
    * 默认值：1
    * @example `1`
    */ "AutoRenewPeriod"?: number;
    /**
    * 选择包年包月时，您必须确认自己的账号支持余额支付或者信用支付，否则将返回`InvalidPayMethod`的错误提示。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 部署集ID。
    * @example `ds-bp1brhwhoqinyjd6t***`
    */ "DeploymentSetId"?: string;
    /**
    * 实例私网IP地址。该IP地址必须为VSwitchId网段的子集网址。
    * > 设置`PrivateIpAddress`时，`Amount`参数取值只能为1。
    * @example `172.16.236.14X`
    */ "PrivateIpAddress"?: string;
    /**
    * 修改t5突发性能实例的运行模式。取值范围：
    * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
    * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
    * 默认值：无。
    * @example `Standard`
    */ "CreditSpecification"?: string;
    "Ipv6Address"?: string[];
    /**
    * 为弹性网卡指定随机生成的IPv6地址数量。
    *
    * > 您不能同时指定参数`Ipv6Addresses.N`和`Ipv6AddressCount`。
    * @example `1`
    */ "Ipv6AddressCount"?: number;
    /**
    * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
    * -   true：开启实例释放保护。
    * -   false（默认）：关闭实例释放保护。
    * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
    * @example `false`
    */ "DeletionProtection"?: boolean;
    "HibernationConfigured"?: boolean;
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
    * - default：创建非专有宿主机实例。
    * - host：创建专有宿主机实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机放置实例。
    * 默认值：default
    * @example `default`
    */ "Tenancy"?: string;
    /**
    * @example `hide-秦锐`
    */ "StorageSetId"?: string;
    /**
    * @example `0000`
    */ "StorageSetPartitionNumber"?: number;
}
export { RunInstancesRequest };