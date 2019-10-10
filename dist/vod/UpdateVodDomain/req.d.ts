interface UpdateVodDomainRequest {
    "RegionId"?: string;
    /**
    * 点播加速域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
    */ "Sources"?: string;
    /**
    * 顶级接入域。
    * @example `example.com`
    */ "TopLevelDomain"?: string;
}
export { UpdateVodDomainRequest };