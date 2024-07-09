export interface UpdateDomainStateResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `www.example.com`
     */
    Domain: string;
    /**
     * 加速域名的ICP备案状态。
     * - **illegal**：违规。
     * - **inactive**：未备案。
     * - **active**：已备案。
     * - **unknown**：未知。
     * @example `active`
     */
    State: string;
}
