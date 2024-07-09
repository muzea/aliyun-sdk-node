export interface DeleteImageResponse {
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0703956F-9BCC-48FA-99F7-96C0BF449C69`
     */
    RequestId: string;
    /**
     * 错误码。
     * - 0：成功。
     * - 非0：失败。
     * @example `0`
     */
    Code: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
