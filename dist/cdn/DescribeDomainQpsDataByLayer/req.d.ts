export interface DescribeDomainQpsDataByLayerRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔，一次最多支持500个域名查询。
     * 默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:33:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-11-30T05:40:00Z`
     */
    "EndTime"?: string;
    /**
     * 指定查询数据的时间粒度，单位：秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见**使用说明**中支持查询的时间粒度。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 查询维度。取值：
     * - **网络层**：**IPv4**、**IPv6**。
     * - **应用层**：**http**、**https**、**quic**。
     * - **all**（默认值）：包含网络层和应用层。
     * @example `all`
     */
    "Layer"?: string;
}
