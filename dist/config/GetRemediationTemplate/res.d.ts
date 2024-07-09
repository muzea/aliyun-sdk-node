export interface GetRemediationTemplateResponse {
    /**
     * 请求ID。
     * @example `E232FC35-BD40-51E3-B2EB-09416A234939`
     */
    RequestId: string;
    /**
     * 自动修正模板信息。
     */
    RemediationTemplates: {
        /**
         * 自动修正模板类型。取值：OOS（运维编排）。
         * @example `OOS`
         */
        RemediationType: string;
        /**
         * 自动修正模板标识。
         * @example `ACS-ALB-BulkyEnableDeletionProtection`
         */
        TemplateIdentifier: string;
        /**
         * 自动修正模板名称。
         * @example `开启ALB实例删除保护`
         */
        TemplateName: string;
        /**
         * 模板参数定义。
         * @example `{
            "Parameters": {
                "regionId": {
                    "Type": "String",
                    "Label": {
                        "en": "RegionId",
                        "zh-cn": "地域ID"
                    },
                    "AssociationProperty": "RegionId",
                    "Default": "{regionId}"
                },
                "loadBalancerIds": {
                    "Label": {
                        "en": "LoadBalancerIds",
                        "zh-cn": "应用型负载均衡实例ID列表"
                    },
                    "Type": "List",
                    "Default": [
                        "{resourceId}"
                    ]
                }
            }
        }`
         */
        TemplateDefinition: string;
        /**
         * 支持的规则模板标识。
         * @example `alb-delete-protection-enabled`
         */
        ManagedRuleIdentifier: string;
        /**
         * 自动修正模板描述。
         * @example `调用接口EnableDeletionProtection，开启ALB实例删除保护，请您知晓风险谨慎操作。`
         */
        TemplateDescription: string;
    }[];
}
