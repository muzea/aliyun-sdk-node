export interface CdnMigrateRegisterResponse {
    /**
     * 请求ID。
     * @example `64D28B53-5902-409B-94F6-FD46680142FE`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 注册状态，取值：
     * - **running**：注册中。
     * - **succeed**：注册成功。
     * - **failed**：注册失败。
     * @example `succeed`
     */
    Status: string;
}
