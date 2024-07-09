export interface DescribeLiveDomainTimeShiftDataRequest {
    /**
     * 主播流域名。
     * > - 若参数为空，默认返回所有域名合并后数据。
     * - 支持批量域名查询，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 最小数据粒度为5分钟。
     * - 不写默认读取过去24小时数据。
     * @example `2021-03-03T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。结束时间需大于起始时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-03-03T02:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - 300。
     * - 3600。
     * - 86400。
     * 不传或传值不支持时，使用默认值300秒。
     * @example `300`
     */
    "Interval"?: string;
}
