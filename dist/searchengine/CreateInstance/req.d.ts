export interface CreateInstanceRequest {
    /**
     * 请求结构。
     * @example `{}`
     */
    "body"?: {
        /**
         * 实例的付费方式。取值范围： PREPAY：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付，否则将返回 InvalidPayMethod 的错误提示，并且需要指定paymentInfo参数。POSTPAY：按量付费（当前暂不支持）。
         * @example `PREPAY`
         */
        chargeType: string;
        /**
         * 实例相关的规格信息列表。
         */
        components: {
            /**
             * 规格code，和售卖参数保持一致
             * @example `searcherdocsize`
             */
            code: string;
            /**
             * 控件填写的数据。
             * @example `200`
             */
            value: string;
        }[];
        /**
         * 付费信息。
         */
        order: {
            /**
             * 是否自动续费，包含：是（true）和否（false）
             * @example `true`
             */
            autoRenew: boolean;
            /**
             * 付费周期，包含1，2，3，4，5，6，7，8，9，10，12
             * @example `29`
             */
            duration: number;
            /**
             * 周期单位，包含：月（Month），年（Year）等
             * @example `Month`
             */
            pricingCycle: string;
        };
    };
}
