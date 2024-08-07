export interface DescribeDcdnDomainIpaTrafficDataRequest {
    /**
     * 加速域名。
     * 多个域名用英文逗号（,）分隔，默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 是否自适应计算**interval**值，如果**timeMerge**=**1**，会根据**StartTime**和**EndTime**计算出合适的**inteval**值，和**interval**参数任选。
     * @example `1`
     */
    "TimeMerge"?: string;
    /**
     * 查询数据的时间粒度，单位为秒。
     * 根据您指定**StartTime**和**EndTime**两者的时间跨度，该参数取值如下：
     * - 3天以内（不包含3天整）：支持**300**、**3600**、 **86400**，如果不传该参数，默认值为**300**。
     * - 3~31天（不包含31天整）：支持**3600**和**86400**，如果不传该参数，默认值为**3600**。
     * - 31天及以上：支持**86400**，如果不传该参数，默认值为**86400**。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 是否补零。取值：
     * - **true**：补零。
     * - **false**：不补零。
     * @example `false`
     */
    "FixTimeGap"?: string;
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
