export interface QueryCashCouponsRequest {
    /**
     * 代金券终止过期时间，格式：yyyy-MM-ddTHH:mm:ssZ
     * @example `2018-08-01T00:00:00Z`
     */
    "ExpiryTimeEnd"?: string;
    /**
     * 代金券起始过期时间，格式：yyyy-MM-ddTHH:mm:ssZ
     * @example `2018-09-01T00:00:00Z`
     */
    "ExpiryTimeStart"?: string;
    /**
     * 代金券是否生效。取值范围：
     * - true
     * - false
     * @example `true`
     */
    "EffectiveOrNot"?: boolean;
}
