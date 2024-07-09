export interface ListStatisticReportResponse {
    /**
     * 数据总条数
     * @example `43`
     */
    totalCount: number;
    /**
     * 请求id
     * @example `F65C8BB2-C14F-5983-888B-41C4E082D3BC`
     */
    requestId: string;
    /**
     * 统计报告
     * - data-quality 参考：[数据采集 - 行为数据上报](~~131547~~)
     * - app、abtest 参考：[CORE 核心类指标](~~187665~~)
     * - app-query 参考：[QUERY_ANALYSIS query分析类指标](~~187665~~)
     * @example `[]`
     */
    result: any[];
}
