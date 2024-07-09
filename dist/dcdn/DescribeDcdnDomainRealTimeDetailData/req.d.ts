export interface DescribeDcdnDomainRealTimeDetailDataRequest {
    /**
     * 加速域名，多个用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:33:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间，且查询跨度不得超过10分钟。
     * @example `2019-11-30T05:40:00Z`
     */
    "EndTime": string;
    /**
     * 获取的类别信息，多个用逗号（,）分隔。取值：
     * - **qps**：每秒访问次数。
     * - **bps**：带宽数据。
     * - **http_code**：HTTP返回码。
     * @example `bps`
     */
    "Field": string;
    /**
     * 地域英文名，通过[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)获得。
     * 默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 运营商英文名，通过[DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~)获得。
     * 默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 是否输出汇总值。取值：
     * - **true**：是。
     * - **false**：否。
     * 默认值为**false**。
     * @example `true`
     */
    "Merge"?: string;
    /**
     * 是否合并**LocationNameEn**和**IspNameEn**输出汇总值。取值：
     * - **true**：是。
     * - **false**：否。
     * 默认值为**false**。
     * @example `true`
     */
    "MergeLocIsp"?: string;
}
