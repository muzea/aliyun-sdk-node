export interface GetQualityRuleRequest {
    /**
     * 校验规则的ID。您可以调用[ListQualityRules](~~173995~~)接口查看RuleId的相关信息。
     * @example `1234`
     */
    "RuleId": number;
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * DataWorks项目空间ID。
     * @example `12345`
     */
    "ProjectId"?: number;
}
