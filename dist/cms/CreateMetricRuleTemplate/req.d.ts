interface CreateMetricRuleTemplateRequest {
    "RegionId"?: string;
    /**
    * 报警规则模板名称。
    * @example `我的报警模板`
    */ "Name": string;
    /**
    * 报警规则描述信息。
    * @example `模板描述`
    */ "Description"?: string;
    "AlertTemplates"?: string[];
}
export { CreateMetricRuleTemplateRequest };