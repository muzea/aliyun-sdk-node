interface DescribeRouteTableListRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由表所属的路由器类型。取值：
    * - **VRouter（默认值）**：VPC路由器
    * - **VBR**：边界路由器
    * @example `VBR`
    */ "RouterType"?: string;
    /**
    * 路由表所属路由器的ID。
    * @example `vrt-bp1lhl0taikrteen8****`
    */ "RouterId"?: string;
    /**
    * 路由表所属的VPC路由器的ID。
    * 指定该参数后，参数**RouterType**的值自动设置为**VRouter**。
    * @example `vpc-bp15zckdt37pq72****`
    */ "VpcId"?: string;
    /**
    *  路由表的ID。
    * @example `vtb-bp145q7glnuzdvzu2****`
    */ "RouteTableId"?: string;
    /**
    * 路由表的名称。
    * @example `doctest`
    */ "RouteTableName"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 资源组ID。
    * @example `rg-acfmxazb4ph****`
    */ "ResourceGroupId"?: string;
    "Tag"?: string[];
    "OwnerId"?: number;
}
export { DescribeRouteTableListRequest };