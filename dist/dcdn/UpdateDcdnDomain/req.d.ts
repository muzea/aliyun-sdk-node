interface UpdateDcdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入全站加速的域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
    */ "Sources"?: string;
    /**
    * 资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
    /**
    * 顶级接入域。
    * @example `yourTopLevelDomain  `
    */ "TopLevelDomain"?: string;
}
export { UpdateDcdnDomainRequest };