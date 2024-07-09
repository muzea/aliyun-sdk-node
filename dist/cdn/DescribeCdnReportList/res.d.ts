export interface DescribeCdnReportListResponse {
    /**
     * 报表列表。
     * @example `"data":[{"reportId":1,"deliver":{"report":{"title":"DomainPvUv","format":"chart","shape":"line","xAxis":"ds","yAxis":"cnt","legend":"cnt_type","header":["ds","cnt_type","cnt"]}}}`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
