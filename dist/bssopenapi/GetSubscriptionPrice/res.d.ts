export interface GetSubscriptionPriceResponse {
    /**
     * 状态码。
     * @example `InvalidConfigCod`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `30E7066E-AE6F-4E59-AFE6-11386CE3AFA7`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 产品价格信息。
     */
    Data: {
        /**
         * 原价。
         * @example `900`
         */
        OriginalPrice: number;
        /**
         * 折扣。
         * @example `100`
         */
        DiscountPrice: number;
        /**
         * 币种。取值范围：
         * - CNY：人民币。
         * - USD：美元。
         * - JPY：日元。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 数量。
         * @example `1`
         */
        Quantity: number;
        /**
         * 优惠价。
         * @example `0`
         */
        TradePrice: number;
        ModuleDetails: {
            /**
             * 计价模块价格详情。
             */
            ModuleDetail: {
                /**
                 * 优惠价。
                 * @example `0`
                 */
                CostAfterDiscount: number;
                /**
                 * 折扣。
                 * @example `100`
                 */
                InvoiceDiscount: number;
                /**
                 * 单价。
                 * @example `0`
                 */
                UnitPrice: number;
                /**
                 * 原价。
                 * @example `200`
                 */
                OriginalCost: number;
                /**
                 * 计价模块标识。
                 * @example `PackageCode`
                 */
                ModuleCode: string;
            }[];
        };
        PromotionDetails: {
            /**
             * 优惠详情。
             */
            PromotionDetail: {
                /**
                 * 优惠描述。
                 * @example `test`
                 */
                PromotionDesc: string;
                /**
                 * 优惠标识。
                 * @example `1021199213`
                 */
                PromotionId: number;
                /**
                 * 优惠名称。
                 * @example `test`
                 */
                PromotionName: string;
            }[];
        };
    };
}
