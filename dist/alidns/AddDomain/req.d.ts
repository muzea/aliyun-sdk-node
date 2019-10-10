interface AddDomainRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `中文.com`
    */ "DomainName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 域名分组ID。默认为默认分组的GroupId。
    * @example `2223`
    */ "GroupId"?: string;
    /**
    * 资源组ID。
    * @example `rg-resourcegroupid`
    */ "ResourceGroupId"?: string;
    "UserClientIp"?: string;
}
export { AddDomainRequest };