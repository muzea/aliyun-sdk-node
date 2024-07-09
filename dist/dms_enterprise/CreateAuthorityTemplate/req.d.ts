export interface CreateAuthorityTemplateRequest {
    /**
     * 权限模板名称。
     * @example `测试模板。`
     */
    "Name": string;
    /**
     * 权限模板描述信息。
     * @example `此模板用于业务测试。`
     */
    "Description"?: string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
