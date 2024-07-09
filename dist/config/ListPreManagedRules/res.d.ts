export interface ListPreManagedRulesResponse {
    /**
     * 请求ID。
     * @example `A2A9F1BE-0712-1B26-9899-D82F7DA8476C`
     */
    RequestId: string;
    /**
     * 预检规则列表。
     */
    ManagedRules: {
        /**
         * 资源类型。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 规则描述。
         * @example `ECS实例开启释放保护，视为“合规”。`
         */
        Description: string;
        /**
         * 规则可选参数详情。
         * @example `{}`
         */
        OptionalInputParameterDetails: any;
        /**
         * 规则标识。
         * @example `ecs-instance-deletion-protection-enabled`
         */
        Identifier: string;
        /**
         * 规则名称。
         * @example `ECS实例开启释放保护`
         */
        ConfigRuleName: string;
        /**
         * 预检规则修正指导的文档链接。
         * @example `https://example.aliyundoc.com`
         */
        HelpUrls: string;
        /**
         * 规则必选参数详情。
         * @example `{}`
         */
        CompulsoryInputParameterDetails: any;
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * @example `1`
     */
    PageSize: number;
}
