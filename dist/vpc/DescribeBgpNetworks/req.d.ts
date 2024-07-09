export interface DescribeBgpNetworksRequest {
    /**
     * 边界路由器ID。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    "RouterId"?: string;
    /**
     * BGP组所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
