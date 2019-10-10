interface DescribeMetricRuleTemplateListRequest {
    "RegionId"?: string;
    /**
    * 报警模板名称。
    * @example `模板名`
    */ "Name"?: string;
    /**
    * 按照模板名称模糊搜索。
    * @example `我的模板`
    */ "Keyword"?: string;
    /**
    * 报警模板ID。
    * @example `12345`
    */ "TemplateId"?: number;
    /**
    * 页码，默认1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页显示模板的记录条数。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 是否显示报警模板应用到分组的历史记录。true：显示， false：不显示， 默认不显示。
    * @example `false`
    */ "History"?: boolean;
}
export { DescribeMetricRuleTemplateListRequest };