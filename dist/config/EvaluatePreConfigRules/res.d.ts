export interface EvaluatePreConfigRulesResponse {
    /**
     * 请求ID。
     * @example `129ECF1C-7897-1131-BD0F-4B588AC05400`
     */
    RequestId: string;
    /**
     * 资源评估结果列表。
     */
    ResourceEvaluations: {
        /**
         * 资源逻辑ID。
         * > 如果请求参数为空，则自动根据`ResourceProperties`的Base64位生成。
         * @example `ResourceLogicId-test`
         */
        ResourceLogicalId: string;
        /**
         * 资源类型。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 预检规则列表。
         */
        Rules: {
            /**
             * 规则标识。
             * @example `ecs-instance-deletion-protection-enabled`
             */
            Identifier: string;
            /**
             * 预检规则的合规类型。取值：
             * - COMPLIANT：合规。
             * - NON_COMPLIANT：不合规。
             * - NOT_APPLICABLE：不适用。
             * @example `NON_COMPLIANT`
             */
            ComplianceType: string;
            /**
             * 不合规原因。
             * @example `{\"configuration\":\"false\",\"desiredValue\":\"True\",\"operator\":\"StringEquals\",\"property\":\"$.DeletionProtection\"}`
             */
            Annotation: string;
            /**
             * 托管规则修正指导的文档链接。
             * @example `https://example.aliyundoc.com`
             */
            HelpUrl: string;
        }[];
    }[];
}
