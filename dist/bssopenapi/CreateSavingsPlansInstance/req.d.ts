export interface CreateSavingsPlansInstanceRequest {
    /**
     * 规格类型，和Specification字段配合使用，当不为通用型时需要指定该字段：
     * - group 规格套餐
     * - family 规格族
     * @example `family`
     */
    "SpecType"?: string;
    /**
     * 支付方式：
     * - total 全预付
     * - half 部分预付
     * - zero 0预付
     * @example `total`
     */
    "PayMode": string;
    /**
     * 规格信息，和SpecType字段配合使用
     * @example `ecs.g6`
     */
    "Specification"?: string;
    /**
     * 节省计划类型：
     * - universal 通用型
     * - ecs 计算型
     * - elasticy 弹性版
     * @example `universal`
     */
    "Type": string;
    /**
     * 承付款，单位元
     * @example `0.1`
     */
    "PoolValue": string;
    /**
     * 购买时长，和PricingCycle配合使用
     * @example `1`
     */
    "Duration": string;
    /**
     * 购买商品
     * @example `savingplan_common_public_cn`
     */
    "CommodityCode": string;
    /**
     * 购买时长单位，和duration字段配合使用
     * - Year 年
     * - Month 月
     * @example `Year`
     */
    "PricingCycle": string;
    /**
     * 抵扣地域，当购买非通用型时需要指定抵扣地域
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 指定生效时间，日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ
     * @example `2021-12-31T00:00:00Z`
     */
    "EffectiveDate"?: string;
    /**
     * 扩展参数Map
     */
    "ExtendMap"?: any;
}
