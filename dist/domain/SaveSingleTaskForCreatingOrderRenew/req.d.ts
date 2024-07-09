export interface SaveSingleTaskForCreatingOrderRenewRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 需要续费的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 续费年限值，范围：**1**年~**10**年。
     * @example `1`
     */
    "SubscriptionDuration": number;
    /**
     * 域名当前的到期时间，计算方式为UTC时间1970年1月1日0点距离域名当前到期时间的毫秒数。
     * @example `1522080000000`
     */
    "CurrentExpirationDate": number;
    /**
     * 代金券编号。
     * @example `123123`
     */
    "CouponNo"?: string;
    /**
     * 是否使用代金券。取值：
     * - **false**：不使用。
     * - **true**：使用。
     * @example `false`
     */
    "UseCoupon"?: boolean;
    /**
     * 优惠券编号。
     * @example `123132`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券。取值：
     * - **false**：不使用。
     * - **true**：使用。
     * @example `false`
     */
    "UsePromotion"?: boolean;
}
