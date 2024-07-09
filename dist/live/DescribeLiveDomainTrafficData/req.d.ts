export interface DescribeLiveDomainTrafficDataRequest {
    /**
     * 播流域名。多个域名之间用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >支持查询最近**90**天的数据。
     * @example `2017-12-10T14:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T15:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - **300**（默认值）。
     * - **3600**。
     * - **86400**。
     * > 不传或传值不支持时，使用默认值**300**秒。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)获得，不传为所有运营商。
     * @example `alibaba`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)获得，不传为所有区域。
     * @example `tianjin`
     */
    "LocationNameEn"?: string;
}
