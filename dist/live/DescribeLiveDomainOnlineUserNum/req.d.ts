export interface DescribeLiveDomainOnlineUserNumRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 查询的时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2018-12-27T13:09:21Z`
     */
    "QueryTime"?: string;
}
