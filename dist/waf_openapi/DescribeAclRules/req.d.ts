interface DescribeAclRulesRequest {
    "RegionId"?: string;
    /**
    * WAF实例ID。
    * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    /**
    * 域名名称。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
    * @example `1`
    */ "CurrentPage": number;
    /**
    * 页面显示最大记录数量。
    * @example `10`
    */ "PageSize": number;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * WAF实例所在的地域。取值：
    * - **cn**：表示中国大陆地区（默认）
    * - **cn-hongkong**：表示海外地区
    * @example `cn`
    */ "Region"?: string;
}
export { DescribeAclRulesRequest };