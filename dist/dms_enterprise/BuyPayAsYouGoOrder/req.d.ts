export interface BuyPayAsYouGoOrderRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 商品类型。
     * - **VersionType**：管控模式
     * - **SensitiveDataProtection**：敏感数据保护
     * @example `SensitiveDataProtection`
     */
    "CommodityType": string;
    /**
     * 购买管控模式或敏感数据的使用额度。
     * > 一个额度仅可用于一个数据库实例。
     * @example `7`
     */
    "InsNum": number;
    /**
     * 购买商品类型为管控模式时，有以下类型可选择：
     * - **stand**：稳定变更
     * - **safety**：安全协同
     * @example `stand`
     */
    "VersionType"?: string;
}
