interface CreateScalingConfigurationRequest {
    "RegionId"?: string;
    /**
    * 伸缩配置所属的伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 镜像文件ID，自动创建实例时使用的镜像资源。
    * @example `centos6u5_64_20G_aliaegis****.vhd`
    */ "ImageId"?: string;
    /**
    * 镜像文件名称，同一个地域内镜像名称唯一。如果设置了ImageId， ImageName将被忽略。
    * 不支持通过ImageName设置镜像市场镜像。
    * @example `myimage`
    */ "ImageName"?: string;
    /**
    * ECS实例的实例规格，更多信息请参见[实例规格族](~~25378~~)。
    * @example `ecs.t1.xsmall`
    */ "InstanceType"?: string;
    /**
    * vCPU个数。
    * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
    * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
    * @example `2`
    */ "Cpu"?: number;
    /**
    * 内存大小。
    * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
    * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
    * @example `16`
    */ "Memory"?: number;
    /**
    * ECS实例所属的部署集的ID。
    * @example `ds-bp1frxuzdg87zh4pz****`
    */ "DeploymentSetId"?: string;
    "InstanceTypes"?: string[];
    /**
    * ECS实例所属的安全组的ID，同一个安全组内的ECS实例可以互相访问。
    * @example `sg-280ih****`
    */ "SecurityGroupId"?: string;
    /**
    * 是否为I/O优化实例。[已停售的实例规格](~~55263~~)实例默认值是none，其他实例规格默认值是optimized。取值范围：
    * - none：非I/O优化实例。
    * - optimized：I/O优化实例。
    * @example `optimized`
    */ "IoOptimized"?: string;
    /**
    * 网络计费类型，取值范围：
    * - PayByBandwidth：按带宽计费。此时InternetMaxBandwidthOut即为所选的固定带宽值。
    * - PayByTraffic：按流量计费。此时InternetMaxBandwidthOut只是一个带宽上限，计费以实际产生的网络流量为依据。
    * 如果未指定该参数，经典网络下默认值为PayByBandwidth，专有网络VPC下默认值为PayByTraffic。
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 公网入带宽最大值，单位为Mbps (Mega bit per second)，取值范围：1~200。
    * 如果您没有指定该参数，则入带宽将自动被设置为200Mbps。实例的入数据流量免费，该参数在任何情况下都不涉及计费。
    * @example `100`
    */ "InternetMaxBandwidthIn"?: number;
    /**
    * 公网出带宽最大值，单位为Mbps (Mega bit per second)，取值范围：
    * - 按带宽计费：0~100，如果您没有指定该参数，则出带宽将自动被设置为0Mbps。
    * - 按流量计费：0~100，如果您没有指定该参数，则会出现报错。
    * @example `50`
    */ "InternetMaxBandwidthOut"?: number;
    /**
    * 系统盘的磁盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * InstanceType为系列I的实例规格且实例属于非I/O优化实例时，默认值：cloud。否则，默认值：cloud_efficiency。
    * @example `cloud_ssd`
    */ "SystemDisk.Category"?: string;
    /**
    * 系统盘的大小，单位：GiB。取值范围：
    * - cloud：40~500
    * - cloud_efficiency：40~500
    * - cloud_ssd：40~500
    * - ephemeral_ssd：40~500
    * 默认值：max{40, ImageSize}。
    * 指定该参数后，系统盘大小必须 ≥ max{40, ImageSize}。
    * @example `100`
    */ "SystemDisk.Size"?: number;
    /**
    * 系统盘的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `cloud_ssdSystem`
    */ "SystemDisk.DiskName"?: string;
    /**
    * 系统盘的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
    * @example `FinanceDept`
    */ "SystemDisk.Description"?: string;
    /**
    * 伸缩配置的名称，2~40个英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。
    * 在同一地域下同一伸缩组内伸缩配置名称唯一。如果您没有指定该参数，则默认使用伸缩配置的ID。
    * @example `测试_sc`
    */ "ScalingConfigurationName"?: string;
    "DataDisk"?: string[];
    /**
    * 后端服务器的权重，取值范围：0~100。
    * 默认值：50。
    * @example `50`
    */ "LoadBalancerWeight"?: number;
    /**
    * ECS实例的标签。标签以键值对方式传入，最多可以使用5组标签。Key和Value的使用要求如下：
    *
    * - Key最多支持64个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。一旦使用标签，Key不允许为空字符串。
    * - Value最多支持128个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。Value可以为空字符串。
    * @example `{"key1":"value1","key2":"value2", ... "key5":"value5"}`
    */ "Tags"?: string;
    /**
    * ECS实例的自定义数据，需要以Base64方式编码，编码前的原始数据最多为16KB。
    * @example `echo hello ecs!`
    */ "UserData"?: string;
    /**
    * 登录ECS实例时使用的密钥对的名称。
    *
    * - 对Windows实例，该参数将被忽略，默认为空。
    * - 对Linux实例，密码登录方式会被初始化成禁止。
    * @example `KeyPairTest`
    */ "KeyPairName"?: string;
    /**
    * ECS实例的RAM角色名称。RAM角色名称由RAM提供和维护，您可调用[ListRoles](~~28713~~)查询可用的RAM角色。创建RAM角色的方法请参见[CreateRole](~~28710~~)。
    * @example `RamRoleTest`
    */ "RamRoleName"?: string;
    /**
    * 是否开启安全加固。取值范围：
    * - Active：启用安全加固，只对公共镜像生效。
    * - Deactive：不启用安全加固，对所有镜像类型生效。
    * @example `Active`
    */ "SecurityEnhancementStrategy"?: string;
    /**
    * 使用本伸缩配置自动创建的ECS实例的名称。
    * @example `Instance****`
    */ "InstanceName"?: string;
    /**
    * 云服务器的主机名。点号（.）或连字符（-）不能作为首尾字符，不能连续使用点号（.）或连字符（-）。另外，不同类型实例的命名要求如下：
    * - Windows实例：主机名长度为2~15，可以包含大小写字母、数字和连字符（-）。不能包含点号（.），不能全是数字。
    * - 其他类型实例（Linux等）：主机名长度为2~64，可以包含多个点号（.）。两个点号（.）之间为一段，每段可以包含大小写字母、数字和连字符（-）。
    * @example `Host****`
    */ "HostName"?: string;
    /**
    * 后付费实例的抢占策略。取值范围：
    *
    * - NoSpot：普通的按量付费实例。
    * - SpotWithPriceLimit：设置上限价格的抢占式实例。
    * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
    * 默认值：NoSpot。
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    /**
    * 是否使用镜像预设的密码。使用该参数时，您需要确保使用的镜像已经设置了密码。
    * @example `false`
    */ "PasswordInherit"?: boolean;
    "SpotPriceLimit"?: string[];
    /**
    * ECS实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
    * ```()` ~!@#$%^&*-_+=\|{}[]:;'<>,.?/```
    * 其中，Windows实例不能以斜线号（/）为密码首字符。
    * > 如果传入Password参数，建议您使用HTTPS协议发送请求，避免密码泄露。
    * @example `123-abcABC`
    */ "Password"?: string;
    /**
    * ECS实例所属资源组的ID。
    * @example `rg-resource****`
    */ "ResourceGroupId"?: string;
    "SecurityGroupIds"?: string[];
    /**
    * ECS实例所属的EHPC集群的ID。
    * @example `hpc-clusterid`
    */ "HpcClusterId"?: string;
    /**
    * ECS实例的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
    * @example `FinaceDept`
    */ "InstanceDescription"?: string;
    "ClientToken"?: string;
}
export { CreateScalingConfigurationRequest };