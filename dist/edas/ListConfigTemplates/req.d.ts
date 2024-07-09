export interface ListConfigTemplatesRequest {
    /**
     * 页码，从1开始计数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 配置模板ID。
     * @example `3d84efaf-37d9-49fb-a3a8-b38d5c******`
     */
    "Id"?: number;
    /**
     * 配置模板名称。
     * @example `config-tmpl-1`
     */
    "Name"?: string;
}
