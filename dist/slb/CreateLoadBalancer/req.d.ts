interface CreateLoadBalancerRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 负载均衡实例的网络类型。取值：
    * - **internet**：创建公网负载均衡实例后，系统会分配一个公网IP地址，可以转发公网请求。
    * - **intranet**：创建内网负载均衡实例后，系统会分配一个内网IP地址，仅可转发内网请求。
    * @example `internet`
    */ "AddressType"?: string;
    /**
    * * paybybandwidth：按带宽计费。
    * @example `paybytraffic`
    */ "InternetChargeType"?: string;
    /**
    * 监听的带宽峰值。
    * @example `10`
    */ "Bandwidth"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
    * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
    */ "ClientToken"?: string;
    /**
    * 负载均衡实例的名称。
    * 长度为2-128个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * 不指定该参数时，默认由系统分配一个实例名称。
    * @example `abc`
    */ "LoadBalancerName"?: string;
    /**
    * 负载均衡实例的所属的VPC ID。
    * @example `vpc-bp1aevy8sofi8mh1*****`
    */ "VpcId"?: string;
    /**
    * 专有网络实例的所属交换机ID。
    * 创建专有网络类型的负载均衡实例，必须指定该参数。如果指定了该参数，**AddessType**参数的值会默认被设置为**intranet**。
    * @example `vsw-bp12mw1f8k3jgy*****`
    */ "VSwitchId"?: string;
    /**
    * 负载均衡实例的主可用区ID。
    * 您可以通过调用[DescribeZone](~~27585~~)接口可查到相应地域下的主备可用区信息。
    * @example `cn-hangzhou-b`
    */ "MasterZoneId"?: string;
    /**
    * 负载均衡实例的备可用区ID。
    * 您可以通过调用[DescribeZone](~~27585~~)接口可查到相应地域下的主备可用区信息。
    * @example `cn-hangzhou-d`
    */ "SlaveZoneId"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
    "EnableVpcVipFlow"?: string;
    /**
    * 负载均衡实例的规格。取值：
    * - slb.s1.small
    * - slb.s2.small
    * - slb.s2.medium
    * - slb.s3.small
    * - slb.s3.medium
    * - slb.s3.large
    * 每个地域支持的规格不同。
    * 目前支持性能保障型实例的地域有：华北 1（青岛）、华北 2（北京）、华东 1（杭州）、华东 2（上海）、华南 1（深圳）、华北 3（张家口）、华北 5 （呼和浩特）、亚太东南 1（新加坡）、英国（伦敦）、欧洲中部 1（法兰克福）、亚太东南 2（悉尼）、亚太东南 3（吉隆坡）、中东东部 1（迪拜）、亚太东南 5（雅加达）、美西 1（硅谷）、亚太南部 1（孟买）、亚太东北 1（东京）、香港和美东 1（弗吉尼亚）。关于每种规格的说明，参见[性能保障型实例](~~85931~~)。
    * > 若不指定规格，则创建性能共享型实例。
    * @example `slb.s2.small`
    */ "LoadBalancerSpec"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rtopt****`
    */ "ResourceGroupId"?: string;
    /**
    * * **PrePay**：预付费。
    * @example `PayOnDemand`
    */ "PayType"?: string;
    /**
    * 预付费公网实例的计费周期，取值：**month|year**
    * <note>仅适用于中国站。</note>
    * @example `month`
    */ "PricingCycle"?: string;
    /**
    * 预付费公网实例的购买时长，取值：
    *
    * * 如果**PricingCycle**为**month**，取值为**1~9**。
    * * 如果**PricingCycle**为**year**，取值为**1~3**。
    * > 该参数仅适用于中国站。
    * @example `1`
    */ "Duration"?: number;
    /**
    * 是否是自动支付预付费公网实例的账单。
    * 取值：**true|false（默认）**。
    * > 该参数仅适用于中国站。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 负载均衡实例的IP版本，可以设置为ipv4或者ipv6。
    * @example `ipv4`
    */ "AddressIPVersion"?: string;
    /**
    * 指定负载均衡实例的私网IP地址，该地址必须包含在交换机的目标网段下。
    * @example `192.168.0.1`
    */ "Address"?: string;
    "Ratio"?: number;
    /**
    * 是否开启实例删除保护。
    * @example `on`
    */ "DeleteProtection"?: string;
    "CloudType"?: string;
}
export { CreateLoadBalancerRequest };