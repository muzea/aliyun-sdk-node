export interface QueryRedeemResponse {
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
     * @example `E503DC7B-E4F0-4B3C-BC89-BCECF1338F0B`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalCount: number;
        Redeem: {
            /**
             * 提货券详情。
             */
            Redeem: {
                /**
                 * 提货券失效时间。
                 * @example `2018-06-13 20:25:00`
                 */
                ExpiryTime: string;
                /**
                 * 提货券发行时间。
                 * @example `2018-05-14 20:25:00`
                 */
                GrantedTime: string;
                /**
                 * 提货券状态，取值：
                 * - Generated：已生成。
                 * - CallBack：已回调。
                 * - RefundPending：提货券退款中。
                 * - Canceled：提货券已作废。
                 * - Order_Canceled：提货券已作废。
                 * - ActivePending：激活中，请稍后。
                 * - ActiveSuccess：激活成功。
                 * - ExchangePending：兑换中。
                 * - ExchangeSuccess：兑换成功。
                 * - Expired：已过期。
                 * - Invalid：已作废。
                 * @example `Generated`
                 */
                Status: string;
                /**
                 * 提货券规格。
                 * @example `无`
                 */
                Specification: string;
                /**
                 * 面额。
                 * @example `0`
                 */
                NominalValue: string;
                /**
                 * 提货券生效时间。
                 * @example `2018-05-14 20:25:00`
                 */
                EffectiveTime: string;
                /**
                 * 提货券ID。
                 * @example `1342`
                 */
                RedeemId: string;
                /**
                 * 提货券Number。
                 * @example `4889*****1610`
                 */
                RedeemNo: string;
                /**
                 * 适用产品。
                 * @example `云服务器`
                 */
                ApplicableProducts: string;
                /**
                 * 余额。
                 * @example `0`
                 */
                Balance: string;
            }[];
        };
    };
}
