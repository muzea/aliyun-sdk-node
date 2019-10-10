interface DescribeConfigTemplatesRequest {
    "RegionId"?: string;
    /**
    * 应用ID，查询此应用上的配置模板
    * @example `wa-5d1d9d8c85c7f86e2ef*****`
    */ "AppId": string;
    /**
    * 要查询的配置模板名称
    * @example `template-name`
    */ "TemplateName"?: string;
    /**
    * 查询的模版名称关键字
    * @example `template`
    */ "TemplateSearch"?: string;
    /**
    * 查询页面大小
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 查询页面数量
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeConfigTemplatesRequest };