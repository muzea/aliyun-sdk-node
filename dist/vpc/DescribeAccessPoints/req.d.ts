export interface DescribeAccessPointsRequest {
    /**
     * 接入点所在的地域ID。
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
    /**
     * 返回值语言，取值：
     * - **zh-CN**：中文。
     * - **en-US**（默认值）：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
