export interface DescribeDomainHttpCodeDataByLayerRequest {
    /**
     * 需要查询的加速域名。支持批量域名查询，多个域名用半角逗号（,）分隔，一次最多支持500个域名查询。
     * 若参数为空，默认返回所有加速域名合并后的数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-07-05T22:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2020-07-06T22:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 指定查询数据的时间粒度，单位：秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见**使用说明**中支持查询的时间粒度。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * 不传值代表所有运营商。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * 不传值代表所有区域。
     * @example `hangzhou`
     */
    "LocationNameEn"?: string;
    /**
     * 查询维度，可选应用层（**http**、**https**、**quic**）或 **all**。
     * 默认为**all**。
     * @example `all`
     */
    "Layer"?: string;
}
