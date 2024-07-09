export interface GrantTemplateAuthorityRequest {
    /**
     * 权限模板ID。
     * @example `1563`
     */
    "TemplateId": number;
    /**
     * 待授予模板权限的用户ID列表。
     * @example `[12***,34***,56***]`
     */
    "UserIds": string;
    /**
     * 权限到期时间。时间格式为yyyy-MM-DD HH:mm:ss。
     * @example `2023-03-08 17:58:53`
     */
    "ExpireDate": string;
    /**
     * 为用户授权该权限模板的原因。
     * @example `业务测试。`
     */
    "Comment"?: string;
    /**
     * 租户ID。可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
