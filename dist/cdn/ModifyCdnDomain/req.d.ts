interface ModifyCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 接入CDN的域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
    */ "Sources"?: string;
    /**
    * 资源组ID。
    * @example `abcdabcd`
    */ "ResourceGroupId"?: string;
    /**
    * 顶级接入域，只有白名单用户CDN_TOP_LEVEL_DOMAIN_GREY_USER_LIST设置才有效。
    * @example `your.top.domain.com`
    */ "TopLevelDomain"?: string;
}
export { ModifyCdnDomainRequest };