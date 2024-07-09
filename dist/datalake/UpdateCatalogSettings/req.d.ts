export interface UpdateCatalogSettingsRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "body"?: {
        /**
         * CatalogId
         * @example `默认是空，在多catalogid下填写对应的id`
         */
        CatalogId: string;
        /**
         * 数据湖相关配置
         */
        CatalogSettings: any;
    };
}
