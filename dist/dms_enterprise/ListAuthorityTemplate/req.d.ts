export interface ListAuthorityTemplateRequest {
    /**
     * 填入权限模板名称关键字。
     * @example `测试模板`
     */
    "SearchKey"?: string;
    /**
     * 每页显示权限模板的数目。取值如下：
     * - 5
     * - 10
     * - 20
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
