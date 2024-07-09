export interface ValidateTransferableNodesResponse {
    /**
     * 返回结果：
     * - true：可以迁移
     * - false：不可以迁移
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
