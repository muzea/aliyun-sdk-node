export interface QueryMetricRequest {
    /**
     * 数据片的时间间隔，单位为毫秒，最小值为60000。
     * @example `100000`
     */
    "IntervalInSec"?: number;
    /**
     * 开始时间，精确到毫秒（ms）。
     * ><notice>该字段类型为 Long，在序列化/反序列化的过程中可能导致精度丢失，请注意数值不得大于 9007199254740991。></notice>
     * @example `1575561600000`
     */
    "StartTime": number;
    /**
     * 结束时间，精确到毫秒（ms）。
     * ><notice>该字段类型为 Long，在序列化/反序列化的过程中可能导致精度丢失，请注意数值不得大于 9007199254740991。></notice>
     * @example `1575622455686`
     */
    "EndTime": number;
    /**
     * 排序字段，根据查询返回字段中的某个字段排序。
     * @example `count`
     */
    "OrderBy"?: string;
    /**
     * 返回数据条数。
     * @example `100`
     */
    "Limit"?: number;
    /**
     * 指标名称，取值：
     * -  `appstat.incall`：链路统计。
     * - `appstat.sql`：SQL统计。
     * @example `appstat.incall`
     */
    "Metric": string;
    /**
     * 排序，取值：
     * - `ASC`：升序。
     * - `DESC`：降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 代理用户ID。
     * @example `testefgag12`
     */
    "ProxyUserId"?: string;
    /**
     * 过滤字段列表。
     */
    "Filters"?: {
        /**
         * 过滤字段的Key。
         * @example `http.status_code`
         */
        Key: string;
        /**
         * 过滤字段的Value。
         * @example `200`
         */
        Value: string;
    }[];
    /**
     * 维度，即GroupBy分组。
     * @example `RT`
     */
    "Dimensions"?: string[];
    /**
     * 查询字段。
     * @example `count`
     */
    "Measures": string[];
}
