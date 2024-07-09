export interface AssociateRouteTableRequest {
    /**
     * 要绑定交换机的路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要绑定到交换机的路由表的ID。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId": string;
    /**
     * 要绑定路由表的交换机的ID。
     * @example `vsw-25ncdvfaue4****`
     */
    "VSwitchId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
}
