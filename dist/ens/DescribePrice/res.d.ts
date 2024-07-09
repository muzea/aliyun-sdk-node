export interface DescribePriceResponse {
    /**
     * 价格信息列表。
     */
    PriceInfo: {
        /**
         * 价格信息。
         */
        Price: {
            /**
             * 币种。
             * <props="china">- CNY：人民币。</props>
             * - USD：美元。
             * - JPY：日元。
             * @example `USD`
             */
            Currency: string;
            /**
             * 折扣。
             * @example `1`
             */
            DiscountPrice: number;
            /**
             * 原价。
             * @example `16125.00`
             */
            OriginalPrice: number;
            /**
             * 交易价格。
             * @example `126.75`
             */
            TradePrice: number;
        };
    };
    /**
     * 请求ID。
     * @example `694EB8FF-446C-5B1E-8146-9629E492551F`
     */
    RequestId: string;
}
