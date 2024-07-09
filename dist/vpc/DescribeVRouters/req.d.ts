export interface DescribeVRoutersRequest {
    /**
     * 要查询的路由器的ID。
     * @example `vrt-bp1lhl0taikrteen****`
     */
    "VRouterId"?: string;
    /**
     * 要查询的路由器所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
}
