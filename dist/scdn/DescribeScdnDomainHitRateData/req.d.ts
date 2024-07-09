export interface DescribeScdnDomainHitRateDataRequest {
    /**
     * 需要查询的加速域名，只支持一个域名，不写代表所有。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。
     * - 日期格式按照ISO8601表示法，并使用UTC时间
     * - 格式为：YYYY-MM-DDThh:mm:ssZ
     * - 最小数据粒度为5分钟
     * - 不写默认读取过去24小时数据
     * @example `2018-03-02T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * - 结束时间需大于起始时间
     * - 获日期格式按照ISO8601表示法，并使用UTC时间
     * - 格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2018-03-02T15:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，支持300、 3600和86400秒。
     * - 3天以内（不包含3天整）支持300、 3600、 86400。
     * - 3-31天（不包含31天整）支持3600和86400。
     * - 31天以上支持86400。
     * - 不传和传的值不支持时，使用默认值。
     * @example `300`
     */
    "Interval"?: string;
}
