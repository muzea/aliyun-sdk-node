export interface DescribeDcdnBgpTrafficDataRequest {
    /**
     * 需要查询的线路，查询多条路线用英文逗号（,）分隔。指定多条线路时进行聚合处理，默认为所有线路.。
     * 可选值：
     * - cu：联通。
     * - cmi：移动。
     * - ct：电信。
     * @example `cu`
     */
    "Isp"?: string;
    /**
     * 获取数据开始时间点。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 最小数据粒度为1小时。
     * 默认读取过去24小时数据。
     * @example `2018-11-29T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-11-30T00:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 数据粒度，支持300秒和3600秒，默认为300秒即五分钟，但需要和时间跨度综合判定。
     * @example `300`
     */
    "Interval"?: string;
}
