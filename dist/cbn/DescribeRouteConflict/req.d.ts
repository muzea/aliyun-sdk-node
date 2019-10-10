interface DescribeRouteConflictRequest {
    "RegionId"?: string;
    /**
    * 网络实例的ID。
    * @example `vpc-bp18sth14qii3pn****`
    */ "ChildInstanceId": string;
    /**
    * 指定路由器类型，取值：
    * - **VRouter**：虚拟路由器。
    * - **VBR**：边界路由器。
    * @example `VBR`
    */ "ChildInstanceType": string;
    /**
    * 指定地域的ID。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    /**
    * 路由表的ID。
    * @example `vtb-bp174d1gje79u1g4t****`
    */ "ChildInstanceRouteTableId": string;
    "OwnerId"?: number;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页包含的条目数。
    * @example `2`
    */ "PageSize"?: number;
    /**
    * 目标网段的CIDR地址块。
    * @example `172.16.xx.xx/24`
    */ "DestinationCidrBlock"?: string;
}
export { DescribeRouteConflictRequest };