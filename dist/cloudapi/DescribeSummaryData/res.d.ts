export interface DescribeSummaryDataResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    /**
     * API分组的数量
     * @example `1`
     */
    UsageGroupNum: number;
    /**
     * 运行中的专享实例数量
     * @example `1`
     */
    UsageInstanceNum: number;
    /**
     * API的数量
     * @example `10`
     */
    UsageApiNum: number;
    /**
     * 地区
     * @example `cn-hangzhou`
     */
    Region: string;
    /**
     * 14天内将要过期的预付费专享实例的数量
     * @example `1`
     */
    ExpireInstanceNum: number;
}
