export interface DescribeCustomizedListHeadersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表类型。
     * @example `desktop`
     */
    "ListType"?: string;
    /**
     * 导出云电脑列表的语言类型。
     * @example `zh-CN`
     */
    "LangType"?: string;
}
