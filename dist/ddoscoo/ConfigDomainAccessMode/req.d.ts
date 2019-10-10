interface ConfigDomainAccessModeRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 接入模式，取值：
    * - **0**：A记录
    * - **1**：高防
    * - **2**：回源
    * @example `2`
    */ "AccessMode": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
}
export { ConfigDomainAccessModeRequest };