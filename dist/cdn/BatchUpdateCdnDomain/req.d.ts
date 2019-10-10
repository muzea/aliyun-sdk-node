interface BatchUpdateCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入CDN的域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
    */ "Sources"?: string;
    /**
    * 资源组ID。
    * @example `abc`
    */ "ResourceGroupId"?: string;
    /**
    * 顶级接入域。
    * @example `example.com`
    */ "TopLevelDomain"?: string;
}
export { BatchUpdateCdnDomainRequest };