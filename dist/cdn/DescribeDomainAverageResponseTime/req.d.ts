export interface DescribeDomainAverageResponseTimeRequest {
    /**
     * 是否自适应计算Interval值，如果**timeMerge**=**1**，会根据startTime和endTime计算出合适的inteval值，和Interval参数任选。
     * @example `1`
     */
    "TimeMerge"?: string;
    /**
     * 查询类型。传dynamic时，查询全站加速动态资源的平均响应时间和静态资源的平均响应时间；默认不传，查询静态资源的平均响应时间。
     * @example `domaintype`
     */
    "DomainType"?: string;
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
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
     * 获取数据的结束时间点。获取日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2019-11-30T05:40:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，单位：秒。根据您指定**StartTime**和**EndTime**两者的时间跨度，该参数取值如下：
     * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**，如果不传该参数，默认值为**300**。
     * - 3-31天（不包含31天整）支持**3600**和**86400**，如果不传该参数，默认值为**3600**。
     * - 31天及以上支持**86400**，如果不传该参数，默认值为**86400**。
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
}
