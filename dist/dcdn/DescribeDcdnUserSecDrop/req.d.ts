export interface DescribeDcdnUserSecDropRequest {
    /**
     * 统计日期或月份：
     * - 统计粒度为1天时，格式为"yyyymmdd"，如"20201203"。
     * - 统计粒度为1月时，格式为"yyyymm"，如"202012"。
     * @example `20201203`
     */
    "Data": string;
    /**
     * 安全功能：
     * - waf：WAF功能;。
     * - tmd：IP频次控制。
     * - robot：机器流量识别。
     * - l4_dm_drop：四层域名拦截。
     * @example `waf`
     */
    "SecFunc": string;
    /**
     * 统计粒度：
     * - 统计粒度为1天时，统计一天的拦截汇总数据。
     * - 统计粒度为1月时，统计一个月的拦截汇总数据。
     * @example `1day`
     */
    "Metric": string;
}
