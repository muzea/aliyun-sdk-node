export interface RevokeTemplateAuthorityRequest {
    /**
     * 权限模板ID。
     * @example `1563`
     */
    "TemplateId": number;
    /**
     * 待回收资源权限的用户ID列表。
     * @example `[12***,34***,56***]`
     */
    "UserIds": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
