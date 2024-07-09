export interface DescribeDcdnDomainRealTimeBpsDataRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 运营商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)接口获取，默认查询所有运营商。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 地域商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)接口获取，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 获取数据的开始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-01-02T11:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-01-02T11:00:00Z`
     */
    "EndTime"?: string;
}
