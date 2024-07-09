export interface DescribeVodDomainRealTimeDetailDataRequest {
    /**
     * 待查询的加速域名，一次最多同时查询20个域名，域名之间用英文逗号分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。例如：2019-11-30T05:33:00Z。
     * @example `2019-01-23T12:35:12Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。例如：2019-11-30T05:40:00Z。
     * @example `2019-01-23T12:40:00Z`
     */
    "EndTime": string;
    /**
     * 获取的类别信息，多个用英文逗号（,）分隔。取值：
     * qps：每秒访问次数。
     * bps：带宽数据。
     * http_code：HTTP返回码。
     * @example `bps`
     */
    "Field": string;
    /**
     * 地域英文名，默认查询所有地域。
     * @example `shanghai`
     */
    "LocationNameEn"?: string;
    /**
     * 运营商英文名，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 是否输出汇总值。取值：
     * true：输出。
     * false：不输出。
     * 默认值为false。
     * @example `false`
     */
    "Merge"?: string;
    /**
     * 是否输出汇总值。取值：
     * - **true**：输出只会按照Domain进行分组，聚合地域和运营商。
     * - **false**：输出只会按照Domain进行分组。
     * 默认值为**false**。
     * @example `true`
     */
    "MergeLocIsp"?: string;
}
