interface AssignIpv6AddressesRequest {
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
}
export { AssignIpv6AddressesRequest };