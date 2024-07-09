export interface CheckCdnDomainICPResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 资源包状态。取值：
     * - **DomainIsRegistration**：已备案。
     * - **DomainNotRegistration**：未备案。
     * @example `DomainIsRegistration`
     */
    Status: string;
}
