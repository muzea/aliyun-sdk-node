export interface CreateDomainExtensionRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1o94dp5i6earrxxxxxx`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例HTTPS监听的前端端口。
     * 取值：**1-65535**。
     * @example `443`
     */
    "ListenerPort": number;
    /**
     * 域名。
     * @example `*.example1.com`
     */
    "Domain": string;
    /**
     * 与域名对应的证书ID。
     * @example `123157xxxxxxx_166f820xxxxxx_1714763408_709981xxxx`
     */
    "ServerCertificateId"?: string;
}
