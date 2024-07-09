export interface DescribeVsDomainPvUvDataRequest {
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 起始时间，UTC格式，例如：2016-06-29T19:00:00Z
     * @example `2021-10-14T23:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，UTC格式，例如：2016-06-30T19:00:00Z
     * @example `2021-11-24T00:00:00Z`
     */
    "EndTime"?: string;
}
