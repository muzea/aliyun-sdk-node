interface ModifyProtectionRuleCacheStatusRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名名称。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 要操作的规则ID。调用[DescribeProtectionModuleRules](~~100398~~)接口可以查询到所有规则ID。
    * @example `111`
    */ "Id": number;
    /**
    * 要操作的防护功能。取值：** tamperproof**。
    * @example `tamperproof`
    */ "Defense": string;
    /**
    * WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 地域ID。取值：
    * - **cn**：中国大陆地区（默认）
    * - **cn-hongkong**：海外地区
    *
    * @example `cn`
    */ "Region"?: string;
}
export { ModifyProtectionRuleCacheStatusRequest };