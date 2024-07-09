export interface DescribeDcdnDomainRealTimeHttpCodeDataRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 运营商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)接口获取，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)接口获取，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
}
