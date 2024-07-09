export interface SaveBatchTaskForCreatingOrderRenewRequest {
    /**
     * 用户IP，可以设置为**127.0.0.1**。
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
     * 代金券编号。
     * @example `12312412`
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
     * @example `123123123`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券。取值：
     * - **false**：不使用。
     * - **true**：使用。
     * @example `false`
     */
    "UsePromotion"?: boolean;
    /**
     * 域名续费的变更参数列表。
     */
    "OrderRenewParam": {
        /**
         * 续费年限。默认为**1**年。范围为**1**~**10**年。
         * @example `1`
         */
        SubscriptionDuration: number;
        /**
         * 域名，如涉及多个域名时该项传入域名列表。域名列表可通过[QueryDomainList](~~67712~~)接口获取。
         * @example `Aliyun.com`
         */
        DomainName: string;
        /**
         * 域名当前到期日，计算方式为UTC时间1970年1月1日0点距离域名当前到期日的毫秒数。
         * @example `1522080000000`
         */
        CurrentExpirationDate: number;
    }[];
}
