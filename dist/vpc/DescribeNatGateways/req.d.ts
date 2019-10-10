interface DescribeNatGatewaysRequest {
    /**
    *  NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  NAT网关的ID。
    * @example `ngw-bp1uewa15k4iy5770xxxx`
    */ "NatGatewayId"?: string;
    /**
    *  VPC的ID。
    * @example `vpc-bp15zckdt37pq72zxxxx`
    */ "VpcId"?: string;
    /**
    * NAT网关的名称。
    * @example `NAT网关名称`
    */ "Name"?: string;
    /**
    * 实例的付费方式。目前仅支持按量付费。
    * PostPaid：按量付费。
    * @example `PostPaid`
    */ "InstanceChargeType"?: string;
    /**
    * NAT网关的规格。取值：
    * - **Small(默认值)**：小型
    * - **Middle**：中型
    * - **Large**：大型
    * - **XLarge.1**：超大型
    * @example `Large`
    */ "Spec"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `1`
    */ "PageSize"?: number;
}
export { DescribeNatGatewaysRequest };