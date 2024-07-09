export interface CloseManagedIndexResponse {
    /**
     * 是否成功关闭索引的云端托管：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
