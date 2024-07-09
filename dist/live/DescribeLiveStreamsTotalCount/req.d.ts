export interface DescribeLiveStreamsTotalCountRequest {
    /**
     * 推流域名或播放域名，查域名级别数据时必传。最多支持10个域名批量查询，多个域名用半角逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 不传，默认查域名级别的数据。传aliuid查UID维度的数据。
     * @example `aliuid`
     */
    "Typ"?: string;
    /**
     * 起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > 支持最大的查询范围是最近1.5年。
     * @example `2023-07-24T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。需晚于开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > StartTime和EndTime时间间隔在15天内，且EndTime不超过当前时间。当天数据第二天才查询。
     * @example `2023-07-25T16:00:00Z`
     */
    "EndTime": string;
}
