export interface ListProductsRequest {
    /**
     * 产品名称, 支持模糊搜索, 非必填
     * @example `ecs`
     */
    "Name"?: string;
    /**
     * 您使用的语言，支持，中文，英文，日文。值定义：zh：中文，en：英文，jp：日文。
     * @example `cn`
     */
    "Language"?: string;
}
