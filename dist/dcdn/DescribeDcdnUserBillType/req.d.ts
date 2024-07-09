export interface DescribeDcdnUserBillTypeRequest {
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2018-09-30T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * 结束时间需大于起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2018-10-31T16:00:00Z`
     */
    "EndTime": string;
}
