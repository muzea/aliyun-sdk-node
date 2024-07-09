export interface ListServiceTemplatesRequest {
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 顺序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 排序依据。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 服务模板名称。
     * @example `stable_diffusion_aigc`
     */
    "ServiceTemplateName"?: string;
    /**
     * 模糊搜索匹配Label key与value。
     * @example `aigc`
     */
    "Label"?: string;
    /**
     * 提供者。获取pai平台提供的服务模板，则本字段填"pai"。
     * @example `pai`
     */
    "Provider"?: string;
    /**
     * 筛选请求串，模糊搜索匹配ServiceTemplateName，Label key与value。
     * @example `aigc`
     */
    "Query"?: string;
}
