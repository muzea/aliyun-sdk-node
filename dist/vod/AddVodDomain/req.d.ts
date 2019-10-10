interface AddVodDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入点播的加速域名。
    * 支持泛域名，以符号“.”开头，如：.example.com。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
    */ "Sources": string;
    "OwnerId"?: number;
    /**
    * 检查域名是否能正常访问url。
    * @example `check_url`
    */ "CheckUrl"?: string;
    /**
    * 国际用户、国内L3及以上用户设置有效。取值范围：**domestic**(中国大陆，默认)，**overseas**(港澳台及海外)，**global**(全球加速)。
    * @example `domestic`
    */ "Scope"?: string;
}
export { AddVodDomainRequest };