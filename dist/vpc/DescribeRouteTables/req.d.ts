export interface DescribeRouteTablesRequest {
    /**
     * 要查询的路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId"?: string;
    /**
     * 要查询的路由器的ID。
     * >**VRouterId**，**RouteTableId**，**RouterId**和**RouteTableName**参数至少需要输入一个，但是不能同时输入**VRouterId**和**RouterId**参数。
     * @example `vrt-bp1lhl0taikrteen****`
     */
    "VRouterId"?: string;
    /**
     * 要查询的路由表的ID。
     * >**VRouterId**，**RouteTableId**，**RouterId**和**RouteTableName**参数至少需要输入一个，但是不能同时输入**VRouterId**和**RouterId**参数。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId"?: string;
    /**
     * 要查询的路由表所属的路由器的类型。取值：
     * - **VRouter**（默认值）：VPC路由器。
     * - **VBR**：边界路由器。
     * @example `VRouter`
     */
    "RouterType"?: string;
    /**
     * 要查询的路由表所属路由器的ID。
     * >**VRouterId**，**RouteTableId**，**RouterId**和**RouteTableName**参数至少需要输入一个，但是不能同时输入**VRouterId**和**RouterId**参数。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    "RouterId"?: string;
    /**
     * 要查询的路由条目的类型。取值：
     * - **Custom**：自定义路由。
     * - **System**：系统路由。
     * - **BGP**：BGP路由。
     * - **CEN**：云企业网CEN（Cloud Enterprise Network）路由。
     * - **ECR**：专线网关路由。
     * @example `Custom`
     */
    "Type"?: string;
    /**
     * 要查询的路由表的名称。
     * 名称长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * >**VRouterId**，**RouteTableId**，**RouterId**和**RouteTableName**参数至少需要输入一个，但是不能同时输入**VRouterId**和**RouterId**参数。
     * @example `doctest`
     */
    "RouteTableName"?: string;
    /**
     * 要查询的路由表所属资源组的ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 列表的页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
