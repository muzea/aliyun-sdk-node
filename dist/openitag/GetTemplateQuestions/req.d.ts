export interface GetTemplateQuestionsRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 模板id，可在iTAG的模板管理中获取。
     * @example `1529***348342353920`
     */
    "TemplateId": string;
}
