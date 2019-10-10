interface DeleteDomainExtensionRequest {
    /**
    * 负载均衡示例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要删除的扩展域名ID。
    * @example `de-bp1rp7ta191dv`
    */ "DomainExtensionId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DeleteDomainExtensionRequest };