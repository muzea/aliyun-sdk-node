interface DescribeDomainExtensionsRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1o94dp5i6earr9g6d1l`
    */ "LoadBalancerId": string;
    /**
    * 负载均衡实例HTTPS监听的前端端口，取值：**1-65535**。
    * @example `443`
    */ "ListenerPort": number;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 扩展域名ID。
    * @example `de-bp1rp7ta191dv`
    */ "DomainExtensionId"?: string;
}
export { DescribeDomainExtensionsRequest };