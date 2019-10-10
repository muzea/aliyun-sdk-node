interface SetDomainExtensionAttributeRequest {
    /**
    * 负载均衡示例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要修改的扩展域名ID。
    * @example `de-bp1rp7ta191dv`
    */ "DomainExtensionId": string;
    /**
    * 新的证书ID。
    * @example `1231579xxxxxxxx_166f8204689_1714763408_709981xxx`
    */ "ServerCertificateId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetDomainExtensionAttributeRequest };