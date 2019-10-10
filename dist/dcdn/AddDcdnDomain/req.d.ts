interface AddDcdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入的域名。支持泛域名，以点号（.）开头，如：.a.com。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
    */ "Sources": string;
    "OwnerId"?: number;
    /**
    * 资源组ID。不传时，自动补全默认资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
    /**
    * 检测URL。
    * @example `xxx.com`
    */ "CheckUrl"?: string;
    /**
    * 取值范围：**domestic**、**overseas**、**global**，默认**domestic**。
    * @example `domestic`
    */ "Scope"?: string;
    /**
    * 顶级接入域。
    * @example `yourTopLevelDomain`
    */ "TopLevelDomain"?: string;
}
export { AddDcdnDomainRequest };