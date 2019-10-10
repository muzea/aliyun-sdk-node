interface DescribeIpv6EgressOnlyRulesRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6网关的ID。
    * @example `ipv6gw-123456xxxxxxxx`
    */ "Ipv6GatewayId": string;
    /**
    * 要查看的仅主动出规则ID。
    * @example `ipv6gwpy-123456xxxxxxxx`
    */ "Ipv6EgressOnlyRuleId"?: string;
    /**
    * 规则名称。
    * @example `rulename`
    */ "Name"?: string;
    /**
    * 需要设置仅主动出规则的实例类型，取值：
    *  **Ipv6Address**：IPv6地址。
    * @example `Ipv6Address`
    */ "InstanceType"?: string;
    /**
    * 设置了仅主动出规则的IPv6地址关联的实例ID。
    * @example `i-123456xxxxxxxx`
    */ "InstanceId"?: string;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    "OwnerId"?: number;
}
export { DescribeIpv6EgressOnlyRulesRequest };