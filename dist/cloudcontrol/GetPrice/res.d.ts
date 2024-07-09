export interface GetPriceResponse {
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    requestId: string;
    /**
     * 价格
     */
    price: {
        /**
         * 币种。取值范围：CNY：人民币。USD：美元。JPY：日元。
         * @example `CNY`
         */
        currency: string;
        /**
         * 原价
         * @example `760.0`
         */
        originalPrice: number;
        /**
         * 折扣
         * @example `0.0`
         */
        discountPrice: number;
        /**
         * 优惠价
         * @example `0.0`
         */
        tradePrice: number;
        /**
         * 计价模块价格详情
         */
        moduleDetails: {
            /**
             * 优惠价
             * @example `0.02`
             */
            costAfterDiscount: number;
            /**
             * 折扣
             * @example `0.0`
             */
            invoiceDiscount: number;
            /**
             * 价格类型
             * @example `1.0`
             */
            priceType: number;
            /**
             * 原价
             * @example `1000.0`
             */
            originalCost: number;
            /**
             * 计价模块标识
             * @example `InstanceRent`
             */
            moduleCode: string;
            /**
             * 计价模块名称
             * @example `InstanceRent`
             */
            moduleName: string;
        }[];
        /**
         * 优惠详情
         */
        promotionDetails: {
            /**
             * 优惠标识
             * @example `数据盘享8.5折`
             */
            promotionId: number;
            /**
             * 优惠名称
             * @example `数据盘享8.5折`
             */
            promotionName: string;
            /**
             * 优惠描述
             * @example `37284`
             */
            promotionDesc: string;
        }[];
    };
}
