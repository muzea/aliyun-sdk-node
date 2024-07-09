export interface DescribeCommodityPriceRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 商品订单。
     */
    "Orders": {
        /**
         * 商品Code。
         * 中国站示例值：
         * - **ga\_gapluspre\_public\_cn**：全球加速实例。
         * - **ga\_plusbwppre\_public_cn**：基础带宽包。
         * 国际站示例值：
         * - **ga\_pluspre\_public_intl**：全球加速实例。
         * - **ga\_bwppreintl\_public_intl**：基础带宽包。
         * @example `ga_gapluspre_public_cn`
         */
        CommodityCode: string;
        /**
         * 订单类型。取值：
         * - **BUY**：新购。
         * - **RENEW**：续费。
         * - **UPGRADE**：升级。
         * @example `BUY`
         */
        OrderType: string;
        /**
         * 计费方式。
         * 取值**PREPAY**，表示预付费。
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * 计费周期。取值：
         * - **Month**：按月计费。
         * - **Year**：按年计费。
         * @example `Month`
         */
        PricingCycle: string;
        /**
         * 购买时长。
         * - 当**PricingCycle**取值**Month**时，Duration取值范围为**1**~**9**。
         * - 当**PricingCycle**取值**Year**时，Duration取值范围为**1**~**3**。
         * @example `1`
         */
        Duration: number;
        /**
         * 购买数量。
         * @example `1`
         */
        Quantity: number;
        /**
         * 商品模块信息。
         * 不同商品模块，信息不同。
         */
        Components: {
            /**
             * 商品模块Code。
             * 不同商品模块，信息不同。
             * 例如：**instance**（全球加速实例）、**购买时长**（商品购买时长）。
             * @example `instance`
             */
            ComponentCode: string;
            /**
             * 商品模块属性。
             * 不同商品模块，信息不同。
             */
            Properties: {
                /**
                 * 商品模块属性Code。
                 * 不同商品模块，信息不同。
                 * 例如：**instance**（全球加速实例）、**ord_time**（商品购买时长）。
                 * @example `instance`
                 */
                Code: string;
                /**
                 * 商品模块属性值。
                 * 不同商品模块，信息不同。
                 * 例如：**instance_fee**（全球加速实例费）、**1:Month**（购买时长为1个月）。
                 * @example `instance_fee`
                 */
                Value: string;
            }[];
        }[];
    }[];
    /**
     * 优惠券号码。
     * > 中国站不涉及该参数。
     * @example `50003298014****`
     */
    "PromotionOptionNo"?: string;
}
