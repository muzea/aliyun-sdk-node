interface CheckDomainRecordRequest {
    "RegionId"?: string;
    /**
    * 域名名称
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 主机记录
    * @example `zhaohui`
    */ "RR": string;
    /**
    * 记录类型
    * @example `TXT`
    */ "Type": string;
    /**
    * 记录值
    * @example `fd87da3c4528844d45af39200155a905`
    */ "Value": string;
    /**
    * 语言
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { CheckDomainRecordRequest };