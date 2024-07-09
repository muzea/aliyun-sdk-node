export interface DescribeScdnDomainUvDataRequest {
    /**
     * 需要查询的加速域名，只支持一个域名，不写查询当前账号下所有域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * - 最小数据粒度为1小时。
     * - 不写默认读取过去24小时数据。
     * @example `2015-11-29T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * > 结束时间需晚于起始时间。
     * @example `2015-11-30T00:00:00Z`
     */
    "EndTime"?: string;
}
