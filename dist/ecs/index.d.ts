interface ECS {
    /**
    * 调用RunInstances创建一台或多台按量付费或者包年包月ECS实例。
    */ RunInstances(query: {
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
    }): Promise<{
        "InstanceIdSets": {
            "InstanceIdSet": string[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateHpcCluster创建一个HPC集群。
    */ CreateHpcCluster(query: {
        /**
        * HPC集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * HPC集群名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `FinanceJoshua`
        */ "Name": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * HPC集群描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：空。
        * @example `FinanceJoshua`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "HpcClusterId": string;
    }>;
    /**
    * 调用ModifyInstanceVpcAttribute修改一台ECS实例的专有网络VPC属性。
    */ ModifyInstanceVpcAttribute(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-bp1iudwa5b1tqaxxxxxx`
        */ "InstanceId": string;
        /**
        * 新的交换机ID。指定实例的当前交换机和新的交换机（**VSwitchId**）必须要属于同一个地域下的可用区。
        * @example `[vswitchid]`
        */ "VSwitchId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 新的私网IP地址。**PrivateIpAddress**依赖于**VSwitchId**，不能单独指定**PrivateIpAddress**。
        * @example `172.17.XX.XXX`
        */ "PrivateIpAddress"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AuthorizeSecurityGroup增加一条安全组入方向规则。指定安全组入方向的访问权限，允许或者拒绝其他设备发送入方向流量到安全组里的实例。
    */ AuthorizeSecurityGroup(query: {
        /**
        * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目的端安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 传输层协议。取值大小写敏感。取值范围：
        *
        * - tcp
        * - udp
        * - icmp
        * - gre
        * - all：支持所有协议
        * @example `all`
        */ "IpProtocol": string;
        /**
        * SecurityGroupId方开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1
        * - GRE协议：-1/-1
        * - IpProtocol取值为all：-1/-1
        * @example `1/200`
        */ "PortRange": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 需要设置访问权限的源端安全组ID。至少设置一项SourceGroupId或者SourceCidrIp参数。
        * 如果指定了SourceGroupId没有指定参数SourceCidrIp，则参数NicType取值只能为intranet。
        * 如果同时指定了SourceGroupId和SourceCidrIp，则默认以SourceCidrIp为准。
        * @example `sg-securitygroupid2`
        */ "SourceGroupId"?: string;
        /**
        * 跨账户设置安全组规则时，源端安全组所属的阿里云账户ID。
        * - 如果SourceGroupOwnerId及SourceGroupOwnerAccount均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果您已经设置参数SourceCidrIp，则参数SourceGroupOwnerId无效。
        * @example `155780923770`
        */ "SourceGroupOwnerId"?: number;
        /**
        * 跨账户设置安全组规则时，源端安全组所属的阿里云账户。
        * - 如果SourceGroupOwnerAccount及SourceGroupOwnerId均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果已经设置参数SourceCidrIp，则参数SourceGroupOwnerAccount无效。
        * @example `test@aliyun.com`
        */ "SourceGroupOwnerAccount"?: string;
        /**
        * 源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：无。
        * @example `10.0.0.0/8`
        */ "SourceCidrIp"?: string;
        /**
        * 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * > 仅支持VPC类型的IP地址。
        * 默认值：无。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - IpProtocol取值为all：-1/-1。
        * @example `1/200`
        */ "SourcePortRange"?: string;
        /**
        * 目的端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：无。
        * @example `10.0.0.0/8`
        */ "DestCidrIp"?: string;
        /**
        * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * > 仅支持VPC类型的IP地址。
        * 默认值：无。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 设置访问权限。取值范围：
        *
        * - accept（默认）：接受访问。
        * - drop：拒绝访问，不返回拒绝信息。
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100
        * 默认值：1
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当设置安全组之间互相访问时，即指定了SourceGroupId且没有指定SourceCidrIp时，参数NicType取值只能为intranet。
        * 默认值：internet。
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 安全组规则的描述信息。长度为1~512个字符。
        * @example `FinanceJoshua`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAutoSnapshotPolicyEX查询您已创建的自动快照策略。
    */ DescribeAutoSnapshotPolicyEx(query: {
        /**
        * 要查询的自动快照策略所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "SourceRegionId"?: string;
        /**
        * 自动快照策略ID。
        * @example `p-233e6yl**`
        */ "AutoSnapshotPolicyId"?: string;
        /**
        * 自动快照策略返回结果分多页展示。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页展示返回的自动快照策略时的每页行数。最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "AutoSnapshotPolicies": {
            " AutoSnapshotPolicy": {
                "CreationTime": string;
                "AutoSnapshotPolicyId": string;
                "SettingTimePoints": string;
                "SettingRepeatWeekdays": string;
                "RetentionDays": string;
            }[];
        };
        "TotalCount": number;
    }>;
    /**
    * 调用ModifyPrepayInstanceSpec升级或者降低一台包年包月ECS实例的实例规格，新实例规格将会覆盖实例的整个生命周期。
    */ ModifyPrepayInstanceSpec(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `i-xxxxx1`
        */ "InstanceId": string;
        /**
        * 需要变配的目标实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.s1.large`
        */ "InstanceType": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 操作类型。取值范围：
        * -   upgrade（默认）：升级实例规格。当参数`OperatorType`被置为`upgrade`时，请确保您的账户支付方式余额充足。
        * -   downgrade：降配实例规格。
        * @example `upgrade`
        */ "OperatorType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 是否自动支付。当参数OperatorType被置为downgrade时，将忽略参数AutoPay。取值范围：
        * -  true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
        * -  false：只生成订单不扣费。更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数**AutoPay**置为**false**，此时会生成正常的未支付订单，您可以登录ECS管理控制台支付。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 是否支持跨集群升级实例规格。默认值：False
        * 当参数MigrateAcrossZone取值为True时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
        * 经典网络类型实例：
        *
        * * 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
        *
        * * 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
        * 专有网络VPC类型实例：对于已停售的实例规格]，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
        * @example `false`
        */ "MigrateAcrossZone"?: boolean;
        /**
        * 更换系统盘类型。该参数只有在从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。取值范围：
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * @example `cloud_efficiency`
        */ "SystemDisk.Category"?: string;
        /**
        * @example `hide-query from心牧-for 聚石塔 project`
        */ "RebootTime"?: string;
        /**
        * @example `hide-query from心牧-for 聚石塔 project`
        */ "EndTime"?: string;
    }): Promise<{
        "RequestId": string;
        "OrderId": number;
    }>;
    /**
    * 调用ModifyInstanceChargeType更换一台或者多台ECS实例的计费方式。支持在按量付费实例和包年包月实例间相互转换，同时可以将实例挂载的所有按量付费云盘转换为包年包月云盘。
    */ ModifyInstanceChargeType(query: {
        /**
        * 实例所属的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（`,`）隔开。
        * @example `["i-xxxxx1","i-xxxxx2"]`
        */ "InstanceIds": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * - `PeriodUnit=Week`时，`Period`取值：{“1”, “2”, “3”, “4”}
        * @example `2`
        */ "Period"?: number;
        /**
        * - Week
        * @example `month`
        */ "PeriodUnit"?: string;
        /**
        * 是否将实例挂载的所有按量付费数据盘一起转换为包年包月数据盘。默认值：true
        * @example `true`
        */ "IncludeDataDisks"?: boolean;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
        * - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 是否自动支付。当参数OperatorType被置为downgrade时，将忽略参数AutoPay。取值范围：
        * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
        * - false：只生成订单不扣费。更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数**AutoPay**置为**false**，此时会生成正常的未支付订单，您可以登录ECS管理控制台支付。
        * @example `false`
        */ "AutoPay"?: boolean;
        /**
        * 实例需要修改的目标计费方式。取值范围：
        * - PrePaid（默认）：将按量付费实例转换为包年包月实例。
        * - PostPaid：将包年包月实例转换为按量付费实例。
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 包年包月转换为按量计费时，是否返回订单费用详情。
        * 默认值：false。
        * @example `false`
        */ "IsDetailFee"?: boolean;
    }): Promise<{
        "RequestId": string;
        "OrderId": string;
    }>;
    /**
    * 调用StopInvocation停止一台或多台ECS实例中一条正在进行中（Running）的云助手命令进程。
    */ StopInvocation(query: {
        /**
        * 地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 命令进程执行ID。您可以通过接口 [DescribeInvocations](~~64840~~) 查询所有的InvokeId。
        * @example `t-7d2a745b412b4601b2d47f6a768d3***`
        */ "InvokeId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "InstanceId"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AuthorizeSecurityGroupEgress增加一条安全组出方向规则。指定安全组出方向的访问权限，允许或者拒绝安全组里的实例发送出方向流量到其他设备。
    */ AuthorizeSecurityGroupEgress(query: {
        /**
        * 源端安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 源端安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 传输层协议。取值大小写敏感。取值范围：
        *
        * - icmp
        * - gre
        * - tcp
        * - udp
        * - all：支持所有协议
        * @example `all`
        */ "IpProtocol": string;
        /**
        * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `1/200`
        */ "PortRange": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 需要设置访问权限的目的端安全组ID。
        * 至少设置一项DestGroupId或者DestCidrIp参数。
        * 如果指定了DestGroupId没有指定参数DestCidrIp，则参数NicType取值只能为intranet。
        * 如果同时指定了DestGroupId和DestCidrIp，则默认以DestCidrIp为准。
        * @example `sg-securitygroupid2`
        */ "DestGroupId"?: string;
        /**
        * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户ID。
        *
        * - 如果DestGroupOwnerId及DestGroupOwnerAccount均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果您已经设置参数DestCidrIp，则参数DestGroupOwnerId无效。
        * @example `155780923770`
        */ "DestGroupOwnerId"?: number;
        /**
        * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户。
        *
        * - 如果DestGroupOwnerAccount及DestGroupOwnerId均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果已经设置参数DestCidrIp，则参数DestGroupOwnerAccount无效。
        * @example `FinanceJoshua`
        */ "DestGroupOwnerAccount"?: string;
        /**
        * 目的端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：无。
        * @example `10.0.0.0/8`
        */ "DestCidrIp"?: string;
        /**
        * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * 默认值：无。
        * >仅支持VPC类型的IP地址。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 源端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：无。
        * @example `10.0.0.0/8`
        */ "SourceCidrIp"?: string;
        /**
        * 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        *
        *
        * 默认值：无。
        * >仅支持VPC类型的IP地址。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `80/80`
        */ "SourcePortRange"?: string;
        /**
        * 设置访问权限。取值范围：
        *
        * - accept：接受访问。
        * - drop：拒绝访问，不返回拒绝信息。
        * 默认值：accept。
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100
        * 默认值：1。
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当设置安全组之间互相访问时，即指定了DestGroupId且没有指定DestCidrIp时，参数NicType取值只能为intranet。
        * 默认值：internet。
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000 `
        */ "ClientToken"?: string;
        /**
        * 安全组规则的描述信息。长度为1~512个字符。
        * @example `FinanceJoshua`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用JoinSecurityGroup将一台ECS实例加入到指定的安全组。
    */ JoinSecurityGroup(query: {
        "RegionId"?: string;
        /**
        * 安全组ID。您可以调用[DescribeSecurityGroups](~~25556~~)查看您可用的安全组。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 实例ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSecurityGroups查询您创建的安全组的基本信息，例如安全组ID和安全组描述等。返回列表按照安全组ID降序排列。
    */ DescribeSecurityGroups(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
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
        * 安全组所在的专有网络ID。
        * @example `vpc-vpcid1`
        */ "VpcId"?: string;
        /**
        * 安全组列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 安全组ID列表。一次最多支持100个安全组ID，ID之间用半角逗号（,）隔开，格式为JSON数组。
        * @example `["sg-id1", "sg-id2", "sg-id2",....]`
        */ "SecurityGroupIds"?: string;
        "Tag"?: string[];
        /**
        * 安全组所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 网络类型。
        * @example `vpc`
        */ "NetworkType"?: string;
        /**
        * 安全组ID。
        * @example `sg-securitygroupid`
        */ "SecurityGroupId"?: string;
        /**
        * 安全组名称。
        * @example `test1`
        */ "SecurityGroupName"?: string;
        /**
        * @example `true`
        */ "IsQueryEcsCount"?: boolean;
        /**
        * @example `true`
        */ "FuzzyQuery"?: boolean;
        /**
        * 是否只预检此次请求。
        *
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * 默认值：false
        * @example `false`
        */ "DryRun"?: boolean;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageSize": string;
        "RegionId": string;
        "PageNumber": string;
        "SecurityGroups": {
            "SecurityGroup": {
                "SecurityGroupId": string;
                "Description": string;
            }[];
        };
    }>;
    /**
    * 调用ImportImage导入您已有的镜像文件到云服务器ECS，并作为自定义镜像出现在相应地域中。
    */ ImportImage(query: {
        /**
        * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        "DiskDeviceMapping"?: string[];
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空。
        * @example `FinanceJoshua`
        */ "ImageName"?: string;
        /**
        * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：空。
        * @example `FinanceDeptJoshua`
        */ "Description"?: string;
        /**
        * 系统架构。取值范围：
        * - i386
        * - x86_64（默认）
        * @example `x86_64`
        */ "Architecture"?: string;
        /**
        * 操作系统平台类型。取值范围：
        * - windows
        * - linux（默认）
        * @example `linux`
        */ "OSType"?: string;
        /**
        * 操作系统发行版。取值范围：
        * -   CentOS
        * -   Ubuntu
        * -   SUSE
        * -   OpenSUSE
        * -   Debian
        * -   CoreOS
        * -   Aliyun
        * -   Windows Server 2003
        * -   Windows Server 2008
        * -   Windows Server 2012
        * -   Others Linux（默认）
        * -   Customized Linux
        * @example `Aliyun`
        */ "Platform"?: string;
        /**
        * @example `FinanceJoshua`
        */ "RoleName"?: string;
        /**
        * 导入镜像后，激活操作系统采用的许可证类型。取值范围：
        * - Auto（默认）：由阿里云检测源操作系统并分配许可证。自动模式下，系统优先搜索您设置的`Platform`是否有阿里云官方渠道的许可证并分配给导入的镜像，如果缺乏该类许可，会切换成BYOL（Bring Your Own License）方式。
        * - Aliyun：根据您设置的`Platform`采用阿里云官方渠道的许可证。
        * - BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。
        * @example `Auto`
        */ "LicenseType"?: string;
    }): Promise<{
        "RequestId": string;
        "ImageId": string;
        "ImportTaskId": string;
    }>;
    /**
    * 调用ModifySecurityGroupRule修改安全组入方向规则的描述信息。如果您还没有增加过安全组规则，可以调用AuthorizeSecurityGroup增加。
    */ ModifySecurityGroupRule(query: {
        /**
        * 目标安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目标安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 传输层协议。不区分大小写。取值范围：
        *
        * - icmp
        * - gre
        * - tcp
        * - udp
        * - all：支持所有协议
        * @example `all`
        */ "IpProtocol": string;
        /**
        * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `80/80`
        */ "PortRange": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 设置访问权限的源端安全组ID。必须设置SourceGroupId或者SourceCidrIp参数。
        * 如果指定了SourceGroupId没有指定参数SourceCidrIp，则参数NicType取值只能为 intranet。如果同时指定了SourceGroupId和SourceCidrIp，则默认以SourceCidrIp为准。
        * @example `sg-securitygroupid2`
        */ "SourceGroupId"?: string;
        /**
        * 跨账户设置安全组规则时，源端安全组所属的阿里云账户ID。
        *
        * - 如果SourceGroupOwnerId及SourceGroupOwnerAccount均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果您已经设置参数SourceCidrIp，则参数SourceGroupOwnerId无效。
        * @example `155780923770`
        */ "SourceGroupOwnerId"?: number;
        /**
        * 跨账户设置安全组规则时，源端安全组所属的阿里云账户。
        *
        * - 如果SourceGroupOwnerAccount及SourceGroupOwnerID均未设置，则认为是设置您其他安全组的访问权限。
        * - 如果已经设置参数SourceCidrIp，则参数SourceGroupOwnerAccount无效。
        * @example `FinanceJoshua`
        */ "SourceGroupOwnerAccount"?: string;
        /**
        * 源端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：0.0.0.0/0。
        * @example `10.0.0.0/8`
        */ "SourceCidrIp"?: string;
        /**
        * 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * >仅支持VPC类型的IP地址。
        * 默认值：无。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `80/80`
        */ "SourcePortRange"?: string;
        /**
        * 目的端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
        * 默认值：0.0.0.0/0。
        * @example `10.0.0.0/8`
        */ "DestCidrIp"?: string;
        /**
        * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * >仅支持VPC类型的IP地址。
        * 默认值：无。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 访问权限。取值范围：
        *
        * - accept：接受访问。
        * - drop：拒绝访问，不返回拒绝信息。
        * 默认值：accept。
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100
        * 默认值：1。
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当设置安全组之间互相访问时，即指定了DestGroupId且没有指定DestCidrIp时，参数NicType取值只能为intranet。
        * 默认值：internet。
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000 `
        */ "ClientToken"?: string;
        /**
        * 安全组规则的描述信息。长度为1~512个字符。
        * @example `FinanceDept`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListTagResources查询一个或多个ECS资源已经绑定的标签列表。
    */ ListTagResources(query: {
        /**
        * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型定义。取值范围：
        * - instance：ECS实例
        * - disk：磁盘
        * - snapshot：快照
        * - image：镜像
        * - securitygroup：安全组
        * - volume：存储卷
        * - eni：弹性网卡
        * - ddh：专有宿主机
        * - keypair：SSH密钥对
        * - launchtemplate：启动模板
        * @example `instance`
        */ "ResourceType": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "ResourceId"?: string[];
        "Tag"?: string[];
        /**
        * 下一个查询开始Token。
        * @example `caeba0bbb2be03f84eb48b699f0a4883`
        */ "NextToken"?: string;
    }): Promise<{
        "TagResources": {
            "TagResource": {
                "ResourceType": string;
                "TagValue": string;
                "ResourceId": string;
                "TagKey": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 为一块或者多块云盘应用自动快照策略。目标云盘已经应用了自动快照策略时，调用ApplyAutoSnapshotPolicy可以更换云盘当前应用的自动快照策略。
    */ ApplyAutoSnapshotPolicy(query: {
        "RegionId"?: string;
        /**
        * 自动快照策略和云盘所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "regionId": string;
        /**
        * 目标自动快照策略ID。
        * @example `p-233e6ylv0`
        */ "autoSnapshotPolicyId": string;
        /**
        * 目标云盘ID。当您需要将自动快照策略应用于多块云盘时，云盘ID之间用半角逗号（,）隔开。
        * @example `["d-233e6ylv0", "d-23vbpbi03", "d-23vasz3ds"]`
        */ "diskIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCommands查询您已经创建的云助手命令。只输入参数Action和RegionId，不输入其他任何请求参数，则默认查询您所有可用的命令（CommandId）。
    */ DescribeCommands(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令 ID。
        * @example `c-7d2a745b412b4601b2d47f6a768d3***`
        */ "CommandId"?: string;
        /**
        * 命令的名称，暂不支持模糊查询。
        * @example `Test1`
        */ "Name"?: string;
        /**
        * 命令描述。
        * @example `test`
        */ "Description"?: string;
        /**
        * 命令的类型。取值范围：
        * - RunBatScript：命令为在Windows实例中运行的Bat脚本
        * - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本
        * - RunShellScript：命令为在Linux实例中运行的Shell脚本
        *
        * @example `RunShellScript`
        */ "Type"?: string;
        "ContentEncoding"?: string;
        /**
        * 当前页码，起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "Commands": {
            "Command": {
                "Name": string;
                "WorkingDir": string;
                "CommandContent": string;
                "Timeout": number;
                "Type": string;
                "CommandId": string;
                "Description": string;
            }[];
        };
        "PageNumber": number;
        "RequestId": string;
        "PageSize": number;
    }>;
    /**
    * 调用CancelCopyImage取消正在进行中的复制镜像（CopyImage）任务。
    */ CancelCopyImage(query: {
        /**
        * 目标镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 正在被复制的镜像ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDisksFullStatus查询一块或多块块存储的全部状态信息。
    */ DescribeDisksFullStatus(query: {
        /**
        * 块存储所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "DiskId"?: string[];
        "EventId"?: string[];
        /**
        * 指定块存储的生命周期状态，参见[云盘状态表](~~25689~~)。取值范围：
        * - In_use：使用中
        * - Available：待挂载
        * - Attaching：挂载中
        * - Detaching：卸载中
        * - Creating：创建中
        * - ReIniting：初始化中
        *
        * @example `Available`
        */ "Status"?: string;
        /**
        * 指定块存储的健康状态。取值范围：
        * - Impaired：暂时性不可读写
        * - Warning：服务降级
        * - Initializing：初始化中
        * - InsufficientData：数据不足
        * - NotApplicable：不适用
        *
        * @example `Warning`
        */ "HealthStatus"?: string;
        /**
        * 指定块存储的事件类型。取值范围：
        * - Degraded：块存储性能降级
        * - SeverelyDegraded：块存储性能严重降级
        * - Stalled：块存储性能受到严重影响
        *
        * @example `Stalled`
        */ "EventType"?: string;
        /**
        * 查询事件发生时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2018-05-06T02:43:10Z`
        */ "EventTime.Start"?: string;
        /**
        * 查询事件发生时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2018-05-08T02:48:52Z`
        */ "EventTime.End"?: string;
        /**
        * 查询结果的页码。取值范围：正整数
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 查询结果的分页大小。取值范围：1~100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "DiskFullStatusSet": {
            "DiskFullStatusType": {
                "DiskEventSet": {
                    "DiskEventType": {
                        "EventId": string;
                        "EventType": {
                            "Code": string;
                            "Name": string;
                        };
                        "EventTime": string;
                    }[];
                };
                "DiskId": string;
                "InstanceId": string;
                "Device": string;
                "HealthStatus": {
                    "Code": number;
                    "Name": string;
                };
                "Status": {
                    "Code": number;
                    "Name": string;
                };
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用DescribeSecurityGroupReferences查询一个安全组和其他哪些安全组有安全组级别的授权行为。
    */ DescribeSecurityGroupReferences(query: {
        /**
        * 安全组所属地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SecurityGroupId": string[];
        "SourceRegionId"?: string;
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "SecurityGroupReferences": {
            "SecurityGroupId": string;
            "SecurityReferencingGroups": {
                "AliUid": number;
                "SecurityGroupId": string;
            }[];
        }[];
    }>;
    /**
    * 调用DescribeAccountAttributes查询您在一个阿里云地域下能创建的ECS资源配额。包括您能创建的安全组数量、弹性网卡数量、按量付费vCPU核数、抢占式实例vCPU核数、专用宿主机数量、地域网络类型以及账号是否已完成实名认证。
    */ DescribeAccountAttributes(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId"?: string;
        "AttributeName"?: string[];
    }): Promise<{
        "AccountAttributeItems": {
            "AccountAttributeItem": {
                "AttributeValues": {
                    "ValueItem": {
                        "Value": string;
                    }[];
                };
                "AttributeName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ReplaceSystemDisk更换一台ECS实例的系统盘或者操作系统。
    */ ReplaceSystemDisk(query: {
        "RegionId"?: string;
        /**
        * 指定实例的ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 重置系统时使用的镜像ID。
        * @example `m-imageid1`
        */ "ImageId"?: string;
        /**
        * 新的系统盘容量，单位为GiB。取值范围：Max{20, 参数ImageId对应的镜像大小}~500
        * 默认值：Max{40, 参数ImageId对应的镜像大小}。
        * @example `80`
        */ "SystemDisk.Size"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。
        * > 挂载系统盘时（即设备名为/dev/xvda）有效。
        * @example `true`
        */ "UseAdditionalService"?: boolean;
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
        * 默认值：false
        * @example `false`
        */ "PasswordInherit"?: boolean;
        /**
        * 密钥对名称。
        *
        * - Windows系统ECS实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行Password的内容。
        * - Linux系统ECS实例的密码登录方式会被初始化成禁止。
        *
        * @example `JoshuaCentOS`
        */ "KeyPairName"?: string;
        /**
        * @example `d-23b3p4***`
        */ "DiskId"?: string;
        /**
        * 操作系统发行版。取值为CentOS、Ubuntu等。
        * @example `CentOS`
        */ "Platform"?: string;
        /**
        * 系统架构。取值范围：
        * - i386
        * - x86_64
        * @example `i386`
        */ "Architecture"?: string;
        /**
        * 当指定的云盘为系统盘时，您可以设置是否开启安全加固，加载云安全中心插件等。取值范围：
        *
        * - Active：启用安全加固，使用云安全中心免费版。该值仅支持公共镜像。
        * - DeactiveDeactive：不启用安全加固，禁止加载云安全中心插件。该值支持所有镜像。
        *
        * @example `Active`
        */ "SecurityEnhancementStrategy"?: string;
    }): Promise<{
        "RequestId": string;
        "DiskId": string;
    }>;
    /**
    * 调用RevokeSecurityGroupEgress删除一条安全组出方向规则，撤销安全组出方向的访问权限。
    */ RevokeSecurityGroupEgress(query: {
        /**
        * 源端安全组所属地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 源端安全组 ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 传输层协议。不区分大小写。取值范围：
        *
        * - icmp
        * - gre
        * - tcp
        * - udp
        * - all：支持所有协议
        * @example `all`
        */ "IpProtocol": string;
        /**
        * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP 协议：-1/-1。
        * - GRE 协议：-1/-1。
        * - all：-1/-1。
        * @example `1/200`
        */ "PortRange": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 需要撤销访问权限的目的端安全组 ID。
        * 必须设置 DestGroupId 或者 DestCidrIp 参数。
        * 如果指定了 DestGroupId 没有指定参数 DestCidrIp，则参数 NicType 取值只能为 intranet。如果同时指定了 DestGroupId 和 DestCidrIp，则默认以 DestCidrIp 为准。
        * @example `sg-securitygroupid2`
        */ "DestGroupId"?: string;
        /**
        * 跨账户删除安全组规则时，目的端安全组所属的阿里云账户 ID。
        * - 如果 DestGroupOwnerId 及 DestGroupOwnerAccount 均未设置，则认为是撤销您其他安全组的访问权限。
        * - 如果您已经设置参数 DestCidrIp，则参数 DestGroupOwnerId 无效。
        *
        * @example `155780923770`
        */ "DestGroupOwnerId"?: number;
        /**
        * 跨账户删除安全组规则时，目的端安全组所属的阿里云账户。
        * - 如果 DestGroupOwnerAccount 及 DestGroupOwnerId 均未设置，则认为是撤销您其他安全组的访问权限。
        * - 如果已经设置参数 DestCidrIp，则参数 DestGroupOwnerAccount 无效。
        *
        * @example `FinanceJoshua`
        */ "DestGroupOwnerAccount"?: string;
        /**
        * 目的端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：无。
        * @example `0.0.0.0/0`
        */ "DestCidrIp"?: string;
        /**
        * 目的端 IPv6 CIDR 地址段。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
        * 默认值：无。
        * > 仅支持 VPC 类型的 IP 地址。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 源端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：无。
        * @example `0.0.0.0/0`
        */ "SourceCidrIp"?: string;
        /**
        * 源端 IPv6 CIDR 地址段。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
        * 默认值：无。
        * > 仅支持 VPC 类型的 IP 地址。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP 协议：-1/-1。
        * - GRE 协议：-1/-1。
        * - all：-1/-1。
        * @example `1/200`
        */ "SourcePortRange"?: string;
        /**
        * 访问权限。取值范围：
        *
        * - accept：接受访问。
        * - drop：拒绝访问，不发回拒绝信息。
        * 默认值：accept
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100 默认值：1
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当撤销安全组之间互相访问时，即指定了 DestGroupId 且没有指定 DestCidrIp 时，参数 NicType 取值只能为 intranet。 默认值：internet
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
        */ "ClientToken"?: string;
        /**
        * 安全组规则的描述。
        * @example `FinanceJoshuaTest`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLaunchTemplateVersions查询实例启动模板版本。
    */ DescribeLaunchTemplateVersions(query: {
        /**
        * 实例启动模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例启动模板 ID。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
        * @example `lt-launchtemplateid1`
        */ "LaunchTemplateId"?: string;
        /**
        * 实例启动模板名称。
        * @example `FinanceJoshua`
        */ "LaunchTemplateName"?: string;
        "LaunchTemplateVersion"?: number[];
        /**
        * 通过范围指定版本时的最小版本号。
        * @example `1`
        */ "MinVersion"?: number;
        /**
        * 通过范围指定版本时的最大版本号。
        * @example `10`
        */ "MaxVersion"?: number;
        /**
        * 是否查询默认版本。
        * @example `true`
        */ "DefaultVersion"?: boolean;
        /**
        * @example `true`
        */ "DetailFlag"?: boolean;
        /**
        * 实例启动模板列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "LaunchTemplateVersionSets": {
            "LaunchTemplateVersionSet": {
                "LaunchTemplateId": string;
                "CreateTime": string;
                "CreatedBy": string;
                "ModifiedTime": string;
                "LaunchTemplateData": {
                    "ImageId": string;
                    "SecurityGroupId": string;
                    "Description": string;
                    "NetworkInterfaces": {
                        "NetworkInterface": any[];
                    };
                    "DataDisks": {
                        "DataDisk": any[];
                    };
                    "SecurityEnhancementStrategy": string;
                    "ZoneId": string;
                    "ImageOwnerAlias": string;
                    "InternetChargeType": string;
                    "VSwitchId": string;
                    "VpcId": string;
                    "HostName": string;
                    "InstanceType": string;
                    "IoOptimized": string;
                    "Tags": {
                        "InstanceTag": any[];
                    };
                    "NetworkType": string;
                    "InternetMaxBandwidthOut": number;
                    "SystemDisk.Size": number;
                    "InstanceChargeType": string;
                    "SystemDisk.Category": string;
                    "InstanceName": string;
                };
                "VersionNumber": number;
                "DefaultVersion": boolean;
                "VersionDescription": string;
                "LaunchTemplateName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与（&&）关系，参数之间无依赖关系。
    */ DescribeHpcClusters(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * HPC 集群 ID。
        * 取值可以由多个 HPC 集群 ID 组成一个 JSON 数组，最多支持 100 个 ID，ID 之间用半角逗号（,）隔开。
        * @example `["hpc-xxxxxxxxx", "hpc-yyyyyyyyy", … "hpc-zzzzzzzzz"]`
        */ "HpcClusterIds"?: string;
        /**
        * HPC 集群列表的页码。
        * 起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。
        * 最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "HpcClusters": {
            "HpcCluster": {
                "Name": string;
                "Description": string;
                "HpcClusterId": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteDisk释放一块按量付费数据盘。磁盘类型包括普通云盘、高效云盘、SSD云盘和ESSD云盘。
    */ DeleteDisk(query: {
        "RegionId"?: string;
        /**
        * 需要释放的云盘设备 ID。
        * @example `d-23jbf2***`
        */ "DiskId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用TagResources为指定的ECS资源列表统一创建并绑定标签。
    */ TagResources(query: {
        /**
        * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型定义。取值范围：
        * - instance：ECS实例
        * - disk：磁盘
        * - snapshot：快照
        * - image：镜像
        * - securitygroup：安全组
        * - volume：存储卷
        * - eni：弹性网卡
        * - ddh：专有宿主机
        * - keypair：SSH密钥对
        * - launchtemplate：启动模板
        * @example `instance`
        */ "ResourceType": string;
        "ResourceId": string[];
        "Tag": string[];
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeTasks查询一个或多个异步请求的进度。
    */ DescribeTasks(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `1`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 查询结果的页码，起始值为1，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页记录数，最大值100行，默认值为10。
        * @example `2`
        */ "PageSize"?: number;
        /**
        * 任务ID，单次最多支持指定100个，ID之间使用半角逗号（,）分隔。
        * @example `["t-bp10e8or********74o8x","t-bp10e8or********74o8y"]`
        */ "TaskIds"?: string;
        /**
        * 任务操作的接口名称。取值范围：
        *
        * - ImportImage：导入镜像
        * - ExportImage：导出镜像
        * - RedeployInstance：重新部署ECS实例
        * @example `ImportImage`
        */ "TaskAction"?: string;
        /**
        * 任务状态。取值范围：
        *
        * - Finished：已完成
        * - Processing：运行中
        * - Waiting：多任务排队中
        * - Deleted：已取消
        * - Paused：暂停
        * - Failed：失败
        * 默认值：无。只支持查询状态为Finished、Processing和Failed的任务，填入其他取值将不会生效。
        * @example `Finished`
        */ "TaskStatus"?: string;
        /**
        * 按创建时间查询，创建时间区间的起始点。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2015-11-23T15:10:00Z`
        */ "StartTime"?: string;
        /**
        * 按创建时间查询，创建时间区间的终止点。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2015-11-23T15:16:00Z`
        */ "EndTime"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RegionId": string;
        "TaskSet": {
            "Task": {
                "CreationTime": string;
                "FinishedTime": string;
                "SupportCancel": boolean;
                "TaskAction": string;
                "TaskStatus": string;
                "TaskId": string;
            }[];
        }[];
        "RequestId": string;
    }>;
    /**
    * 调用CreateSecurityGroup新建一个安全组。新建的安全组，默认只允许安全组内的实例互相访问，安全组外的一切通信请求会被拒绝。若您想允许其他安全组实例的通信请求，或者来自互联网的访问请求，需要授权安全组权限（AuthorizeSecurityGroup）。
    */ CreateSecurityGroup(query: {
        /**
        * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
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
        * 安全组描述信息。长度为2~256个英文或中文字符，不能以 http://和https://开头。
        * 默认值：空。
        * @example `FinanceDept`
        */ "Description"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 安全组名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
        * @example `FinanceJoshua`
        */ "SecurityGroupName"?: string;
        /**
        * 安全组所属VPC ID。
        * @example `vpc-vpcid1`
        */ "VpcId"?: string;
        /**
        * 安全组类型，分为普通安全组与企业安全组。取值范围：
        * - normal：普通安全组。
        * - enterprise：企业安全组。更多详情，请参见[企业安全组概述](~~120621~~)。
        * @example `enterprise`
        */ "SecurityGroupType"?: string;
        "Tag"?: string[];
        /**
        * 安全组所在的企业资源组ID。
        * @example `rg-resourcegrouid`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "SecurityGroupId": string;
    }>;
    /**
    * 调用UntagResources为指定的ECS资源列表统一解绑并删除标签。
    */ UntagResources(query: {
        /**
        * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "ResourceId": string[];
        /**
        * 资源类型定义。取值范围：
        * - instance：ECS实例
        * - disk：磁盘
        * - snapshot：快照
        * - image：镜像
        * - securitygroup：安全组
        * - volume：存储卷
        * - eni：弹性网卡
        * - ddh：专有宿主机
        * - keypair：SSH密钥对
        * - launchtemplate：启动模板
        * @example `instance`
        */ "ResourceType": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "TagKey"?: string[];
        /**
        * 是否删除资源上全部的标签，当请求中未设置TagKey.N时该参数有效。默认值：false
        * @example `false`
        */ "All"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AttachDisk为一台ECS实例挂载一块按量付费数据盘。
    */ AttachDisk(query: {
        "RegionId"?: string;
        /**
        * 待挂载的ECS实例ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        /**
        * 待挂载的云盘ID。云盘（`DiskId`）和实例（`InstanceId`）必须在同一个可用区。
        * @example `d-23jbf2v5m`
        */ "DiskId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 云盘设备名称。
        * > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
        * @example `/dev/xvda`
        */ "Device"?: string;
        /**
        * 释放实例时，该云盘是否随实例一起释放。
        * 默认值：False。
        * @example `false`
        */ "DeleteWithInstance"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RevokeSecurityGroup删除一条安全组入方向规则，撤销安全组入方向的权限设置。
    */ RevokeSecurityGroup(query: {
        /**
        * 目的端安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 目的端安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `1/200`
        */ "PortRange": string;
        /**
        * 传输层协议。参数值大小写敏感。取值范围：
        *
        * - icmp
        * - gre
        * - tcp
        * - udp
        * - all：支持所有协议
        * @example `all`
        */ "IpProtocol": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 目的端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。默认值：0.0.0.0/0
        * @example `10.0.0.0/8`
        */ "DestCidrIp"?: string;
        /**
        * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        *
        * >仅支持VPC类型的IP地址。
        *  默认值：无。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 需要撤销访问权限的源端安全组ID。
        * 必须设置SourceGroupId或者SourceCidrIp参数。
        * 如果指定了SourceGroupId没有指定参数SourceCidrIp，则参数NicType取值只能为intranet。如果同时指定了SourceGroupId和SourceCidrIp，则默认以SourceCidrIp为准。
        * @example `sg-securitygroupid2`
        */ "SourceGroupId"?: string;
        /**
        * 跨账户删除安全组规则时，源端安全组所属的阿里云账户ID。
        * - 如果SourceGroupOwnerId及SourceGroupOwnerAccount均未设置，则认为是撤销您其他安全组的访问权限。
        * - 如果您已经设置参数SourceCidrIp，则参数SourceGroupOwnerId无效。
        * @example `155780923770`
        */ "SourceGroupOwnerId"?: number;
        /**
        * 跨账户删除安全组规则时，源端安全组所属的阿里云账户。
        * - 如果SourceGroupOwnerAccount及SourceGroupOwnerId均未设置，则认为是撤销您其他安全组的访问权限。
        * - 如果已经设置参数SourceCidrIp，则参数SourceGroupOwnerAccount无效。
        * @example `FinanceJoshua`
        */ "SourceGroupOwnerAccount"?: string;
        /**
        * 源端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。默认值：0.0.0.0/0
        * @example `10.0.0.0/8`
        */ "SourceCidrIp"?: string;
        /**
        * 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
        * >仅支持VPC类型的IP地址。
        * 默认值：无。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        *
        * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP协议：-1/-1。
        * - GRE协议：-1/-1。
        * - all：-1/-1。
        * @example `1/200`
        */ "SourcePortRange"?: string;
        /**
        * 访问权限。取值范围：
        *
        * - accept：接受访问。
        * - drop：拒绝访问，不发回拒绝信息。
        * 默认值：accept
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100
        * 默认值：1
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当撤销安全组之间互相访问时，即指定了SourceGroupId且没有指定SourceCidrIp时，参数NicType取值只能为intranet。 默认值：internet
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 安全组规则描述。
        * @example `FinanceJoshuaTest`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCloudAssistantStatus查询一台或者多台实例是否安装了云助手客户端。
    */ DescribeCloudAssistantStatus(query: {
        /**
        * 实例所在地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "InstanceId": string[];
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "InstanceCloudAssitantStatus": {
            "InstanceCloudAssitantStatusSet": {
                "InstanceId": string;
                "CloudAssitantStatus": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyInstanceNetworkSpec修改实例的带宽配置。当实例现有网络规格不满足要求时，可以通过修改实例的带宽配置提高网络性能。
    */ ModifyInstanceNetworkSpec(query: {
        "RegionId"?: string;
        /**
        * 需要修改网络配置的实例ID。
        * @example `i-xxxxx1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 公网出带宽最大值，单位：Mbps（Megabit per second）。取值范围：0~100
        * @example `10`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 设置公网入带宽最大值，单位：Mbps（Megabit per second）。取值范围：1~200
        * @example `10`
        */ "InternetMaxBandwidthIn"?: number;
        /**
        * - PayByBandwidth：按固定带宽计费
        * @example `PayByTraffic`
        */ "NetworkChargeType"?: string;
        /**
        * 是否分配公网 IP 地址。默认值：false
        * @example `false`
        */ "AllocatePublicIp"?: boolean;
        /**
        * 临时带宽升级开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddThh:mmZ。精确到**分钟**（mm）。
        * @example `2017-12-05T22:40Z`
        */ "StartTime"?: string;
        /**
        * 临时带宽升级结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddThhZ。精确到**小时**（hh）。
        * @example `2017-12-06T22Z`
        */ "EndTime"?: string;
        /**
        * - false：变更带宽配置后，只生成订单不扣费。如果您的支付方式余额不足，可以将参数Autopay置为false，即取消自动支付，此时调用该接口会生成正常的未支付订单，此订单可登录[ECS管理控制台](https://ecs.console.aliyun.com)支付。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateImage创建一份自定义镜像。您可以使用创建的自定义镜像创建ECS实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ CreateImage(query: {
        /**
        * 镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        "DiskDeviceMapping"?: string[];
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 根据指定的快照创建自定义镜像。
        * @example `s-snapshotid`
        */ "SnapshotId"?: string;
        /**
        * 实例ID。
        * @example `i-instanceid`
        */ "InstanceId"?: string;
        /**
        * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空。
        * @example `FinanceDeptJoshuaCentOS`
        */ "ImageName"?: string;
        /**
        * @example `2017011017`
        */ "ImageVersion"?: string;
        /**
        * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：空。
        * @example `FinanceDeptjoshua`
        */ "Description"?: string;
        /**
        * 指定数据盘快照做镜像的系统盘后，需要通过Platform确定系统盘的的操作系统发行版。取值范围：
        * - CentOS
        * - Ubuntu
        * - SUSE
        * - OpenSUSE
        * - RedHat
        * - Debian
        * - CoreOS
        * - Aliyun Linux
        * - Windows Server 2003
        * - Windows Server 2008
        * - Windows Server 2012
        * - Windows 7
        * - Others Linux（默认）
        * - Customized Linux
        * @example `CentOS`
        */ "Platform"?: string;
        /**
        * 指定数据盘快照做镜像的系统盘后，需要通过Architecture确定系统盘的系统架构。取值范围：
        * - i386
        * - x86_64（默认）
        * @example `x86_64`
        */ "Architecture"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        "Tag"?: string[];
        /**
        * 自定义镜像所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "ImageId": string;
    }>;
    /**
    * 调用ModifySecurityGroupEgressRule修改安全组出方向规则的描述信息。如果您还没有增加过安全组规则，可以调用 AuthorizeSecurityGroupEgress 增加。
    */ ModifySecurityGroupEgressRule(query: {
        /**
        * 源端安全组所属地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 源端安全组 ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 传输层协议。不区分大小写。取值范围：
        * - icmp
        * - gre
        * - tcp
        * - udp
        * - all：支持所有协议
        * @example `tcp`
        */ "IpProtocol": string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP 协议：-1/-1 。
        * - GRE 协议：-1/-1。
        * - all：-1/-1 。
        * @example `80/80`
        */ "PortRange": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 目的端安全组ID。
        * @example `sg-securitygroupid22`
        */ "DestGroupId"?: string;
        /**
        * 目的端安全组所属的账号登录名称。
        * @example `155780923770`
        */ "DestGroupOwnerId"?: number;
        /**
        * 目的端安全组所属的账号ID，亦即UID。
        * @example `EcsforCloud@Alibaba.com `
        */ "DestGroupOwnerAccount"?: string;
        /**
        * 目的端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：0.0.0.0/0
        * @example `10.0.0.0/8`
        */ "DestCidrIp"?: string;
        /**
        * 目的端 IP 地址范围。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
        * @example `2001:db8:1233:1a00::***`
        */ "Ipv6DestCidrIp"?: string;
        /**
        * 源端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。
        * @example `10.0.0.0/8`
        */ "SourceCidrIp"?: string;
        /**
        * 源端 IP 地址范围。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
        * @example `2001:db8:1234:1a00::***`
        */ "Ipv6SourceCidrIp"?: string;
        /**
        * 源端安全组开放的传输层协议相关的端口范围。取值范围：
        * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        * - ICMP 协议：-1/-1。
        * - GRE 协议：-1/-1。
        * - all：-1/-1。
        * @example `80/80`
        */ "SourcePortRange"?: string;
        /**
        * 访问权限。取值范围：
        * - accept：接受访问。
        * - drop：拒绝访问，不发回拒绝信息。
        * 默认值：accept
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 安全组规则优先级。取值范围：1~100
        * 默认值：1
        * @example `1`
        */ "Priority"?: string;
        /**
        * 网卡类型。取值范围：
        * - internet：公网网卡。
        * - intranet：内网网卡。
        * 当设置安全组之间互相访问时，即指定了 DestGroupId且没有指定 DestCidrIp 时，参数 NicType 取值只能为 intranet。
        * @example `internet`
        */ "NicType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 安全组规则的描述信息。长度为 1~512 个字符。
        * @example `Thisisanewsecuritygrouprule`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeClassicLinkInstances查询一台或多台与专有网络 VPC 建立了连接的经典网络类型实例。
    */ DescribeClassicLinkInstances(query: {
        /**
        * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * VPC ID。目标 VPC 必须已 [开启 ClassicLink 功能](~~65413~~)。
        * @example `vpc-test`
        */ "VpcId"?: string;
        /**
        * 实例 ID。最多指定 100 台实例 ID，并使用半角逗号（,）隔开。
        * @example `i-test`
        */ "InstanceId"?: string;
        /**
        * 当前页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: string;
        /**
        * 分页查询时设置的每页行数。取值范围：1~100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: string;
    }): Promise<{
        "PageNumber": number;
        "Links": {
            "Link": {
                "InstanceId": string;
                "VpcId": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceHistoryEvents查询指定实例的系统事件信息，默认查询处于非活跃状态的历史系统事件。
    */ DescribeInstanceHistoryEvents(query: {
        /**
        * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例ID。不指定实例ID时，表示查询您指定地域下所有实例的系统事件信息。
        * @example `i-myInstance`
        */ "InstanceId"?: string;
        "EventId"?: string[];
        "InstanceEventCycleStatus"?: string[];
        /**
        * 系统事件的生命周期状态。EventCycleStatus只在未指定InstanceEventCycleStatus.N参数时有效。取值范围：
        * - Scheduled
        * - Avoided
        * - Executing
        * - Executed
        * - Canceled
        * - Failed
        * - Inquiring
        *
        * @example `Executed`
        */ "EventCycleStatus"?: string;
        "InstanceEventType"?: string[];
        /**
        * 系统事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围：
        * - SystemMaintenance.Reboot：因系统维护实例重启
        * - SystemMaintenance.Redeploy：因系统维护实例重新部署
        * - SystemFailure.Reboot：因系统错误实例重启
        * - SystemFailure.Redeploy：因系统错误实例重新部署
        * - SystemFailure.Delete：因实例创建失败实例释放
        * - InstanceFailure.Reboot：因实例错误实例重启
        * - InstanceExpiration.Stop：因包年包月期限到期，实例停止
        * - InstanceExpiration.Delete：因包年包月期限到期，实例释放
        * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止
        * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放
        *
        * @example `SystemMaintenance.Reboot`
        */ "EventType"?: string;
        /**
        * 查询系统事件计划执行时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-30T06:32:31Z`
        */ "NotBefore.Start"?: string;
        /**
        * 查询系统事件计划执行时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-01T06:32:31Z`
        */ "NotBefore.End"?: string;
        /**
        * 查询系统事件发布时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-30T06:32:31Z`
        */ "EventPublishTime.Start"?: string;
        /**
        * 查询系统事件发布时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-01T06:32:31Z`
        */ "EventPublishTime.End"?: string;
        /**
        * 查询结果的页码。取值范围：正整数
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 查询结果的分页大小。取值范围：1~100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "InstanceSystemEventSet": {
            "InstanceSystemEventType": {
                "InstanceId": string;
                "EventId": string;
                "EventType": {
                    "Code": number;
                    "Name": string;
                };
                "EventCycleStatus": {
                    "Code": number;
                    "Name": string;
                };
                "EventPublishTime": string;
                "NotBefore": string;
                "EventFinishTime": string;
            }[];
        };
        "PageSize": number;
        "PageNumber": number;
        "TotalCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用StopInstance停止运行一台实例。
    */ StopInstance(query: {
        "RegionId"?: string;
        /**
        * 指定的实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否确认关机。仅对i1型实例规格族生效，且为i1型的实例规格族的必选参数。
        * 默认值：false。
        * @example `true`
        */ "ConfirmStop"?: boolean;
        /**
        * 停止实例时的是否强制关机策略。取值范围：
        * -   true：强制关机。
        * -   false（默认）：正常关机流程。
        * @example `false`
        */ "ForceStop"?: boolean;
        /**
        * 停止ECS实例后，实例依然计费。取值：KeepCharging
        * 开通[默认VPC内实例停机不收费](~~63353~~)功能后，您可以通过设置`StoppedMode=KeepCharging`保持停机收费，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
        * @example `keepcharging`
        */ "StoppedMode"?: string;
        "DryRun"?: boolean;
        "Hibernate"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSecurityGroup删除一个安全组。
    */ DeleteSecurityGroup(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 扩容一块数据盘。
    */ ResizeDisk(query: {
        "RegionId"?: string;
        /**
        * 磁盘 ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        /**
        * 希望扩容到的磁盘容量大小。单位为 GiB。取值范围：
        * - 普通云盘（Cloud）：5~2000
        * - 高效云盘（Cloud_efficiency）：5~2000
        * - SSD 云盘（Cloud_ssd）：5~2000
        * 指定的新磁盘容量必须比原磁盘容量大。且 2 TB 以下的磁盘不能扩容到 2 TB 以上。
        * @example `2100`
        */ "NewSize": number;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否在线扩容磁盘。取值范围：
        * - online：在线扩容，实例无需重启便能完成扩容。
        * - offline（默认）：离线扩容，您需要重启实例以完成扩容。
        * @example `online`
        */ "Type"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken** 只支持 ASCII 字符，且不能超过 64 个字符。更多详情，请参阅 [如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用LeaveSecurityGroup将一台ECS实例移出指定的安全组。
    */ LeaveSecurityGroup(query: {
        "RegionId"?: string;
        /**
        * 安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateSimulatedSystemEvents为一台或多台ECS实例预约模拟系统事件。模拟系统事件相当于事件演习，不会真正执行事件，也不会对ECS实例产生影响。
    */ CreateSimulatedSystemEvents(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "InstanceId": string[];
        /**
        * 系统事件的类型。取值范围：
        * - SystemMaintenance.Reboot：因系统维护实例重启
        * - SystemFailure.Reboot：因系统错误实例重启
        * - InstanceFailure.Reboot：因实例错误实例重启
        *
        * @example `SystemMaintenance.Reboot`
        */ "EventType": string;
        /**
        * 事件计划执行的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2018-12-01T06:32:31Z`
        */ "NotBefore": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "EventIdSet": {
            "EventId": string;
        };
    }>;
    /**
    * 当ECS实例收到系统事件通知时，调用RedeployInstance可以重新部署这台实例。
    */ RedeployInstance(query: {
        "RegionId"?: string;
        /**
        * 处于运行中或者已停止状态的实例ID。
        * @example `i-bp1azkttqpldxgted****`
        */ "InstanceId": string;
        /**
        * @example `1`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否强制停止运行中（Running）的实例。
        * 默认值：false。
        * >强制停止等同于典型的服务器断电关机，实例操作系统中暂未写入磁盘的数据会丢失。建议您尽量对已停止实例做重新部署操作。
        * @example `false`
        */ "ForceStop"?: boolean;
    }): Promise<{
        "RequestId": string;
        "TaskId": string;
    }>;
    /**
    * 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
    */ DescribeSpotPriceHistory(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 抢占式实例网络类型。取值范围：
        * - classic：表示抢占式实例的网络类型为经典网络。
        * - vpc：表示抢占式实例的网络类型为专有网络。
        * @example `vpc`
        */ "NetworkType": string;
        /**
        * 实例规格。
        * @example `ecs.t1.xsmall`
        */ "InstanceType": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        "SpotDuration"?: number;
        /**
        * 是否为I/O优化实例。取值范围：
        * - optimized：表示抢占式实例为I/O优化实例
        * - none：表示抢占式实例为非I/O优化实例
        * 系列I实例默认值：none
        * 系列II实例默认值：optimized系列III实例默认值：optimized
        * @example `none`
        */ "IoOptimized"?: string;
        /**
        * 查询抢占式实例历史价格的起始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * 默认为空，空代表结束时间前3小时，最大值不得超过指定的结束时间30天。
        * @example `2017-08-22T08:45:08Z`
        */ "StartTime"?: string;
        /**
        * 查询抢占式实例历史价格的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * 默认为空，空表示当前时间。
        * @example `2017-08-22T08:45:08Z`
        */ "EndTime"?: string;
        /**
        * 操作系统的发行平台类型。
        * @example `linux`
        */ "OSType"?: string;
        /**
        * 查询开始行。
        * 默认值：0。
        * @example `0`
        */ "Offset"?: number;
    }): Promise<{
        "RequestId": string;
        "NextOffset": number;
        "SpotPrices": {
            "SpotPriceType": {
                "IoOptimized": string;
                "OriginPrice": number;
                "NetworkType": string;
                "Timestamp": string;
                "ZoneId": string;
                "SpotPrice": number;
                "InstanceType": string;
            }[];
        };
    }>;
    /**
    * 调用CreateLaunchTemplateVersion根据指定的实例启动模板创建一个版本。
    */ CreateLaunchTemplateVersion(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 启动模板ID。更多详情，请调用[DescribeLaunchTemplates](~~73759~~)。您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
        * @example `lt-m5eiaupmvm2op9dxxxxx`
        */ "LaunchTemplateId"?: string;
        /**
        * 实例启动模板名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `JoshuaWinPrePaid`
        */ "LaunchTemplateName"?: string;
        /**
        * 实例启动模板版本的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `LTFinanceJoshua`
        */ "VersionDescription"?: string;
        /**
        * 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](~~25534~~)查询您可以使用的镜像资源。
        * @example `win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd`
        */ "ImageId"?: string;
        /**
        * 镜像来源。
        * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
        * @example `system`
        */ "ImageOwnerAlias"?: string;
        "PasswordInherit"?: boolean;
        /**
        * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问。
        * @example `sg-bp15ed6xe1yxeycg7***`
        */ "SecurityGroupId"?: string;
        /**
        * 专有网络VPC ID。
        * @example `vpc-bp12433upq1y5sceni***`
        */ "VpcId"?: string;
        /**
        * 创建VPC类型实例时需要指定虚拟交换机ID。
        * @example `vsw-bp1s5fnvk4gn2tws03***`
        */ "VSwitchId"?: string;
        /**
        * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `JoshuaHost`
        */ "InstanceName"?: string;
        /**
        * 实例描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `FinaceDept`
        */ "Description"?: string;
        /**
        * 公网入带宽最大值，单位为Mbit/s。取值范围：1~200
        * @example `200`
        */ "InternetMaxBandwidthIn"?: number;
        /**
        * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100
        * @example `5`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 云服务器的主机名。
        * -   点号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
        * -   Windows实例：字符长度为2~15，不支持点号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
        * -   其他类型实例（Linux等）：字符长度为2~64，支持多个点号（.），点之间为一段，每段允许大小写英文字母、数字和短横线（-）。
        * @example `JoshuaHost`
        */ "HostName"?: string;
        /**
        * 实例所属的可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 系统盘的云盘种类。取值范围：
        * -   cloud：普通云盘
        * -   cloud_efficiency：高效云盘
        * -   cloud_ssd：SSD云盘
        * -   cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "SystemDisk.Category"?: string;
        /**
        * 系统盘大小，单位为GiB。取值范围：20~500
        * 该参数的取值必须大于或者等于max{20, ImageSize}。
        * @example `40`
        */ "SystemDisk.Size"?: number;
        /**
        * 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `cloud_ssdSystem`
        */ "SystemDisk.DiskName"?: string;
        /**
        * 系统盘描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `FinanceDept`
        */ "SystemDisk.Description"?: string;
        /**
        * @example `30000`
        */ "SystemDisk.Iops"?: number;
        "DataDisk"?: string[];
        /**
        * 是否为I/O优化实例。取值范围：
        * -   none：非I/O优化
        * -   optimized：I/O优化
        * @example `optimized`
        */ "IoOptimized"?: string;
        "NetworkInterface"?: string[];
        /**
        * - PrePaid：包年包月。选择该类计费方式时，您必须确认自己的账号支持余额支付和信用支付，否则将返回`InvalidPayMethod`的错误提示。
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 购买资源的时长，单位为：月。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了DedicatedHostId，则取值范围不能超过专有宿主机的订阅时长。取值范围：
        * -   `PeriodUnit=Week`时，Period取值：{“1”, “2”, “3”, “4”}
        * -   `PeriodUnit=Month`时，Period取值：{ “1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “12”, “24”, “36”,”48”,”60”}
        * @example `1`
        */ "Period"?: number;
        /**
        * - PayByBandwidth：按固定带宽计费
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 是否启用实例操作系统配置。
        * @example `false`
        */ "EnableVmOsConfig"?: boolean;
        /**
        * 实例网络类型。取值范围：
        * - classic
        * - vpc
        * @example `vpc`
        */ "NetworkType"?: string;
        /**
        * 实例自定义数据，需要以Base64方式编码，原始数据最多为16KB。
        * @example `ZWNobyBoZWxsbyBlY***`
        */ "UserData"?: string;
        /**
        * 密钥对名称。
        * -   Windows实例，忽略该参数。即使填写了该参数，仍旧只执行`Password`的内容。
        * -   Linux实例的密码登录方式会被初始化成禁止。
        * @example `Instancetest`
        */ "KeyPairName"?: string;
        /**
        * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
        * @example `FinanceDept`
        */ "RamRoleName"?: string;
        /**
        * 自动释放时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
        * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
        * - 最短释放时间为当前时间半小时之后。
        * - 最长释放时间不能超过当前时间三年。
        * @example `2018-01-01T12:05:00Z`
        */ "AutoReleaseTime"?: string;
        /**
        * 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
        * -   NoSpot：正常按量付费实例。
        * -   SpotWithPriceLimit：设置上限价格的抢占式实例。
        * -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        * 设置实例的每小时最高价格。支持最大3位小数。
        * @example `0.97`
        */ "SpotPriceLimit"?: number;
        /**
        * 实例保护周期。
        * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
        * @example `1`
        */ "SpotDuration"?: number;
        /**
        * 资源组ID。
        * @example `rg-resourcegroupid`
        */ "ResourceGroupId"?: string;
        /**
        * 是否为操作系统开启安全加固。取值范围：
        * -   Active：启用安全加固，只对公共镜像生效。
        * -   Deactive：不启用安全加固，对所有镜像类型生效。
        * @example `Active`
        */ "SecurityEnhancementStrategy"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        "LaunchTemplateVersionNumber": number;
    }>;
    /**
    * 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
    */ CancelTask(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 任务 ID。您可以调用 [DescribeTasks](~~25622~~) 查看任务 ID 列表。
        * @example `t-23ym6mvro`
        */ "TaskId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateSnapshot为一块云盘创建一份快照。
    */ CreateSnapshot(query: {
        "RegionId"?: string;
        /**
        * 云盘ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 为防止和自动快照的名称冲突，不能以auto开头。
        * @example `FinanceJoshua`
        */ "SnapshotName"?: string;
        /**
        * 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：空。
        * @example `FinanceDepet`
        */ "Description"?: string;
        /**
        * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放，取值范围：1~65536。
        * 默认值：空，表示快照不会被自动释放。
        * @example `30`
        */ "RetentionDays"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        "SnapshotId": string;
    }>;
    /**
    * （Beta）调用DescribePrice查询云服务器ECS资源的最新价格。
    */ DescribePrice(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 目标资源的类型。取值范围：
        * - instance：查询ECS实例的最新价格列表
        * - disk：查询云盘的最新价格列表
        * - bandwidth：查询带宽的最新价格列表
        * 默认值：instance
        * @example `instance`
        */ "ResourceType"?: string;
        /**
        * 镜像ID，表示启动实例时希望装载的运行环境。您可以调用[DescribeImages](~~25534~~)查询您可用的镜像资源。如果不指定，默认查询Linux系统镜像的价格。
        * @example `centos_7_05_64_20G_alibase_20181212.vhd`
        */ "ImageId"?: string;
        /**
        * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.n1.tiny`
        */ "InstanceType"?: string;
        /**
        * 查询的实例是否为I/O优化实例。取值范围：
        * - none：非I/O优化。
        * - optimized：I/O优化。
        * InstanceType为[系列I](~~55263~~)的规格时，默认值：none
        * InstanceType为非[系列I](~~55263~~)的规格时，默认值：optimized
        * @example `none`
        */ "IoOptimized"?: string;
        /**
        * 实例的网络类型。取值范围：
        * - classic：实例的网络类型为经典网络（Classic）
        * - vpc：实例的网络类型为专有网络（VPC）
        * 默认值：vpc
        * @example `vpc`
        */ "InstanceNetworkType"?: string;
        /**
        * - PayByTraffic：按带宽流量计费
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 公网出带宽最大值，单位为Mbps（Megabit per second）。取值范围：0~100
        * 默认值：0
        * @example `5`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 系统盘的云盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * InstanceType为[已停售的实例规格](~~55263~~)的规格且参数IoOptimized取值为none时，默认值：cloud。
        * 其余情况，默认值：cloud_efficiency。
        * @example `cloud_ssd`
        */ "SystemDisk.Category"?: string;
        /**
        * 系统盘大小，单位为GiB。取值范围：20~500
        * 该参数的取值必须大于或者等于max{20, ImageSize}。默认值：max{40, 参数ImageId对应的镜像大小}
        * @example `80`
        */ "SystemDisk.Size"?: number;
        /**
        * 系统盘类型为ESSD云盘时，区分性能等级。仅当`SystemDiskCategory=cloud_essd`时该参数有效。取值范围：
        * - PL1（默认）
        * - PL2
        * - PL3
        * @example `PL1`
        */ "SystemDisk.PerformanceLevel"?: string;
        /**
        * 第一块数据盘的容量大小，内存单位为GiB。取值范围：
        * - cloud：5~2000
        * - cloud_efficiency：20~32768
        * - cloud_ssd：20~32768
        * - cloud_essd：20~32768
        * - ephemeral_ssd：5~800
        * @example `2000`
        */ "DataDisk.1.Size"?: number;
        /**
        * 第一块数据盘的云盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "DataDisk.1.Category"?: string;
        /**
        * 第一块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.1.Category=cloud_essd`时该参数有效。取值范围：
        * - PL1（默认）
        * - PL2
        * - PL3
        * @example `PL1`
        */ "DataDisk.1.PerformanceLevel"?: string;
        /**
        * 第二块数据盘的容量大小，内存单位为GiB。取值范围：
        * - cloud：5~2000
        * - cloud_efficiency：20~32768
        * - cloud_ssd：20~32768
        * - cloud_essd：20~32768
        * - ephemeral_ssd：5~800
        * @example `200`
        */ "DataDisk.2.Size"?: number;
        /**
        * 第二块数据盘的云盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "DataDisk.2.Category"?: string;
        /**
        * 第二块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.2.Category=cloud_essd`时该参数有效。取值范围：
        * - PL1（默认）
        * - PL2
        * - PL3
        * @example `PL1`
        */ "DataDisk.2.PerformanceLevel"?: string;
        /**
        * 第三块数据盘的容量大小，内存单位为GiB。取值范围：
        * - cloud：5~2000
        * - cloud_efficiency：20~32768
        * - cloud_ssd：20~32768
        * - cloud_essd：20~32768
        * - ephemeral_ssd：5~800
        * @example `2000`
        */ "DataDisk.3.Size"?: number;
        /**
        * 第三块数据盘的云盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "DataDisk.3.Category"?: string;
        /**
        * 第三块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.3.Category=cloud_essd`时该参数有效。取值范围：
        * - PL1（默认）
        * - PL2
        * - PL3
        * @example `PL1`
        */ "DataDisk.3.PerformanceLevel"?: string;
        /**
        * 第四块数据盘的容量大小，内存单位为GiB。取值范围：
        * - cloud：5~2000
        * - cloud_efficiency：20~32768
        * - cloud_ssd：20~32768
        * - cloud_essd：20~32768
        * - ephemeral_ssd：5~800
        * @example `2000`
        */ "DataDisk.4.Size"?: number;
        /**
        * 第四块数据盘的云盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "DataDisk.4.Category"?: string;
        /**
        * 第四块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.4.Category=cloud_essd`时该参数有效。取值范围：
        * - PL1（默认）
        * - PL2
        * - PL3
        * @example `PL1`
        */ "DataDisk.4.PerformanceLevel"?: string;
        /**
        * 云服务器ECS的计费时长。取值范围：
        * - 当参数PriceUnit取值为Month时：1~9
        * - 当参数PriceUnit取值为Year时：1~3
        * - 当参数PriceUnit取值为Hour时：1
        * 默认值：1
        * @example `1`
        */ "Period"?: number;
        /**
        * - Week：按周计费的价格单位
        * @example `Year`
        */ "PriceUnit"?: string;
        /**
        * 查询批量购买某种配置的云服务器ECS的价格。取值范围：1~1000
        * 默认值：1
        * @example `1`
        */ "Amount"?: number;
        "OfferingType"?: string;
        "InstanceAmount"?: number;
        "Scope"?: string;
        "Platform"?: string;
        "Capacity"?: number;
    }): Promise<{
        "RequestId": string;
        "PriceInfo": {
            "Price": {
                "Currency": string;
                "DiscountPrice": number;
                "OriginalPrice": number;
                "TradePrice": number;
            };
            "Rules": {
                "Rule": {
                    "Description": string;
                    "Code": string;
                }[];
            };
        };
    }>;
    /**
    * 调用DeleteLaunchTemplate删除一个实例启动模板。
    */ DeleteLaunchTemplate(query: {
        /**
        * 实例启动模板所属的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 启动模板ID。更多详情，请调用 [DescribeLaunchTemplates](~~73759~~)。您必须指定 `LaunchTemplateId` 或 `LaunchTemplateName` 以确定启动模板。
        * @example `lt-bp1apo0bbbkuy0rj3***`
        */ "LaunchTemplateId"?: string;
        /**
        * 启动模板名称。您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
        * @example `JoshuaWinPostPaid`
        */ "LaunchTemplateName"?: string;
    }): Promise<{}>;
    /**
    * 添加或者覆盖一个或者多个标签到云服务器ECS的各项资源上。您可以添加标签到实例、磁盘、快照、镜像、安全组等，便于管理资源。
    */ AddTags(query: {
        /**
        * 资源所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型。取值范围：
        * -   disk
        * -   instance
        * -   image
        * -   securitygroup
        * -   snapshot
        * 以上取值均为小写。
        * @example `instance`
        */ "ResourceType": string;
        /**
        * 要绑定标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。
        * @example `i-instanceid1`
        */ "ResourceId": string;
        "Tag": string[];
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 查询可以供您使用的标签。您可以根据资源类型、资源ID、标签键或标签值等条件查询标签，筛选条件之间为逻辑与（&&）关系，返回满足所有筛选条件的标签。
    */ DescribeTags(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        *  分页查询时设置的每页行数。
        * 最大值：100
        * 默认值：50
        * @example `50`
        */ "PageSize"?: number;
        /**
        *  标签列表的页码。
        * 起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 资源类型。取值范围：
        *
        * - disk
        * - instance
        * - image
        * - securitygroup
        * - snapshot
        * 以上取值均为小写。
        * @example `snapshot`
        */ "ResourceType"?: string;
        /**
        * 标签绑定的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。
        * @example `s-946ntx4wr`
        */ "ResourceId"?: string;
        "Tag"?: string[];
        "Category"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Tags": {
            "Tag": {
                "TagKey": string;
                "TagValue": string;
            }[];
        };
        "TotalCount": number;
    }>;
    /**
    * 调用DeleteDeploymentSet删除一个部署集。
    */ DeleteDeploymentSet(query: {
        /**
        * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 部署集ID。如果部署集中仍有实例存在，则无法删除。
        * @example `ds-deploymentsetid1`
        */ "DeploymentSetId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）和导出镜像（ExportImage）两种。
    */ DescribeTaskAttribute(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 任务ID。您可以调用[DescribeTasks](~~25622~~)查看任务ID。
        * @example `t-taskid`
        */ "TaskId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "CreationTime": string;
        "OperationProgressSet": {
            "OperationProgress": {
                "RelatedItemSet": {
                    "RelatedItem": {
                        "Name": string;
                        "Value": string;
                    }[];
                };
                "ErrorMsg": string;
                "ErrorCode": string;
                "OperationStatus": string;
            }[];
        };
        "FinishedTime": string;
        "FailedCount": number;
        "SupportCancel": boolean;
        "TotalCount": number;
        "SuccessCount": number;
        "RequestId": string;
        "RegionId": string;
        "TaskAction": string;
        "TaskStatus": string;
        "TaskProcess": string;
        "TaskId": string;
    }>;
    /**
    * 调用DetachInstanceRamRole收回一台或多台ECS实例的实例RAM角色。
    */ DetachInstanceRamRole(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 指定收回的实例ID的集合。最多支持一次查询100台实例。
        * @example `["instanceId1", "instanceId2", "instanceId3"…]`
        */ "InstanceIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 收回赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
        * @example `RamRoleTest`
        */ "RamRoleName"?: string;
    }): Promise<{
        "RequestId": string;
        "DetachInstanceRamRoleResults": {
            "DetachInstanceRamRoleResult": {
                "Message": string;
                "InstanceId": string;
                "Code": string;
            }[];
        };
        "TotalCount": number;
        "FailCount": number;
        "RamRoleName": string;
    }>;
    /**
    * 调用UnassignPrivateIpAddresses从一块弹性网卡删除一个或多个辅助私有IP地址。
    */ UnassignPrivateIpAddresses(query: {
        /**
        * 资源所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡ID。
        * @example `eni-myeni`
        */ "NetworkInterfaceId": string;
        "PrivateIpAddress": string[];
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteNetworkInterface删除一个弹性网卡（ENI）。
    */ DeleteNetworkInterface(query: {
        /**
        * 所在地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡的 ID。
        * @example `eni-myeni`
        */ "NetworkInterfaceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ExportImage导出您的自定义镜像到与该自定义镜像同一地域的OSS Bucket里。
    */ ExportImage(query: {
        /**
        * 自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 自定义镜像ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        /**
        * 保存导出镜像的OSS bucket。
        * @example `testexportImage`
        */ "OSSBucket": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 您的OSS  Object的前缀。可以由数字或者字母组成，字符长度为1~30。
        * @example `EcsExport`
        */ "OSSPrefix"?: string;
        /**
        * @example `raw`
        */ "ImageFormat"?: string;
        /**
        * @example `FinanceJoshua`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
        "RegionId": string;
        "ExportTaskId": string;
    }>;
    /**
    * 调用CreateLaunchTemplate创建一个实例启动模板，简称模板。实例启动模板能免除您每次创建实例时都需要填入大量配置参数。
    */ CreateLaunchTemplate(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例启动模板名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `JoshuaWinPrePaid`
        */ "LaunchTemplateName": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "TemplateTag"?: string[];
        /**
        * 实例启动模板版本1描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `LTFinanceJoshua`
        */ "VersionDescription"?: string;
        /**
        * 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](~~25534~~)查询您可以使用的镜像资源。
        * @example `win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd`
        */ "ImageId"?: string;
        /**
        * - marketplace：[镜像市场](https://market.aliyun.com/)提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。
        * @example `system`
        */ "ImageOwnerAlias"?: string;
        "PasswordInherit"?: boolean;
        /**
        * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组最多能管理1000台实例。
        * @example `sg-bp15ed6xe1yxeycg7***`
        */ "SecurityGroupId"?: string;
        /**
        * 专有网络VPC ID。
        * @example `vpc-bp12433upq1y5sceni***`
        */ "VpcId"?: string;
        /**
        * 创建VPC类型实例时需要指定虚拟交换机ID。
        * @example `vsw-bp1s5fnvk4gn2tws03***`
        */ "VSwitchId"?: string;
        /**
        * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `JoshuaHost`
        */ "InstanceName"?: string;
        /**
        * 实例描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `FinaceDept`
        */ "Description"?: string;
        /**
        * 公网入带宽最大值，单位为Mbit/s。取值范围：1~200
        * @example `200`
        */ "InternetMaxBandwidthIn"?: number;
        /**
        * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100
        * @example `5`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 云服务器的主机名。
        * -   点号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
        * -   Windows实例：字符长度为2~15，不支持点号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
        * -   其他类型实例（Linux 等）：字符长度为2~64，支持多个点号（.），点之间为一段，每段允许大小写英文字母、数字和短横线（-）。
        * @example `JoshuaHost`
        */ "HostName"?: string;
        /**
        * 实例所属的可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 系统盘的云盘种类。取值范围：
        * -   cloud：普通云盘
        * -   cloud_efficiency：高效云盘
        * -   cloud_ssd：SSD云盘
        * -   cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "SystemDisk.Category"?: string;
        /**
        * 系统盘大小，单位为GiB。取值范围：20~500
        * 该参数的取值必须大于或者等于max{20, ImageSize}。
        * @example `40`
        */ "SystemDisk.Size"?: number;
        /**
        * 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `cloud_ssdSystem`
        */ "SystemDisk.DiskName"?: string;
        /**
        * 系统盘描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `FinanceDept`
        */ "SystemDisk.Description"?: string;
        /**
        * @example `30000`
        */ "SystemDisk.Iops"?: number;
        "DataDisk"?: string[];
        /**
        * 是否为I/O优化实例。取值范围：
        * -   none：非I/O优化
        * -   optimized：I/O优化
        * @example `optimized`
        */ "IoOptimized"?: string;
        "NetworkInterface"?: string[];
        /**
        * - PrePaid：包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付和信用支付，否则将返回`InvalidPayMethod`的错误提示。
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 购买资源的时长，单位为：月。当参数`InstanceChargeType`取值为 `PrePaid`时才生效且为必选值。一旦指定了DedicatedHostId，则取值范围不能超过专有宿主机的订阅时长。取值范围：
        * -   `PeriodUnit=Week`时，Period取值：{“1”, “2”, “3”, “4”}
        * -   `PeriodUnit=Month`时，Period取值：{ “1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “12”, “24”, “36”,”48”,”60”}
        * @example `1`
        */ "Period"?: number;
        /**
        * - PayByBandwidth：按固定带宽计费
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 是否启用实例操作系统配置。
        * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
        * @example `false`
        */ "EnableVmOsConfig"?: boolean;
        /**
        * 实例网络类型。取值范围：
        * - classic
        * - vpc
        * @example `vpc`
        */ "NetworkType"?: string;
        /**
        * 实例自定义数据，需要以Base64方式编码，原始数据最多为16 KB。
        * @example `ZWNobyBoZWxsbyBlY3Mh`
        */ "UserData"?: string;
        /**
        * 密钥对名称。
        * -   Windows实例，忽略该参数。即使填写了该参数，仍旧只执行`Password`的内容。
        * -   Linux实例的密码登录方式会被初始化成禁止。
        * @example `Instancetest`
        */ "KeyPairName"?: string;
        /**
        * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
        * @example `FinanceDept`
        */ "RamRoleName"?: string;
        /**
        * 自动释放时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
        * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
        * - 最短释放时间为当前时间半小时之后。
        * - 最长释放时间不能超过当前时间三年。
        * @example `2018-01-01T12:05:00Z`
        */ "AutoReleaseTime"?: string;
        /**
        * 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
        * -   NoSpot：正常按量付费实例。
        * -   SpotWithPriceLimit：设置上限价格的抢占式实例。
        * -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        * 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
        * @example `0.97`
        */ "SpotPriceLimit"?: number;
        /**
        * 实例保护周期。
        * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
        * @example `1`
        */ "SpotDuration"?: number;
        /**
        * 实例、块存储和弹性网卡所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 启动模板所在的企业资源组ID。
        * @example `rg-resourcegroupid2`
        */ "TemplateResourceGroupId"?: string;
        /**
        * 是否为操作系统开启安全加固。取值范围：
        * -   Active：启用安全加固，只对公共镜像生效。
        * -   Deactive：不启用安全加固，对所有镜像类型生效。
        * @example `Deactive`
        */ "SecurityEnhancementStrategy"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        "LaunchTemplateId": string;
    }>;
    /**
    * 当一台ECS实例处于已停止（Stopped）状态时，调用RebootInstance可以重启这台实例。
    */ RebootInstance(query: {
        "RegionId"?: string;
        /**
        * 指定实例的ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 重启ECS实例前是否强制关机策略。取值范围：
        * -   true：重启ECS实例前强制关机。
        * -   false（默认）：重启ECS实例前正常关机。
        * @example `false`
        */ "ForceStop"?: boolean;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
        * - false（默认）：发送正常请求，通过检查后直接重启实例。
        * @example `false`
        */ "DryRun"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RenewInstance续费一台包年包月ECS实例。
    */ RenewInstance(query: {
        "RegionId"?: string;
        /**
        * 需要续费的实例ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        /**
        * - PeriodUnit=Week时，Period取值：1~4
        * @example `1`
        */ "Period": number;
        "SourceRegionId"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
        */ "ClientToken"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * - Week
        * @example `Month`
        */ "PeriodUnit"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions查询您可以使用的阿里云地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例的计费方式，更多详情，请参见[计费概述](~~25398~~)。取值范围：
        * - PrePaid：包年包月。此时，您必须确认自己的账号支持余额支付或者信用支付，否则将报错InvalidPayMethod。
        * - PostPaid（默认）：按量付费。
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 资源类型。
        * @example `Instance`
        */ "ResourceType"?: string;
        /**
        *  根据汉语、英语和日语筛选返回结果。更多详情，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：
        *
        * - zh-CN：中文
        * - en-US：英文
        * - ja：日文
        * 默认值：zh-CN。
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": {
                "RegionId": string;
                "RegionEndpoint": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteInstance释放一台按量付费实例或者到期的包年包月实例。
    */ DeleteInstance(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否强制释放**运行中**（`Running`的实例。
        * -   true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
        * -   false（默认值）：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。
        * @example `false`
        */ "Force"?: boolean;
        /**
        * 是否释放已到期的包年包月实例。
        * 默认值：false。
        * @example `false`
        */ "TerminateSubscription"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstances查询一台或多台ECS实例的详细信息。
    */ DescribeInstances(query: {
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
        * 专有网络VPC ID。
        * @example `v-vpcid1`
        */ "VpcId"?: string;
        /**
        * 虚拟交换机ID。
        * @example `vsw-vswitchid1`
        */ "VSwitchId"?: string;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 实例网络类型。取值范围：
        *
        * - classic：经典网络
        * - vpc：专有网络VPC
        * @example `vpc`
        */ "InstanceNetworkType"?: string;
        /**
        * 实例所属的安全组。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId"?: string;
        /**
        * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `["i-xxxxxxxxx", "i-yyyyyyyyy", … "i-zzzzzzzzz"]`
        */ "InstanceIds"?: string;
        /**
        * 实例状态列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 经典网络类型实例的内网IP列表。当InstanceNetworkType=classic时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
        * @example `["10.1.1.1", "10.1.2.1", … "10.1.10.1"]`
        */ "InnerIpAddresses"?: string;
        /**
        * VPC网络类型实例的私有IP。当InstanceNetworkType=vpc时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
        * @example `["172.16.1.1", "172.16.2.1", … "172.16.10.1"]`
        */ "PrivateIpAddresses"?: string;
        /**
        * 实例的公网IP列表。当InstanceNetworkType=classic时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
        * @example `["42.1.1.**", "42.1.2.**", … "42.1.10.**"]`
        */ "PublicIpAddresses"?: string;
        /**
        * 实例的弹性公网IP列表。当InstanceNetworkType=vpc时该参数生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。
        * @example `["42.1.1.**", "42.1.2.**", … "42.1.10.**"]`
        */ "EipAddresses"?: string;
        /**
        * 实例的计费方式。取值范围：
        *
        * -  PostPaid：按量付费
        * - PrePaid：包年包月
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * - PayByBandwidth：按带宽计费
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 实例名称，支持使用通配符*进行模糊搜索。
        * @example `*Joshua`
        */ "InstanceName"?: string;
        /**
        * 镜像ID。
        * @example `m-imageid1`
        */ "ImageId"?: string;
        /**
        * 实例状态。取值范围：
        *
        * - Running：运行中
        * - Starting：启动中
        * - Stopping：停止中
        * - Stopped：已停止
        * @example `Running`
        */ "Status"?: string;
        /**
        * 资源被锁定的原因。
        * @example `security`
        */ "LockReason"?: string;
        /**
        * @example `CreationStartTime`
        */ "Filter.1.Key"?: string;
        /**
        * @example `CreationEndTime`
        */ "Filter.2.Key"?: string;
        /**
        * @example `ExpiredStartTime`
        */ "Filter.3.Key"?: string;
        /**
        * @example `ExpiredEndTime`
        */ "Filter.4.Key"?: string;
        /**
        * @example `2017-12-05T22:40:00Z`
        */ "Filter.1.Value"?: string;
        /**
        * @example `2017-12-06T22:40:00Z`
        */ "Filter.2.Value"?: string;
        /**
        * @example `2017-12-07T22:40:00Z`
        */ "Filter.3.Value"?: string;
        /**
        * @example `2017-12-08T22:40:00Z`
        */ "Filter.4.Value"?: string;
        /**
        * @example `false`
        */ "DeviceAvailable"?: boolean;
        /**
        * 是否是I/O优化型实例。
        * @example `true`
        */ "IoOptimized"?: boolean;
        /**
        * 是否返回包年包月实例售卖周期。默认值：false
        * @example `false`
        */ "NeedSaleCycle"?: boolean;
        "Tag"?: string[];
        /**
        * 实例的规格。
        * @example `ecs.g5.larger`
        */ "InstanceType"?: string;
        /**
        * 实例的规格族。
        * @example `ecs.g5`
        */ "InstanceTypeFamily"?: string;
        /**
        * 实例使用的SSH密钥对名称。
        * @example `FinanceJoshua`
        */ "KeyPairName"?: string;
        /**
        * 实例所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 实例所在的HPC集群ID。
        * @example `hpc-hpclusterid1`
        */ "HpcClusterId"?: string;
        /**
        * HPC实例的Rdma网络IP。
        * @example `10.10.10.102`
        */ "RdmaIpAddresses"?: string;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * @example `false`
        */ "DryRun"?: boolean;
    }): Promise<{
        "Instances": {
            "Instance": {
                "CreationTime": string;
                "EipAddress": {};
                "ExpiredTime": string;
                "HostName": string;
                "ImageId": string;
                "InnerIpAddress": {
                    "IpAddress": string[];
                };
                "InstanceChargeType": string;
                "InstanceId": string;
                "InstanceName": string;
                "InstanceNetworkType": string;
                "InstanceType": string;
                "InternetChargeType": string;
                "InternetMaxBandwidthIn": string;
                "InternetMaxBandwidthOut": string;
                "IoOptimized": string;
                "OperationLocks": {
                    "LockReason": any[];
                };
                "PublicIpAddress": {
                    "IpAddress": string[];
                };
                "RegionId": string;
                "SecurityGroupIds": {
                    "SecurityGroupId": string[];
                };
                "SerialNumber": string;
                "Status": string;
                "VpcAttributes": {
                    "PrivateIpAddress": {
                        "IpAddress": any[];
                    };
                };
                "ZoneId": string;
            }[];
        };
        "PageNumber": string;
        "PageSize": string;
        "RequestId": string;
        "TotalCount": string;
    }>;
    /**
    * 调用ImportKeyPair导入由其他工具产生的RSA密钥对的公钥部分。导入密钥对后，阿里云为您保管公钥部分，您需要自行妥善保存密钥对的私钥部分。
    */ ImportKeyPair(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 密钥对名称。必须保持名称唯一性。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `FinanceJoshuaV24`
        */ "KeyPairName": string;
        /**
        * 密钥对的公钥内容。
        * @example `xxxxxxxxxxxxxx`
        */ "PublicKeyBody": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "KeyPairName": string;
        "KeyPairFingerPrint": string;
    }>;
    /**
    * 调用ResetDisk使用磁盘的历史快照回滚至某一阶段的磁盘状态。
    */ ResetDisk(query: {
        "RegionId"?: string;
        /**
        * 指定的磁盘设备 ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        /**
        * 需要恢复到某一磁盘阶段的历史快照 ID。
        * @example `s-snapshotid1`
        */ "SnapshotId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceRamRole查询一台或者多台ECS实例上的已赋予的实例RAM角色。
    */ DescribeInstanceRamRole(query: {
        /**
        * 实例RAM角色所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 查询接口返回资源信息列表的页码。
        * 起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页展示响应信息时设置的每页行数，单位：行。
        * 最大值：50。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 指定查询的实例ID的集合。最多支持一次查询100台实例。
        * @example `["instanceId1", "instanceId2", "instanceId3"…]`
        */ "InstanceIds"?: string;
        /**
        * 查询赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
        * @example `FinanceDeptOnly`
        */ "RamRoleName"?: string;
    }): Promise<{
        "RequestId": string;
        "InstanceRamRoleSets": {
            "InstanceRamRoleSet": {
                "InstanceId": string;
                "RamRoleName": string;
            }[];
        };
        "TotalCount": number;
    }>;
    /**
    * 调用CreateNetworkInterface创建一个弹性网卡（ENI）。
    */ CreateNetworkInterface(query: {
        /**
        * 实例所在地域的ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 指定VPC的交换机ID。
        * @example `[vswitchid]`
        */ "VSwitchId": string;
        /**
        * 所属的安全组ID必须是同一个VPC下的安全组。
        * @example `sg-c0003exxxxx`
        */ "SecurityGroupId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Tag"?: string[];
        /**
        * 资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 弹性网卡的主私有IP地址。指定IP必须是在所属交换机的地址段内的空闲地址，不指定则默认随机分配该交换机中的空闲地址。
        * @example `172.17.**.***`
        */ "PrimaryIpAddress"?: string;
        /**
        * 弹性网卡名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空。
        * @example `eni-eniname1`
        */ "NetworkInterfaceName"?: string;
        /**
        * 弹性网卡的描述信息。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * 默认值：空。
        * @example `test`
        */ "Description"?: string;
        "Visible"?: boolean;
        "BusinessType"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "NetworkInterfaceId": string;
    }>;
    /**
    * 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
    */ DescribeDeploymentSets(query: {
        /**
        * 部署集所属地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 部署集列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 部署集ID列表。取值可以由多个部署集ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`
        */ "DeploymentSetIds"?: string;
        /**
        * 部署集内的网络类型。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "NetworkType"?: string;
        /**
        * 部署策略。取值：Availability
        * 默认值：空。
        * @example `Availability`
        */ "Strategy"?: string;
        /**
        * 部署集名称。
        * @example `FinanceJoshua`
        */ "DeploymentSetName"?: string;
        /**
        * 部署粒度。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "Granularity"?: string;
        /**
        * 部署域。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "Domain"?: string;
    }): Promise<{
        "PageSize": number;
        "TotalCount": number;
        "PageNumber": number;
        "RequestId": string;
        "DeploymentSets": {
            "DeploymentSet": {
                "DeploymentSetDescription": string;
                "DeploymentSetId": string;
                "DeploymentStrategy": string;
                "DeploymentSetName": string;
                "InstanceIds": {
                    "InstanceId": string[];
                };
            }[];
        };
    }>;
    /**
    * 调用DescribeImageSharePermission查询一份自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为 10 条。
    */ DescribeImageSharePermission(query: {
        /**
        * 自定义镜像所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 自定义镜像 ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 查询结果显示的页码。起始值：1 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 查询结果显示的每页的信息条目数。最大值：50 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "ShareGroups": {
            "ShareGroup": {
                "Group": string;
            }[];
        };
        "Accounts": {
            "Account": {
                "AliyunId": string;
            }[];
        };
        "ImageId": string;
        "PageNumber": number;
        "PageSize": number;
        "RegionId": string;
        "TotalCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeBandwidthLimitation查询带宽资源列表。
    */ DescribeBandwidthLimitation(query: {
        /**
        * 目标地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
        * - PrePaid：预付费（包年包月）
        * - PostPaid：按量付费
        * 默认值：PostPaid
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 按量付费实例的抢占策略。取值范围：
        * - NoSpot：正常按量付费实例
        * - SpotWithPriceLimit：设置上限价格的抢占式实例
        * - SpotAsPriceGo：系统自动出价，最高按量付费价格
        * 默认值：NoSpot
        * 当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        * 实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 资源ID。当您将参数OperationType设置为Upgrade或者Downgrade时，参数ResourceId为必需参数。
        * @example `s-946ntx4xx`
        */ "ResourceId"?: string;
        /**
        * 查询不同操作方式的带宽规格限制。取值范围：
        * - Upgrade：升级带宽
        * - Downgrade：降级带宽
        * - Create：新建
        * 默认值：Create
        * @example `Upgrade`
        */ "OperationType"?: string;
    }): Promise<{
        " Bandwidths": {
            " Bandwidth": {
                "InternetChargeType": string;
                "Max": number;
                "Min": number;
                "Unit": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DeleteHpcCluster删除一个HPC集群。
    */ DeleteHpcCluster(query: {
        /**
        * HPC集群所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * HPC集群ID。
        * @example `hpc-cluster1`
        */ "HpcClusterId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
    */ ModifyInstanceAutoReleaseTime(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 需要自动释放的ECS实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        /**
        * 自动释放时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * - 如果秒（`ss`）取值不是 `00`，则自动取为当前分钟（`mm`）开始时。
        * - 最短释放时间为当前时间半小时之后。
        * - 最长释放时间不能超过当前时间三年。
        * 如果不传入参数`AutoReleaseTime`，表示自动释放功能已取消，ECS实例不再自动释放。
        * @example `2018-01-01T01:02:03Z`
        */ "AutoReleaseTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySecurityGroupPolicy修改安全组内网连通策略。
    */ ModifySecurityGroupPolicy(query: {
        /**
        * 安全组所属地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 安全组的 ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        /**
        * 当前安全组内网连通策略。取值范围：
        * - Accept：安全组内的实例之间的网络是互通的。
        * - Drop：安全组内的实例之间的网络是隔离的。
        * 以上取值，不区分大小写。
        * @example `Accept`
        */ "InnerAccessPolicy": string;
        "SourceRegionId"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSecurityGroupAttribute查询一个安全组的详情。
    */ DescribeSecurityGroupAttribute(query: {
        /**
        * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 安全组ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 网卡类型。取值范围：
        *
        * - internet：公网
        * - intranet：内网
        * 默认值：internet
        * @example `intranet`
        */ "NicType"?: string;
        /**
        * 安全组规则授权方向。取值范围：
        *
        * - egress：安全组出方向
        * - ingress：安全组入方向
        * - all：不区分方向
        * 默认值：all
        * @example `all`
        */ "Direction"?: string;
    }): Promise<{
        "SecurityGroupId": string;
        "InnerAccessPolicy": string;
        "SecurityGroupName": string;
        "Description": string;
        "RegionId": string;
        "RequestId": string;
        "Permissions": {
            "Permission": {
                "SourceCidrIp": string;
                "Description": string;
                "DestCidrIp": string;
                "NicType": string;
                "DestGroupName": string;
                "PortRange": string;
                "DestGroupId": string;
                "Ipv6DestCidrIp": string;
                "Direction": string;
                "Priority": number;
                "IpProtocol": string;
                "SourcePortRange": string;
                "SourceGroupOwnerAccount": string;
                "Policy": string;
                "CreateTime": string;
                "SourceGroupId": string;
                "DestGroupOwnerAccount": string;
                "Ipv6SourceCidrIp": string;
                "SourceGroupName": string;
            }[];
        };
        "VpcId": string;
    }>;
    /**
    * 调用InvokeCommand为一台或多台ECS实例触发一条云助手命令。
    */ InvokeCommand(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
        * @example `c-e996287206324975b5fbe1d********`
        */ "CommandId": string;
        "InstanceId": string[];
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令是否为周期执行。
        * 默认值：false
        * @example `true`
        */ "Timed"?: boolean;
        /**
        * 周期任务的执行周期，两次周期任务的时间间隔不能低于10秒。当参数Timed的值为True时，参数Frequency为必需参数。
        * 该参数取值遵循Cron表达式，请参见[设置定时执行命令](~~64769~~)。
        * @example `0 *​/20 * * * *`
        */ "Frequency"?: string;
        /**
        * 启用自定义参数功能时，执行命令时传入的自定义参数的键值对。自定义参数的个数范围：0~10
        * - Map的键不允许为空字符串，最多支持64个字符。
        * - Map的值允许为空字符串。
        * - 自定义参数与原始命令内容在Base64编码后，综合长度不能超过16KB。
        * - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。
        * 您可以取消设置该参数从而禁用自定义参数。
        * @example `{"name":"Jack", "accessKey":"LTAIdyv******aRY"}`
        */ "Parameters"?: string;
    }): Promise<{
        "RequestId": string;
        "InvokeId": string;
    }>;
    /**
    * 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
    */ ModifyLaunchTemplateDefaultVersion(query: {
        /**
        * 模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 设置为默认版本的启动模板版本号。
        * @example `2`
        */ "DefaultVersionNumber": number;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 启动模板 ID。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
        * @example `lt-templateid1`
        */ "LaunchTemplateId"?: string;
        /**
        * 启动模板名称。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
        * @example `lt-name1`
        */ "LaunchTemplateName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AttachInstanceRamRole为一台或多台ECS实例授予 实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
    */ AttachInstanceRamRole(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例RAM角色名称。您可以使用 RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
        * @example `RamRoleTest`
        */ "RamRoleName": string;
        /**
        * 实例ID的集合，最多支持100台实例。
        * @example `[“instanceId1”, “instanceId2”, “instanceId3”…]`
        */ "InstanceIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "AttachInstanceRamRoleResults": {
            "AttachInstanceRamRoleResult": {
                "Message": string;
                "InstanceId": string;
                "Code": string;
            }[];
        };
        "TotalCount": number;
        "FailCount": number;
        "RamRoleName": string;
    }>;
    /**
    * 调用AttachNetworkInterface附加弹性网卡（ENI）到专有网络（VPC）类型实例上。
    */ AttachNetworkInterface(query: {
        /**
        * 实例所在地域的 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡 ID。
        * @example `[networkInterfaceId]`
        */ "NetworkInterfaceId": string;
        /**
        * 实例 ID。
        * @example `i-myInstance`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssignIpv6Addresses为弹性网卡分配一个或多个IPv6地址。
    */ AssignIpv6Addresses(query: {
        /**
        * 弹性网卡所在地域的 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡 ID。
        * @example `eni-test`
        */ "NetworkInterfaceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Ipv6Address"?: string[];
        /**
        * 为弹性网卡指定随机生成的 IPv6 地址数量。
        * > 您不能同时指定参数 Ipv6Addresses.N 和 Ipv6AddressCount。
        * @example `1`
        */ "Ipv6AddressCount"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
    */ CancelAutoSnapshotPolicy(query: {
        "RegionId"?: string;
        /**
        * 自动快照策略和云盘所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "regionId": string;
        /**
        * 目标云盘ID。当您需要取消多块云盘的自动快照策略时，多块云盘ID用一个格式类似 "d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz" 的JSON数组表示，云盘ID之间用半角逗号（,）隔开。
        * @example `["d-233e6yl**", "d-23vbpbi**", "d-23vasz3**"]`
        */ "diskIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCommand新建一条云助手命令。
    */ CreateCommand(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 命令名称，支持全字符集。长度不得超过128个字符。
        * @example `Test`
        */ "Name": string;
        /**
        * 命令的类型。取值范围：
        * - RunBatScript：创建一个在Windows实例中运行的 Bat 脚本
        * - RunPowerShellScript：创建一个在Windows实例中运行的PowerShell脚本
        * - RunShellScript：创建一个在Linux实例中运行的Shell脚本
        *
        * @example `RunShellScript`
        */ "Type": string;
        /**
        * 命令Base64编码后的内容。
        * - 该参数的值必须使用Base64编码后传输，且脚本内容的大小在Base64编码之后不能超过16KB。
        * - 命令内容支持使用自定义参数形式，具体通过指定参数`EnableParameter=true`启用自定义参数功能：
        *     - 自定义参数用`{{}}`包含的方式定义，在`{{}}`内参数名前后的空格以及换行符会被忽略
        *     - 自定义参数个数不能超过20个
        *     - 自定义参数名允许a-zA-Z0-9-_的组合，不支持其余字符，参数名不区分大小写
        *     - 单个参数名不能超过64字节
        * @example `ZWNobyAxMjM=`
        */ "CommandContent": string;
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令描述，支持全字符集。长度不得超过512个字符。
        * @example `Test1`
        */ "Description"?: string;
        /**
        * 您创建的命令在ECS实例中运行的目录。默认值：
        * - 对于Linux实例，默认在管理员root用户的home目录下，具体为/root目录。
        * - 对于Windows实例，默认在云助手客户端进程所在目录，例如，C:\ProgramData\aliyun\assist\$(version)。
        *
        * @example `/home/`
        */ "WorkingDir"?: string;
        /**
        * 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。
        * 默认值：3600
        * @example `3600`
        */ "Timeout"?: number;
        /**
        * 创建的命令是否使用自定义参数。
        * 默认值：false
        * @example `false`
        */ "EnableParameter"?: boolean;
    }): Promise<{
        "RequestId": string;
        "CommandId": string;
    }>;
    /**
    * 调用InstallCloudAssistant为一台或多台实例安装云助手客户端。
    */ InstallCloudAssistant(query: {
        /**
        * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "InstanceId": string[];
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceTypes查询云服务器ECS提供的实例规格资源。
    */ DescribeInstanceTypes(query: {
        "RegionId"?: string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例规格所属的规格族。更多详情，请参见[实例规格族](~~25378~~)。
        * @example `ecs.t1`
        */ "InstanceTypeFamily"?: string;
    }): Promise<{
        "InstanceTypes": {
            "InstanceType": {
                "CpuCoreCount": number;
                "InstanceTypeFamily": string;
                "EniQuantity": number;
                "InstanceTypeId": string;
                "InstanceFamilyLevel": string;
                "GPUSpec": string;
                "MemorySize": number;
                "GPUAmount": number;
                "LocalStorageCategory": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUserData查询一台ECS实例的自定义数据。
    */ DescribeUserData(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要查询的实例 ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        " UserData ": string;
        " InstanceId ": string;
        " RegionId": string;
    }>;
    /**
    * 调用ModifyInstanceDeployment修改ECS实例的宿主机。ECS实例与目标宿主机必须位于同一地域。
    */ ModifyInstanceDeployment(query: {
        /**
        * 实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。实例必须处于**运行中**（Running）或**已停止**（Stopped）状态。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 专有宿主机ID。您可以调用[DescribeDedicatedHosts](~~94572~~)查看可以使用的专有宿主机。
        * @example `dh-2ze3lmtckdjw1pt8n***`
        */ "DedicatedHostId"?: string;
        /**
        * 部署集ID。
        * @example `ds-deploymentsetid1`
        */ "DeploymentSetId"?: string;
        /**
        * 是否强制更换实例宿主机。
        *
        * - true：允许实例更换宿主机，允许重启**运行中**（Running）的实例、**已停止**（Stopped）状态的包年包月实例和已停止的停机收费的按量付费实例。
        * - false（默认）：不允许实例更换宿主机，只在当前宿主机上加入部署集。这可能导致更换部署集失败。
        * @example `false`
        */ "Force"?: boolean;
        /**
        * 实例是否与专有宿主机关联。取值范围：
        * - host：实例与专有宿主机关联。已开启停机不收费功能的实例停机后再次启动时，仍部署在原专有宿主机上。
        * - default：实例不与专有宿主机关联。已开启停机不收费功能的实例停机后再次启动时，若原专有宿主机资源不足，可迁移至自动部署资源池中的其它专有宿主机上。
        * 实例从共享宿主机迁移至专有宿主机时，默认值：default
        * @example `host`
        */ "Affinity"?: string;
        /**
        * 实例是否在专有宿主机上部署。取值范围：host（实例在专有宿主机上部署）。
        * @example `host`
        */ "Tenancy"?: string;
        /**
        * 实例是否先停机再迁移到目标专有宿主机。取值范围：
        * - reboot（默认）：先停机再迁移实例。
        * - live：不停机迁移实例。此时，您必须指定目标专有宿主机ID，即设置参数**DedicatedHostId**的值。
        * @example `reboot`
        */ "MigrationType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetInstanceConsoleOutput获取一台实例的系统命令行输出，数据以Base64编码后返回。
    */ GetInstanceConsoleOutput(query: {
        /**
        * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-shenzhen-finance-1`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `i-myInstance`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "InstanceId": string;
        "LastUpdateTime": string;
        "ConsoleOutput": string;
    }>;
    /**
    * 调用DescribeDemands查询报备资源的交付及使用状态。您可通过该接口查询客户经理为您报备的资源详情，包括报备资源类型、资源的交付情况、资源的消费情况。
    */ DescribeDemands(query: {
        /**
        * 目标地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Tag"?: string[];
        /**
        * 报备单列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会查询报备单状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询报备单状况。
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 报备实例的规格族。
        * @example `ecs.g5`
        */ "InstanceTypeFamily"?: string;
        /**
        * 报备实例的规格。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 实例的计费方式。取值范围：
        * - PostPaid：按量付费
        * - PrePaid：包年包月
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        "DemandStatus"?: string[];
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "Demands": {
            "Demand": {
                "Period": string;
                "DemandTime": string;
                "InstanceTypeFamily": string;
                "AvailableAmount": number;
                "ZoneId": string;
                "UsedAmount": number;
                "InstanceType": string;
                "DemandStatus": string;
                "EndTime": string;
                "TotalAmount": number;
                "SupplyInfos": {
                    "SupplyInfo": {
                        "Amount": number;
                        "SupplyEndTime": string;
                        "SupplyStartTime": string;
                        "SupplyStatus": string;
                    }[];
                };
                "StartTime": string;
                "InstanceChargeType": string;
                "PeriodUnit": string;
            }[];
        };
        "PageSize": number;
        "RegionId": string;
        "RequestId": string;
    }>;
    /**
    * 从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
    */ RemoveTags(query: {
        /**
        * 资源所属地域。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-shenzhen`
        */ "RegionId": string;
        /**
        * 资源类型。取值范围：
        *
        * - disk
        * - instance
        * -  image
        * - securitygroup
        * - snapshot
        * 以上取值均为小写。
        * @example `snapshot`
        */ "ResourceType": string;
        /**
        * 要解绑标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例 ID。
        * @example `s-946ntx4wr`
        */ "ResourceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeEniMonitorData查询一块辅助网卡在指定时间段内使用的流量信息。
    */ DescribeEniMonitorData(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 辅助网卡绑定的实例ID。
        * @example `myInstance`
        */ "InstanceId": string;
        /**
        * 获取数据的起始时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。
        * @example `2018-05-21T12:19:00Z`
        */ "StartTime": string;
        /**
        * 获取数据的结束时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。
        * @example `2018-05-21T12:22:00Z`
        */ "EndTime": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 辅助网卡的ID。默认查询指定实例上所有已绑定的辅助网卡。
        * @example `eni-myENI`
        */ "EniId"?: string;
        /**
        * 获取监控数据的间隔时间，单位：秒。取值范围：
        * - 60
        * - 600
        * - 3600
        * 默认值：60
        * @example `60`
        */ "Period"?: number;
    }): Promise<{
        "RequestId": string;
        "MonitorData": {
            "EniMonitorData": {
                "PacketTx": number;
                "TimeStamp": string;
                "IntranetOut": number;
                "DropPacketRx": number;
                "IntranetIn": number;
                "EniId": string;
                "DropPacketTx": number;
                "PacketRx": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeInstanceVncUrl查询一台ECS实例的Web管理终端地址。
    */ DescribeInstanceVncUrl(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `i-AY121018033933eaxxxxxxx`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "VncUrl": string;
    }>;
    /**
    * 调用ModifyInstanceAttribute修改一台ECS实例的部分信息，包括实例密码、名称、描述、主机名和自定义数据等。如果是t5突发性能实例，可以切换这台实例的性能突发模式。
    */ ModifyInstanceAttribute(query: {
        "RegionId"?: string;
        /**
        * 实例ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
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
        * 操作系统的计算机名。
        * -   点号（`.`）和短横线（`-`）不能作为首尾字符，更不能连续使用。
        * - Windows实例：字符长度为2~15，不支持点号（`.`），不能全是数字。允许大小写英文字母、数字和短横线（`-`）。
        * - 其他类型实例（Linux 等）：字符长度为2~64，支持多个点号（`.`），点之间为一段，每段允许大小写英文字母、数字和短横线（`-`）。
        * @example `LocalHost`
        */ "HostName"?: string;
        /**
        * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（`:`）、下划线（`_`）或者连字符（`-`）。
        * @example `EcsInstance`
        */ "InstanceName"?: string;
        /**
        * 实例描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：无。
        * @example `InstanceAttribute`
        */ "Description"?: string;
        /**
        * 实例自定义数据，需要以Base64编码。编码前，原始数据不能超过16 KB。建议不要明文传入敏感信息，例如密码和私钥等。如果必须传入敏感信息，建议您加密后再以Base64编码传入，在实例内部以同样的方式反解密。
        * @example `ZWNobyBoZWxsbyBlY3Mh`
        */ "UserData"?: string;
        /**
        * 实例是否可以回收。
        * @example `false`
        */ "Recyclable"?: boolean;
        /**
        * 修改t5突发性能实例的运行模式。取值范围：
        * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
        * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
        * 默认值：无。
        * @example `Standard`
        */ "CreditSpecification"?: string;
        /**
        * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
        * 默认值：无。
        * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
        * @example `false`
        */ "DeletionProtection"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateDeploymentSet在指定的地域内创建一个部署集。
    */ CreateDeploymentSet(query: {
        /**
        * 部署集所属地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 部署集内实例宕机迁移后，缺乏可供打散的实例库存的紧急处理方案。取值范围：
        *
        * - CancelMembershipAndStart（默认）：将实例移出部署集，宕机迁移后即刻启动实例。
        * - KeepStopped：保持异常状态等待补货充足后再启动实例。
        * @example `CancelMembershipAndStart`
        */ "OnUnableToRedeployFailedInstance"?: string;
        /**
        * 部署集描述信息。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinanceJoshua`
        */ "Description"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 部署集名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `FinanceDeployment`
        */ "DeploymentSetName"?: string;
        /**
        * 部署域。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "Domain"?: string;
        /**
        * 部署粒度。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "Granularity"?: string;
        /**
        * 部署策略。
        * > 为提高兼容性，请尽量使用其他参数。
        * @example `null`
        */ "Strategy"?: string;
    }): Promise<{
        "RequestId": string;
        "DeploymentSetId": string;
    }>;
    /**
    * 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
    */ DescribeResourcesModification(query: {
        /**
        * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源ID。例如，当待查询的资源为实例时，可以理解为InstanceId。
        * @example `i-instanceid`
        */ "ResourceId": string;
        /**
        * 目标资源类型。取值范围：
        *
        * - InstanceType：实例规格
        * - SystemDisk：系统盘类型
        *
        * @example `InstanceType`
        */ "DestinationResource": string;
        /**
        * @example `1`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否支持跨集群升级实例规格。取值范围：
        *
        * - True：支持
        * - False：不支持
        * 默认值：False
        * 当参数MigrateAcrossZone取值为True时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
        *
        * - 经典网络类型实例：
        *     - 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
        *     - 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
        *
        * - 专有网络VPC类型实例：对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
        * @example `true`
        */ "MigrateAcrossZone"?: boolean;
        /**
        * 更改包年包月资源配置的操作类型。取值范围：
        * - Upgrade：升级资源
        * - Downgrade：降级资源
        * - RenewDowngrade：续费降配
        * - RenewModify：过期实例到续费变配
        * 默认值：Upgrade
        * @example `Upgrade`
        */ "OperationType"?: string;
        /**
        * 实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~) 接口获得最新的规格表。当参数DestinationResource取值为SystemDisk时，必须同时指定InstanceType参数。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 实例规格的vCPU内核数目。取值参见[实例规格族](~~25378~~)。当DestinationResource=InstanceType参数有效，Cores才为有效参数。
        * @example `2`
        */ "Cores"?: number;
        /**
        * 实例规格的内存大小，单位为GiB。取值参见[实例规格族](~~25378~~)。当DestinationResource=InstanceType，Memory才为有效参数。
        * @example `8.0`
        */ "Memory"?: number;
    }): Promise<{
        "RequestId": string;
        "AvailableZones": {
            "AvailableZone": {
                "Status": string;
                "RegionId": string;
                "AvailableResources": {
                    "AvailableResource": {
                        "Type": string;
                        "SupportedResources": {
                            "SupportedResource": {
                                "Status": string;
                                "Value": string;
                            }[];
                        };
                    }[];
                };
                "ZoneId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeInvocations查询最近两周云助手命令的执行列表和状态。
    */ DescribeInvocations(query: {
        /**
        * ECS 实例所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令进程执行 ID。
        * @example `t-7d2a745b412b4601b2d47f6a768d3b53`
        */ "InvokeId"?: string;
        /**
        * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
        * @example `c-4d34302d02424c5c8e10281e3a315a05`
        */ "CommandId"?: string;
        /**
        * 命令名称。
        * @example `Test1`
        */ "CommandName"?: string;
        /**
        * 命令类型。
        * @example `RunShellScript`
        */ "CommandType"?: string;
        /**
        * 命令是否为周期执行。默认值：False
        * @example `true`
        */ "Timed"?: boolean;
        /**
        * 指定的命令总的执行状态。总的执行状态取决于指定命令管理的所有目标实例中的命令进程执行状态 InstanceInvokeStatus。取值范围：
        *
        * - Running：命令进程进行中
        *     - 周期执行：未手动停止周期执行命令前，命令进程一直为 进行中（Running）。
        *     - 单次执行：指定命令管理的所有目标实例中一旦有 进行中（Running）的命令进程，总的执行状态为 进行中（Running）。
        *
        * - Finished：命令进程执行完成
        *     - 周期执行：命令进程不可能为 执行完成（Finished）。
        *     - 单次执行：指定命令管理的所有目标实例全部执行完成，总的执行状态为 执行完成（Finished）。  或者 手动停止（Stopped）部分目标实例的命令进程，其余目标实例全部执行完成，总的执行状态为 执行完成（Finished）。
        *
        * - Failed：命令进程执行失败，命令进程出现超时情况或者其他异常
        *     - 周期执行：命令进程不可能为 执行失败（Failed）。
        *     - 单次执行：指定命令管理的所有目标实例全部执行失败，总的执行状态为 执行失败（Failed）。
        *
        * - PartialFailed：命令进程执行部分失败
        *     - 周期执行：命令进程不可能为 部分失败（PartialFailed）。
        *     - 单次执行：指定命令管理的所有目标实例中个别有 执行失败（Failed）的命令进程，总的执行状态为 部分失败（PartialFailed）。
        *
        * - Stopped：命令进程被手动停止
        *
        * @example `Finished`
        */ "InvokeStatus"?: string;
        /**
        * 实例 ID。当您传入了该参数，将查询该实例所有的命令执行记录。
        * @example `i-uf614fhehhzxx`
        */ "InstanceId"?: string;
        "ContentEncoding"?: string;
        /**
        * 当前页码，起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "Invocations": {
            "Invocation": {
                "InvokeStatus": string;
                "InvokeId": string;
                "CommandName": string;
                "CommandType": string;
                "Frequency": string;
                "InvokeInstances": {
                    "InvokeInstance": {
                        "InstanceId": string;
                        "InstanceInvokeStatus": string;
                    }[];
                };
                "Timed": boolean;
                "CommandId": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateAutoSnapshotPolicy创建一条自动快照策略。
    */ CreateAutoSnapshotPolicy(query: {
        "RegionId"?: string;
        /**
        * 自动快照策略所属的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "regionId": string;
        /**
        * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表00:00至23:00共24个时间点，如1表示01:00。
        * 当一天内需要创建多次自动快照时，可以传入多个时间点，最多传入24个时间点。
        * @example `["0", "1", … "23"]`
        */ "timePoints": string;
        /**
        * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如1表示周一。
        * 当一星期内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入7个时间点。
        * - 多个时间点用一个格式类似`"1", "2", … "7"`的JSON数组表示，时间点之间用半角逗号（,）隔开。
        * @example `"1"`
        */ "repeatWeekdays": string;
        /**
        * 自动快照的保留时间，单位为天。取值范围：
        * - -1：永久保存。
        * - 1~65536：指定保存天数。
        * 默认值：-1
        * @example `30`
        */ "retentionDays": number;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 自动快照策略的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空
        * @example `FinanceJoshua`
        */ "autoSnapshotPolicyName"?: string;
    }): Promise<{
        "RequestId": string;
        "AutoSnapshotPolicyId": string;
    }>;
    /**
    * 调用DescribeDiskMonitorData查询一块云盘指定时间内的使用信息。可查询云盘实用信息包括读IOPS、写IOPS、读带宽（Bps）、写带宽（Bps）、读时延（μs）以及写时延（μs）。若查询的信息中出现内容缺失，是因为我们无法获取该段时间的使用信息，即云盘状态不是使用中（In_Use）。
    */ DescribeDiskMonitorData(query: {
        "RegionId"?: string;
        /**
        * 云盘ID。
        * @example `d-myDisk`
        */ "DiskId": string;
        /**
        * 数据的起始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。
        * @example `2014-07-23T12:07:00Z`
        */ "StartTime": string;
        /**
        * 数据的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。
        * @example `2014-07-23T12:09:00Z`
        */ "EndTime": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 数据的精度，单位为秒。取值范围：
        * - 60
        * - 600
        * - 3600
        * 默认值：60
        * @example `60`
        */ "Period"?: number;
    }): Promise<{
        "MonitorData": {
            "DiskMonitorData": {
                "BPSRead": number;
                "BPSTotal": number;
                "BPSWrite": number;
                "DiskId": string;
                "IOPSRead": number;
                "IOPSTotal": number;
                "IOPSWrite": number;
                "TimeStamp": string;
            }[];
        };
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
    */ DescribeLaunchTemplates(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "TemplateTag"?: string[];
        "LaunchTemplateId"?: string[];
        "LaunchTemplateName"?: string[];
        /**
        * 实例启动模板列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 启动模板所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "TemplateResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "LaunchTemplateSets": {
            "LaunchTemplateSet": {
                "LaunchTemplateName": string;
                "CreatedBy": string;
                "ModifiedTime": string;
                "LatestVersionNumber": number;
                "CreateTime": string;
                "LaunchTemplateId": string;
                "DefaultVersionNumber": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeInstancesFullStatus查询一台或多台实例的全状态信息。全状态信息包括实例状态和实例系统事件状态，其中，实例状态为实例的生命周期状态，实例系统事件为维护事件的健康状态。
    */ DescribeInstancesFullStatus(query: {
        /**
        * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "InstanceId"?: string[];
        "EventId"?: string[];
        /**
        * 指定实例的生命周期状态。取值范围：
        * - Starting：启动中
        * - Running：运行中
        * - Stopped：已停止
        *
        * @example `Running`
        */ "Status"?: string;
        /**
        * 指定实例的健康状态。取值范围：
        * - Impaired：服务损坏
        * - Warning：服务降级
        * - Maintaining：系统维护
        * - Initializing：初始化中
        * - InsufficientData：数据不足
        * - NotApplicable：不适用
        * 以上参数取值均区分大小写。
        * @example `Maintaining`
        */ "HealthStatus"?: string;
        "InstanceEventType"?: string[];
        /**
        * 一个事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围：
        * - SystemMaintenance.Reboot：因系统维护实例重启
        * - SystemFailure.Reboot：因系统错误实例重启
        * - InstanceFailure.Reboot：因实例错误实例重启
        * - InstanceExpiration.Stop：因包年包月期限到期，实例停止
        * - InstanceExpiration.Delete：因包年包月期限到期，实例释放
        * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止
        * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放
        *
        * @example `InstanceExpiration.Stop`
        */ "EventType"?: string;
        /**
        * 查询事件计划执行时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-07T00:00:00Z`
        */ "NotBefore.Start"?: string;
        /**
        * 查询事件计划执行时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-30T00:00:00Z`
        */ "NotBefore.End"?: string;
        /**
        * 查询事件发布时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-30T00:00:00Z`
        */ "EventPublishTime.Start"?: string;
        /**
        * 查询事件发布时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-07T00:00:00Z`
        */ "EventPublishTime.End"?: string;
        /**
        * 查询结果的页码。取值范围：正整数
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 查询结果的分页大小。取值范围：1~100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "InstanceFullStatusSet": {
            "InstanceFullStatusType": {
                "InstanceId": string;
                "Status": {
                    "Code": number;
                    "Name": string;
                };
                "HealthStatus": {
                    "Code": number;
                    "Name": string;
                };
                "ScheduledSystemEventSet": {
                    "ScheduledSystemEventType": {
                        "EventId": string;
                        "EventCycleStatus": {
                            "Code": number;
                            "Name": string;
                        };
                        "EventType": {
                            "Code": number;
                            "Name": string;
                        };
                        "EventPublishTime": string;
                        "NotBefore": string;
                    }[];
                };
            }[];
        };
        "PageSize": number;
        "PageNumber": number;
        "TotalCount": number;
        "RequestId": string;
    }>;
    /**
    * 调用AttachClassicLinkVpc将一台经典网络类型实例连接到专有网络VPC中，使经典网络类型实例可以和VPC中的云资源私网互通。
    */ AttachClassicLinkVpc(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 经典网络类型实例ID。您可以调用[DescribeInstances](~~25506~~)查看您可用的实例。
        * @example `i-test`
        */ "InstanceId": string;
        /**
        * 开启ClassicLink的VPC ID。您可以调用[DescribeVpcs](~~35739~~)查看您可用的VPC。
        * @example `vpc-test`
        */ "VpcId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySecurityGroupAttribute修改指定安全组的属性，包括修改安全组名称和描述。
    */ ModifySecurityGroupAttribute(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 安全组 ID。
        * @example `sg-securitygroupid1`
        */ "SecurityGroupId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 安全组描述信息。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
        * @example `FinanceDept`
        */ "Description"?: string;
        /**
        * 安全组名称。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
        * @example `FinanceJoshua`
        */ "SecurityGroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSnapshots查询一台ECS实例或一块云盘所有的快照列表。InstanceId、DiskId和SnapshotIds不是必需参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
    */ DescribeSnapshots(query: {
        /**
        * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 指定的实例ID。
        * @example `i-instanceid1`
        */ "InstanceId"?: string;
        /**
        * 指定的云盘设备ID。
        * @example `d-diskid1`
        */ "DiskId"?: string;
        /**
        * 快照链ID。
        * @example `d-25okbh2**`
        */ "SnapshotLinkId"?: string;
        /**
        * 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `["s-xxxxxxxxx", "s-yyyyyyyyy", … "s-zzzzzzzzz"]`
        */ "SnapshotIds"?: string;
        /**
        * 快照列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 快照名称。
        * @example `FinanceJoshua`
        */ "SnapshotName"?: string;
        /**
        * 快照状态。取值范围：
        *
        * - progressing：正在创建的快照
        * - accomplished：创建成功的快照
        * - failed：创建失败的快照
        * - all（默认）：所有快照状态
        * @example `all`
        */ "Status"?: string;
        /**
        * 快照类型。取值范围：
        *
        * - auto：自动快照
        * - user：手动创建的快照
        * - all（默认）：所有快照类型
        * @example `all`
        */ "SnapshotType"?: string;
        /**
        * 查询资源时的筛选键。取值必须为CreationStartTime。
        * @example `CreationStartTime`
        */ "Filter.1.Key"?: string;
        /**
        * 查询资源时的筛选键。取值必须为CreationEndTime。
        * @example `CreationEndTime`
        */ "Filter.2.Key"?: string;
        /**
        * 查询资源时的筛选值。取值必须为资源创建的开始时间点（CreationStartTime）。
        * @example `2017-12-05T22:40:00Z`
        */ "Filter.1.Value"?: string;
        /**
        * 查询资源时的筛选值。取值必须为资源创建的结束时间点（CreationEndTime）。
        * @example `2017-12-06T22:40:00Z`
        */ "Filter.2.Value"?: string;
        /**
        * 有引用关系的资源类型。取值范围：
        * - image：使用快照创建景象（[CreateImage](~~25535~~)）
        * - disk：使用快照创建云盘（[CreateDisk](~~25513~~)）
        * - image_disk：使用快照创建了数据盘和自定义镜像
        * - none：暂无引用关系
        * @example `none`
        */ "Usage"?: string;
        /**
        * 快照源云盘的云盘类型。取值范围：
        *
        * - System：根据系统盘创建的快照
        * - Data：根据数据盘创建的快照
        * @example `Data`
        */ "SourceDiskType"?: string;
        "Tag"?: string[];
        /**
        * 是否过滤加密快照。默认值：false
        * @example `false`
        */ "Encrypted"?: boolean;
        /**
        * 资源组ID。
        * @example `rg-resourcegrouid`
        */ "ResourceGroupId"?: string;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 数据盘对应的KMS密钥ID。
        * @example `0e478b7a-4262-4802-b8cb-00d3fb4082**`
        */ "KMSKeyId"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "Snapshots": {
            "Snapshot": {
                "CreationTime": string;
                "Progress": string;
                "SnapshotId": string;
                "SnapshotName": string;
                "SourceDiskId": string;
                "SourceDiskSize": number;
                "SourceDiskType": string;
                "Status": string;
                "Usage": string;
            }[];
        };
        "TotalCount": number;
    }>;
    /**
    * 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
    */ ModifyHpcClusterAttribute(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * HPC 集群 ID。
        * @example `hpc-hpcclusterid1`
        */ "HpcClusterId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * HPC 集群描述。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
        * @example `FinanceDept`
        */ "Description"?: string;
        /**
        * HPC 集群名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
        * @example `FinanceJoshua`
        */ "Name"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ReInitDisk重新初始化一块云盘到创建时的初始状态。
    */ ReInitDisk(query: {
        "RegionId"?: string;
        /**
        * 指定的云盘ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
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
        * 密钥对名称。
        * @example `JoshuaCentOS`
        */ "KeyPairName"?: string;
        /**
        * 重新初始化云盘后是否启动实例。
        * @example `true`
        */ "AutoStartInstance"?: boolean;
        /**
        * 当指定的云盘为系统盘时，您可以设置是否开启安全加固，加载云服务器 ECS 安全组件云盾等。取值范围：
        *
        * - Active：启用安全加固，免费安装云盾。该值仅支持公共镜像。
        * - Deactive：不启用安全加固，卸载云盾等安全组件。该值支持所有镜像。
        * @example `Active`
        */ "SecurityEnhancementStrategy"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyImageAttribute修改一份自定义镜像的名称或描述信息。
    */ ModifyImageAttribute(query: {
        /**
        * 自定义镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 自定义镜像的ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 自定义镜像的名称。能包含2~128个字符。必须以大小字母或中文开头，可包含数字、半角冒号（:）、下划线（_）或者连字符（-）。不能以http://和https://开头。
        * 默认值：空，表示保持原有名称不变。
        * @example `FinanceJoshua`
        */ "ImageName"?: string;
        /**
        * 自定义镜像的描述信息。能包含0~256个字符。不能以http://和https://开头。
        * 默认值：空，表示保持原有描述信息不变。
        * @example `FinanceDept`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceMonitorData查询一台 ECS 实例所有相关的监控信息。返回的监控内容包括 ECS 实例的 CPU 使用率、接收的数据流量、发送的数据流量、网络流量、平均带宽。当返回信息中缺少部分内容时，可能是由于系统没有获取到相应的信息，比如当时实例处于已停止（Stopped）状态。
    */ DescribeInstanceMonitorData(query: {
        "RegionId"?: string;
        /**
        * 待查询的实例 ID。
        * @example `i-instnace1`
        */ "InstanceId": string;
        /**
        * 获取数据的起始时间点。按照 [ISO8601](~~25696~~) 表示，并需要使用 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。
        * @example `2014-10-29T23:00:00Z`
        */ "StartTime": string;
        /**
        * 获取数据的结束时间点。按照 [ISO8601](~~25696~~) 标准表示，并需要使用 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。 如果指定的秒（ss）不是 00，则自动换算为下一分钟。
        * @example `2014-10-30T08:00:00Z`
        */ "EndTime": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 获取监控数据的间隔时间，单位为秒。取值范围：
        * - 60
        * - 600
        * - 3600
        * 默认值：60
        * @example `60`
        */ "Period"?: number;
    }): Promise<{
        "RequestId": string;
        "MonitorData": {
            "InstanceMonitorData": {
                "InstanceId": string;
                "CPU": number;
                "IntranetRX": number;
                "IntranetTX": number;
                "IntranetFlow": number;
                "IntranetBandwidth": number;
                "InternetRX": number;
                "InternetTX": number;
                "InternetFlow": number;
                "InternetBandwidth": number;
                "IOPSRead": number;
                "IOPSWrite": number;
                "BPSRead": number;
                "BPSWrite": number;
                "TimeStamp": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
    */ DescribeImageSupportInstanceTypes(query: {
        /**
        * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 镜像 ID。
        * @example `m-imageid1`
        */ "ImageId"?: string;
        /**
        * 实例规格需要使用到的场景。取值范围：
        * - CreateEcs（默认）：创建实例
        * - Upgrade：升级实例规格
        * - Downgrade：降级实例规格
        * - RenewDowngrade：续费降配
        * @example `*`
        */ "ActionType"?: string;
        "Filter"?: string[];
    }): Promise<{
        "RequestId": string;
        "RegionId": string;
        "ImageId": string;
        "InstanceTypes": {
            "InstanceType": {
                "InstanceTypeId": string;
                "CpuCoreCount": number;
                "MemorySize": number;
                "InstanceTypeFamily": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyDiskAttribute修改您的磁盘的属性或者明细。
    */ ModifyDiskAttribute(query: {
        "RegionId"?: string;
        /**
        * 待修改明细的磁盘 ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 磁盘名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        *
        * @example `FinanceJoshua`
        */ "DiskName"?: string;
        /**
        * 磁盘描述。 长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。
        *
        * @example `FinanceDeptJoshua`
        */ "Description"?: string;
        /**
        * 磁盘是否随实例释放。默认值：无，无表示不改变当前的值。
        * 在下列两种情况下，将参数 DeleteWithInstance 设置成 false 时会报错。
        *
        * - 磁盘的种类（category）为本地盘（ephemeral）时。
        * - 磁盘的种类（category）为普通云盘（cloud），且不可以卸载（Portable=false）时。
        * @example `false`
        */ "DeleteWithInstance"?: boolean;
        /**
        * 删除磁盘时，是否同时删除其自动快照。默认值：无，无表示不改变当前的值。
        * @example `false`
        */ "DeleteAutoSnapshot"?: boolean;
        /**
        * 如果您已经创建了自动快照策略，是否应用于该磁盘。默认值：无，无表示不改变当前的值。
        * @example `true`
        */ "EnableAutoSnapshot"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSnapshotsUsage查询您在一个地域下的快照数量以及快照容量。
    */ DescribeSnapshotsUsage(query: {
        /**
        * 快照所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "SnapshotCount": string;
        "SnapshotSize": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceStatus获取一台或多台ECS实例的状态信息。
    */ DescribeInstanceStatus(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例所属可用区。
        * @example `cn-hangzhou-d`
        */ "ZoneId"?: string;
        /**
        * 实例所属的集群ID。
        * @example `cls-clusterid1`
        */ "ClusterId"?: string;
        /**
        * 实例状态列表的页码。起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。取值范围：1~50
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "InstanceStatuses": {
            "InstanceStatus": {
                "InstanceId": string;
                "Status": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteImage删除一份自定义镜像。
    */ DeleteImage(query: {
        /**
        * 自定义镜像所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 镜像 ID。如果指定的自定义镜像不存在，则请求将被忽略。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否执行强制删除。取值范围：
        *
        * - true：强制删除自定义镜像，忽略当前镜像是否被其他实例使用。
        * - false：正常删除自定义镜像，删除前检查当前镜像是否被其他实例使用。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceVncPasswd修改一台ECS实例的Web管理终端密码。
    */ ModifyInstanceVncPasswd(query: {
        /**
        * ECS实例所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * ECS实例。
        * @example `i-AY121018033933eae8***`
        */ "InstanceId": string;
        /**
        * 新的ECS实例管理终端连接密码。
        * @example `123456`
        */ "VncPassword": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的对象存储OSS存储包，存储包可以用于抵扣快照存储容量。
    */ DescribeSnapshotPackage(query: {
        /**
        * 快照所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * OSS存储包列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": string;
        "PageNumber": string;
        "PageSize": string;
        "SnapshotPackages": {
            "SnapshotPackage": {
                "StartTime": string;
                "EndTime": string;
                "InitCapacity": string;
                "DisplayName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCommand删除一条云助手命令。
    */ DeleteCommand(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
        * @example `c-4d34302d02424c5c8e10281e3a315***`
        */ "CommandId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSnapshot删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
    */ DeleteSnapshot(query: {
        "RegionId"?: string;
        /**
        * 快照 ID。
        * @example `s-snapshotid1`
        */ "SnapshotId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否强制删除有磁盘关联的快照。
        * > 删除后该磁盘无法重新初始化。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDiskChargeType修改一台实例上挂载的一块或最多16块云盘的计费方式。
    */ ModifyDiskChargeType(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 云盘挂载的实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        /**
        * 云盘ID列表，一个带有格式的Json Array，最多支持16个ID，用半角逗号（,）隔开。
        * @example `[“d-xxxxxxxxx”, “d-yyyyyyyyy”, … “d-zzzzzzzzz”]`
        */ "DiskIds": string;
        "SourceRegionId"?: string;
        /**
        * 资源主账号的 ID，亦即 UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否自动支付。取值范围：
        *
        * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
        * - false：只生成订单不扣费。如果您的账户余额不足，会生成正常的未支付订单，此订单可登录 ECS 控制台支付。
        *
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 云盘计费方式。取值范围：
        *
        * - PrePaid（默认）：按量付费数据盘转换为包年包月数据盘。
        * - PostPaid：包年包月数据盘转换为按量付费数据盘。
        *
        * @example `PostPaid`
        */ "DiskChargeType"?: string;
    }): Promise<{
        "RequestId": string;
        "Order": number;
    }>;
    /**
    * 调用AssignPrivateIpAddresses为一块弹性网卡分配一个或多个辅助私有IP地址。可以为网卡指定在所属虚拟交换机（VSwitch）的CIDR私有IP地址，或者通过指定私有网络地址数量自动创建私有IP地址。
    */ AssignPrivateIpAddresses(query: {
        /**
        * 资源所属地域。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡ID。
        * @example `eni-myeni`
        */ "NetworkInterfaceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "PrivateIpAddress"?: string[];
        /**
        * 指定私有IP地址数量，让ECS为您自动创建 IP 地址。
        * @example `1`
        */ "SecondaryPrivateIpAddressCount"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族资源。
    */ DescribeInstanceTypeFamilies(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例规格族的系列信息。更多详情，请参见[实例规格族](~~25378~~)。取值范围：
        * - ecs-1：系列I实例规格，上线时间较早，性价比高。
        * - ecs-2：系列II实例规格族，第二次软硬件升级，实例性能增强。
        * - ecs-3：系列III实例规格族，实例性能优良，能承载不同业务需求，响应更快。
        * - ecs-4：系列IV实例规格族，最新规格族，具有强大的场景适应性，能承载海量热门业务需求，延迟更低。
        * @example `ecs-3`
        */ "Generation"?: string;
    }): Promise<{
        "InstanceTypeFamilies": {
            "InstanceTypeFamily": {
                "InstanceTypeFamilyId": string;
                "Generation": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateKeyPair创建一对SSH密钥对。我们会为您保管密钥的公钥部分，并返回未加密的PEM编码的PKCS#8格式私钥。您需要自行妥善保管私钥部分。
    */ CreateKeyPair(query: {
        /**
        * 密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `FinanceJoshuaV23`
        */ "KeyPairName": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Tag"?: string[];
        /**
        * SSH密钥对所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "KeyPairName": string;
        "KeyPairFingerPrint": string;
        "PrivateKeyBody": string;
    }>;
    /**
    * 调用CopyImage复制一个地域下的自定义镜像到其他地域。您在其他地域可以使用复制后的镜像创建ECS实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ CopyImage(query: {
        /**
        * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 源自定义镜像的ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 复制后的镜像的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空。
        * @example `FinanceJoshua`
        */ "DestinationImageName"?: string;
        /**
        * 目标镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * 默认值：空。
        * @example `FinanceDept`
        */ "DestinationDescription"?: string;
        /**
        * 复制到目标地域的ID。
        * @example `cn-shanghai`
        */ "DestinationRegionId"?: string;
        "Tag"?: string[];
        /**
        * 是否加密镜像。
        * @example `false`
        */ "Encrypted"?: boolean;
        "KMSKeyId"?: string;
    }): Promise<{
        "RequestId": string;
        "ImageId": string;
    }>;
    /**
    * 调用AttachKeyPair绑定一个SSH密钥对到一台或多台Linux实例。
    */ AttachKeyPair(query: {
        /**
        * SSH密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * SSH密钥对名称。
        * @example `FinanceJoshuaV25`
        */ "KeyPairName": string;
        /**
        * 绑定SSH密钥对的实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。
        * @example `["i-xxxxxxxxx", "i-yyyyyyyyy", … "i-zzzzzzzzz"]`
        */ "InstanceIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "TotalCount": number;
        "RequestId": string;
        "Results": {
            "Result": {
                "Message": string;
                "InstanceId": string;
                "Success": boolean;
                "Code": string;
            }[];
        };
        "FailCount": number;
    }>;
    /**
    * 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
    */ ModifyAutoSnapshotPolicyEx(query: {
        "RegionId"?: string;
        /**
        * 自动快照策略所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "regionId": string;
        /**
        * 目标自动快照策略 ID。您可以调用 [DescribeAutoSnapshotPolicyEx](~~25530~~) 查看您可用的自动快照策略。
        * @example `p-autopolicyid1`
        */ "autoSnapshotPolicyId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 自动快照策略的名称。如果参数为空则代表不修改。
        * @example `FinanceJoshua`
        */ "autoSnapshotPolicyName"?: string;
        /**
        * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入 24 个时间点。
        * - 多个时间点用一个格式类似 "0", "1", … "23" 的 JSON 数组表示，时间点之间用半角逗号（,）隔开。
        * @example `["0", "1"]`
        */ "timePoints"?: string;
        /**
        * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如 1 表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入 7 个时间点。
        * - 多个时间点用一个格式类似 "1", "2", … "7" 的 JSON 数组表示，时间点之间用半角逗号（,）隔开。
        * @example `["1", "7"]`
        */ "repeatWeekdays"?: string;
        /**
        * 自动快照的保留时间，单位为天。取值范围：
        * - -1（默认）：永久保存。
        * - 1~65536：指定保存天数。
        * @example `30`
        */ "retentionDays"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetInstanceScreenshot获取实例的截屏信息。
    */ GetInstanceScreenshot(query: {
        /**
        * 实例所在地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-shenzhen`
        */ "RegionId": string;
        /**
        * 实例ID。
        * @example `i-myInstance`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否唤醒处于休眠状态的实例。
        * 默认值：false
        * @example `false`
        */ "WakeUp"?: boolean;
    }): Promise<{
        "RequestId": string;
        "InstanceId": string;
        "Screenshot": string;
    }>;
    /**
    * 调用DescribeImages查询您可以使用的镜像资源。
    */ DescribeImages(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 查询某种状态下的镜像。取值范围：
        * - Creating：镜像正在创建中。
        * - Waiting：多任务排队中。
        * - Available（默认）：您可以使用的镜像。
        * - UnAvailable：您不能使用的镜像。
        * - CreateFailed：创建失败的镜像。
        * 支持同时取多个值，值之间以半角逗号（,）隔开。
        * @example `Available`
        */ "Status"?: string;
        /**
        * 镜像ID。
        * @example `m-imageid1`
        */ "ImageId"?: string;
        /**
        * 订阅型镜像是否已经超过使用期限。
        * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
        * @example `false`
        */ "ShowExpired"?: boolean;
        /**
        * 根据某一快照ID创建的自定义镜像。
        * @example `s-snapshotid1`
        */ "SnapshotId"?: string;
        /**
        * 镜像名称。
        * @example `FinanceJoshua`
        */ "ImageName"?: string;
        /**
        * 镜像来源。取值范围：
        * - system：阿里云提供的公共镜像。
        * - self：您创建的自定义镜像。
        * - others：其他阿里云用户共享给您的镜像。
        * - marketplace：镜像市场提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。
        * 默认值：空，空表示返回取值为system、self以及others的结果。
        * @example `self`
        */ "ImageOwnerAlias"?: string;
        /**
        * 指定实例类型可以使用的镜像。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 镜像是否可以运行在I/O优化实例上。
        * @example `true`
        */ "IsSupportIoOptimized"?: boolean;
        /**
        * 镜像是否支持Cloud Init。
        * @example `true`
        */ "IsSupportCloudinit"?: boolean;
        /**
        * 镜像的操作系统类型。取值范围：
        * - windows
        * - linux
        * @example `linux`
        */ "OSType"?: string;
        /**
        * 镜像的体系架构。取值范围：
        * - i386
        * - x86_64
        * @example `i386`
        */ "Architecture"?: string;
        /**
        * 镜像资源列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 镜像是否已经运行在ECS实例中。取值范围：
        * - instance：镜像处于运行状态，有ECS实例使用。
        * - none：镜像处于闲置状态，暂无ECS实例使用。
        * @example `instance`
        */ "Usage"?: string;
        "Tag"?: string[];
        /**
        * 是否只预检此次请求。
        *
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * 默认值：false
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 镜像需要被使用到的场景。取值范围：
        * - CreateEcs（默认）：创建实例
        * - ChangeOS：更换系统盘/更换操作系统
        * @example `CreateEcs`
        */ "ActionType"?: string;
        "Filter"?: string[];
        /**
        * 自定义镜像所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "Images": {
            "Image": {
                "Architecture": string;
                "CreationTime": string;
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": {
                        "Device": string;
                        "Size": string;
                    }[];
                };
                "ImageId": string;
                "ImageName": string;
                "ImageOwnerAlias": string;
                "ImageVersion": string;
                "IsCopied": boolean;
                "IsSubscribed": boolean;
                "OSName": string;
                "OSType": string;
                "Platform": string;
                "Progress": string;
                "Size": number;
                "Status": string;
                "Usage": string;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RegionId": string;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的属性。例如，弹性网卡名称、描述以及所属安全组等。
    */ ModifyNetworkInterfaceAttribute(query: {
        /**
        * 弹性网卡所在地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡 ID。
        * @example `eni-myeni`
        */ "NetworkInterfaceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "SecurityGroupId"?: string[];
        /**
        * 弹性网卡的名称。
        * - 字符长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、下划线（_） 或连字符（-）。
        * - 弹性网卡名称会展示在控制台。
        * - 不能以 http:// 和 https:// 开头。
        * - 不填则为空，默认值为空。
        *
        * @example `my-eni-name`
        */ "NetworkInterfaceName"?: string;
        /**
        * 弹性网卡的描述信息。
        * - 字符长度为2~256个英文或中文字符。
        * - 不能以 http:// 和 https:// 开头。
        * - 不填则为空，默认值为空。
        *
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachDisk从一台实例上卸载一块按量付费磁盘。磁盘类型包括普通云盘、高效云盘和SSD云盘。
    */ DetachDisk(query: {
        "RegionId"?: string;
        /**
        * 待卸载的 ECS 实例 ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        /**
        * 待卸载的云盘 ID。
        * @example `d-diskid1`
        */ "DiskId": string;
        "SourceRegionId"?: string;
        /**
        * 资源主账号的 ID，亦即 UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 修改一条云助手命令相关参数以及命令内容。
    */ ModifyCommand(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
        * @example `c-4d34302d02424c5c8e10281e3a315a05`
        */ "CommandId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令名称，支持全字符集。长度不得超过 30 个字符。
        * @example `AlibabaCommand`
        */ "Name"?: string;
        /**
        * 命令描述，支持全字符集。长度不得超过100个字符。
        * @example `UserGuide`
        */ "Description"?: string;
        /**
        * 命令内容。
        * @example `c2VydmljZSB0b21jYXQgc3RhcnQ=`
        */ "CommandContent"?: string;
        /**
        * 执行路径。
        * @example `/home/`
        */ "WorkingDir"?: string;
        /**
        * 超时时间。
        * @example `120`
        */ "Timeout"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInstanceAutoRenewAttribute查询一台或多台包年包月ECS实例自动续费状态。
    */ DescribeInstanceAutoRenewAttribute(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例ID。支持最多100台包年包月实例批量查询，多个实例ID以半角逗号分隔。
        * @example `i-instance1,i-instance2`
        */ "InstanceId"?: string;
        /**
        * 实例的自动续费状态。取值范围：
        * - AutoRenewal：设置为自动续费。
        * - Normal：取消自动续费。
        * - NotRenewal：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以通过[ModifyInstanceAutoRenewAttribute](~~52843~~)更改成待续费（`Noramal`）后，再自行续费或设置为自动续费。
        * @example `AutoRenewal`
        */ "RenewalStatus"?: string;
        /**
        * 分页展示响应信息时设置的每页行数，单位：行。
        * 最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: string;
        /**
        * 查询接口返回资源信息列表的页码。
        * 起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: string;
    }): Promise<{
        "InstanceRenewAttributes": {
            "InstanceRenewAttribute": {
                "Duration": number;
                "InstanceId": string;
                "AutoRenewEnabled": boolean;
                "RenewalStatus": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
    */ AcceptInquiredSystemEvent(query: {
        /**
        * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 系统事件 ID。
        * @example `e-2zeielxl1qzq8slbl***`
        */ "EventId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您需要通过 DeleteLaunchTemplate 删除整个实例启动模板才能删除默认版本。
    */ DeleteLaunchTemplateVersion(query: {
        /**
        * 模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "DeleteVersion": number[];
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 需要删除的启动模板 ID。更多详情，请调用 [DescribeLaunchTemplates](~~73759~~)。
        * @example `lt-bp1apo0bbbkuy0rj3***`
        */ "LaunchTemplateId"?: string;
        /**
        * 启动模板名称。
        * @example `JoshuaWinPostPaid`
        */ "LaunchTemplateName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeInvocationResults查看云助手命令的执行结果，在指定ECS实例中的实际执行结果。
    */ DescribeInvocationResults(query: {
        /**
        * 地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 命令执行ID。命令进程执行ID。您可以通过接口 [DescribeInvocations](~~64840~~) 查询InvokeId。
        * @example `t-7d2a745b412b4601b2d47f6a768d3***`
        */ "InvokeId"?: string;
        /**
        * 实例ID。
        * @example `i-uf614fhehhzmx***`
        */ "InstanceId"?: string;
        /**
        * 命令ID。
        * @example `c-4d34302d02424c5c8e10281e3a315***`
        */ "CommandId"?: string;
        /**
        * 命令执行状态。
        * @example `Finished`
        */ "InvokeRecordStatus"?: string;
        "IncludeHistory"?: boolean;
        /**
        * 当前页码，起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50
        * 默认值：10
        * @example `5`
        */ "PageSize"?: number;
    }): Promise<{
        "Invocation": {
            "TotalCount": number;
            "PageNumber": number;
            "InvocationResults": {
                "InvocationResult": {
                    "FinishedTime": string;
                    "InstanceId": string;
                    "Output": string;
                    "InvokeRecordStatus": string;
                    "ExitCode": number;
                }[];
            };
            "PageSize": number;
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateDisk创建一块按量付费或包年包月数据盘。云盘类型包括普通云盘、高效云盘、SSD云盘和ESSD云盘。
    */ CreateDisk(query: {
        /**
        * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 在指定可用区内创建一块按量付费云盘。
        * - 如果您不设置InstanceId，则ZoneId为必填参数。
        * - 您不能同时指定ZoneId和InstanceId。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 创建云盘使用的快照。指定该参数后，Size会被忽略，实际创建的云盘大小为指定快照的大小。2013年7月15日及以前的快照不能用来创建云盘。
        * @example `s-snapshotid1`
        */ "SnapshotId"?: string;
        /**
        * 云盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
        * @example `FinanceJoshua`
        */ "DiskName"?: string;
        /**
        * 容量大小，以GiB为单位。指定该参数后，其取值必须≥指定快照ID的容量大小。取值范围：
        * -   cloud：5~2000
        * -   cloud_efficiency：20~32768
        * -   cloud_ssd：20~32768
        * -   cloud_essd：20~32768
        * @example `2000`
        */ "Size"?: number;
        /**
        * 数据盘的云盘种类。取值范围：
        * -   cloud：普通云盘
        * -   cloud_efficiency：高效云盘
        * -   cloud_ssd：SSD云盘
        * -   cloud_essd：ESSD云盘
        * 默认值：cloud
        * @example `cloud_ssd`
        */ "DiskCategory"?: string;
        /**
        * 云盘描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
        * @example `FinanceDisk`
        */ "Description"?: string;
        /**
        * 是否加密云盘。默认值：false
        * @example `false`
        */ "Encrypted"?: boolean;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 创建一块包年包月云盘，并自动挂载到指定的包年包月实例（InstanceId）上。
        * - 设置实例ID后，会忽略您设置的ResourceGroupId、Tag.N.Key、Tag.N.Value、ClientToken和KMSKeyId参数。
        * - 您不能同时指定ZoneId和InstanceId。
        * 默认值：空，代表创建的是按量付费云盘，云盘所属地由RegionId和ZoneId确定。
        * @example `i-bp1g6zv0ce8og******p`
        */ "InstanceId"?: string;
        "Tag"?: string[];
        "Arn"?: string[];
        /**
        * 云盘所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 云盘使用的KMS密钥ID。
        * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
        */ "KMSKeyId"?: string;
        /**
        * 创建一块ESSD云盘时，设置云盘的性能等级。取值范围：
        * - PL1（默认）：单盘最高随机读写IOPS 5万。
        * - PL2：单盘最高随机读写IOPS 10万。
        * - PL3：单盘最高随机读写IOPS 100万。
        * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
        * @example `PL1`
        */ "PerformanceLevel"?: string;
        /**
        * @example `hide`
        */ "AdvancedFeatures"?: string;
        "StorageSetId"?: string;
        "StorageSetPartitionNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "DiskId": string;
    }>;
    /**
    * 调用DetachNetworkInterface从一台实例上分离一个弹性网卡（ENI）。
    */ DetachNetworkInterface(query: {
        /**
        * 资源所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡ID。
        * @example `eni-myeni`
        */ "NetworkInterfaceId": string;
        /**
        * 实例ID。
        * @example `i-myinstance`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
    */ DeleteAutoSnapshotPolicy(query: {
        "RegionId"?: string;
        /**
        * 自动快照所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "regionId": string;
        /**
        * 自动快照策略的 ID。您可以调用 [DescribeAutoSnapshotPolicyEx](~~25530~~) 查看您可用的自动快照策略。
        * @example `p-233e6ylv0`
        */ "autoSnapshotPolicyId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
    */ CancelSimulatedSystemEvents(query: {
        /**
        * 地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "EventId": string[];
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeKeyPairs查询一个或多个密钥对。
    */ DescribeKeyPairs(query: {
        /**
        * 密钥对所在的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 密钥对名称。支持正则表达式模糊搜索，使用*匹配子表达式，示例：
        * - `*SshKey`：查询以SshKey结尾的密钥对名称，包括SshKey。
        * - `SshKey*`：查询以SshKey开头的密钥对名称，包括SshKey。
        * - `*SshKey*`：查询名称中间有SshKey的密钥对，包括SshKey。
        * - `SshKey`：精确匹配SshKey。
        * @example `*Finance*`
        */ "KeyPairName"?: string;
        /**
        * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。更多详情，请参见[RFC4716](https://tools.ietf.org/html/rfc4716)。
        * @example `XXXXXXXXXX`
        */ "KeyPairFingerPrint"?: string;
        /**
        * 密钥对列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        "Tag"?: string[];
        /**
        * 密钥对所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "TotalCount": number;
        "KeyPairs": {
            "KeyPair": {
                "KeyPairName": string;
                "KeyPairFingerPrint": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用AllocatePublicIpAddress为一台ECS实例分配一个公网IP地址。
    */ AllocatePublicIpAddress(query: {
        "RegionId"?: string;
        /**
        * 需要分配IP地址的实例ID。
        * @example `i-instance1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例的公网IP地址。
        * @example `10.1.***.159`
        */ "IpAddress"?: string;
        /**
        * VLAN ID。
        * @example `100`
        */ "VlanId"?: string;
    }): Promise<{
        "RequestId": string;
        "IpAddress": string;
    }>;
    /**
    * 调用StartInstance启动一台实例。
    */ StartInstance(query: {
        "RegionId"?: string;
        /**
        * 指定启动的实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 适用于[实例规格族](~~25378~~)d1、i1或者i2等包含本地盘的实例。当d1、i1或者i2的本地盘出现故障时，可通过此参数指定启动实例时，是否将实例恢复到最初的健康状态。取值范围：
        * -   true：将实例恢复到最初的健康状态，实例原有本地磁盘中的数据将会丢失。
        * -   false（默认）：不做任何处理，维持现状。
        * @example `false`
        */ "InitLocalDisk"?: boolean;
        "DryRun"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyImageSharePermission管理镜像共享权限。您可以将自己的自定义镜像共享给其他阿里云用户，该用户可以使用共享的自定义镜像创建 ECS 实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ ModifyImageSharePermission(query: {
        /**
        * 自定义镜像所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 被共享的自定义镜像 ID。
        * @example `m-imageid1`
        */ "ImageId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "AddAccount"?: string[];
        "RemoveAccount"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
    */ ModifyDeploymentSetAttribute(query: {
        /**
        * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 部署集ID。
        * @example `ds-bp1frxuzdg87zh4pz***`
        */ "DeploymentSetId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 新的部署集描述信息。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinanceDept`
        */ "Description"?: string;
        /**
        * 新的部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `FinanceJoshua`
        */ "DeploymentSetName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ConvertNatPublicIpToEip将一台网络类型为专有网络VPC的ECS实例的公网 IP（NatPublicIp）转化为弹性公网IP（EIP）。
    */ ConvertNatPublicIpToEip(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 需要转化公网IP的实例ID。
        * @example `i-test`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNetworkInterfaces查看弹性网卡（ENI）列表。
    */ DescribeNetworkInterfaces(query: {
        /**
        * 所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        "Tag"?: string[];
        /**
        * 资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * VPC的虚拟交换机ID。
        * @example `vsw-bp16usj2p27htro3*****`
        */ "VSwitchId"?: string;
        /**
        * 网卡所属的专有网络VPC ID。
        * @example `vsw-bp16usj2p27htro3*****`
        */ "VpcId"?: string;
        /**
        * 弹性网卡主私有IP地址。
        * @example `172.17.**.***`
        */ "PrimaryIpAddress"?: string;
        "PrivateIpAddress"?: string[];
        /**
        * 安全组ID。
        * @example `sg-bp144yr32sx6ndw*****`
        */ "SecurityGroupId"?: string;
        /**
        * 弹性网卡的名称。
        * @example `my-eni-name`
        */ "NetworkInterfaceName"?: string;
        /**
        * 弹性网卡类型。取值范围：
        * - Primary
        * - Secondary
        *
        * @example `Secondary`
        */ "Type"?: string;
        /**
        * 弹性网卡当前关联的实例ID。
        * @example `i-bpm21018033933ea*****`
        */ "InstanceId"?: string;
        "NetworkInterfaceId"?: string[];
        /**
        * @example `true`
        */ "ServiceManaged"?: boolean;
        /**
        * 查询结果的页码。取值为正整数。
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 查询结果的分页大小。取值范围：1~100
        * 默认值：10
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{
        "NetworkInterfaceSets": {
            "NetworkInterfaceSet": {
                "AssociatedPublicIp": {};
                "CreationTime": string;
                "InstanceId": string;
                "MacAddress": string;
                "NetworkInterfaceId": string;
                "PrivateIpAddress": string;
                "PrivateIpSets": {
                    "PrivateIpSet": {
                        "AssociatedPublicIp": {};
                        "Primary": boolean;
                        "PrivateIpAddress": string;
                    }[];
                };
                "SecurityGroupIds": {
                    "SecurityGroupId": string[];
                };
                "Status": string;
                "Type": string;
                "VpcId": string;
                "VSwitchId": string;
                "ZoneId": string;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用DeleteKeyPairs删除一对或者多对 SSH 密钥对。删除 SSH 密钥对后，我们不再为您保存该 SSH 密钥对，但是已经绑定的实例可以正常使用该 SSH 密钥对，其 SSH 密钥对名称仍然显示在实例详情中。
    */ DeleteKeyPairs(query: {
        /**
        * SSH 密钥对所在的地域。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * SSH 密钥对名称。取值可以由多个 SSH 密钥对名称组成一个 JSON 数组，最多支持 100 对 SSH 密钥对，名称之间用半角逗号（,）隔开。
        * @example `["key-xxxxxxxxx", "key-yyyyyyyyy", … "key-zzzzzzzzz"]`
        */ "KeyPairNames": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachKeyPair为一台或者多台Linux实例解绑 SSH 密钥对。
    */ DetachKeyPair(query: {
        /**
        * SSH密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * SSH密钥对名称。
        * @example `FinanceJoshuaV26`
        */ "KeyPairName": string;
        /**
        * 解绑SSH密钥对的实例ID。取值可以是由多台实例ID组成的一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。
        * @example `["i-xxxxxxxxx", "i-yyyyyyyyy", … "i-zzzzzzzzz"]`
        */ "InstanceIds": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "TotalCount": number;
        "RequestId": string;
        "Results": {
            "Result": {
                "Message": string;
                "InstanceId": string;
                "Success": boolean;
                "Code": string;
            }[];
        };
        "FailCount": number;
    }>;
    /**
    * 调用DescribeAvailableResource查询某一可用区的资源列表。例如，您可以在某一可用区创建实例（RunInstances）或者修改实例规格（ModifyInstanceSpec）时查询该可用区的资源列表。
    */ DescribeAvailableResource(query: {
        /**
        * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要查询的资源类型。取值范围：
        *
        * - Zone：可用区
        * - IoOptimized：I/O优化
        * - InstanceType：实例规格
        * - SystemDisk：系统盘
        * - DataDisk：数据盘
        * - Network：网络类型
        * - ddh：专有宿主机
        *
        * @example `InstanceType`
        */ "DestinationResource": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 资源的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
        *
        * - PrePaid：包年包月
        * - PostPaid：按量付费
        * 默认值：PostPaid。
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 按量付费实例的竞价策略。取值范围：
        *
        * - NoSpot：正常按量付费实例
        * - SpotWithPriceLimit：设置上限价格的抢占式实例
        * - SpotAsPriceGo：系统自动出价，最高按量付费价格
        * 默认值：NoSpot。
        * 当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        "SpotDuration"?: number;
        /**
        * 可用区ID。
        * 默认值：无，表示随机分配当前地域下的可用区。
        * @example `cn-hangzhou-e`
        */ "ZoneId"?: string;
        /**
        * 是否为I/O优化实例。取值范围：
        *
        * - none：非I/O优化实例
        * - optimized：I/O优化实例
        * 若参数DestinationResource取值为SystemDisk、InstanceType或者DataDisk时，参数IoOptimized不是必需参数。
        * 默认值：optimized。
        * @example `optimized`
        */ "IoOptimized"?: string;
        /**
        * 专有宿主机ID。
        * @example `dh-dedicatedhostid`
        */ "DedicatedHostId"?: string;
        /**
        * 实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * 当参数DestinationResource取值为SystemDisk或者DataDisk时，InstanceType为必需参数。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 系统盘类型。取值范围：
        *
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * 若参数DestinationResource取值为SystemDisk、InstanceType或者DataDisk时，参数SystemDiskCategory不是必需参数。
        * 默认值：cloud_efficiency。
        * @example `cloud_ssd`
        */ "SystemDiskCategory"?: string;
        /**
        * 数据盘类型。取值范围：
        *
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_ssd`
        */ "DataDiskCategory"?: string;
        /**
        * 网络类型。取值范围：
        *
        * - vpc：专有网络
        * - classic：经典网络
        *
        * @example `vpc`
        */ "NetworkCategory"?: string;
        /**
        * 实例规格的vCPU内核数目。取值参见[实例规格族](~~25378~~)。
        * 当DestinationResource取值为InstanceType时，Cores才为有效参数。
        * @example `2`
        */ "Cores"?: number;
        /**
        * 实例规格的内存大小，单位为GiB。取值参见[实例规格族](~~25378~~)。
        * 当DestinationResource取值为InstanceType时，Memory才为有效参数。
        * @example `8.0`
        */ "Memory"?: number;
        /**
        * 资源类型。取值范围：
        * - instance：ECS实例
        * - disk：云盘
        * - reservedinstance：预留实例券
        * - ddh：专有宿主机
        * @example `Instance`
        */ "ResourceType"?: string;
        /**
        * @example `NoDisclose`
        */ "Scope"?: string;
    }): Promise<{
        "RequestId": string;
        "AvailableZones": {
            "AvailableZone": {
                "Status": string;
                "RegionId": string;
                "ZoneId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeSnapshotLinks查询云盘快照链。快照链是一块云盘所有快照组成的关系链，一块云盘对应一条快照链。
    */ DescribeSnapshotLinks(query: {
        /**
        * 云盘所属于的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例 ID。
        * @example `i-instanceid1`
        */ "InstanceId"?: string;
        /**
        * 云盘 ID。一次最多指定 100 个云盘 ID。DiskIds 参数取值格式为 JSON 数组，ID 之间用半角逗号（,）隔开。
        * @example `["d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz"]`
        */ "DiskIds"?: string;
        /**
        * 快照链 ID。一次最多指定 100 个快照 ID。SnapshotLinkIds参数取值格式为 JSON 数组，ID 之间用半角逗号（,）隔开。
        * @example `["sl-xxxxxxxxx", "sl-yyyyyyyyy", … "sl-zzzzzzzzz"]`
        */ "SnapshotLinkIds"?: string;
        /**
        * 云盘状态列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。取值范围：1~50。
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "SnapshotLinks": {
            "SnapshotLink": {
                "SourceDiskSize": number;
                "TotalSize": number;
                "SourceDiskType": string;
                "RegionId": string;
                "SnapshotLinkId": string;
                "SourceDiskId": string;
                "TotalCount": number;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 若弹性网卡已被分配了IPv6地址，调用UnassignIpv6Addresses可以回收一个或多个IPv6地址。
    */ UnassignIpv6Addresses(query: {
        /**
        * 弹性网卡所在地域的 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性网卡 ID。
        * @example `eni-test`
        */ "NetworkInterfaceId": string;
        "Ipv6Address": string[];
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDisks查询一块或多块您已经创建的云盘以及本地盘。
    */ DescribeDisks(query: {
        /**
        * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 云盘ID。一个带有格式的JSON数组，最多100个ID，用半角逗号（,）隔开。
        * @example `["d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz"]`
        */ "DiskIds"?: string;
        /**
        * 实例ID。
        * @example `i-instance1`
        */ "InstanceId"?: string;
        /**
        * 要查询的云盘或本地盘类型。取值范围：
        *
        * - all：同时查询系统盘与数据盘
        * - system：只查询系统盘
        * - data：只查询数据盘
        * 默认值：all
        * @example `all`
        */ "DiskType"?: string;
        /**
        * 云盘种类。取值范围：
        *
        * - all：所有云盘以及本地盘
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD盘
        * - cloud_essd：ESSD云盘
        * - local_ssd_pro：I/O密集型本地盘
        * - local_hdd_pro：吞吐密集型本地盘
        * - ephemeral：（已停售）本地盘
        * - ephemeral_ssd：（已停售）本地SSD盘
        * 默认值：all
        * @example `all`
        */ "Category"?: string;
        /**
        * 云盘状态，参见[普通云盘状态](~~25689~~)。取值范围：
        * -   In_use
        * -   Available
        * -   Attaching
        * -   Detaching
        * -   Creating
        * -   ReIniting
        * -   All
        * 默认值：All
        * @example `All`
        */ "Status"?: string;
        /**
        * 创建云盘使用的快照ID。
        * @example `s-snapshotid1`
        */ "SnapshotId"?: string;
        /**
        * 要查询的云盘是否支持卸载，该属性为不可修改属性。取值范围：
        * -   true：可卸载云盘，可以独立存在且可以自由在可用区内挂载和卸载
        * -   false：不可卸载云盘，不可以独立存在且不可以自由在可用区内挂载和卸载
        * 这个属性为`true`的云盘才能挂载和卸载，其中：
        * -   本地盘
        * -   本地SSD盘
        * -   系统盘
        * -   包年包月数据盘
        * 该属性都为`false`。
        * @example `false`
        */ "Portable"?: boolean;
        /**
        * 云盘是否随实例释放。取值范围：
        * -   true：实例释放时，这块云盘随实例一起释放
        * -   false：实例释放时，这块云盘保留不释放
        * 默认值：false
        * @example `false`
        */ "DeleteWithInstance"?: boolean;
        /**
        * 删除云盘时，是否同时删除自动快照。取值范围：
        * -   true：同时删除自动快照
        * -   false：保留自动快照
        * 默认值：false
        * @example `false`
        */ "DeleteAutoSnapshot"?: boolean;
        /**
        * 云盘或本地盘状态列表的页码，起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 云盘或本地盘名称。
        * @example `JoshuaFinance`
        */ "DiskName"?: string;
        /**
        * 根据自动快照策略ID查询云盘。
        * @example `auto_20140724_2`
        */ "AutoSnapshotPolicyId"?: string;
        /**
        * 云盘是否执行自动快照策略（前提是用户整体的自动快照策略已经开启）。取值范围：
        * -   true：表示这块云盘执行自动快照策略
        * -   false：表示这块云盘不执行自动快照策略
        * 默认值：false
        * @example `false`
        */ "EnableAutoSnapshot"?: boolean;
        /**
        * 云盘是否设置了自动快照策略。
        * @example `false`
        */ "EnableAutomatedSnapshotPolicy"?: boolean;
        /**
        * 云盘或本地盘的计费方式。取值范围：
        * - PrePaid：包年包月
        * - PostPaid：按量付费
        * @example `PostPaid`
        */ "DiskChargeType"?: string;
        /**
        * 云盘或本地盘被锁定的原因。取值范围：
        * - financial：因欠费被锁定
        * - security：因安全原因被锁定
        * - recycling：抢占式实例的待释放锁定状态
        * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定
        * @example `recycling`
        */ "LockReason"?: string;
        /**
        * 查询资源时的筛选键。取值必须为CreationStartTime。
        * @example `CreationStartTime`
        */ "Filter.1.Key"?: string;
        /**
        * 查询资源时的筛选键。取值必须为CreationEndTime。
        * @example `CreationEndTime`
        */ "Filter.2.Key"?: string;
        /**
        * 查询资源时的筛选值。取值必须为资源创建的开始时间点（CreationStartTime）。
        * @example `2017-12-05T22:40:00Z`
        */ "Filter.1.Value"?: string;
        /**
        * 查询资源时的筛选值。取值必须为资源创建的结束时间点（CreationEndTime）。
        * @example `2017-12-06T22:40:00Z`
        */ "Filter.2.Value"?: string;
        "Tag"?: string[];
        /**
        * 云盘或本地盘所在的企业资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
        /**
        * 是否是共享块存储。
        * @example `false`
        */ "EnableShared"?: boolean;
        /**
        * 是否过滤加密云盘。取值范围：
        * -   true：只筛选出加密云盘
        * -   false：不做加密属性的筛选
        * 默认值：false
        * @example `false`
        */ "Encrypted"?: boolean;
        "AdditionalAttributes"?: string[];
        /**
        * 是否只预检此次请求。
        * -   true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
        * -   false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * 默认值：false
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 云盘使用的KMS密钥ID。
        * @example `0e478b7a-4262-4802-b8cb-00d3fb408***`
        */ "KMSKeyId"?: string;
    }): Promise<{
        "Disks": {
            "Disk": {
                "AttachedTime": string;
                "Category": string;
                "CreationTime": string;
                "DeleteAutoSnapshot": boolean;
                "DeleteWithInstance": boolean;
                "EnableAutoSnapshot": boolean;
                "Description": string;
                "DetachedTime": string;
                "Device": string;
                "DiskId": string;
                "DiskName": string;
                "ImageId": string;
                "InstanceId": string;
                "OperationLocks": {
                    "OperationLock": any[];
                };
                "Portable": boolean;
                "ProductCode": string;
                "RegionId": string;
                "Size": number;
                "SourceSnapshotId": string;
                "Status": string;
                "Type": string;
                "ZoneId": string;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用ModifyInstanceAutoRenewAttribute设置一台或多台包年包月实例的自动续费状态。为了减少您的资源到期维护成本，包年包月ECS实例可以设置自动续费。
    */ ModifyInstanceAutoRenewAttribute(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例ID。支持批量设置最多100个包年包月实例，多个实例ID以英文逗号分隔。
        * @example `i-instance1,i-instance2`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * - `PeriodUnit`为`week`（周）时，`Duration`的取值范围为：{"1", "2", "3", "4"}
        * @example `2`
        */ "Duration"?: number;
        /**
        * 实例到期前是否自动续费。默认值：false
        * @example `true`
        */ "AutoRenew"?: boolean;
        /**
        * 置是否不再续费，参数`RenewalStatus`的优先级高于参数`AutoRenew`。如果不传入参数`RenewalStatus`，则默认以参数`AutoRenew`为准。取值范围：
        * - AutoRenewal：设置为自动续费。
        * - Normal：取消自动续费。
        * - NotRenewal：不再续费。传入该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以更改成待续费（`Noramal`）后，再自行续费或设置为自动续费。
        * @example `AutoRenewal`
        */ "RenewalStatus"?: string;
        /**
        * - week
        * @example `week`
        */ "PeriodUnit"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachClassicLinkVpc取消经典网络类型实例与专有网络 VPC 的连接（ClassicLink）。取消 ClassicLink 后，经典网络类型实例无法与 VPC 互通。
    */ DetachClassicLinkVpc(query: {
        /**
        * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 经典网络类型实例 ID。
        * @example `i-test`
        */ "InstanceId": string;
        /**
        * 实例连接的 VPC ID。
        * @example `vpc-test`
        */ "VpcId": string;
        "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyInstanceSpec调整一台按量付费ECS实例的实例规格和公网带宽大小。
    */ ModifyInstanceSpec(query: {
        "RegionId"?: string;
        /**
        * 指定的实例ID。
        * @example `i-instanceid1`
        */ "InstanceId": string;
        "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 实例的目标规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * @example `ecs.g5.large`
        */ "InstanceType"?: string;
        /**
        * 公网出带宽最大值，单位为Mbps（Megabit per second）。取值范围：0~100
        * @example `10`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 公网入带宽最大值，单位为Mbps（Megabit per second）。取值范围：1~200
        * @example `200`
        */ "InternetMaxBandwidthIn"?: number;
        /**
        * 临时提升带宽的起始时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-05T22:40:00Z`
        */ "Temporary.StartTime"?: string;
        /**
        * 临时提升带宽的截止时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-12-05T22:40:00Z`
        */ "Temporary.EndTime"?: string;
        /**
        * 临时公网出带宽的最大值。取值范围：1~100
        * >为提高兼容性，请尽量使用其他参数。
        * @example `50`
        */ "Temporary.InternetMaxBandwidthOut"?: number;
        /**
        * 是否提交异步请求。
        * 默认值：false
        * @example `false`
        */ "Async"?: boolean;
        /**
        * 是否支持跨集群升级实例规格。默认值：false
        * 当参数`AllowMigrateAcrossZone`取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
        * 经典网络类型实例：
        *
        * * 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
        *
        * * 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
        * 专有网络VPC类型实例：对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
        * @example `false`
        */ "AllowMigrateAcrossZone"?: boolean;
        /**
        * 更换系统盘类型。该参数只有在从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。取值范围：
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * @example `cloud_ssd`
        */ "SystemDisk.Category"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateInstance创建一台包年包月或者按量付费ECS实例。
    */ CreateInstance(query: {
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
    }): Promise<{
        "RequestId": string;
        "InstanceId": string;
    }>;
    /**
    * 调用ModifySnapshotAttribute修改一份快照的名称或描述。
    */ ModifySnapshotAttribute(query: {
        "RegionId"?: string;
        /**
        * 快照ID。
        * @example `s-923FE2B**`
        */ "SnapshotId": string;
        /**
        * @example `Hide`
        */ "SourceRegionId"?: string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 为防止和自动快照的名称冲突，不能以auto开头。
        * @example `NewSnapshotName-EcsGuideTest`
        */ "SnapshotName"?: string;
        /**
        * 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `NewSnapshotDescription-EcsGuideTest`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
    */ ReportInstancesStatus(query: {
        /**
        * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "InstanceId": string[];
        /**
        * 反馈原因，即实例发生的异常类型。取值范围：
        * - instance-hang：ECS实例不可用，或无法连接。
        * - instance-stuck-in-status：ECS实例长时间停留在某一个状态，如Starting或Stopping状态。
        * - abnormal-network：ECS实例发生网络异常。
        * - abnormal-local-disk：ECS实例挂载的本地盘出现异常。
        * - abnormal-cloud-disk：ECS实例挂载的云盘或共享块存储出现异常。
        * - others：其他异常类型。当以上异常类型不符合条件时，您可以设置`Reason=Other`并在`Description`中描述更多信息。
        * @example `abnormal-local-disk`
        */ "Reason": string;
        /**
        * @example `cn-hangzhou`
        */ "SourceRegionId"?: string;
        /**
        * @example `1`
        */ "OwnerId"?: number;
        "DiskId"?: string[];
        "Device"?: string[];
        /**
        * 异常问题的详细描述。
        * >当`reason=abnormal-local-disk`时，`Description`为必选参数。
        * @example `本地盘不可用，挂载点拒绝访问，无法加载文件。`
        */ "Description"?: string;
        /**
        * 实例异常问题开始时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-30T06:32:31Z`
        */ "StartTime"?: string;
        /**
        * 实例异常问题结束时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * @example `2017-11-31T06:32:31Z`
        */ "EndTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用JoinResourceGroup将一个ECS资源或者服务加入另一个资源组。
    */ JoinResourceGroup(query: {
        /**
        * 资源所在的地域ID。您可以调用 [**DescribeRegions**](~~25609~~) 查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * ECS资源的类型。取值范围： instance（实例）|disk（磁盘）|snapshot（快照）|image（镜像）|securitygroup（安全组）|ddh（专有宿主机）|eni（弹性网卡）|keypair（密钥对）|launchtemplate（启动模板）
        * 以上参数取值均大小写敏感。
        * @example `instance`
        */ "ResourceType"?: string;
        /**
        * 资源类型的ID标识符。例如，当ResourceType=instance时，则ResourceId可以理解为InstanceId。
        * @example `i-instanceid1`
        */ "ResourceId"?: string;
        "SourceRegionId"?: string;
        /**
        * 目标资源组ID。
        * @example `rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteInstances释放一台或多台按量付费ECS实例或者到期的包年包月ECS实例。
    */ DeleteInstances(query: {
        /**
        * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "InstanceId": string[];
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否只预检此次请求。
        * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
        * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
        * @example `false`
        */ "DryRun"?: boolean;
        /**
        * 是否强制释放**运行中**（`Running`）的ECS实例。
        * -   true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
        * -   false（默认值）：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。
        * @example `false`
        */ "Force"?: boolean;
        /**
        * 是否释放已到期的包年包月实例。
        * 默认值：false。
        * @example `false`
        */ "TerminateSubscription"?: boolean;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskId": string;
    }>;
    /**
    * 调用DescribeZones查询一个阿里云地域下的可用区。
    */ DescribeZones(query: {
        /**
        * 可用区所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM 用户的虚拟账号 ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * @example `false`
        */ "Verbose"?: boolean;
        /**
        * 可用区里支持的资源计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
        * - PrePaid：包年包月
        * - PostPaid（默认）：按量付费
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * 按量付费实例的竞价策略。当InstanceChargeType为PostPaid时，您可以传入该参数。更多详情，请参见[抢占式实例](~~52088~~)。取值范围:
        *
        * - NoSpot（默认）：正常按量付费实例
        * - SpotWithPriceLimit：设置上限价格的抢占式实例
        * - SpotAsPriceGo：系统自动出价，最高按量付费价格
        *
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        *  根据汉语、英语和日语筛选返回结果。更多详情，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：
        *
        * - zh-CN
        * - en-US
        * - ja
        * 默认值：zh-CN。
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{
        "RequestId": string;
        "Zones": {
            "Zone": {
                "AvailableDiskCategories": {
                    "DiskCategories": string[];
                };
                "AvailableResourceCreation": {
                    "ResourceTypes": string[];
                };
                "LocalName": string;
                "ZoneId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeAutoProvisioningGroupHistory接口查询弹性供应组的调度任务信息。
    */ DescribeAutoProvisioningGroupHistory(query: {
        /**
        * 弹性供应组所在地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性供应组的ID。
        * @example `apg-uf6jel2bbl62wh13****`
        */ "AutoProvisioningGroupId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        /**
        * 查询调度历史的起始时间，和**EndTime**结合使用确定查询时段。
        * @example `2019-04-01T15:10:20Z`
        */ "StartTime"?: string;
        /**
        * 查询调度历史的结束时间，和**StartTime**结合使用确定查询时段。
        * @example `2019-06-20T15:10:20Z`
        */ "EndTime"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "AutoProvisioningGroupHistorys": {
            "AutoProvisioningGroupHistory": {
                "Status": string;
                "ActivityDetails": {
                    "ActivityDetail": any[];
                };
                "LastEventTime": string;
                "StartTime": string;
                "TaskId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeAutoProvisioningGroupInstances查询指定弹性供应组下的实例。
    */ DescribeAutoProvisioningGroupInstances(query: {
        /**
        * 弹性供应组所在地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性供应组的ID。
        * @example `apg-uf6jel2bbl62wh13****`
        */ "AutoProvisioningGroupId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        /**
        * 实例状态列表的页码。起始值：**1**，默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：**100**，默认值：**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Instances": {
            "Instance": {
                "CreationTime": string;
                "IoOptimized": boolean;
                "OsType": string;
                "NetworkType": string;
                "Status": string;
                "Memory": number;
                "RegionId": string;
                "InstanceId": string;
                "CPU": number;
                "ZoneId": string;
                "InstanceType": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteAutoProvisioningGroup接口删除一个弹性供应组。
    */ DeleteAutoProvisioningGroup(query: {
        /**
        * 弹性供应组所在地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性供应组的ID。
        * @example `apg-uf6jel2bbl62wh13****`
        */ "AutoProvisioningGroupId": string;
        /**
        * 删除弹性供应组时是否释放组内实例，可选值：
        * - **true**：释放组内实例。
        * - **false**：组内实例继续运行。
        * @example `true`
        */ "TerminateInstances": boolean;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateAutoProvisioningGroup接口创建一个弹性供应组。
    */ CreateAutoProvisioningGroup(query: {
        /**
        * 弹性供应组所在地域的ID，您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 弹性供应组的目标总容量，由以下三个部分组成：
        * - **PayAsYouGoTargetCapacity**指定的按量付费实例目标容量。
        * - **SpotTargetCapacity**指定的抢占式实例目标容量。
        * - **PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之外的差额容量。
        * @example `60`
        */ "TotalTargetCapacity": string;
        /**
        * 弹性供应组关联的实例启动模板的ID，您可以调用[DescribeLaunchTemplates](~~73759~~)查询可用的实例启动模板。
        * 一个弹性供应组只能关联一个实例启动模板，但是可以通过**LaunchTemplateConfig**配置多个扩展启动模板。
        * @example `lt-bp1fgzds4bdogu03****`
        */ "LaunchTemplateId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        /**
        * @example `123456`
        */ "ResourceGroupId"?: string;
        /**
        * 弹性供应组的名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `apg-test`
        */ "AutoProvisioningGroupName"?: string;
        /**
        * 弹性供应组的类型，可选值：
        * - **request**：一次性，供应组仅在启动时尝试一次交付实例集群，调度失败也不再重试。
        * - **maintain**：持续保持，供应组在启动时尝试交付实例集群，并持续监控实时容量和目标容量，未达到目标容量则尝试继续创建实例满足容量需求。
        * 默认值：**maintain**。
        * @example `maintain`
        */ "AutoProvisioningGroupType"?: string;
        /**
        * 抢占式实例的扩容策略，可选值：
        * - **lowest-price**：成本优化策略，选择价格最低的实例规格创建实例。
        * - **diversified**：均衡可用区分布策略，在扩展启动模板指定的可用区创建实例，尽量将实例集群均匀分布到所有可用区。
        * 默认值：**lowest-price**。
        * @example `diversified`
        */ "SpotAllocationStrategy"?: string;
        /**
        * 抢占式实例关停后的默认动作，可选值：
        * - **stop**：停止抢占式实例。
        * - **terminate**：释放抢占式实例。
        * 默认值：**stop**。
        * @example `terminate`
        */ "SpotInstanceInterruptionBehavior"?: string;
        /**
        * 在**SpotAllocationStrategy**为**lowest-price**时生效，弹性供应组选择价格最低的数个实例规格创建实例。
        * @example `2`
        */ "SpotInstancePoolsToUseCount"?: number;
        /**
        * 按量付费实例的扩容策略，可选值：
        * - **lowest-price**：成本优化策略，选择价格最低的实例规格创建实例。
        * - **prioritized**：优先级策略，按照**LaunchTemplateConfig.N.Priority**设定的优先级创建实例。
        * 默认值：**lowest-price**。
        * @example `prioritized`
        */ "PayAsYouGoAllocationStrategy"?: string;
        /**
        * 弹性供应组超过容量时，超额的抢占式实例的关停策略，可选值：
        * - **no-termination**：超额的抢占式实例继续运行。
        * - **termination**：关停超额的抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
        * 默认值：**no-termination**。
        * @example `termination`
        */ "ExcessCapacityTerminationPolicy"?: string;
        /**
        * 弹性供应组的启动时间，和**ValidUntil**结合确定有效时段。
        * 默认为立即生效。
        * @example `2019-04-01T15:10:20Z`
        */ "ValidFrom"?: string;
        /**
        * 弹性供应组的到期时间，和**ValidFrom**结合确定有效时段。
        * 默认为无限期。
        * @example `2019-06-01T15:10:20Z`
        */ "ValidUntil"?: string;
        /**
        * 弹性供应组到期时的关停策略，可选值：
        * - **true**：关停组内抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
        * - **false**：组内抢占式实例继续运行。
        * 默认值：**false**。
        * @example `true`
        */ "TerminateInstancesWithExpiration"?: boolean;
        /**
        * 删除弹性供应组时是否释放组内实例，可选值：
        * - **true**：释放组内实例。
        * - **false**：保留组内实例。
        * 默认值：**false**。
        * @example `true`
        */ "TerminateInstances"?: boolean;
        /**
        * 弹性供应组内抢占式实例的全局价格上限，同时设置**MaxSpotPrice**和**LaunchTemplateConfig.N.MaxPrice**时，以较低者为准。
        * @example `2`
        */ "MaxSpotPrice"?: number;
        /**
        * 弹性供应组内按量付费实例的目标容量。
        * @example `30`
        */ "PayAsYouGoTargetCapacity"?: string;
        /**
        * 弹性供应组内抢占式实例的目标容量。
        * @example `20`
        */ "SpotTargetCapacity"?: string;
        /**
        * 指定差额容量的类型，**PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之和小于**TotalTargetCapacity**时，您可以指定补齐差额容量的实例类型。可选值：
        * - **PayAsYouGo**：使用按量付费实例补齐差额容量。
        * - **Spot**：使用抢占式实例补齐差额容量。
        * 默认值：**Spot**。
        * @example `Spot`
        */ "DefaultTargetCapacityType"?: string;
        /**
        * 弹性供应组关联的实例启动模板的版本，您可以调用[DescribeLaunchTemplateVersions](~~73761~~)查询可用的实例启动模板版本。
        * @example `1`
        */ "LaunchTemplateVersion"?: string;
        "LaunchTemplateConfig"?: string[];
        /**
        * 弹性供应组的描述信息。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "CreateAutoProvisioningGroupId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAutoProvisioningGroup接口修改一个弹性供应组的设置。
    */ ModifyAutoProvisioningGroup(query: {
        /**
        * 弹性供应组所在地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        /**
        * 弹性供应组的ID。
        * @example `apg-uf6jel2bbl62wh13****`
        */ "AutoProvisioningGroupId"?: string;
        /**
        * 弹性供应组超过容量时，超额的抢占式实例的关停策略，可选值：
        * - **no-termination**：超额的抢占式实例继续运行。
        * - **termination**：关停超额的抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
        * > **SpotInstanceInterruptionBehavior**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
        * @example `no-termination`
        */ "ExcessCapacityTerminationPolicy"?: string;
        /**
        * 指定差额容量的类型，**PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之和小于**TotalTargetCapacity**时，您可以指定补齐差额容量的实例类型。可选值：
        * - **PayAsYouGo**：使用按量付费实例补齐差额容量。
        * - **Spot**：使用抢占式实例补齐差额容量。
        * @example `PayAsYouGo`
        */ "DefaultTargetCapacityType"?: string;
        /**
        * 弹性供应组到期时的关停策略，可选值：
        * - **true**：关停组内抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
        * - **false**：组内抢占式实例继续运行。
        * > **SpotInstanceInterruptionBehavior**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
        * @example `false`
        */ "TerminateInstancesWithExpiration"?: boolean;
        /**
        * 弹性供应组内抢占式实例的全局价格上限，同时设置**MaxSpotPrice**和**LaunchTemplateConfig.N.MaxPrice**时，以较低者为准。
        * > **LaunchTemplateConfig.N.MaxPrice**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
        * @example `8`
        */ "MaxSpotPrice"?: number;
        /**
        * 弹性供应组的目标总容量，由以下三个部分组成：
        * - **PayAsYouGoTargetCapacity**指定的按量付费实例目标容量。
        * - **SpotTargetCapacity**指定的抢占式实例目标容量。
        * - **PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之外的差额容量。
        * @example `10`
        */ "TotalTargetCapacity"?: string;
        /**
        * 弹性供应组内按量付费实例的目标容量。
        * @example `5`
        */ "PayAsYouGoTargetCapacity"?: string;
        /**
        * 弹性供应组内抢占式实例的目标容量。
        * @example `5`
        */ "SpotTargetCapacity"?: string;
        "AutoProvisioningGroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDiskSpec升级一块ESSD云盘的性能等级。
    */ ModifyDiskSpec(query: {
        "RegionId"?: string;
        /**
        * ESSD云盘的ID。
        * @example `d-bp131n0q38u3a4zi*****`
        */ "DiskId": string;
        /**
        * 修改ESSD云盘的性能等级。取值范围：
        * - PL1（默认）：单盘最高随机读写IOPS 5万。
        * - PL2：单盘最高随机读写IOPS 10万。
        * - PL3：单盘最高随机读写IOPS 100万。
        * >修改后的性能等级不能低于修改前的性能等级。
        * @example `PL2`
        */ "PerformanceLevel": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * （Beta）调用DescribeRecommendInstanceType根据一个指定的的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
    */ DescribeRecommendInstanceType(query: {
        /**
        * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * ECS实例的网络类型。取值范围：
        * - classic：经典网络。
        * - vpc（默认）：专有网络VPC。
        * @example `vpc`
        */ "NetworkType": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * ECS实例vCPU核数。
        * >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。
        * @example `2`
        */ "Cores"?: number;
        /**
        * ECS实例内存大小，单位为GiB。
        * >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。
        * @example `8.0`
        */ "Memory"?: number;
        /**
        * 指定的实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
        * > 如果您指定了`InstanceType`，则无法指定`Cores`或者`Memory`。
        * @example `ecs.s1.large`
        */ "InstanceType"?: string;
        /**
        * ECS实例的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
        * - PrePaid：包年包月。
        * - PostPaid（默认）：按量付费。
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * 抢占式实例的竞价策略。取值范围：
        * - NoSpot（默认）：正常按量付费实例。
        * - SpotWithPriceLimit：设置上限价格的抢占式实例。
        * - SpotAsPriceGo：系统自动出价，最高按量付费价格。
        * 使用`SpotStrategy`时，`InstanceChargerType`必须设置为`PostPaid`。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        * 是否为I/O优化实例。实例规格只支持非I/O优化时，不能设置IoOptimized参数。取值范围：
        * - optimized：I/O优化。
        * - none：非IO优化。
        * 默认值：optimized。
        * 如果您设置的是已停售实例规格，默认为none。
        * @example `optimized`
        */ "IoOptimized"?: string;
        "InstanceTypeFamily"?: string[];
        /**
        * 优先推荐策略。取值范围：
        * - InventoryFirst（默认）：库存优先。
        * - PriceFirst：价格优先，按每小时vCPU单价从低到高排序。
        * - NewProductFirst：最新产品优先。
        * @example `PriceFirst`
        */ "PriorityStrategy"?: string;
        /**
        * 按量付费实例或者抢占式实例可接受的每小时最高价格。
        * >设置抢占式实例的最高单价时，`SpotStrategy`必须设置为`SpotWithPriceLimit`。
        * @example `10.0`
        */ "MaxPrice"?: number;
        "InstanceBandwidthRx"?: number;
        "InstanceBandwidthTx"?: number;
        "InstancePpsRx"?: number;
        "InstancePpsTx"?: number;
        /**
        * 可用区ID。您可以调用[DescribeZones](~~25610~~)查看最新的阿里云可用区列表。
        * @example `cn-hangzhou-f`
        */ "ZoneId"?: string;
        /**
        * 系统盘的云盘种类。取值范围:
        * - cloud_efficiency：高效云盘。
        * - cloud_ssd：SSD云盘。
        * - cloud_essd：ESSD云盘。
        * - cloud：普通云盘。
        * 非I/O优化实例的默认值为：cloud。
        * I/O优化实例的默认值为：cloud_efficiency。
        * @example `cloud_ssd`
        */ "SystemDiskCategory"?: string;
        /**
        * 在哪种场景下推荐实例规格。取值范围：
        * - UPGRADE：升级或降低实例规格。
        * - CREATE（默认）：创建实例。
        * @example `CREATE`
        */ "Scene"?: string;
    }): Promise<{
        "Data": {
            "RecommendInstanceType": {
                "CommodityCode": string;
                "RegionNo": string;
                "Scene": string;
                "Zones": {
                    "zone": any[];
                };
                "InstanceType": {
                    "Memory": number;
                    "Cores": number;
                    "InstanceTypeFamily": string;
                    "SupportIoOptimized": string;
                    "Generation": string;
                    "InstanceType": string;
                };
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAutoProvisioningGroups接口查询弹性供应组。
    */ DescribeAutoProvisioningGroups(query: {
        /**
        * 弹性供应组所在地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        /**
        * 实例状态列表的页码。起始值：**1**，默认值：**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：**100**，默认值：**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 弹性供应组的名称。
        * @example `test`
        */ "AutoProvisioningGroupName"?: string;
        "AutoProvisioningGroupId"?: string[];
        "AutoProvisioningGroupStatus"?: string[];
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "AutoProvisioningGroups": {
            "AutoProvisioningGroup": {
                "TerminateInstancesWithExpiration": boolean;
                "TerminateInstances": boolean;
                "ValidFrom": string;
                "AutoProvisioningGroupType": string;
                "PayAsYouGoOptions": {
                    "AllocationStrategy": string;
                };
                "AutoProvisioningGroupName": string;
                "CreationTime": string;
                "ExcessCapacityTerminationPolicy": string;
                "Status": string;
                "MaxSpotPrice": number;
                "LaunchTemplateVersion": string;
                "ValidUntil": string;
                "TargetCapacitySpecification": {
                    "SpotTargetCapacity": number;
                    "TotalTargetCapacity": number;
                    "PayAsYouGoTargetCapacity": number;
                    "DefaultTargetCapacityType": string;
                };
                "State": string;
                "LaunchTemplateId": string;
                "RegionId": string;
                "AutoProvisioningGroupId": string;
                "SpotOptions": {
                    "InstancePoolsToUseCount": number;
                    "InstanceInterruptionBehavior": string;
                    "AllocationStrategy": string;
                };
                "LaunchTemplateConfigs": {
                    "LaunchTemplateConfig": {
                        "MaxPrice": number;
                        "WeightedCapacity": number;
                        "VSwitchId": string;
                        "Priority": number;
                        "InstanceType": string;
                    }[];
                };
            }[];
        };
    }>;
    /**
    * （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
    */ DescribeStorageSets(query: {
        /**
        * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 存储集ID列表。取值可以由多个存储集ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `"["ss-xxxxxxxxx", "ss-yyyyyyyyy", … "ss-zzzzzzzzz"]"`
        */ "StorageSetIds"?: string;
        /**
        * 存储集所属可用区。您可以调用[DescribeZones](~~25610~~)查询最新的可用区列表。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `storageSetTest`
        */ "StorageSetName"?: string;
        /**
        * 存储集列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：100
        * 默认值：10
        * @example `1`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "StorageSets": {
            "StorageSet": {
                "CreationTime": string;
                "Description": string;
                "RegionId": string;
                "MaxPartitionNumber": number;
                "ZoneId": string;
                "StorageSetId": string;
                "StorageSetName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
    */ DescribeStorageSetDetails(query: {
        /**
        * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 存储集ID。
        * @example `ss-StorageSetId`
        */ "StorageSetId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 存储集内的最大分区数。
        * @example `3`
        */ "StorageSetPartitionNumber"?: number;
        /**
        * 云盘或共享块存储ID列表。取值可以由多块云盘或共享块存储ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `["d-111", "d-222", … "d-333"]`
        */ "DiskIds"?: string;
        /**
        * 存储集列表的页码。起始值：1
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：100
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Disks": {
            "Disk": {
                "CreationTime": string;
                "Category": string;
                "RegionId": string;
                "ZoneId": string;
                "StorageSetId": string;
                "DiskId": string;
            }[];
        };
    }>;
    /**
    * （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
    */ ModifyStorageSetAttribute(query: {
        /**
        * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 存储集ID。
        * @example `ss-StorageSetId`
        */ "StorageSetId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `storageSetTest`
        */ "StorageSetName"?: string;
        /**
        * 存储集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `storageSetTest`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * （Beta）调用DescribeInstanceTopology查询实例所在宿主机的拓扑结构。
    */ DescribeInstanceTopology(query: {
        /**
        * ECS实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `hide`
        */ "SourceRegionId"?: string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 一台或多台ECS实例的ID。支持最多100台ECS实例。
        * @example `["i-instanceId1"]`
        */ "InstanceIds"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * （Beta）调用CreateStorageSet在指定地域的可用区下创建一个存储集。
    */ CreateStorageSet(query: {
        /**
        * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 存储集所属可用区。您可以调用[DescribeZones](~~25610~~)查询最新的可用区列表。
        * @example `cn-hangzhou-g`
        */ "ZoneId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `storageSetTest`
        */ "StorageSetName"?: string;
        /**
        * 存储集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `storageSetTest`
        */ "Description"?: string;
        /**
        * 存储集最大分区，StorageSet支持的最大分区号。取值范围：大于2，最高不能超过调用[DescribeAccountAttributes](~~73772~~)后显示的权益配额限制。
        * 默认值：2。
        * @example `10`
        */ "MaxPartitionNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "StorageSetId": string;
    }>;
    /**
    * （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
    */ DeleteStorageSet(query: {
        /**
        * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 存储集ID。
        * @example `ss-StorageSetId`
        */ "StorageSetId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AllocateDedicatedHosts创建一台或多台包年包月专有宿主机。专有宿主机DDH是由单租户独享的物理机资源，您可以在专有宿主机上自行创建ECS实例和获取物理服务器属性信息等。
    */ AllocateDedicatedHosts(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](~~93285~~)接口获得最新的专有宿主机规格表 。
        * @example `ddh.c5`
        */ "DedicatedHostType": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        "Tag"?: string[];
        /**
        * 专有宿主机要加入的资源组ID。
        * @example `myResourceGroupID`
        */ "ResourceGroupId"?: string;
        /**
        * 专有宿主机所属的可用区编号。
        * 默认值：空，表示由系统选择。
        * @example `cn-hangzhou-f`
        */ "ZoneId"?: string;
        /**
        * 专有宿主机的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `myDDH`
        */ "DedicatedHostName"?: string;
        /**
        * 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：
        * - Migrate：迁移实例到其他物理机并重新启动实例。
        *   默认值：Migrate（当专有宿主机上挂载云盘存储时）
        * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
        *   默认值：Stop（当专有宿主机上挂载本地盘存储时）
        * @example `Migrate`
        */ "ActionOnMaintenance"?: string;
        /**
        * 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310
        * @example `60`
        */ "NetworkAttributes.SlbUdpTimeout"?: number;
        /**
        * 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310
        * @example `60`
        */ "NetworkAttributes.UdpTimeout"?: number;
        /**
        * 专有宿主机的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `This-is-my-DDH`
        */ "Description"?: string;
        /**
        * 专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云将自动从加入资源池的专有宿主机中，为您选取适合的宿主机部署实例，详情请参见[自动部署功能介绍](~~118938~~)。取值范围：
        * - on：加入自动部署资源池。
        * - off：不加入自动部署资源池。
        * 默认值： on
        *  >创建专有宿主机时：
        * - 若您不设置该参数，则默认为专有宿主机加入自动部署资源池。
        * - 若您不希望专有宿主机加入自动部署资源池，请将该参数设置为off。
        * @example `off`
        */ "AutoPlacement"?: string;
        /**
        * 专有宿主机的计费方式。取值范围：PrePaid（包年包月）
        * @example `PrePaid`
        */ "ChargeType"?: string;
        /**
        * 本次创建的专有宿主机的数量。取值范围：1~100
        * 默认值：1
        * @example `1`
        */ "Quantity"?: number;
        /**
        * 购买专有宿主机的包年包月时长。当参数**ChargeType**取值为PrePaid时， **Period**参数方可生效并为必填参数。
        * 使用中国站账号调用该API时，参数**Period**的取值范围如下：
        * - `PeriodUnit=Week`时，取值范围：{1,2,3}
        * - `PeriodUnit=Month`时，取值范围：{1,2,3,4,5,6,7,8,9}
        * - `PeriodUnit=Year`时，取值范围：{1,2,3,4,5}
        * 使用国际站账号调用该API时，参数**Period**的取值范围如下：
        * - `PeriodUnit=Month`时，取值范围：{1,2,3,6}
        * - `PeriodUnit=Year`时，取值范围：{1}
        * @example `6`
        */ "Period"?: number;
        /**
        * 购买专有宿主机的时长。取值范围：Week | Month（默认）| Year
        * @example `Month`
        */ "PeriodUnit"?: string;
        /**
        * 是否自动续费包年包月专有宿主机。
        * >当参数**ChargeType**取值PrePaid时， **AutoRenew**参数方可生效。
        * 默认值：false
        * @example `false`
        */ "AutoRenew"?: boolean;
        /**
        * 单次自动续费的周期，单位：月。取值范围：1 | 2 | 3 | 6 | 12
        * >当参数**AutoRenew**为true时，**AutoRenewPeriod**参数方可生效并为必填参数。
        * @example `1`
        */ "AutoRenewPeriod"?: number;
        /**
        * 专有宿主机自动释放时间。需按照ISO8601标准表示，并使用UTC+0时间。格式：yyyy-MM-ddTHH:mm:ssZ
        * >
        * - 最短设置为当前时间之后半小时。
        * - 最长不能超过当前时间之后三年。
        * - 若参数值中的秒（ss）不是00，则自动取为00。
        * @example `2019-08-21T12:30:24Z`
        */ "AutoReleaseTime"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "DedicatedHostIdSets": {
            "DedicatedHostId": string[];
        };
    }>;
    /**
    * 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
    */ DescribeDedicatedHostTypes(query: {
        /**
        * 专有宿主机所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 专有宿主机规格。更多详情，请参见[宿主机规格](~~68564~~)。
        * @example `ddh.sn1ne`
        */ "DedicatedHostType"?: string;
        /**
        * 专有宿主机规格支持的ECS实例规格族。
        * @example `ecs.sn1ne`
        */ "SupportedInstanceTypeFamily"?: string;
    }): Promise<{
        "DedicatedHostTypes": {
            "DedicatedHostType": {
                "LocalStorageAmount": number;
                "Sockets": number;
                "DedicatedHostType": string;
                "LocalStorageCapacity": number;
                "SupportedInstanceTypeFamilies": {
                    "SupportedInstanceTypeFamily": string[];
                };
                "MemorySize": number;
                "Cores": number;
                "TotalVcpus": number;
                "LocalStorageCategory": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDedicatedHosts查询一台或多台专有宿主机的详细信息，包括专有宿主机的物理性能指标、虚拟机器码、使用状态和已创建的ECS实例列表等。
    */ DescribeDedicatedHosts(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 可用区ID。
        * @example `cn-hangzhou-g`
        */ "ZoneId"?: string;
        /**
        * 专有宿主机ID列表。单次最多支持100个ID ，多个ID用一个格式类似[“dh- xxxxxxxxx”, “dh- yyyyyyyyy”, … “dh- zzzzzzzzz”]的JSON数组表示，ID之间用半角逗号（,）隔开。
        * @example `dh-xxxxxxxxxxxxxxxxx`
        */ "DedicatedHostIds"?: string;
        /**
        * 专有宿主机的名称。
        * @example `myDDH`
        */ "DedicatedHostName"?: string;
        /**
        * 专有宿主机的使用状态。取值范围：
        * - Available（默认）：可用状态。
        * - Under-Assessment：故障潜伏期，专有宿主机可能会出故障。
        * - Permanent-Failure：永久性故障，专有宿主机不可用。
        * @example `Available`
        */ "Status"?: string;
        /**
        * 专有宿主机的规格类型。
        * @example `ddh.g5`
        */ "DedicatedHostType"?: string;
        /**
        * @example `financial`
        */ "LockReason"?: string;
        /**
        * 响应信息的页码数。
        * 默认值：1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 响应信息的每页行数。最大值：100。
        * 默认值：10
        * @example `10`
        */ "PageSize"?: number;
        "Tag"?: string[];
        /**
        * @example `rg-xxxxxxxxxxxxxxx`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "PageNumber": number;
        "DedicatedHosts": {
            "DedicatedHost": {
                "DedicatedHostId": string;
                "ChargeType": string;
                "Description": string;
                "ResourceGroupId": string;
                "SupportInstanceTypeFamilies": {
                    "SupportInstanceTypeFamily": string[];
                };
                "Instances": {
                    "Instance": any[];
                };
                "Cores": number;
                "ZoneId": string;
                "CreationTime": string;
                "Sockets": number;
                "Status": string;
                "DedicatedHostType": string;
                "RegionId": string;
                "DedicatedHostName": string;
                "SaleCycle": string;
                "AutoReleaseTime": string;
                "Capacity": {
                    "AvailableVcpus": number;
                    "TotalMemory": number;
                    "TotalVcpus": number;
                    "AvailableLocalStorage": number;
                    "TotalLocalStorage": number;
                    "LocalStorageCategory": string;
                    "AvailableMemory": number;
                };
                "OperationLocks": {
                    "OperationLock": any[];
                };
                "MachineId": string;
                "ExpiredTime": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
    */ DescribeDedicatedHostAutoRenew(query: {
        /**
        * 专有宿主机所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
        * @example `dh-dedicatedhost1,dh-dedicatedhost2`
        */ "DedicatedHostIds": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "DedicatedHostIdRenewAttributes": {
            "DedicatedHostIdRenewAttribute": {
                "Duration": number;
                "DedicatedHostId": string;
                "AutoRenewEnabled": boolean;
                "RenewalStatus": string;
                "PeriodUnit": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDedicatedHostAttribute修改一台专有宿主机的部分信息，包括专有宿主机的名称、描述和服务不可用属性等。
    */ ModifyDedicatedHostAttribute(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机ID。
        * @example `ddh-xxxxxxxxxxxxxxxxxxx`
        */ "DedicatedHostId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 专有宿主机名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `myDDH`
        */ "DedicatedHostName"?: string;
        /**
        * 专有宿主机的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
        * @example `this-is-my-ddh`
        */ "Description"?: string;
        /**
        * 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：
        * - Migrate：迁移实例到其他物理机并重新启动实例。
        * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
        * 当专有宿主机上挂载的是云盘时，默认值：Migrate
        * 当专有宿主机上挂载的是本地盘时，默认值：Stop
        * @example `Migrate`
        */ "ActionOnMaintenance"?: string;
        /**
        * 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310
        * @example `60`
        */ "NetworkAttributes.SlbUdpTimeout"?: number;
        /**
        * 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310
        * @example `60`
        */ "NetworkAttributes.UdpTimeout"?: number;
        /**
        * 设置专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云自动从资源池中选取专有宿主机放置实例。取值范围：
        * - on：加入自动部署资源池。
        * - off：不加入自动部署资源池。
        * 自动部署功能详情，请参见[功能特性](~~118938~~)。
        * @example `on`
        */ "AutoPlacement"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDedicatedHostAutoRenewAttribute为一台或多台包年包月专有宿主机设置自动续费，也可以取消已设定的自动续费。
    */ ModifyDedicatedHostAutoRenewAttribute(query: {
        /**
        * 专有宿主机所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
        * @example `ddh-xxxxxxxxxxxxxxxxx`
        */ "DedicatedHostIds": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 续费周期。取值范围：请参见**PeriodUnit**参数的描述部分。
        * @example `1`
        */ "Duration"?: number;
        /**
        * 续费时长单位。取值范围：
        * - Week：周。此时，参数**Duration**取值范围为 {1, 2, 3}。
        * - Month（默认）：月。此时，参数**Duration**的取值范围为 { 1, 2, 3, 6, 12}。
        * @example `Month`
        */ "PeriodUnit"?: string;
        /**
        * 是否自动续费包年包月专有宿主机。取值范围：
        * - true：自动续费包年包月专有宿主机。
        * - false（默认）：不自动续费包年包月专有宿主机。
        * @example `false`
        */ "AutoRenew"?: boolean;
        /**
        * 是否自动续费包年包月专有宿主机，参数**RenewalStatus**的优先级高于**AutoRenew**。取值范围：
        * - AutoRenewal：自动续费。
        * - Normal：待续费。
        * - NotRenewal：不续费，也不发送到期提醒。到期前第三天我们会发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费（[RenewDedicatedHosts](~~93287~~)）或设置为自动续费（AutoRenewal）。
        * @example `Normal`
        */ "RenewalStatus"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyDedicatedHostAutoReleaseTime为一台按量付费专有宿主机设定自动释放时间，或者取消自动释放一台按量付费专有宿主机。
    */ ModifyDedicatedHostAutoReleaseTime(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 需要自动释放的专有宿主机ID。
        * @example `dh-xxxxxxxxxxxxxxxxxx`
        */ "DedicatedHostId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 专有宿主机的自动释放时间。按照ISO8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
        * >
        * - 最短不能晚于当前时间半小时内。
        * - 最长不能超过当前时间三年以后。
        * - 如果参数值中的秒（ss）不是00，则自动取为00。
        * 如果不输入**AutoReleaseTime**参数，表示取消自动释放，专有宿主机在预约时间点不再自动释放。
        * @example `2019-06-04T13:35:00Z`
        */ "AutoReleaseTime"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ReleaseDedicatedHost释放一台按量付费专有宿主机。
    */ ReleaseDedicatedHost(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机ID。
        * @example `dh-xxxxxxxxxxxxxxxxx`
        */ "DedicatedHostId": string;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RenewDedicatedHosts续费一台或者多台包年包月专有宿主机。
    */ RenewDedicatedHosts(query: {
        /**
        * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 专有宿主机的编号列表。最多可以输入100个预付费专有宿主机ID。多个专有宿主机ID用一个格式类似[“dh-xxxxxxxxx”, “dh-yyyyyyyyy”, … “dh-zzzzzzzzz”]的JSON数组表示，ID之间用半角逗号（,）隔开。
        * @example `dh-xxxxxxxxxxxxxxxxx`
        */ "DedicatedHostIds": string;
        /**
        * 续费周期。取值范围：请参见**PeriodUnit**参数的描述部分。
        * @example `1`
        */ "Period": number;
        /**
        * @example `cn-beijing`
        */ "SourceRegionId"?: string;
        "OwnerId"?: number;
        /**
        * 续费时长单位。取值范围：
        * - Week：周。此时，参数**Period**的取值范围为 {1, 2, 3, 4}。
        * - Month（默认）：月。此时，参数**Period**的取值范围为 {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}。
        * @example `Month`
        */ "PeriodUnit"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `xxxxxxxxxxxxxxxxxxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    AssociateHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    CreateNetworkInterfacePermission(query: {
        "RegionId": string;
        "AccountId": number;
        "NetworkInterfaceId": string;
        "Permission": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteBandwidthPackage(query: {
        "RegionId": string;
        "BandwidthPackageId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeletePhysicalConnection(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DeleteVSwitch(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VSwitchId": string;
    }): Promise<{}>;
    DescribeEipMonitorData(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AllocationId": string;
        "Period"?: number;
    }): Promise<{}>;
    DescribeFleetHistory(query: {
        "RegionId": string;
        "FleetId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeFleets(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "FleetName"?: string;
        "FleetId"?: string[];
        "FleetStatus"?: string[];
    }): Promise<{}>;
    DescribeForwardTableEntries(query: {
        "RegionId": string;
        "ForwardTableId": string;
        "OwnerId"?: number;
        "ForwardEntryId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeHaVips(query: {
        "RegionId": string;
        "Filter": string[];
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeInstanceAttribute(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeNetworkInterfacePermissions(query: {
        "RegionId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "NetworkInterfaceId"?: string;
        "NetworkInterfacePermissionId"?: string[];
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeRenewalPrice(query: {
        "RegionId": string;
        "ResourceId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "ResourceType"?: string;
        "Period"?: number;
        "PriceUnit"?: string;
    }): Promise<{}>;
    DescribeRouteTables(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VRouterId"?: string;
        "RouteTableId"?: string;
        "RouterType"?: string;
        "RouterId"?: string;
        "RouteTableName"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ModifyAutoSnapshotPolicy(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "SystemDiskPolicyEnabled"?: boolean;
        "SystemDiskPolicyTimePeriod"?: number;
        "SystemDiskPolicyRetentionDays"?: number;
        "SystemDiskPolicyRetentionLastWeek"?: boolean;
        "DataDiskPolicyEnabled"?: boolean;
        "DataDiskPolicyTimePeriod"?: number;
        "DataDiskPolicyRetentionDays"?: number;
        "DataDiskPolicyRetentionLastWeek"?: boolean;
    }): Promise<{}>;
    ModifyRouterInterfaceAttribute(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "OwnerId"?: number;
        "Name"?: string;
        "Description"?: string;
        "OppositeInterfaceId"?: string;
        "OppositeRouterId"?: string;
        "OppositeRouterType"?: string;
        "OppositeInterfaceOwnerId"?: number;
        "HealthCheckSourceIp"?: string;
        "HealthCheckTargetIp"?: string;
    }): Promise<{}>;
    ModifyVpcAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Description"?: string;
        "VpcName"?: string;
        "CidrBlock"?: string;
        "VpcId": string;
        "UserCidr"?: string;
    }): Promise<{}>;
    ReleaseEipAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "AllocationId": string;
    }): Promise<{}>;
    RemoveBandwidthPackageIps(query: {
        "RegionId": string;
        "BandwidthPackageId": string;
        "RemovedIpAddresses": string[];
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    UnassociateHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "Force"?: string;
    }): Promise<{}>;
    ActivateRouterInterface(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    AddBandwidthPackageIps(query: {
        "RegionId": string;
        "BandwidthPackageId": string;
        "IpCount": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    AllocateEipAddress(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "Bandwidth"?: string;
        "ISP"?: string;
        "InternetChargeType"?: string;
        "ActivityId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    AssociateEipAddress(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
        "AllocationId": string;
        "InstanceType"?: string;
    }): Promise<{}>;
    CancelPhysicalConnection(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    ConnectRouterInterface(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateFleet(query: {
        "RegionId": string;
        "TotalTargetCapacity": string;
        "LaunchTemplateId": string;
        "OwnerId"?: number;
        "FleetName"?: string;
        "FleetType"?: string;
        "SpotAllocationStrategy"?: string;
        "SpotInstanceInterruptionBehavior"?: string;
        "SpotInstancePoolsToUseCount"?: number;
        "OnDemandAllocationStrategy"?: string;
        "ExcessCapacityTerminationPolicy"?: string;
        "ValidFrom"?: string;
        "ValidUntil"?: string;
        "TerminateInstancesWithExpiration"?: boolean;
        "TerminateInstances"?: boolean;
        "MaxSpotPrice"?: number;
        "OnDemandTargetCapacity"?: string;
        "SpotTargetCapacity"?: string;
        "DefaultTargetCapacityType"?: string;
        "FillGapWithOnDemand"?: string;
        "LaunchTemplateVersion"?: string;
        "LaunchTemplateConfig"?: string[];
        "Description"?: string;
    }): Promise<{}>;
    CreateForwardEntry(query: {
        "RegionId": string;
        "ForwardTableId": string;
        "ExternalIp": string;
        "ExternalPort": string;
        "InternalIp": string;
        "InternalPort": string;
        "IpProtocol": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateHaVip(query: {
        "RegionId": string;
        "VSwitchId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "IpAddress"?: string;
        "Description"?: string;
    }): Promise<{}>;
    CreateNatGateway(query: {
        "RegionId": string;
        "VpcId": string;
        "BandwidthPackage": string[];
        "OwnerId"?: number;
        "Name"?: string;
        "Description"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
    CreatePhysicalConnection(query: {
        "RegionId": string;
        "AccessPointId": string;
        "LineOperator": string;
        "PeerLocation": string;
        "ClientToken"?: string;
        "Type"?: string;
        "bandwidth"?: number;
        "PortType"?: string;
        "RedundantPhysicalConnectionId"?: string;
        "Description"?: string;
        "Name"?: string;
        "CircuitCode"?: string;
        "OwnerId"?: number;
        "UserCidr"?: string;
    }): Promise<{}>;
    CreateRouteEntry(query: {
        "RegionId"?: string;
        "DestinationCidrBlock": string;
        "OwnerId"?: number;
        "RouteTableId": string;
        "NextHopId"?: string;
        "ClientToken"?: string;
        "NextHopType"?: string;
        "NextHopList"?: string[];
    }): Promise<{}>;
    CreateRouterInterface(query: {
        "RegionId": string;
        "Role": string;
        "OppositeRegionId": string;
        "Spec": string;
        "RouterType": string;
        "RouterId": string;
        "OppositeInterfaceId"?: string;
        "OppositeRouterId"?: string;
        "OppositeRouterType"?: string;
        "OppositeInterfaceOwnerId"?: string;
        "HealthCheckSourceIp"?: string;
        "HealthCheckTargetIp"?: string;
        "AccessPointId"?: string;
        "OppositeAccessPointId"?: string;
        "Description"?: string;
        "Name"?: string;
        "Period"?: number;
        "InstanceChargeType"?: string;
        "AutoPay"?: boolean;
        "PricingCycle"?: string;
        "ClientToken"?: string;
        "OwnerId"?: number;
        "UserCidr"?: string;
    }): Promise<{}>;
    CreateVSwitch(query: {
        "RegionId"?: string;
        "CidrBlock": string;
        "VpcId": string;
        "OwnerId"?: number;
        "ZoneId": string;
        "VSwitchName"?: string;
        "Description"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
    CreateVirtualBorderRouter(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "VlanId": number;
        "ClientToken"?: string;
        "VbrOwnerId"?: number;
        "CircuitCode"?: string;
        "LocalGatewayIp"?: string;
        "PeerGatewayIp"?: string;
        "PeeringSubnetMask"?: string;
        "Description"?: string;
        "Name"?: string;
        "OwnerId"?: number;
        "UserCidr"?: string;
    }): Promise<{}>;
    CreateVpc(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "CidrBlock"?: string;
        "VpcName"?: string;
        "Description"?: string;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    DeactivateRouterInterface(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteFleet(query: {
        "RegionId": string;
        "FleetId": string;
        "TerminateInstances": boolean;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteForwardEntry(query: {
        "RegionId": string;
        "ForwardTableId": string;
        "ForwardEntryId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DeleteNatGateway(query: {
        "RegionId": string;
        "NatGatewayId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteNetworkInterfacePermission(query: {
        "RegionId": string;
        "NetworkInterfacePermissionId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "Force"?: boolean;
    }): Promise<{}>;
    DeleteRouteEntry(query: {
        "RegionId"?: string;
        "DestinationCidrBlock": string;
        "NextHopList"?: string[];
        "OwnerId"?: number;
        "RouteTableId": string;
        "NextHopId"?: string;
    }): Promise<{}>;
    DeleteRouterInterface(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    DeleteVirtualBorderRouter(query: {
        "RegionId": string;
        "VbrId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    DeleteVpc(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VpcId": string;
    }): Promise<{}>;
    DescribeAccessPoints(query: {
        "RegionId": string;
        "Filter"?: string[];
        "OwnerId"?: number;
        "Type"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeBandwidthPackages(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "BandwidthPackageId"?: string;
        "NatGatewayId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeClusters(query: {
        "RegionId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeEipAddresses(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "Status"?: string;
        "EipAddress"?: string;
        "AllocationId"?: string;
        "ISP"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Filter.1.Key"?: string;
        "Filter.2.Key"?: string;
        "Filter.1.Value"?: string;
        "Filter.2.Value"?: string;
        "LockReason"?: string;
        "AssociatedInstanceType"?: string;
        "AssociatedInstanceId"?: string;
        "ChargeType"?: string;
    }): Promise<{}>;
    DescribeFleetInstances(query: {
        "RegionId": string;
        "FleetId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeInstanceVncPasswd(query: {
        "RegionId": string;
        "InstanceId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeLimitation(query: {
        "RegionId"?: string;
        "Limitation": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeNatGateways(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "NatGatewayId"?: string;
        "VpcId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeNewProjectEipMonitorData(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AllocationId": string;
        "Period"?: number;
    }): Promise<{}>;
    DescribePhysicalConnections(query: {
        "RegionId": string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Filter"?: string[];
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    DescribeReservedInstances(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "ZoneId"?: string;
        "ReservedInstanceId"?: string[];
        "ReservedInstanceName"?: string;
        "Status"?: string[];
        "LockReason"?: string;
        "InstanceType"?: string;
        "InstanceTypeFamily"?: string;
        "Scope"?: string;
        "OfferingType"?: string;
    }): Promise<{}>;
    DescribeResourceByTags(query: {
        "RegionId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
        "ResourceType"?: string;
        "Tag"?: string[];
    }): Promise<{}>;
    DescribeRouterInterfaces(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{}>;
    DescribeSnapshotMonitorData(query: {
        "RegionId": string;
        "StartTime": string;
        "EndTime": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "Period"?: number;
    }): Promise<{}>;
    DescribeUserBusinessBehavior(query: {
        "RegionId"?: string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "statusKey": string;
    }): Promise<{}>;
    DescribeVRouters(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "VRouterId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeVSwitches(query: {
        "RegionId"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "ZoneId"?: string;
        "OwnerId"?: number;
        "IsDefault"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeVirtualBorderRouters(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{}>;
    DescribeVirtualBorderRoutersForPhysicalConnection(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "Filter"?: string[];
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeVpcs(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "VpcId"?: string;
        "IsDefault"?: boolean;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    EipFillParams(query: {
        "RegionId"?: string;
        "data": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    EipFillProduct(query: {
        "RegionId"?: string;
        "data": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    EipNotifyPaid(query: {
        "RegionId"?: string;
        "data": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    EnablePhysicalConnection(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "ClientToken": string;
        "OwnerId"?: number;
        "UserCidr"?: string;
    }): Promise<{}>;
    ExportSnapshot(query: {
        "RegionId": string;
        "SnapshotId": string;
        "OssBucket": string;
        "OwnerId"?: number;
        "RoleName"?: string;
    }): Promise<{}>;
    ImportSnapshot(query: {
        "RegionId": string;
        "SnapshotName": string;
        "OssBucket": string;
        "OssObject": string;
        "OwnerId"?: number;
        "RoleName"?: string;
    }): Promise<{}>;
    ModifyBandwidthPackageSpec(query: {
        "RegionId": string;
        "BandwidthPackageId": string;
        "Bandwidth": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyEipAddressAttribute(query: {
        "RegionId"?: string;
        "Bandwidth": string;
        "OwnerId"?: number;
        "AllocationId": string;
    }): Promise<{}>;
    ModifyFleet(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "FleetId"?: string;
        "ExcessCapacityTerminationPolicy"?: string;
        "DefaultTargetCapacityType"?: string;
        "TerminateInstancesWithExpiration"?: boolean;
        "MaxSpotPrice"?: number;
        "TotalTargetCapacity"?: string;
        "OnDemandTargetCapacity"?: string;
        "SpotTargetCapacity"?: string;
    }): Promise<{}>;
    ModifyForwardEntry(query: {
        "RegionId": string;
        "ForwardEntryId": string;
        "ForwardTableId": string;
        "OwnerId"?: number;
        "ExternalIp"?: string;
        "ExternalPort"?: string;
        "InternalIp"?: string;
        "InternalPort"?: string;
        "IpProtocol"?: string;
    }): Promise<{}>;
    ModifyHaVipAttribute(query: {
        "RegionId": string;
        "HaVipId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "Description"?: string;
    }): Promise<{}>;
    ModifyImageShareGroupPermission(query: {
        "RegionId": string;
        "ImageId": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "AddGroup.1"?: string;
        "RemoveGroup.1"?: string;
    }): Promise<{}>;
    ModifyPhysicalConnectionAttribute(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "LineOperator"?: string;
        "bandwidth"?: number;
        "PeerLocation"?: string;
        "PortType"?: string;
        "RedundantPhysicalConnectionId"?: string;
        "Description"?: string;
        "Name"?: string;
        "ClientToken"?: string;
        "OwnerId"?: number;
        "UserCidr"?: string;
        "CircuitCode"?: string;
    }): Promise<{}>;
    ModifyReservedInstanceAttribute(query: {
        "RegionId": string;
        "ReservedInstanceId": string;
        "OwnerId"?: number;
        "ReservedInstanceName"?: string;
        "Description"?: string;
    }): Promise<{}>;
    ModifyReservedInstances(query: {
        "RegionId": string;
        "ReservedInstanceId": string[];
        "OwnerId"?: number;
        "Configuration"?: string[];
    }): Promise<{}>;
    ModifyRouterInterfaceSpec(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "Spec": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    ModifyUserBusinessBehavior(query: {
        "RegionId"?: string;
        "statusValue": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "statusKey": string;
    }): Promise<{}>;
    ModifyVRouterAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VRouterId": string;
        "VRouterName"?: string;
        "Description"?: string;
    }): Promise<{}>;
    ModifyVSwitchAttribute(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VSwitchName"?: string;
        "VSwitchId": string;
        "Description"?: string;
    }): Promise<{}>;
    ModifyVirtualBorderRouterAttribute(query: {
        "RegionId": string;
        "VbrId": string;
        "VlanId"?: number;
        "CircuitCode"?: string;
        "LocalGatewayIp"?: string;
        "PeerGatewayIp"?: string;
        "PeeringSubnetMask"?: string;
        "Description"?: string;
        "Name"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    PurchaseReservedInstancesOffering(query: {
        "RegionId": string;
        "InstanceType": string;
        "OwnerId"?: number;
        "ResourceGroupId"?: string;
        "ZoneId"?: string;
        "ReservedInstanceName"?: string;
        "Scope"?: string;
        "InstanceAmount"?: number;
        "OfferingType"?: string;
        "Description"?: string;
        "Period"?: number;
        "PeriodUnit"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
    ReActivateInstances(query: {
        "RegionId"?: string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    RecoverVirtualBorderRouter(query: {
        "RegionId": string;
        "VbrId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    ReleasePublicIpAddress(query: {
        "RegionId"?: string;
        "PublicIpAddress": string;
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    TerminatePhysicalConnection(query: {
        "RegionId": string;
        "PhysicalConnectionId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    UnassociateEipAddress(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OwnerId"?: number;
        "AllocationId": string;
        "InstanceType"?: string;
    }): Promise<{}>;
    TerminateVirtualBorderRouter(query: {
        "RegionId": string;
        "VbrId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "UserCidr"?: string;
    }): Promise<{}>;
    RunCommand(query: {
        "RegionId": string;
        "Name": string;
        "Type": string;
        "CommandContent": string;
        "InstanceId": string[];
        "SourceRegionId"?: string;
        "OwnerId"?: number;
        "Description"?: string;
        "WorkingDir"?: string;
        "Timeout"?: number;
        "EnableParameter"?: boolean;
        "Timed"?: boolean;
        "Frequency"?: string;
        "Parameters"?: string;
        "KeepCommand"?: boolean;
        "ContentEncoding"?: string;
    }): Promise<{}>;
}
export default ECS;
