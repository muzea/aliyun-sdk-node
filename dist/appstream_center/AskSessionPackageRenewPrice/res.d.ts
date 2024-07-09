export interface AskSessionPackageRenewPriceResponse {
    /**
     * 请求ID
     * @example `50158E8B-992E-1286-B174-**********
    `
     */
    RequestId: string;
    /**
     * 返回数据集
     */
    Data: {
        /**
         * 返回价格对象
         */
        Price: {
            /**
             * 原始价格
             * @example `2000.0`
             */
            OriginalPrice: number;
            /**
             * 折扣价格
             * @example `0.0`
             */
            DiscountPrice: number;
            /**
             * 实际交易价格
             * @example `2000.0`
             */
            TradePrice: number;
            /**
             * 币种
             * @example `CNY`
             */
            Currency: string;
        };
    }[];
}
