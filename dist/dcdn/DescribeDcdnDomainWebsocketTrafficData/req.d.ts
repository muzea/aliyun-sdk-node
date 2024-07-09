export interface DescribeDcdnDomainWebsocketTrafficDataRequest {
    /**
     * 加速域名。
     * 多个域名用英文逗号（,）分隔，默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
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
     * 查询数据的时间粒度，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见**使用说明**中支持查询的时间粒度。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~207199~~)接口获取，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域商英文名。
     * 您可以调用[DescribeDcdnRegionAndIsp](~~207199~~)接口获取，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
}
