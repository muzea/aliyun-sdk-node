interface ModifyHichinaDomainDNSRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 用户语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { ModifyHichinaDomainDNSRequest };