interface EnableLayer7CCRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { EnableLayer7CCRequest };