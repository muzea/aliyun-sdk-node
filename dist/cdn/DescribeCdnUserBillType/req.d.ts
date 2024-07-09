export interface DescribeCdnUserBillTypeRequest {
    /**
     * 获取数据起始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 最小数据粒度为5分钟。
     * @example `2018-09-30T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2018-10-31T16:00:00Z`
     */
    "EndTime": string;
}
