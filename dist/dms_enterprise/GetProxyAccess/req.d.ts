export interface GetProxyAccessRequest {
    /**
     * 安全访问授权ID，当安全访问代理授权目标用户后，系统会自动生成一个安全访问授权ID，该ID全局唯一。您可以调用[ListProxyAccesses](~~295386~~)接口获取该参数。
     * @example `1`
     */
    "ProxyAccessId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
