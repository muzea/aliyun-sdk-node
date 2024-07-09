export interface ValidateShrinkNodesResponse {
    /**
     * 返回结果：
     * - true：可以缩容
     * - false：不可以缩容
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
