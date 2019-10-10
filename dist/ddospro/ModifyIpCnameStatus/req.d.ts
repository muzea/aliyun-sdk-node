interface ModifyIpCnameStatusRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
    /**
    * 要操作的高防IP。
    * @example `1.1.1.1`
    */ "Ip"?: string;
}
export { ModifyIpCnameStatusRequest };