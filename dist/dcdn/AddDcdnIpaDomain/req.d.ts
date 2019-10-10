interface AddDcdnIpaDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入全站加速IPA的域名。支持泛域名，以点号（.）开头，例如：.example.com。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
    */ "Sources": string;
    "OwnerId"?: number;
    /**
    * 资源组ID，不传时，自动补全默认资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
    /**
    * 检测URL。
    * @example `yourCheckUrl`
    */ "CheckUrl"?: string;
    /**
    * 取值范围：**domestic**、**overseas**、**global**，默认为**domestic**。
    * 国际用户、国内L3及以上用户设置有效。
    * @example `domestic`
    */ "Scope"?: string;
    /**
    * 顶级接入域。
    * @example `yourTopLevelDomain`
    */ "TopLevelDomain"?: string;
}
export { AddDcdnIpaDomainRequest };