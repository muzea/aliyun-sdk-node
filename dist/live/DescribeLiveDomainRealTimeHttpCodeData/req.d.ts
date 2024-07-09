export interface DescribeLiveDomainRealTimeHttpCodeDataRequest {
    /**
     * 播流域名。
     * 多个域名之间用半角逗号（,）分隔。
     * @example `example.com,example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 若StartTime和EndTime参数都为空，默认返回当前时间起**1**小时内的数据。
     * @example `2015-11-30T05:39:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 若StartTime和EndTime参数都为空，默认返回当前时间起**1**小时内的数据。
     *
     * @example `2015-11-30T05:40:00Z`
     */
    "EndTime"?: string;
    /**
     * 运营商英文名。
     * 通过[DescribeCdnRegionAndIsp](~~448109~~)接口获得。
     * @example `alibaba`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名。
     * 通过[DescribeCdnRegionAndIsp](~~448109~~)接口获得。
     * @example `tianjin`
     */
    "LocationNameEn"?: string;
}
