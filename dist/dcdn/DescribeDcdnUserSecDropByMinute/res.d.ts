export interface DescribeDcdnUserSecDropByMinuteResponse {
    /**
     * 请求ID。
     * @example `8143fA8A-B2B2-4915-538D-546B538D25FA`
     */
    RequestId: string;
    /**
     * HTTP请响应说明描述。
     * @example `OK`
     */
    Description: string;
    /**
     * 当前返回的数据条数。
     * @example `2`
     */
    Len: number;
    /**
     * 页面号码。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 页面大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `5738`
     */
    TotalCount: number;
    /**
     * 数组。
     */
    Rows: {
        /**
         * 域名。
         * @example `example.aliyundoc.com`
         */
        Domain: string;
        /**
         * 统计的起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-01-31T15:04:04Z`
         */
        TmStr: string;
        /**
         * 5分钟拦截总数。
         * @example `264`
         */
        Drops: number;
        /**
         * 触发对象。
         * @example `正常模式规则`
         */
        Object: string;
        /**
         * 安全功能或者安全类型。
         * @example `robot`
         */
        SecFunc: string;
        /**
         * 触发规则。
         * @example `正常模式规则`
         */
        RuleName: string;
    }[];
}
