export interface SaveSingleTaskForCreatingOrderTransferRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域名转入密码。
     * @example `testCode`
     */
    "AuthorizationCode": string;
    /**
     * 已经实名认证域名信息模板ID。
     * @example `123456`
     */
    "RegistrantProfileId": number;
    /**
     * 是否允许溢价词域名转入，默认为**false**。
     * @example `false`
     */
    "PermitPremiumTransfer"?: boolean;
    /**
     * 代金券编号。
     * @example `123456`
     */
    "CouponNo"?: string;
    /**
     * 是否使用代金券。
     * @example `false`
     */
    "UseCoupon"?: boolean;
    /**
     * 优惠券编号。
     * @example `123456`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券。
     * @example `false`
     */
    "UsePromotion"?: boolean;
}
