export interface CreateProxyAccessResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `200`
     */
    ErrorCode: string;
    /**
     * 安全访问授权ID，当安全访问代理授权目标用户后，系统会自动生成一个安全访问授权ID，该ID全局唯一。
     * @example `1`
     */
    ProxyAccessId: number;
}
