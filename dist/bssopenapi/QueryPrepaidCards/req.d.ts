export interface QueryPrepaidCardsRequest {
    /**
     * 卡包过期时间止，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-08-01T00:00:00Z`
     */
    "ExpiryTimeEnd"?: string;
    /**
     * 卡包过期时间起，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-08-01T00:00:00Z`
     */
    "ExpiryTimeStart"?: string;
    /**
     * 卡包是否生效。取值范围：
     * - true。
     * - false。
     * @example `true`
     */
    "EffectiveOrNot"?: boolean;
}
