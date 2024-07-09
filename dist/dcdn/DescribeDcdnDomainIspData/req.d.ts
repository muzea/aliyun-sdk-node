export interface DescribeDcdnDomainIspDataRequest {
    /**
     * 加速域名，仅支持查询单个域名。
     * 默认查询当前用户下所有域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2019-12-05T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-12-06T12:00:00Z`
     */
    "EndTime"?: string;
}
