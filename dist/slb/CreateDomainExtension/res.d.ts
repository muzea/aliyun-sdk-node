export interface CreateDomainExtensionResponse {
    /**
     * 负载均衡实例前端使用的端口。
     * @example `80`
     */
    ListenerPort: number;
    /**
     * 请求ID。
     * @example `A6E7EFC9-0938-40CA-877D-9BE******`
     */
    RequestId: string;
    /**
     * 创建的扩展域名ID。
     * @example `de-bp1rp7ta19******`
     */
    DomainExtensionId: string;
}
