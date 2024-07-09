export interface UpdateTemplateRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 模板id，可在iTAG的模板管理中获取。
     * @example `152***0348342353920`
     */
    "TemplateId": string;
    /**
     * 模板
     */
    "body"?: any;
}
