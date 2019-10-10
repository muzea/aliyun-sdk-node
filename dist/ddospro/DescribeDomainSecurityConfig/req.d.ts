interface DescribeDomainSecurityConfigRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 要查询的域名。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
}
export { DescribeDomainSecurityConfigRequest };