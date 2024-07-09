export interface ListUserSuppressionRequest {
    /**
     * 录入开始时间，时间戳，精确到秒。
     * @example `1715668852`
     */
    "StartCreateTime"?: number;
    /**
     * 录入结束时间，时间戳，精确到秒，和开始时间跨度不能超出 7 天
     * @example `1715669077`
     */
    "EndCreateTime"?: number;
    /**
     * 退信最后一次命中开始时间，时间戳，精确到秒。
     * @example `1715668852`
     */
    "StartBounceTime"?: number;
    /**
     * 退信最后一次命中结束时间，时间戳，精确到秒，和开始时间跨度不能超出 7 天
     * @example `1715669077`
     */
    "EndBounceTime"?: number;
    /**
     * 邮箱地址或域名
     * @example `test@example.net或example.net`
     */
    "Address"?: string;
    /**
     * 当前页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
}
