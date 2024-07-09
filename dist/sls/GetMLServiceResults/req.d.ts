export interface GetMLServiceResultsRequest {
    /**
     * 服务名。
     * @example `sls_builtin_service_log_struct`
     */
    "serviceName"?: string;
    /**
     * + true 表示请求允许使用系统内置的服务
     * + false 表示请求不允许使用系统内置的服务
     * @example `true`
     */
    "allowBuiltin"?: boolean;
    "version"?: string;
    /**
     * 请求结构体。
     */
    "body"?: any;
}
