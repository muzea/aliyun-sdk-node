interface DescribeRouteTablesRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 路由表所属的VPC路由器的ID。
    * 指定该参数后，参数**RouterType**的值自动设置为**VRouter**。
    * @example `vtb-bp1krxxzp0c29fmon****`
    */ "VRouterId"?: string;
    /**
    *  路由表的ID。
    * @example `rtb-bp12mw1f8k3jgygk9****`
    */ "RouteTableId"?: string;
    /**
    * 路由表所属的路由器类型。取值：
    * - **VRouter**：VPC路由器
    *
    * - **VBR**：边界路由器
    * @example `VRouter`
    */ "RouterType"?: string;
    /**
    *  路由表所属的VPC路由器或边界路由器的ID。
    * @example `vtb-bp1krxxzp0c29fmon****`
    */ "RouterId"?: string;
    /**
    * 路由表类型。
    * @example `custom`
    */ "Type"?: string;
    /**
    * 路由表的名称。
    * @example `RouteTable-1`
    */ "RouteTableName"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmxazb4ph****`
    */ "ResourceGroupId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeRouteTablesRequest };