export interface SaveBatchTaskForCreatingOrderTransferRequest {
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
     * @example `123123`
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
     * 任务详情列表。
     */
    "OrderTransferParam": {
        /**
         * 是否允许溢价词域名转入，取值
         * - **false**：允许。
         * - **true**：不允许。
         * 默认值为**false**。
         * @example `false`
         */
        PermitPremiumTransfer: boolean;
        /**
         * 已经实名认证的域名信息模板ID，可通过[QueryRegistrantProfileRealNameVerificationInfo](https://help.aliyun.com/document_detail/69359.htm?spm=a2c4g.11186623.0.0.5096253c12PfdB)接口获取。
         * @example `123456`
         */
        RegistrantProfileId: number;
        /**
         * 域名转入密码。如果涉及多个域名时使用**list**传入。
         * @example `testCode`
         */
        AuthorizationCode: string;
        /**
         * 域名，如果涉及多个域名时该项传入域名列表。
         * @example `example.com`
         */
        DomainName: string;
    }[];
}
