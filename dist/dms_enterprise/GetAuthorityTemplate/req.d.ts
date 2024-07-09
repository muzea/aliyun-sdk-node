export interface GetAuthorityTemplateRequest {
    /**
     * 权限模板ID。
     * @example `1563`
     */
    "TemplateId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
