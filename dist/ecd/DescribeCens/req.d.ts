export interface DescribeCensRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每页最大行数。
     * 默认值：50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
