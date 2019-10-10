interface DescribePayInfoRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 地域ID，取值：
    * -  **cn**：表示中国大陆地区（默认）
    * -  **cn-hongkong**：表示海外地区
    * @example `cn`
    */ "Region"?: string;
    /**
    * 实例来源。默认值：**waf-cloud**。
    * @example `waf-cloud`
    */ "InstanceSource"?: string;
}
export { DescribePayInfoRequest };