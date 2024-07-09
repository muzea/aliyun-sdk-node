export interface DescribeDomainExtensionAttributeResponse {
    /**
     * 域名。
     * @example `www.example.com`
     */
    Domain: string;
    /**
     * 请求ID。
     * @example `48C1B671-C6DB-4DDE-9B30-1055******`
     */
    RequestId: string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp1o95i6*****`
     */
    LoadBalancerId: string;
    /**
     * 负载均衡实例HTTPS监听的前端端口，取值：**1**~**65535**。
     * @example `443`
     */
    ListenerPort: number;
    /**
     * 域名使用的服务器证书ID。
     * @example `231579085529123_166f82******_1714763408_709981430`
     */
    ServerCertificateId: string;
    /**
     * 扩展域名ID。
     * @example `de-bp1rp******`
     */
    DomainExtensionId: string;
}
