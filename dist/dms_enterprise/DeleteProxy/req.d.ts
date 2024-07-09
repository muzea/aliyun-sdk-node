export interface DeleteProxyRequest {
    /**
     * 安全访问代理ID。您可以调用[ListProxies](~~295371~~)或[GetProxy](~~295382~~)接口获取该参数。
     * @example `1`
     */
    "ProxyId": number;
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `1`
     */
    "Tid"?: number;
}
