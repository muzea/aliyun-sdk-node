export interface CreateTemplateRequest {
    /**
     * 租户ID。如何查询租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GAR***134`
     */
    "TenantId": string;
    /**
     * 模板信息。
     */
    "body": any;
}
