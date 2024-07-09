export interface TransferNodeResponse {
    /**
     * 返回结果：
     * - true：任务执行成功
     * - false：任务执行失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
