export interface DescribeLiveStreamTranscodeMetricDataRequest {
    /**
     * 域名名称。仅支持单个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-06-11T02:46:40Z`
     */
    "StartTime": string;
    /**
     * 结束时间。需晚于开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2023-06-11T03:46:40Z`
     */
    "EndTime": string;
    /**
     * 应用名称。
     * @example `app`
     */
    "AppName"?: string;
    /**
     * 流的名称。
     * @example `stream`
     */
    "StreamName"?: string;
    /**
     * 分页查询token，每次查询最多返回5000行数据，当要查询的数据超过5000行时，响应数据会提供下次查询数据的起始索引。
     * 请求时传入该token，将从上一次查询结束的下一行继续查询未获取的数据。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=`
     */
    "NextPageToken"?: string;
}
