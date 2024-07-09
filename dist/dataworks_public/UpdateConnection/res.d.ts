export interface UpdateConnectionResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求是否成功更新。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `0bc14115159376359****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
