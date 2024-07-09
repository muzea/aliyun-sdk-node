export interface DescribeLiveDomainBpsDataRequest {
    /**
     * 播流域名。多个域名之间用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。结束时间需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T09:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - **300**（默认值）
     * - **3600**
     * - **86400**
     * > - 不传或传值不支持时，取默认值**300**。
     * - 查询时间粒度为**300**时，返回的bps数据值为300秒内平均每秒传输的bit。
     * - 查询时间粒度为**3600**和**86400**时，返回的bps数据值为查询时间内所有300秒取值点的峰值。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * @example `alibaba`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名。通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * @example `tianjin`
     */
    "LocationNameEn"?: string;
}
