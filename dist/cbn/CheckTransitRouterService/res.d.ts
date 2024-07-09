export interface CheckTransitRouterServiceResponse {
    /**
     * 当前阿里云账号是否已开通转发路由器服务。
     * - **true**：表示已开通。
     * - 如果系统未返回当前参数，则表示当前阿里云账号未开通转发路由器服务，系统会返回对应的提示信息。
     *
     * @example `true`
     */
    Enabled: string;
    /**
     * 请求ID。
     * @example `5D93C8B9-C354-5C3E-BEFB-BA8A2C314D68`
     */
    RequestId: string;
}
