export interface SaveSingleTaskForCreatingOrderRedeemRequest {
    /**
     * 用户IP。
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
     * 想要赎回的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域名当前到期时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `0000`
     */
    "CurrentExpirationDate": number;
    /**
     * 代金券编号。
     * @example `123123`
     */
    "CouponNo"?: string;
    /**
     * 是否使用代金券。
     * @example `false`
     */
    "UseCoupon"?: boolean;
    /**
     * 优惠券编号。
     * @example `123123`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券。
     * @example `false`
     */
    "UsePromotion"?: boolean;
}
