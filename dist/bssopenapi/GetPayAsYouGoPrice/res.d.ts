export interface GetPayAsYouGoPriceResponse {
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
     * @example `1537A007-72D7-4165-8A26-8694A38E219A`
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
         * 币种。取值范围：
         * - CNY：人民币。
         * - USD：美元。
         * - JPY：日元。
         * @example `CNY`
         */
        Currency: string;
        ModuleDetails: {
            /**
             * 计价模块价格详情。
             */
            ModuleDetail: {
                /**
                 * 优惠价。
                 * @example `100`
                 */
                CostAfterDiscount: number;
                /**
                 * 折扣。
                 * @example `20`
                 */
                InvoiceDiscount: number;
                /**
                 * 单价。
                 * @example `0`
                 */
                UnitPrice: number;
                /**
                 * 原价。
                 * @example `1.77`
                 */
                OriginalCost: number;
                /**
                 * 计价模块标识。
                 * @example `InstanceType`
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
                 * @example `仅提供测试使用的1分钱活动`
                 */
                PromotionDesc: string;
                /**
                 * 优惠标识。
                 * @example `10200210`
                 */
                PromotionId: number;
                /**
                 * 优惠名称。
                 * @example `仅提供测试使用的1分钱活动`
                 */
                PromotionName: string;
            }[];
        };
    };
}
