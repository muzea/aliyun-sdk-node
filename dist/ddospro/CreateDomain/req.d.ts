interface CreateDomainRequest {
    "RegionId"?: string;
    /**
    * 添加要防护的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 选择回源类型，取值：
    * -  **IP**：回源到Ip
    * - **DOMAIN**：回源到域名
    * @example `IP`
    */ "Type": string;
    "RealServer": string[];
    "ProxyType": string[];
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * @example `1.1.1.1`
    */ "Ip"?: string;
    /**
    * 是否开启CC攻击防护功能。
    * @example `true`
    */ "CcEnable"?: boolean;
    "Ips"?: string[];
}
export { CreateDomainRequest };