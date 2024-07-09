export interface DeleteQualityRuleRequest {
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 规则ID。
     * @example `1234`
     */
    "RuleId": number;
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
}
