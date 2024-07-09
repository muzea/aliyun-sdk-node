export interface DescribeDomainRealTimeTrafficDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔，一次最多支持100个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 运营商英文名。
     * 您可以调用[DescribeCdnRegionAndIsp](~~91077~~)接口获取。不传该参数默认查询所有地域。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。
     * 您可以调用[DescribeCdnRegionAndIsp](~~91077~~)接口获取。不传该参数默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-12-10T20:01:00Z`
     */
    "EndTime"?: string;
}
