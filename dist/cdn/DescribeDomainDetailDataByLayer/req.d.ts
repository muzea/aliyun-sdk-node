export interface DescribeDomainDetailDataByLayerRequest {
    /**
     * 需要查询的指标。支持多指标查询，多个指标用英文逗号（,）分隔，包含**bps**、**qps**、**traf**、**acc**、**ipv6_traf**、**ipv6_bps**、**ipv6_acc**、**ipv6_qps**、**http_code**。
     * @example `bps,ipv6_traf,traf,http_code,qps`
     */
    "Field": string;
    /**
     * 需要查询的域名。支持批量域名查询，多个域名用半角逗号（,）分隔，一次最多支持30个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-07-05T22:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间，且间隔不超过1小时。
     * @example `2020-07-05T22:05:00Z`
     */
    "EndTime": string;
    /**
     * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * 不传值代表所有运营商。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * 不传值代表所有区域。
     * @example `hangzhou`
     */
    "LocationNameEn"?: string;
    /**
     * 查询维度，应用层（**http**、**https**、**quic**）或**all**。
     * 默认为**all**。
     * @example `all`
     */
    "Layer"?: string;
}
