export interface DescribeLiveDomainPushBpsDataRequest {
    /**
     * 推流域名。
     * 支持批量域名查询，多个域名用英文逗号（,）分隔。
     * 若参数为空，默认返回所有推流域名合并后数据。
     * @example `demo.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 不写默认读取过去24小时数据。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 结束时间需大于起始时间。
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - **300**。
     * - **3600**。
     * - **86400**。
     * 不传和传的值不支持时，使用默认值300秒。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名.
     * 可通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传默认为所有运营商。
     * @example `alibaba`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名。
     * 可通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传默认为所有区域。
     * @example `tianjin`
     */
    "LocationNameEn"?: string;
}
