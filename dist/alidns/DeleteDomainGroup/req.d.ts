interface DeleteDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 域名分组ID。
    * @example `2223`
    */ "GroupId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
}
export { DeleteDomainGroupRequest };