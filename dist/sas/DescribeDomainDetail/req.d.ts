interface DescribeDomainDetailRequest {
    "RegionId"?: string;
    /**
    * 指定待查询的域名名称或网站名称。
    * @example `0.0.0.0`
    */ "DomainName": string;
    /**
    * 指定访问源IP地址。
    * @example `127.1.1.1`
    */ "SourceIp"?: string;
}
export { DescribeDomainDetailRequest };