export interface CreateAccountResponse {
    /**
     * 成功为空，失败为报错信息。
     * @example `****`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9B2F3840-5C98-475C-B269-2D5C3A31797C`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
