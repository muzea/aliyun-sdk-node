export interface DescribeDomainRealTimeHttpCodeDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔。
     * > 一次最多可以传100个域名。
     * @example `example.com,example.org`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:39:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-11-30T05:40:00Z`
     */
    "EndTime"?: string;
    /**
     * 运营商英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)获得，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)获得，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
}
