export interface QuerySavingsPlansDiscountRequest {
    /**
     * 模块CODE
     * @example `instance_type`
     */
    "ModuleCode"?: string;
    /**
     * 付费类型:
     * total 全预付
     * half 半预付
     * zero 0预付
     * @example `total`
     */
    "PayMode": string;
    /**
     * 每页个数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 节省计划类型:
     * ecs 计算型
     * universal 通用型
     * @example `universal`
     */
    "SpnType": string;
    /**
     * 多语言标识
     * @example `ZH`
     */
    "Locale"?: string;
    /**
     * 查询周期
     * @example `1:Year`
     */
    "Cycle": string;
    /**
     * 查询页数
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 资源类型
     * @example `ecs.g6`
     */
    "Spec"?: string;
    /**
     * 商品CODE
     * @example `ecs`
     */
    "CommodityCode": string;
    /**
     * 地域信息
     * @example `cn-hangzhou`
     */
    "Region"?: string;
}
