export interface DescribeVodDomainUsageDataRequest {
    /**
     * 加速域名。若参数为空，默认返回所有加速域名合并后数据。支持批量查询，多个用半角逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T10:20:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T12:20:00Z`
     */
    "EndTime": string;
    /**
     * 数据类型。取值：
     * - **bps**：带宽。
     * - **traf**：流量。
     * @example `bps`
     */
    "Field": string;
    /**
     * 需要获取的用量类型。取值：
     *  - **static**：静态。
     * - **dynamic**：动态。
     * - **all**：全部。
     * @example `static`
     */
    "Type"?: string;
    /**
     * 地域代号。默认为CN中国大陆。取值：
     * - **CN**：中国大陆。
     * - **OverSeas**：海外区域。
     * @example `CN`
     */
    "Area"?: string;
    /**
     * 强制指定获取指定时间粒度的数据，单位为秒。支持**300**（5分钟）、**3600**（1小时）和**86400**（1天）。
     * - **Interval**=**300**：最长可查询最近半年的数据，单次查询的时间跨度最长为3天。
     * - **Interval**=**3600**或**86400**：最长可查询最近1年的数据。
     * - 不指定**Interval**：单次查询跨度最长为1个月。当查询时间为1~3天时，数据按小时粒度返回；当查询时间为4天及以上时，数据按天粒度返回。
     * @example `300`
     */
    "Interval"?: string;
}
