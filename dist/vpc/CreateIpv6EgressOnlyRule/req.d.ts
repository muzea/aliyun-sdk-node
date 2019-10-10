interface CreateIpv6EgressOnlyRuleRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6网关的ID。
    * @example `ipv6gw-hp3c2paq0ywauxxxxxxxx`
    */ "Ipv6GatewayId": string;
    /**
    * 需要设置仅主动出规则的IPv6地址所关联的ECS实例ID。
    * @example `i-hp39cmfr1x6zxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 需要设置仅主动出规则的实例类型，取值：
    * **Ipv6Address**（默认值）：IPv6地址。
    * @example `IPv6Address`
    */ "InstanceType"?: string;
    /**
    * 仅主动出规则的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
    * @example `rulename`
    */ "Name"?: string;
    /**
    * 仅主动出规则的描述。
    * 长度为2-256个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
    * @example `ruledescription`
    */ "Description"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreateIpv6EgressOnlyRuleRequest };