interface DeleteRouteTableRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由表ID。
    * @example `vtb-bp145q7glnuzdvzu2****`
    */ "RouteTableId": string;
    "OwnerId"?: number;
}
export { DeleteRouteTableRequest };