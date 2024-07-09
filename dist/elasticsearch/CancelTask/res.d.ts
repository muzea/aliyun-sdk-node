export interface CancelTaskResponse {
    /**
     * 返回结果：
     * - true：取消任务成功
     * - false：取消任务失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
