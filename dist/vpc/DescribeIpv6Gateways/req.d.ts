interface DescribeIpv6GatewaysRequest {
    /**
    * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6网关的ID。
    * @example `ipv6gw-123456xxxxxxxx`
    */ "Ipv6GatewayId"?: string;
    /**
    * IPv6网关关联的VPC ID。
    * @example `vpc-123456xxxxxxxx`
    */ "VpcId"?: string;
    /**
    * IPv6网关的名称。
    * @example `ipv6GW`
    */ "Name"?: string;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页包含的条目数。
    * @example `10`
    */ "PageSize"?: number;
    "OwnerId"?: number;
}
export { DescribeIpv6GatewaysRequest };