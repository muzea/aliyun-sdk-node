interface UpdateDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 域名分组ID。
    * @example `2223`
    */ "GroupId": string;
    /**
    * 域名分组新名称。
    * @example `NewName`
    */ "GroupName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
}
export { UpdateDomainGroupRequest };