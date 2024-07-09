export interface DescribeCacheAnalysisReportResponse {
    /**
     * 当前页的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示的最大记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A057C066-C3F5-4CC9-9FE4-A8D8B0DC****`
     */
    RequestId: string;
    /**
     * 当前页显示的记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 所有页的记录总数。
     * @example `160`
     */
    TotalRecordCount: number;
    /**
     * 大key列表。
     */
    BigKeys: any[];
    /**
     * 热点key列表。
     * > 暂不支持热点key分析，无返回值。
     */
    HotKeys: any[];
}
