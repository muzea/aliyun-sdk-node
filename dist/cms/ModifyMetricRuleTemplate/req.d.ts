interface ModifyMetricRuleTemplateRequest {
    "RegionId"?: string;
    /**
    * 修改报警模板的版本，从报警模板列表或则详情中获得。没修改过一次，这个字段会被自动更新。
    * @example `0`
    */ "RestVersion": number;
    /**
    * 报警规则模板ID。
    * @example `12346`
    */ "TemplateId": number;
    /**
    * 报警规则模板名称。
    * @example `我的报警模板`
    */ "Name"?: string;
    /**
    * 报警规则描述信息。
    * @example `报警模板描述`
    */ "Description"?: string;
    "AlertTemplates"?: string[];
}
export { ModifyMetricRuleTemplateRequest };