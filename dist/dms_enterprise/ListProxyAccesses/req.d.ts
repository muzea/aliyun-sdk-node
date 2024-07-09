export interface ListProxyAccessesRequest {
    /**
     * 安全访问代理ID。
     * > 您可以通过调用[ListProxies](~~295371~~)接口获取该参数。
     * @example `47`
     */
    "ProxyId": number;
    /**
     * 租户ID。
     * >您可以通过调用[GetUserActiveTenant](~~198073~~)接口获取该参数。
     * @example `3***`
     */
    "Tid"?: number;
}
