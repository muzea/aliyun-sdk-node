export interface SetDomainExtensionAttributeRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改的扩展域名ID。
     * @example `de-bp1rp7ta*****`
     */
    "DomainExtensionId": string;
    /**
     * 新的证书ID。
     * @example `1231579xxxxxxxx_166f8204689_1714763408_709981xxx`
     */
    "ServerCertificateId"?: string;
}
