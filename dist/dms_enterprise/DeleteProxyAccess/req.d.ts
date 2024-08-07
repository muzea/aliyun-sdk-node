export interface DeleteProxyAccessRequest {
    /**
     * 安全访问授权ID，当安全访问代理授权目标用户后，系统会自动生成一个安全访问授权ID，该ID全局唯一。您可以调用[ListProxyAccesses](~~295386~~)接口获取该参数。
     * @example `1`
     */
    "ProxyAccessId": number;
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `1`
     */
    "Tid"?: number;
}
