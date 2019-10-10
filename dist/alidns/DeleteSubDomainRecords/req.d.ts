interface DeleteSubDomainRecordsRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 主机记录。
    * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
    * @example `www`
    */ "RR": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 解析记录类型。如果不填写，则返回子域名对应的全部解析记录类型。
    * 解析类型包括(不区分大小写)：**A、MX、CNAME、TXT、REDIRECT_URL、FORWORD_URL、NS、AAAA、SRV**。
    * @example `A`
    */ "Type"?: string;
}
export { DeleteSubDomainRecordsRequest };