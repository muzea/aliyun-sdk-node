interface UnassociateRouteTableRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由表ID。
    * @example `vtb-bp145q7glnuzdvzu2****`
    */ "RouteTableId": string;
    /**
    * 要解绑的交换机ID。
    * @example `vsw-25naue4****`
    */ "VSwitchId": string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { UnassociateRouteTableRequest };