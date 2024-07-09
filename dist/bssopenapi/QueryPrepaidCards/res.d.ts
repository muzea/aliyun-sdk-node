export interface QueryPrepaidCardsResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7EA6C02D-06D0-4213-9C3B-E67910F7D1EB`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 返回数据。
         */
        PrepaidCard: {
            /**
             * 取值：
             * - Available：有效。
             * - Expired：过期。
             * - Cancelled：作废。
             * @example `Available`
             */
            Status: string;
            /**
             * 卡包失效时间。
             * @example `2019-08-04T01:39:11Z`
             */
            ExpiryTime: string;
            /**
             * 卡包发放时间。
             * @example `2018-08-03T01:39:11Z`
             */
            GrantedTime: string;
            /**
             * 面额。
             * @example `100.00`
             */
            NominalValue: string;
            /**
             * 卡包生效时间。
             * @example `2018-08-03T01:39:11Z`
             */
            EffectiveTime: string;
            /**
             * 卡包编码。
             * @example `Q-7edaab979fc9`
             */
            PrepaidCardNo: string;
            /**
             * 适用场景描述。
             * @example `test`
             */
            ApplicableScenarios: string;
            /**
             * 卡包ID。
             * @example `213432432`
             */
            PrepaidCardId: number;
            /**
             * 适用产品描述。
             * @example `通用`
             */
            ApplicableProducts: string;
            /**
             * 剩余金额。
             * @example `100.00`
             */
            Balance: string;
        }[];
    };
}
