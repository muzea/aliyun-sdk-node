interface DeleteDomainRequest {
    "RegionId"?: string;
    /**
    * 要移除的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DeleteDomainRequest };