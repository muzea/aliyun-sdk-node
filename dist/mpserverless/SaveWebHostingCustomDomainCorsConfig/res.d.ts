export interface SaveWebHostingCustomDomainCorsConfigResponse {
    /**
     * 请求返回状态。
     * - success：成功。
     * - failed：失败。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `SpaceNotExist`
     */
    Message: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 唯一请求ID。
     * @example `6E2E1770-E9C7-52E9-BF2C-94A0BACFADBE"`
     */
    RequestId: string;
    /**
     * 请求返回状态。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 操作执行结果。
     * - true：操作成功。
     * - false：操作失败。
     * @example `true`
     */
    Data: boolean;
}
