export interface CloseHttpsResponse {
    /**
     * 返回结果：
     * - true：关闭HTTPS协议成功
     * - false：关闭HTTPS协议失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DC****`
     */
    RequestId: string;
}
