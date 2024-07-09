export interface DescribeLiveDomainFrameRateAndBitRateDataRequest {
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 查询时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-02-21T08:00:00Z`
     */
    "QueryTime": string;
}
