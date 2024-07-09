export interface DescribeReservedInstanceAutoRenewAttributeResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    ReservedInstanceRenewAttributes: {
        /**
         * 由ReservedInstanceRenewAttribute组成的数组格式，返回预留实例券的自动续费设置信息。
         */
        ReservedInstanceRenewAttribute: {
            /**
             * 续费单位。
             * <props="intl">可能值：Year。</props>
             * <props="china">可能值：Year、Month。</props>
             * @example `Month`
             */
            PeriodUnit: string;
            /**
             * 自动续费时长。
             * @example `1`
             */
            Duration: number;
            /**
             * 预留实例券ID。
             * @example `ecsri-ajdfaj****`
             */
            ReservedInstanceId: string;
            /**
             * 预留实例券自动续费状态。取值范围：
             * - AutoRenewal：自动续费。
             * - Normal：手动续费。
             * @example `AutoRenewal`
             */
            RenewalStatus: string;
        }[];
    };
}
