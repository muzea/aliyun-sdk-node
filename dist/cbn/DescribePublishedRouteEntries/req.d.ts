interface DescribePublishedRouteEntriesRequest {
    "RegionId"?: string;
    /**
    * 需要查询的云企业网ID。
    * @example `cen-7qthudw0ll6jm****`
    */ "CenId": string;
    /**
    * 网络实例ID。
    * @example `vpc-bp18sth14qii3pnv****`
    */ "ChildInstanceId": string;
    /**
    * 网络实例类型，取值：
    * - **VPC**：专有网络。
    * - **VBR**：边界路由器接口。
    * - **CCN**：云连接网。
    * @example `VPC`
    */ "ChildInstanceType": string;
    /**
    * 需要查询的地域ID。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `2`
    */ "PageSize"?: number;
    /**
    * 网络实例的路由表ID。
    * @example `vtb-bp174d1gje79u1g4****`
    */ "ChildInstanceRouteTableId"?: string;
    /**
    * 要查询的网段。
    * @example `172.xx.xx.xx/24`
    */ "DestinationCidrBlock"?: string;
}
export { DescribePublishedRouteEntriesRequest };