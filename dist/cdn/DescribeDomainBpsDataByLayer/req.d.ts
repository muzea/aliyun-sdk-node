export interface DescribeDomainBpsDataByLayerRequest {
    /**
     * 需要查询的加速域名，多个域名用半角逗号（,）分隔，一次最多支持500个域名查询。
     * > 不传该参数，默认返回所有加速域名合并后的数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-05-06T07:10:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2020-05-06T07:20:00Z`
     */
    "EndTime"?: string;
    /**
     * 指定查询数据的时间粒度，单位：秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见**使用说明**中支持查询的时间粒度。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。通过[DescribeCdnRegionAndIsp](~~DescribeCdnRegionAndIsp~~)接口获得，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。通过[DescribeCdnRegionAndIsp](~~DescribeCdnRegionAndIsp~~)接口获得，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 查询维度。
     * - 网络层：**IPv4**、**IPv6**。
     * - 应用层：**http**、**https**、**quic**。
     * - **all**：包含网络层和应用层。
     * 默认值为**all**。
     * @example `IPv4`
     */
    "Layer"?: string;
}
