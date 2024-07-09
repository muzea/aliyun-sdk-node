export interface DescribeLiveDomainRealTimeBpsDataRequest {
    /**
     * 播流域名。
     * 多个域名之间用英文逗号（,）分隔。
     * @example `example.com,example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 运营商英文名。
     * 通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * @example `alibaba`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名。
     * 通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
     * @example `tianjin`
     */
    "LocationNameEn"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-11-30T05:39:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 不填默认查询从StartTime起一小时内的数据。
     * @example `2015-11-30T05:40:00Z`
     */
    "EndTime"?: string;
}
