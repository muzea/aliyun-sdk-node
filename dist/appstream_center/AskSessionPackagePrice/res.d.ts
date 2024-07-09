export interface AskSessionPackagePriceResponse {
    /**
     * 请求ID。
     * @example `2C64D9E5-DFCD-10A5-A911-xxxxxxx`
     */
    RequestId: string;
    /**
     * 返回数据集。
     */
    Data: {
        /**
         * 价格对象。
         */
        Price: {
            /**
             * 原始价格。
             * @example `2000.0`
             */
            OriginalPrice: number;
            /**
             * 折扣价格。
             * @example `0.0`
             */
            DiscountPrice: number;
            /**
             * 实际交易价格。
             * @example `2000.0`
             */
            TradePrice: number;
            /**
             * 币种。
             * @example `CNY`
             */
            Currency: string;
        };
    }[];
}
