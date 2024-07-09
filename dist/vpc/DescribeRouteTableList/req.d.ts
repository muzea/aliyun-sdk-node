export interface DescribeRouteTableListRequest {
    /**
     * 要查询的路由表所属的路由器的类型。取值：
     * - **VRouter**（默认值）：VPC路由器。
     * - **VBR**：边界路由器。
     * @example `VRouter`
     */
    "RouterType"?: string;
    /**
     * 要查询的路由表所属路由器的ID。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    "RouterId"?: string;
    /**
     * 要查询的路由表所属的VPC的ID。
     * 指定该参数后，**RouterType**参数的值自动设置为**VRouter**。
     * @example `vpc-bp15zckdt37pq72****`
     */
    "VpcId"?: string;
    /**
     * 要查询的路由表的ID。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId"?: string;
    /**
     * 要查询的路由表的名称。
     * @example `doctest`
     */
    "RouteTableName"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的路由表所属资源组的ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 路由表的类型。
     * - **System**：系统路由表。
     * - **Custom**：自定义路由表。
     * @example `System`
     */
    "RouteTableType"?: string;
}
