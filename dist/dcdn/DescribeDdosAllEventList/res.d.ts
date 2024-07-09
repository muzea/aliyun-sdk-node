export interface DescribeDdosAllEventListResponse {
    /**
     * 请求ID。
     * @example `D73A4243-CFBD-5110-876F-09237E77ECBD`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `20`
     */
    Total: number;
    /**
     * 当前页码，默认值**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，默认**10**，支持5、10、20。
     * @example `10`
     */
    PageSize: number;
    /**
     * 事件列表。
     */
    DataList: {
        /**
         * 攻击目标。
         * @example `example.com`
         */
        Target: string;
        /**
         * 开始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-10-09T10:03:31Z`
         */
        StartTime: string;
        /**
         * 结束时间。
         * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-11-26T15:59:00Z`
         */
        EndTime: string;
        /**
         * 待查询的DDoS攻击事件的类型。取值：
         * - **web-cc**：表示Web资源耗尽型攻击。
         * - **cc**：表示连接型攻击。
         * - **traffic**：表示流量型攻击。
         * - 不设置该参数表示查询所有类型的攻击事件。
         * @example `web-cc`
         */
        EventType: string;
        /**
         * 流量型攻击BPS峰值。
         * @example `800`
         */
        Bps: number;
        /**
         * 流量型攻击PPS峰值。
         * @example `12000`
         */
        Pps: number;
        /**
         * 连接型攻击CPS峰值。
         * @example `50`
         */
        Cps: number;
        /**
         * Web资源耗尽型攻击QPS峰值。
         * @example `7692`
         */
        Qps: number;
        /**
         * 事件ID。
         * @example `28069`
         */
        EventId: string;
    }[];
}
