interface ConfigLayer7BlackWhiteListRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 要配置的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
    "BlackList"?: string[];
    "WhiteList"?: string[];
}
export { ConfigLayer7BlackWhiteListRequest };