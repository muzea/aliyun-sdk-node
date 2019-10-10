interface DeleteDomainRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 用户语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
}
export { DeleteDomainRequest };