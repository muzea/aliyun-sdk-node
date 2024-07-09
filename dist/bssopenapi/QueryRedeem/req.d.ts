export interface QueryRedeemRequest {
    /**
     * 失效开始时间。格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-08-01T00:00:00Z`
     */
    "ExpiryTimeStart"?: string;
    /**
     * 失效结束时间。格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-08-01T00:00:00Z`
     */
    "ExpiryTimeEnd"?: string;
    /**
     * 提货券是否生效：
     * - true。
     * - false。
     * 默认false。
     * @example `true`
     */
    "EffectiveOrNot"?: boolean;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
}
