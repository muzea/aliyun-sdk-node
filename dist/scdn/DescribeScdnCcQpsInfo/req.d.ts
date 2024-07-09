export interface DescribeScdnCcQpsInfoRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh: mm:ssZ。
     * @example `2017-11-30T00:55:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh: mm:ssZ。
     * @example `2017-11-30T00:55:00Z`
     */
    "EndTime": string;
}
