export interface EvaluatePreConfigRulesRequest {
    /**
     * 预检规则评估项列表。
     */
    "ResourceEvaluateItems": {
        /**
         * 资源逻辑ID。
         * > 如果该参数为空，则按照`ResourceProperties`的Base64位生成。
         * @example `ResourceLogicId-test`
         */
        ResourceLogicalId: string;
        /**
         * 资源类型。
         * 关于如何获取预检规则的标识，请参见[ListPreManagedRules](~~467810~~)。
         * > 参数`ResourceType`、`Identifier`和`ResourceProperties`必须同时设置。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 预检规则列表。
         */
        Rules: {
            /**
             * 规则标识。
             * 关于如何获取规则标识，请参见[ListPreManagedRules](~~467810~~)。
             * > 参数`ResourceType`、`Identifier`和`ResourceProperties`必须同时设置。
             * @example `ecs-instance-deletion-protection-enabled`
             */
            Identifier: string;
            /**
             * 规则参数。
             * @example `{}`
             */
            InputParameters: string;
        }[];
        /**
         * 资源配置项（即将创建的资源属性），例如：资源的规格、所属地域、名称、状态、端口或网口开关状态等。
         * > 参数`ResourceType`、`Identifier`和`ResourceProperties`必须同时设置。
         * @example `{"ResourceGroupId":"","Memory":8192,"InstanceChargeType":"PostPaid","Cpu":2}`
         */
        ResourceProperties: string;
    }[];
    /**
     * 是否启用规则模板。取值：
     * - true：启用规则模板。
     * - false（默认值）：不启用规则模板。
     * @example `false`
     */
    "EnableManagedRules"?: boolean;
}
