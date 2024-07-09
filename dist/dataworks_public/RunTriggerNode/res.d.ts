export interface RunTriggerNodeResponse {
    /**
     * 调用是否成功。
     * - true：调用成功
     * - false：调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 一次请求的唯一标识。
     * @example `9BA675F1-F848-4752-A6E3-92ABA0616005`
     */
    RequestId: string;
}
