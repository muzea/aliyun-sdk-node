interface DescribeIpv6AddressesRequest {
    /**
    * IPv6地址所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6地址实例的ID。每次调用最多可以输入20个实例ID，以逗号（,）分隔。
    * @example `ipv6gw-hp33of4uz4k4kxxxxxxxx`
    */ "Ipv6AddressId"?: string;
    /**
    * 要查询的IPv6地址。
    * @example `2408:xxxx:180:1701:94c7:bc38:3bfa:d2c`
    */ "Ipv6Address"?: string;
    /**
    * IPv6地址的名称。
    * @example `test`
    */ "Name"?: string;
    /**
    * IPv6地址关联的实例ID。
    * @example `i-123456xxxxxxxx`
    */ "AssociatedInstanceId"?: string;
    /**
    * IPv6地址所关联的实例类型，取值：
    * **EcsInstance**（默认值）：VPC类型的ECS。
    * @example `EcsInstance`
    */ "AssociatedInstanceType"?: string;
    /**
    * IPv6地址的通信能力类型，取值：
    * - **Private**：私网通信类型。
    * - **Public**：公网通信类型。
    * @example `Public`
    */ "NetworkType"?: string;
    /**
    * IPv6地址所在的VPC ID。
    * @example `vpc-123456xxxxxxxx`
    */ "VpcId"?: string;
    /**
    * IPv6地址所在的交换机ID。
    * @example `vsw-123456xxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * IPv6地址的公网带宽。
    * @example `1`
    */ "Ipv6InternetBandwidthId"?: string;
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
export { DescribeIpv6AddressesRequest };