export interface DescribeMetricRuleTemplateAttributeRequest {
    /**
     * 报警模板名称。`Name`和`TemplateId`必须设置一个。
     * 关于如何获取报警模板名称，请参见[DescribeMetricRuleTemplateList](~~114982~~)。
     * @example `ECS_Template1`
     */
    "Name"?: string;
    /**
     * 报警模板ID。`Name`和`TemplateId`必须设置一个。
     * 关于如何获取报警模板ID，请参见[DescribeMetricRuleTemplateList](~~114982~~)。
     * @example `70****`
     */
    "TemplateId"?: string;
}
