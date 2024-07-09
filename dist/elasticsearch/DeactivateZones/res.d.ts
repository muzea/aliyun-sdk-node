export interface DeactivateZonesResponse {
    /**
     * 返回结果：
     * - true：下线可用区成功
     * - false：下线可用区失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
