export interface DescribeCommodityRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
    "CommodityCode": string;
    /**
     * 订单类型。取值：
     * - **BUY**：新购。
     * - **RENEW**：续费。
     * - **UPGRADE**：升级。
     * @example `BUY`
     */
    "OrderType": string;
}
