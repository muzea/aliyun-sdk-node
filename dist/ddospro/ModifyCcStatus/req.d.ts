interface ModifyCcStatusRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { ModifyCcStatusRequest };