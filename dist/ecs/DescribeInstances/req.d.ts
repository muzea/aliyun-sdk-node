interface DescribeInstancesRequest {
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
}
export { DescribeInstancesRequest };