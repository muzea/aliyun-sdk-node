export interface GetProxyRequest {
    /**
     * 安全访问代理ID，可通过调用接口[ListProxies](~~295371~~)获取该参数。
     * @example `4**`
     */
    "ProxyId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
