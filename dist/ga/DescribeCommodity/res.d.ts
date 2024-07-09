export interface DescribeCommodityResponse {
    /**
     * 商品Code。
     * 中国站返回示例值：
     * - **ga\_gapluspre\_public\_cn**：全球加速实例。
     * - **ga\_plusbwppre\_public_cn**：基础带宽包。
     * 国际站返回示例值：
     * - **ga\_pluspre\_public_intl**：全球加速实例。
     * - **ga\_bwppreintl\_public_intl**：基础带宽包。
     * @example `ga_gapluspre_public_cn`
     */
    CommodityCode: string;
    /**
     * 商品名称。
     * @example `全球加速_实例规格（包年包月）`
     */
    CommodityName: string;
    /**
     * 商品模块信息。
     * 不同商品返回内容不同。
     */
    Components: {
        /**
         * 商品模块Code。
         * 不同商品模块返回内容不同。
         * @example `购买时长`
         */
        ComponentCode: string;
        /**
         * 商品模块名称。
         * 不同商品模块返回内容不同。
         * @example `购买时长`
         */
        ComponentName: string;
        /**
         * 商品模块属性。
         * 不同商品模块返回内容不同。
         */
        Properties: {
            /**
             * 商品模块属性Code。
             * 不同商品模块返回内容不同。
             * @example `ord_time`
             */
            Code: string;
            /**
             * 商品模块属性名称。
             * 不同商品模块返回内容不同。
             * @example `购买时长`
             */
            Name: string;
            /**
             * 商品模块属性值列表。
             * 不同商品模块返回内容不同。
             */
            PropertyValueList: {
                /**
                 * 商品模块属性内容。
                 * 不同商品模块返回内容不同。
                 * @example `1个月`
                 */
                Text: string;
                /**
                 * 商品模块属性值。
                 * 不同商品模块返回内容不同。
                 * @example `1:Month`
                 */
                Value: string;
                /**
                 * 商品模块属性提示信息。
                 * 不同商品模块返回内容不同。
                 * @example `1个月`
                 */
                Tips: string;
                /**
                 * 商品模块属性显示顺序。
                 * 不同商品模块返回内容不同。
                 * @example `1`
                 */
                OrderIndex: number;
            }[];
        }[];
    }[];
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
