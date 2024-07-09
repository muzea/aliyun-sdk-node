export interface DescribeLiveDomainRealTimeTrafficDataRequest {
    /**
     * 播流域名。
     * 多个域名之间用英文逗号（,）分隔。
     * @example `example.com,example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 不写默认读取过去1小时数据。
     * @example `2015-12-10T15:00:00Z`
     */
    "StartTime"?: string;
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
     * 结束时间。需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T15:01:00Z`
     */
    "EndTime"?: string;
}
