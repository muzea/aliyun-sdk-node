export interface ListCategoriesRequest {
    /**
     * 产品ID, 通过ListProducts接口获取. ProductId为阿里云产品ID, 一个产品下会挂多个Category(工单问题分类)
     * @example `18550`
     */
    "ProductId": number;
    /**
     * 分类问题名称, 支持模糊搜索
     * @example `ecs`
     */
    "Name"?: string;
    /**
     * 多语言，支持，中文，英文。 值定义：zh：中文，en：英文。
     * @example `zh`
     */
    "Language"?: string;
}
