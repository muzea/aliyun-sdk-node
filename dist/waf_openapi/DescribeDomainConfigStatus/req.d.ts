interface DescribeDomainConfigStatusRequest {
    "RegionId"?: string;
    /**
    * WAF实例ID。
    * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    /**
    * 已添加的域名名称。
    * @example `rstest.cdn.com`
    */ "Domain": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * WAF实例所在的地域。取值：
    * - **cn**：表示中国大陆地区（默认）
    * - **cn-hongkong**：表示海外地区
    * @example `cn`
    */ "Region"?: string;
}
export { DescribeDomainConfigStatusRequest };