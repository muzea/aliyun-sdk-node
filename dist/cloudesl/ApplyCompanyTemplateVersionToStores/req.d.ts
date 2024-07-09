export interface ApplyCompanyTemplateVersionToStoresRequest {
    /**
     * 门店模板版本号；
     * @example `1.1.0`
     */
    "TemplateVersion": string;
    /**
     * 门店ID列表。请转为JSON字符串
     * @example `[\"s-y9eoecc7mu\"]`
     */
    "Stores"?: string;
}
