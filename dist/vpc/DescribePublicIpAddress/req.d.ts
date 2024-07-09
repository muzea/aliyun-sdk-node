export interface DescribePublicIpAddressRequest {
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。
     * 取值范围：**1**~**100**。默认值：**100**。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 指定查询的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
