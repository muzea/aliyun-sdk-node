export interface RenewLogstashResponse {
    /**
     * 返回结果：
     * - true：续费成功
     * - false：续费失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DC****`
     */
    RequestId: string;
}
