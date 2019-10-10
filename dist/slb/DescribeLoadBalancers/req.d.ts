interface DescribeLoadBalancersRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 添加的后端服务器（ECS实例）的ID。
    * @example `vm-231`
    */ "ServerId"?: string;
    /**
    * IP版本，可以设置为ipv4或者ipv6。
    * > 目前支持创建IPv6实例且实例类型必须为性能保障型实例的可用区如下：
    * 华东1地域的E、F两个可用区、华北2地域的F、G两个可用区、华东2地域的所有可用区和华南1地域的D、E两个可用区。
    * @example `ipv4`
    */ "AddressIPVersion"?: string;
    /**
    * 负载均衡实例状态：
    * - inactive: 此状态的实例监听不会再转发流量。
    * - active: 实例创建后，默认状态为active。
    * - locked: 实例已经被锁定。
    * @example `active`
    */ "LoadBalancerStatus"?: string;
    /**
    * 负载均衡实例ID。
    * 支持多值查询，最多可输入10个ID，以逗号分隔。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId"?: string;
    /**
    * 负载均衡实例名称。
    * 支持多值查询，最多可输入10个名称，以逗号分隔。
    * @example `abc1`
    */ "LoadBalancerName"?: string;
    /**
    * 添加的后端服务器（ECS实例）的内网地址。
    * 支持多值查询，以逗号分隔。
    * @example `10.80.102.20`
    */ "ServerIntranetAddress"?: string;
    /**
    * 负载均衡实例的网络类型，取值：**intranet**或**internet**。
    * @example `intranet`
    */ "AddressType"?: string;
    /**
    * 公网类型实例付费方式。取值：**paybybandwidth|paybytraffic**。
    * @example `paybybandwidth`
    */ "InternetChargeType"?: string;
    /**
    * 负载均衡实例所属的VPC ID。
    * @example `vpc-bp1aevy8sofi8mh1qc5cm`
    */ "VpcId"?: string;
    /**
    * 负载均衡实例所属的VSwitch ID。
    * @example `vsw-bp12mw1f8k3jgygk9bmlj`
    */ "VSwitchId"?: string;
    /**
    * 私网负载均衡实例的网络类型，取值：**vpc|classic**。
    * - vpc：专有网络实例
    * - classic：经典网络实例
    * @example `vpc`
    */ "NetworkType"?: string;
    /**
    * 负载均衡实例的服务地址。
    * @example `192.168.0.6`
    */ "Address"?: string;
    /**
    * 负载均衡实例的主可用区ID。
    * @example `cn-hangzhou-b`
    */ "MasterZoneId"?: string;
    /**
    * 负载均衡实例的备可用区ID。
    * 目前对金融云用户暂时不支持多可用区功能。
    * @example `cn-hangzhou-d`
    */ "SlaveZoneId"?: string;
    "access_key_id"?: string;
    /**
    * 负载均衡实例绑定的Tag列表，其结构是一个json dictionary，包含TagKey和TagValue。
    * 一次请求中，List中的元素最多有10个。
    * @example `{"tagKey":"Key1","tagValue":"Value1"}`
    */ "Tags"?: string;
    /**
    * 负载均衡实例付费类型。
    * 取值：**PayOnDemand|PrePay**。
    * @example `PayOnDemand`
    */ "PayType"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-acfmxazb4ph6aiy`
    */ "ResourceGroupId"?: string;
    /**
    * 分页查询时的页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。
    * @example `50`
    */ "PageSize"?: number;
    "Tag"?: string[];
    "Fuzzy"?: string;
}
export { DescribeLoadBalancersRequest };