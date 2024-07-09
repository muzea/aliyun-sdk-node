export interface ListPredefinedScopesRequest {
    /**
     * 应用类型。取值：
     * - WebApp
     * - NativeApp
     * - ServerApp
     * 如果不设置该参数，则查询所有应用类型的应用权限范围列表。
     * @example `WebApp`
     */
    "AppType"?: string;
}
