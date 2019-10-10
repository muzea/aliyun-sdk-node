interface CreateLaunchTemplateRequest {
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
    * 镜像来源。取值范围：
    * - system：阿里云提供的公共镜像。
    * - self：您创建的自定义镜像。
    * - others：其他阿里云用户共享给您的镜像。
    * -
    * - marketplace：[镜像市场](https://market.aliyun.com/)提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。
    * 默认值：空，空表示返回取值为system、self以及others的结果。
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
    * 实例的计费方式。取值范围：
    * - PrePaid：包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付和信用支付，否则将返回`InvalidPayMethod`的错误提示。
    * -
    * -
    * - PostPaid：按量付费。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 购买资源的时长，单位为：月。当参数`InstanceChargeType`取值为 `PrePaid`时才生效且为必选值。一旦指定了DedicatedHostId，则取值范围不能超过专有宿主机的订阅时长。取值范围：
    * -   `PeriodUnit=Week`时，Period取值：{“1”, “2”, “3”, “4”}
    * -   `PeriodUnit=Month`时，Period取值：{ “1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “12”, “24”, “36”,”48”,”60”}
    * @example `1`
    */ "Period"?: number;
    /**
    * 网络计费方式。取值范围：
    * - PayByBandwidth：按固定带宽计费
    * - PayByTraffic：按使用流量计费
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
}
export { CreateLaunchTemplateRequest };