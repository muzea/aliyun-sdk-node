interface ChangeDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `abc.com`
    */ "DomainName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 目标域名分组ID。
    * @example `2223`
    */ "GroupId"?: string;
}
export { ChangeDomainGroupRequest };