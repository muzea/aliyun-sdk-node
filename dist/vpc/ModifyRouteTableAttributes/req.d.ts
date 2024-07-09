export interface ModifyRouteTableAttributesRequest {
    /**
     * 路由表的ID。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId": string;
    /**
     * 路由表的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `doctest`
     */
    "RouteTableName"?: string;
    /**
     * 路由表的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `描述信息`
     */
    "Description"?: string;
    /**
     * 路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    "RoutePropagationEnable"?: boolean;
}
