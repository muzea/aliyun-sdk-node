export interface GetResourcePackagePriceResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BBEF51A3-E933-4F40-A534-C673CBDB9C80`
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
         * 原始价格，单位元。
         * @example `1290240`
         */
        OriginalPrice: number;
        /**
         * 折扣价格，单位元。
         * @example `215040`
         */
        DiscountPrice: number;
        /**
         * 币种。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 交易价格，单位元。
         * @example `1075200`
         */
        TradePrice: number;
        Promotions: {
            /**
             * 优惠详情。
             */
            Promotion: {
                /**
                 * 优惠描述。
                 * @example `购买半年，立享8.3折优惠`
                 */
                Name: string;
                /**
                 * 优惠ID。
                 * @example `1000680914`
                 */
                Id: number;
            }[];
        };
    };
}
