interface DescribeProtectionModuleRulesRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名名称。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 要操作的防护功能。取值： **tamperproof**。
    * @example `tamperproof`
    */ "Defense": string;
    /**
    * WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 每页的行数。默认值：**10**
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 列表的页码。默认值：**1**
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 地域ID。取值：
    * - **cn**：中国大陆地区。
    * - **cn-hongkong**：海外地区。
    *
    * @example `cn`
    */ "Region"?: string;
}
export { DescribeProtectionModuleRulesRequest };