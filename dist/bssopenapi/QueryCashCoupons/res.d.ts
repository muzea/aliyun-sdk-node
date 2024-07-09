export interface QueryCashCouponsResponse {
    /**
     * 状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 执行结果说明
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID
     * @example `147B566E-DB4C-4E43-BDBB-5DB1D9D268DB`
     */
    RequestId: string;
    /**
     * 是否调用成功。true：调用成功，false：调用失败
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 返回数据
         */
        CashCoupon: {
            /**
             * 取值：
             * - Available：有效
             * - Expired：过期
             * - Cancelled：作废
             * @example `Available`
             */
            Status: string;
            /**
             * 代金券过期时间
             * @example `2018-08-10T00:00:00Z`
             */
            ExpiryTime: string;
            /**
             * 代金券发放时间
             * @example `2018-08-02T15:15:50Z`
             */
            GrantedTime: string;
            /**
             * 面额
             * @example `100.00`
             */
            NominalValue: string;
            /**
             * 代金券生效时间
             * @example `2018-08-02T15:15:50Z`
             */
            EffectiveTime: string;
            /**
             * 适用场景描述
             * @example `阿里云按量付费账单,阿里云新购`
             */
            ApplicableScenarios: string;
            /**
             * 代金券ID
             * @example `34534253254325`
             */
            CashCouponId: number;
            /**
             * 适用产品描述
             * @example `通用`
             */
            ApplicableProducts: string;
            /**
             * 代金券编码
             * @example `Q-b1485def8f04a`
             */
            CashCouponNo: string;
            /**
             * 余额
             * @example `100.00`
             */
            Balance: string;
            /**
             * 备注
             * @example `该代金券用于产品功能验证的测试`
             */
            Description: string;
        }[];
    };
}
