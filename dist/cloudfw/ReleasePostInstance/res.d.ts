export interface ReleasePostInstanceResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EE316A19-xxxx-5043-9DF1-C04458ABC570`
     */
    RequestId: string;
    /**
     * 本次请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 是否释放成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    ReleaseStatus: boolean;
}
