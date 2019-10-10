interface AddDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 域名分组名称。
    * @example `MyGroup`
    */ "GroupName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
}
export { AddDomainGroupRequest };