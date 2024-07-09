export interface DescribeScdnCcTopIpRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 单页显示数量，不写默认值**30**。
     * @example `2`
     */
    "PageSize"?: string;
    /**
     * 页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 开始时间。日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh: mm:ssZ。
     * @example `2017-11-30T00:55:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。
     *  格式为：YYYY-MM-DDThh: mm:ssZ。
     * @example `2017-11-30T0 1:00:00Z`
     */
    "EndTime": string;
}
